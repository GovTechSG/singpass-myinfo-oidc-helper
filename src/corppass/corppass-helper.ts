import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as querystringUtil from "querystring";
import { createClient } from "../client/axios-client";
import { JweUtil } from "../util";
import { logger } from "../util/Logger";
import { SingpassMyInfoError } from "../util/error/SingpassMyinfoError";
import { EntityInfo, TokenResponse, UserInfo } from './shared-constants';

interface AccessTokenPayload {
	exp: number;
	iat: number;
	iss: string;
	aud: string;
	authorization: {
		entityInfo: EntityInfo;
	};
}

export interface IdTokenPayload {
	rt_hash: string;
	nonce?: string;
	iat: number;
	iss: string;
	at_hash: string;
	// sub contains user's NRIC, system defined ID and Country code: s=S1234567A,u=CP8202,c=SG
	sub: string;
	exp: number;
	aud: string;
	amr: string[];
	userInfo: UserInfo;
}

export interface OidcHelperConstructor {
	authorizationUrl: string;
	tokenUrl: string;
	clientID: string;
	clientSecret: string;
	redirectUri: string;
	jweDecryptKey: string;
	jwsVerifyKey: string;
	additionalHeaders?: Record<string, string>;
}

export class OidcHelper {

	private axiosClient: AxiosInstance = createClient({
		timeout: 10000,
	});

	private authorizationUrl: string;
	private tokenUrl: string;
	private clientID: string;
	private clientSecret: string;
	private redirectUri: string;
	private jweDecryptKey: string;
	private jwsVerifyKey: string;
	private additionalHeaders?: Record<string, string>;

	constructor(props: OidcHelperConstructor) {
		this.authorizationUrl = props.authorizationUrl;
		this.tokenUrl = props.tokenUrl;
		this.clientID = props.clientID;
		this.clientSecret = props.clientSecret;
		this.redirectUri = props.redirectUri;
		this.jweDecryptKey = props.jweDecryptKey;
		this.jwsVerifyKey = props.jwsVerifyKey;
		this.additionalHeaders = props.additionalHeaders || {};
	}

	public constructAuthorizationUrl = (
		state: string,
		nonce?: string,
		overrideAuthUrl?: string,
	): string => {
		const queryParams = {
			state,
			...(nonce ? { nonce } : {}),
			redirect_uri: this.redirectUri,
			scope: "openid",
			client_id: this.clientID,
			response_type: "code",
		};
		const queryString = querystringUtil.stringify(queryParams);
		return `${overrideAuthUrl ?? this.authorizationUrl}?${queryString}`;
	}

	/**
	 * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
	 * Use getAccessTokenPayload and getIdTokenPayload on returned Token Response to get the token payload
	 */
	public getTokens = async (authCode: string, axiosRequestConfig?: AxiosRequestConfig): Promise<TokenResponse> => {
		const params = {
			grant_type: "authorization_code",
			code: authCode,
			client_id: this.clientID,
			client_secret: this.clientSecret,
			redirect_uri: this.redirectUri,
		};
		const body = querystringUtil.stringify(params);

		const config = {
			headers: {
				...this.additionalHeaders,
				"content-type": "application/x-www-form-urlencoded"
			},
			...axiosRequestConfig,
		};
		const response = await this.axiosClient.post(this.tokenUrl, body, config);
		if (!response.data.id_token) {
			logger.error("Failed to get ID token: invalid response data", response.data);
			throw new SingpassMyInfoError("Failed to get ID token");
		}
		return response.data;
	}

	/**
	 * Get fresh tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
	 * Use getIdTokenPayload on returned Token Response to get the token payload
	 */
	public refreshTokens = async (refreshToken: string, axiosRequestConfig?: AxiosRequestConfig): Promise<TokenResponse> => {
		const params = {
			scope: "openid",
			grant_type: "refresh_token",
			client_id: this.clientID,
			client_secret: this.clientSecret,
			refresh_token: refreshToken,
		};
		const body = querystringUtil.stringify(params);

		const config = {
			headers: {
				...this.additionalHeaders,
				"content-type": "application/x-www-form-urlencoded"
			},
			...axiosRequestConfig,
		};
		const response = await this.axiosClient.post(this.tokenUrl, body, config);
		if (!response.data.id_token) {
			logger.error("Failed to get ID token: invalid response data", response.data);
			throw new SingpassMyInfoError("Failed to get ID token");
		}
		return response.data;
	}

	/**
	 * Decodes the access Token JWT inside the TokenResponse to get the payload
	 */
	public async getAccessTokenPayload(tokens: TokenResponse): Promise<AccessTokenPayload> {
		try {
			const { access_token } = tokens;
			const verifiedJws = await JweUtil.verifyJWS(access_token, this.jwsVerifyKey);
			return JSON.parse(verifiedJws.payload.toString()) as AccessTokenPayload;
		} catch (e) {
			logger.error("Failed to get access token payload", e);
			throw e;
		}
	}

	/**
	 * Decrypts the ID Token JWT inside the TokenResponse to get the payload
	 * Use extractInfoFromIdTokenSubject on the returned Token Payload to get the NRIC, system defined ID and country code
	 */
	public async getIdTokenPayload(tokens: TokenResponse): Promise<IdTokenPayload> {
		try {
			const { id_token } = tokens;
			const decryptedJwe = await JweUtil.decryptJWE(id_token, this.jweDecryptKey);
			const jwsPayload = decryptedJwe.payload.toString();
			const verifiedJws = await JweUtil.verifyJWS(jwsPayload, this.jwsVerifyKey);
			return JSON.parse(verifiedJws.payload.toString()) as IdTokenPayload;
		} catch (e) {
			logger.error("Failed to get ID token payload", e);
			throw e;
		}
	}

	/**
	 * Returns the NRIC, system defined ID and country code from the ID token payload
	 */
	public extractInfoFromIdTokenSubject(payload: IdTokenPayload): { nric: string, uuid?: string, countryCode?: string } {
		const { sub } = payload;

		if (sub) {
			const trimmedSub = sub.replace(/ /g, '');
			const nricRegex = /s=([STFGM]\d{7}[A-Z])[^,]*/i;
			const [, nric] = trimmedSub.match(nricRegex) || [];
			const uuidRegex = /u=([^,]*)/i;
			const [, uuid] = trimmedSub.match(uuidRegex) || [];
			const countryCodeRegex = /c=([^,]*)/i;
			const [, countryCode] = trimmedSub.match(countryCodeRegex) || [];

			if (!nric) {
				throw Error("Token payload sub property is invalid, does not contain valid NRIC");
			}

			return { nric, uuid, countryCode };
		}

		throw Error("Token payload sub property is not defined");
	}

	private validateStatus(status: number) {
		return status === 302 || (status >= 200 && status < 300);
	}

	public _testExports = {
		corppassClient: this.axiosClient,
		validateStatusFn: this.validateStatus,
	};
}
