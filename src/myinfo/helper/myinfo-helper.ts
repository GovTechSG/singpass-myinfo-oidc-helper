import { AxiosResponse } from "axios";
import * as _ from "lodash";
import * as request from "request";
import { JweUtil, Logger } from "../../util";
import { SingpassMyInfoError } from "../../util/error/SingpassMyinfoError";
import { MyInfoComponents } from "../domain";
import { ProfileStatus } from "../domain/profilestatus-domain";
import { MyInfoRequest, MyInfoRequestConstructor } from "./myinfo-request";
import * as querystringUtil from "querystring";

export type EnvType = "test" | "sandbox" | "prod";

export interface IMyInfoHelper {
	getPersonCommon: <K extends keyof MyInfoComponents.Schemas.PersonCommon>(uinfin: string) => Promise<Pick<MyInfoComponents.Schemas.PersonCommon, K>>;
}

export interface IMyInfoRequest {
	get: (
		uri: string,
		params?: { [key: string]: any },
		bearer?: string,
	) => Promise<request.RequestResponse>;
}

export interface MyInfoHelperConstructor {
	attributes: string[];
	clientID: string;
	clientSecret: string;
	environment: EnvType;
	singpassEserviceID: string;
	keyToDecryptJWE: string;
	certToVerifyJWS: string;
	privateKeyToSignRequest: string;
	redirectUri: string;
	privateKeyPassword?: string;
	overrideAuthorizationUrl?: string;
	overrideTokenUrl?: string;
	overridePersonUrl?: string;
	overridePersonBasicUrl?: string;
	overrideProfileStatusUrl?: string;
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

	private readonly attributes: string[];
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

	private readonly redirectUrl: string;

	public constructor(props: MyInfoHelperConstructor) {
		if (_.isEmpty(props.attributes)) {
			throw new SingpassMyInfoError("Attribute list must contain values");
		}
		this.attributes = props.attributes;
		this.clientID = props.clientID;
		this.clientSecret = props.clientSecret;
		this.singpassEserviceID = props.singpassEserviceID;
		this.keyToDecryptJWE = props.keyToDecryptJWE;
		this.certToVerifyJWS = props.certToVerifyJWS;
		this.redirectUrl = props.redirectUri;
		this.authorizationUrl = this.getUrl(props.overridePersonUrl, AUTHORISE_BASE_URL, props.environment);
		this.tokenUrl = this.getUrl(props.overridePersonUrl, TOKEN_BASE_URL, props.environment);
		this.personUrl = this.getUrl(props.overridePersonUrl, PERSON_BASE_URL, props.environment);
		this.personBasicUrl = this.getUrl(props.overridePersonBasicUrl, PERSON_BASIC_BASE_URL, props.environment);
		this.profileStatusUrl = this.getUrl(props.overrideProfileStatusUrl, PROFILE_STATUS_BASE_URL, props.environment);

		const requestProps: MyInfoRequestConstructor = {
			appId: props.clientID,
			privateKeyToSignRequest: props.privateKeyToSignRequest,
			privateKeyPassword: props.privateKeyPassword,
		};
		this.myInfoRequest = new MyInfoRequest(requestProps);
	}

	public constructAuthorizationUrl = (state: string, purpose: string): string => {
		const queryParams = {
			state,
			purpose,
			attributes: this.attributes,
			redirect_uri: this.redirectUrl,
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
		};

		const queryString = querystringUtil.stringify(queryParams);
		return `${this.authorizationUrl}?${queryString}`;
	}

	/**
	 * Obtain token for person data
	 */
	public getToken = async (authCode: string, state: string): Promise<TokenResponse> => {
		const params = {
			code: authCode,
			client_secret: this.clientSecret,
			client_id: this.clientID,
			redirect_uri: this.redirectUrl,
			state
		};

		let response: AxiosResponse<TokenResponse>;
		try {
			response = await this.myInfoRequest.post(this.tokenUrl, params);
		} catch (error) {
			Logger.error("Failed to get token from Myinfo", error);
			throw error;
		}

		return response.data;
	}

	/**
	 * Obtain V3 person basic data using uinfin.
	 * In the generic K, pass in the list of string literal of the attributes you expect to get back.
	 * getPersonCommon will return an object with only the properties matching the keys.
	 * e.g. when K = "name" | "email", getPersonCommon returns an object looking like { name, email }
	 */
	public getPersonCommon = async<K extends keyof MyInfoComponents.Schemas.PersonCommon>(uinfin: string): Promise<Pick<MyInfoComponents.Schemas.PersonCommon, K>> => {
		const url = `${this.personBasicUrl}/${uinfin}`;
		const params = {
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
			attributes: this.attributes.join(","),
		};

		let response: AxiosResponse;
		try {
			response = await this.myInfoRequest.get(url, params);
		} catch (error) {
			Logger.error("Error requesting for person-common data (JWE) from Myinfo", error);
			throw error;
		}

		try {
			// Decrypt person data
			const encryptedPersonJWE = response.data;
			const jwe = await JweUtil.decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
			const jws = JSON.parse(jwe.payload.toString());
			const verifiedJws = await JweUtil.verifyJWS(jws, this.certToVerifyJWS);
			const personData = JSON.parse(verifiedJws.payload.toString()) as Pick<MyInfoComponents.Schemas.PersonCommon, K>;

			if (personData == null) {
				throw new SingpassMyInfoError("Person-common data cannot be null");
			}

			return personData;
		} catch (error) {
			Logger.error("Error verifying person-common data from Myinfo", error);
			throw error;
		}
	};

	/**
	 * Obtain V3 person data using uinfin and access token.
	 * In the generic K, pass in the list of string literal of the attributes you expect to get back.
	 * getPersonCommon will return an object with only the properties matching the keys.
	 * e.g. when K = "name" | "email", getPersonCommon returns an object looking like { name, email }
	 */

	public getPerson = async<K extends keyof MyInfoComponents.Schemas.Person>(accessToken: string): Promise<Pick<MyInfoComponents.Schemas.Person, K>> => {
		const uinfin = this.extractUinfinFromAccessToken(accessToken);

		const url = `${this.personUrl}/${uinfin}`;
		const params = {
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
			attributes: this.attributes.join(","),
		};

		let response: AxiosResponse;
		try {
			response = await this.myInfoRequest.get(url, params, accessToken);
		} catch (error) {
			Logger.error("Error requesting for person data from Myinfo", error);
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
			Logger.error("Error verifying person data from Myinfo", error);
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
		const response = await this.myInfoRequest.get(url);

		if (!!response.data.msg && typeof response.data.msg === "string") {
			return JSON.parse(response.data.msg);
		}
		throw new SingpassMyInfoError("getProfileStatus response does not include the `msg` field as singpass-myinfo lib expected");
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
			Logger.error("Error verifying token from Myinfo", error);
			throw error;
		}
	}

	public async extractUinfinFromAccessToken(accessToken: string): Promise<string> {
		const payload = await this.getPayloadFromAccessToken(accessToken);
		return payload.sub;
	}

	private getUrl(overrideUrl: string, defaultUrl: string, env: EnvType) {
		return (!_.isEmpty(overrideUrl))
			? overrideUrl
			: this.constructUrl(env, defaultUrl);
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
