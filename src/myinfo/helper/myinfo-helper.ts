import { AxiosResponse } from "axios";
import * as _ from "lodash";
import * as querystringUtil from "querystring";
import { JweUtil } from "../../util";
import { SingpassMyInfoError } from "../../util/error/SingpassMyinfoError";
import { logger } from "../../util/Logger";
import { MyInfoComponents } from "../../types";
import { ProfileStatus } from "../../types/profilestatus-domain";
import { MyInfoRequest, MyInfoRequestConstructor } from "./myinfo-request";

export type EnvType = "test" | "sandbox" | "prod";

export interface IMyInfoHelper {
	getPersonBasic: <K extends keyof MyInfoComponents.Schemas.PersonBasic>(
		uinfin: string,
		attributes: string[],
	) => Promise<Pick<MyInfoComponents.Schemas.PersonBasic, K>>;
	getPerson: <K extends keyof MyInfoComponents.Schemas.Person>(
		uinfin: string,
		attributes: string[],
	) => Promise<Pick<MyInfoComponents.Schemas.Person, K>>;
}

export interface IMyInfoRequest {
	get: (uri: string, params?: { [key: string]: any }, accessToken?: string) => Promise<AxiosResponse>;

	post: (uri: string, params: { [key: string]: any }) => Promise<AxiosResponse>;
}

export interface MyInfoHelperConstructor {
	clientID: string;
	clientSecret?: string;
	environment: EnvType;
	singpassEserviceID: string;
	keyToDecryptJWE: string;
	certToVerifyJWS: string;
	privateKeyToSignRequest: string;
	redirectUri?: string;
	privateKeyPassword?: string;
	overrideAuthorizationUrl?: string;
	overrideTokenUrl?: string;
	overridePersonUrl?: string;
	overridePersonBasicUrl?: string;
	overrideProfileStatusUrl?: string;
	proxyTokenUrl?: string;
	proxyPersonUrl?: string;
	proxyPersonBasicUrl?: string;
	proxyProfileStatusUrl?: string;

	/**
	 * Headers already added by the client:
	 * Authorization, Cache-Control, Content-Type (POST only)
	 */
	additionalHeaders?: Record<string, string>;
}

export interface TokenResponse {
	access_token: string;
	id_token: string;
	token_type: string;
}

export interface AccessTokenPayload {
	tokenName: string;
	sub: string;
	scope: string;
	nbf: string;
	iss: string;
	expires_in: string;
	iat: string;
	exp: string;
	realm: string;
	aud: string;
	jti: string;
	token_type: string;
	authGrantId: string;
	auditTrackingId: string;
}

const AUTHORISE_BASE_URL = "api.myinfo.gov.sg/gov/v3/authorise";
const TOKEN_BASE_URL = "api.myinfo.gov.sg/gov/v3/token";
const PERSON_BASE_URL = "api.myinfo.gov.sg/gov/v3/person";
const PERSON_BASIC_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic";
const PROFILE_STATUS_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic/status";

export class MyInfoHelper implements IMyInfoHelper {
	private myInfoRequest: MyInfoRequest;

	private readonly clientID: string;
	private readonly clientSecret: string;
	private readonly singpassEserviceID: string;

	private readonly keyToDecryptJWE: string;
	private readonly certToVerifyJWS: string;

	private readonly authorizationUrl: string;
	private readonly tokenUrl: string;
	private readonly personUrl: string;
	private readonly personBasicUrl: string;
	private readonly profileStatusUrl: string;
	private readonly proxyTokenUrl: string;
	private readonly proxyPersonUrl: string;
	private readonly proxyPersonBasicUrl: string;
	private readonly proxyProfileStatusUrl: string;
	private readonly additionalHeaders?: Record<string, string>;

	private readonly redirectUri: string;

	public constructor(props: MyInfoHelperConstructor) {
		this.clientID = props.clientID;
		this.clientSecret = props.clientSecret;
		this.singpassEserviceID = props.singpassEserviceID;
		this.keyToDecryptJWE = props.keyToDecryptJWE;
		this.certToVerifyJWS = props.certToVerifyJWS;
		this.redirectUri = props.redirectUri;
		this.authorizationUrl = this.getUrl(props.overrideAuthorizationUrl, AUTHORISE_BASE_URL, props.environment);
		this.tokenUrl = this.getUrl(props.overrideTokenUrl, TOKEN_BASE_URL, props.environment);
		this.personUrl = this.getUrl(props.overridePersonUrl, PERSON_BASE_URL, props.environment);
		this.personBasicUrl = this.getUrl(props.overridePersonBasicUrl, PERSON_BASIC_BASE_URL, props.environment);
		this.profileStatusUrl = this.getUrl(props.overrideProfileStatusUrl, PROFILE_STATUS_BASE_URL, props.environment);
		this.proxyTokenUrl = props.proxyTokenUrl;
		this.proxyPersonUrl = props.proxyPersonUrl;
		this.proxyPersonBasicUrl = props.proxyPersonBasicUrl;
		this.proxyProfileStatusUrl = props.proxyProfileStatusUrl;
		this.additionalHeaders = props.additionalHeaders;

		const requestProps: MyInfoRequestConstructor = {
			appId: props.clientID,
			privateKeyToSignRequest: props.privateKeyToSignRequest,
			privateKeyPassword: props.privateKeyPassword,
		};
		this.myInfoRequest = new MyInfoRequest(requestProps);
	}

	public constructAuthorizationUrl = (state: string, purpose: string, attributes: string[]): string => {
		if (_.isEmpty(attributes)) {
			throw new SingpassMyInfoError("Attribute list must contain values");
		}

		if (_.isEmpty(this.redirectUri)) {
			throw new SingpassMyInfoError("Redirect url must be provided in constructor");
		}

		const queryParams = {
			state,
			purpose,
			attributes: attributes.toString(),
			redirect_uri: this.redirectUri,
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
		};

		const queryString = querystringUtil.stringify(queryParams);
		return `${this.authorizationUrl}?${queryString}`;
	};

	/**
	 * Obtain token for person data
	 */
	public getToken = async (authCode: string, state?: string): Promise<TokenResponse> => {
		if (_.isEmpty(this.clientSecret)) {
			throw new SingpassMyInfoError("Client secret must be provided in constructor");
		}

		const params = {
			code: authCode,
			grant_type: "authorization_code",
			client_secret: this.clientSecret,
			client_id: this.clientID,
			redirect_uri: this.redirectUri,
			state: querystringUtil.unescape(state),
		};

		let response: AxiosResponse<TokenResponse>;
		try {
			response = await this.myInfoRequest.post(this.tokenUrl, params, this.proxyTokenUrl, this.additionalHeaders);
		} catch (error) {
			logger.error("Failed to get token from Myinfo", error);
			throw error;
		}

		return response.data;
	};

	/**
	 * Obtain V3 person basic data using uinfin.
	 * In the generic K, pass in the list of string literal of the attributes you expect to get back.
	 * getPersonBasic will return an object with only the properties matching the keys.
	 * e.g. when K = "name" | "email", getPersonBasic returns an object looking like { name, email }
	 */
	public getPersonBasic = async <K extends keyof MyInfoComponents.Schemas.PersonBasic>(
		uinfin: string,
		attributes: string[],
	): Promise<Pick<MyInfoComponents.Schemas.PersonBasic, K>> => {
		const url = `${this.personBasicUrl}/${uinfin}`;
		const proxyUrl = this.proxyPersonBasicUrl ? `${this.proxyPersonBasicUrl}/${uinfin}` : "";
		const params = {
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
			attributes: attributes.toString(),
		};

		let response: AxiosResponse<string>;
		try {
			response = await this.myInfoRequest.get(url, params, null, proxyUrl, this.additionalHeaders);
		} catch (error) {
			logger.error("Error requesting for person-common data (JWE) from Myinfo", error);
			throw error;
		}

		try {
			// Decrypt person data
			const encryptedPersonJWE = response.data;
			const jwe = await JweUtil.decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
			const jws = JSON.parse(jwe.payload.toString());
			const verifiedJws = await JweUtil.verifyJWS(jws, this.certToVerifyJWS);
			const personData = JSON.parse(verifiedJws.payload.toString()) as Pick<
				MyInfoComponents.Schemas.PersonBasic,
				K
			>;

			if (personData == null) {
				throw new SingpassMyInfoError("Person-common data cannot be null");
			}

			return personData;
		} catch (error) {
			logger.error("Error verifying person-common data from Myinfo", error);
			throw error;
		}
	};

	/**
	 * Obtain V3 person data using uinfin and access token.
	 * In the generic K, pass in the list of string literal of the attributes you expect to get back.
	 * getPerson will return an object with only the properties matching the keys.
	 * e.g. when K = "name" | "email", getPerson returns an object looking like { name, email }
	 */

	public getPerson = async <K extends keyof MyInfoComponents.Schemas.Person>(
		accessToken: string,
		attributes: string[],
	): Promise<Pick<MyInfoComponents.Schemas.Person, K>> => {
		const uinfin = await this.extractUinfinFromAccessToken(accessToken);

		const url = `${this.personUrl}/${uinfin}/`;
		const proxyUrl = this.proxyPersonUrl ? `${this.proxyPersonUrl}/${uinfin}/` : "";
		const params = {
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
			attributes: attributes.toString(),
		};

		let response: AxiosResponse<string>;
		try {
			response = await this.myInfoRequest.get(url, params, accessToken, proxyUrl, this.additionalHeaders);
		} catch (error) {
			logger.error("Error requesting for person data from Myinfo", error);
			throw error;
		}

		try {
			// Decrypt person data
			const encryptedPersonJWE = response.data;
			const jwe = await JweUtil.decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
			const jws = JSON.parse(jwe.payload.toString());
			const verifiedJws = await JweUtil.verifyJWS(jws, this.certToVerifyJWS);
			const personData = JSON.parse(verifiedJws.payload.toString()) as Pick<MyInfoComponents.Schemas.Person, K>;

			if (personData == null) {
				throw new SingpassMyInfoError("Person data cannot be null");
			}

			return personData;
		} catch (error) {
			logger.error("Error verifying person data from Myinfo", error);
			throw error;
		}
	};

	/**
	 * Obtain myinfo profile status of an individual using uinfin.
	 * This is an endpoint that requires permission from the myinfo team.
	 * Do approach the team if you need to access it.
	 */
	public getProfileStatus = async (uinfin: string): Promise<ProfileStatus> => {
		const url = `${this.profileStatusUrl}/${uinfin}`;
		const proxyUrl = this.proxyProfileStatusUrl ? `${this.proxyProfileStatusUrl}/${uinfin}` : "";
		const response = await this.myInfoRequest.get<{ statusCode: number; msg: string }>(
			url,
			null,
			null,
			proxyUrl,
			this.additionalHeaders,
		);

		if (!!response.data.msg && typeof response.data.msg === "string") {
			return JSON.parse(response.data.msg);
		}
		throw new SingpassMyInfoError(
			"getProfileStatus response does not include the `msg` field as singpass-myinfo lib expected",
		);
	};

	/**
	 * Verify and decode access token to obtain payload
	 */
	public async getPayloadFromAccessToken(accessToken: string): Promise<AccessTokenPayload> {
		try {
			const verifiedAccessTokenJws = await JweUtil.verifyJWS(accessToken, this.certToVerifyJWS);
			const payload: AccessTokenPayload = JSON.parse(verifiedAccessTokenJws.payload.toString());

			if (payload === undefined || payload === null) {
				throw new Error("unable to parse payload");
			}

			const { sub } = payload;
			if (sub === undefined || sub === null) {
				throw new Error("uinfin not found");
			}

			return payload;
		} catch (error) {
			logger.error("Error verifying token from Myinfo", error);
			throw error;
		}
	}

	public async extractUinfinFromAccessToken(accessToken: string): Promise<string> {
		const payload = await this.getPayloadFromAccessToken(accessToken);
		return payload.sub;
	}

	private getUrl(overrideUrl: string, defaultUrl: string, env: EnvType) {
		return !_.isEmpty(overrideUrl) ? overrideUrl : this.constructUrl(env, defaultUrl);
	}

	private constructUrl(environment: EnvType, baseUrl: string) {
		switch (environment) {
			case "sandbox":
				return `https://sandbox.${baseUrl}`;
			case "prod":
				return `https://${baseUrl}`;
			case "test":
			default:
				return `https://test.${baseUrl}`;
		}
	}
}
