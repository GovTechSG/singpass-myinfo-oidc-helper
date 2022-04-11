import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as querystringUtil from "querystring";
import { createClient } from "../client/axios-client";
import { JweUtil } from "../util";
import { logger } from "../util/Logger";
import { SingpassMyInfoError } from "../util/error/SingpassMyinfoError";

export interface TokenResponse {
	access_token: string;
	refresh_token: string;
	id_token: string;
	token_type: string;
	expires_in: number;
	scope: string;
}

interface EntityInfo {
	CPEntID: string;
	CPEnt_TYPE: string;
	CPEnt_Status: string;
	CPNonUEN_Country: string;
	CPNonUEN_RegNo: string;
	CPNonUEN_Name: string;
}

interface AuthInfo {
	Result_Set: {
		ESrvc_Row_Count: number;
		ESrvc_Result: {
			CPESrvcID: string;
			Auth_Result_Set: {
				Row_Count: number;
				Row: {
					CPEntID_SUB: string;
					CPRole: string;
					StartDate: string;
					EndDate: string;
					Parameter?: {
						name: string;
						value: string;
					}[];
				}[];
			};
		}[];
	};
}

interface TPAccessInfo {
	Result_Set: {
		ESrvc_Row_Count: number,
		ESrvc_Result: {
			CPESrvcID: string,
			Auth_Set: {
				ENT_ROW_COUNT: number,
				TP_Auth: {
					CP_Clnt_ID: string,
					CP_ClntEnt_TYPE: string,
					Auth_Result_Set: {
						Row_Count: number,
						Row: {
							CP_ClntEnt_SUB: string,
							CPRole: string,
							StartDate: string,
							EndDate: string,
							Parameter?: {
								name: string,
								value: string;
							}[],
						}[],
					},
				}[],
			},
		}[],
	};
}

export interface AccessTokenPayload {
	exp: number;
	iat: number;
	iss: string;
	aud: string;
	EntityInfo: EntityInfo;
	AuthInfo: AuthInfo;
	TPAccessInfo: TPAccessInfo;
}

interface UserInfo {
	CPAccType: string;
	CPUID_FullName: string;
	ISSPHOLDER: string;
}

export interface IdTokenPayload {
	userInfo: UserInfo;
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
}

export interface OidcHelperConstructor {
	authorizationUrl: string;
	tokenUrl: string;
	clientID: string;
	clientSecret: string;
	redirectUri: string;
	jweDecryptKey: string;
	jwsVerifyKey: string;
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

	constructor(props: OidcHelperConstructor) {
		this.authorizationUrl = props.authorizationUrl;
		this.tokenUrl = props.tokenUrl;
		this.clientID = props.clientID;
		this.clientSecret = props.clientSecret;
		this.redirectUri = props.redirectUri;
		this.jweDecryptKey = props.jweDecryptKey;
		this.jwsVerifyKey = props.jwsVerifyKey;
	}

	public constructAuthorizationUrl = (
		state: string,
		nonce?: string,
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
		return `${this.authorizationUrl}?${queryString}`;
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
			headers: { "content-type": "application/x-www-form-urlencoded" },
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
			headers: { "content-type": "application/x-www-form-urlencoded" },
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
	public extractInfoFromIdTokenSubject(payload: IdTokenPayload): { nric: string, uuid: string, countryCode: string } {
		const { sub } = payload;

		if (sub) {
			const extractionRegex = /s=([STFG]\d{7}[A-Z]).*,u=(.*),c=(.*)/i;
			const matchResult = sub.match(extractionRegex);

			if (!matchResult) {
				throw Error("Token payload sub property is invalid, does not contain valid NRIC, uuid and country code string");
			}

			const nric = matchResult[1];
			const uuid = matchResult[2];
			const countryCode = matchResult[3];

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
