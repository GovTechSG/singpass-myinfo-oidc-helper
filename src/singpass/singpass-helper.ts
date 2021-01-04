import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as querystringUtil from "querystring";
import { createClient } from "../client";
import { JweUtil, Logger } from "../util";
import { isNil } from "lodash";
import { SingpassMyInfoError } from "../util/error/SingpassMyinfoError";

export enum SessionRefreshResult {
	SUCCESS = "SUCCESS",
	SINGPASS_ERROR = "SINGPASS_ERROR",
	INVALID_SESSION_ID = "INVALID_SESSION_ID",
}

export enum SessionLogoutResult {
	SUCCESS = "SUCCESS",
	SINGPASS_ERROR = "SINGPASS_ERROR",
}

export interface TokenResponse {
	access_token: string;
	refresh_token: string;
	id_token: string;
	token_type: string;
	expires_in: number;
	scope: string;
}

export interface TokenPayload {
	rt_hash: string;
	nonce?: string;
	iat: number;
	iss: string;
	at_hash: string;
	// sub contains user's NRIC and UUID: s=S1234567A,u=f19fdf4c-f57b-40b5-a8e0-6fb6eef640e3
	sub: string;
	exp: number;
	aud: string;
	amr: string[];
}

export interface OidcHelperConstructor {
	authorizationUrl: string;
	logoutUrl?: string;
	tokenUrl: string;
	clientID: string;
	clientSecret: string;
	redirectUri: string;
	jweDecryptKey: string;
	jwsVerifyKey: string;
}

export class OidcHelper {

	private SINGPASS_SESSION_COOKIE_NAME = "PD-S-SESSION-ID";
	private axiosClient: AxiosInstance = createClient({
		timeout: 10000,
	});

	private authorizationUrl: string;
	private logoutUrl: string;
	private tokenUrl: string;
	private clientID: string;
	private clientSecret: string;
	private redirectUri: string;
	private jweDecryptKey: string;
	private jwsVerifyKey: string;


	constructor(props: OidcHelperConstructor) {
		this.authorizationUrl = props.authorizationUrl;
		this.logoutUrl = props.logoutUrl;
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
			...(this.redirectUri ? { redirect_uri: this.redirectUri } : {}),
			scope: "openid",
			client_id: this.clientID,
			response_type: "code",

		};
		const queryString = querystringUtil.stringify(queryParams);
		return `${this.authorizationUrl}?${queryString}`;
	}

	/**
	 * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
	 * Use getIdTokenPayload on returned Token Response to get the token payload
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
			Logger.error("Failed to get ID token: invalid response data", response.data);
			throw new SingpassMyInfoError("Failed to get ID token");
		}
		return response.data;
	}

	/**
	 * Get fresh tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
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
			Logger.error("Failed to get ID token: invalid response data", response.data);
			throw new SingpassMyInfoError("Failed to get ID token");
		}
		return response.data;
	}

	/**
	 * Decrypts the ID Token JWT inside the TokenResponse to get the payload
	 * Use extractNricAndUuidFromPayload on the returned Token Payload to get the NRIC and UUID
	 */
	public async getIdTokenPayload(tokens: TokenResponse): Promise<TokenPayload> {
		try {

			const { id_token } = tokens;
			const decryptedJwe = await JweUtil.decryptJWE(id_token, this.jweDecryptKey);
			const jwsPayload = decryptedJwe.payload.toString();
			const verifiedJws = await JweUtil.verifyJWS(jwsPayload, this.jwsVerifyKey);
			return JSON.parse(verifiedJws.payload.toString()) as TokenPayload;
		} catch (e) {
			Logger.error("Failed to get token payload", e);
			throw e;
		}
	}

	/**
	 * Returns the nric and uuid from the token payload
	 */
	public extractNricAndUuidFromPayload(payload: TokenPayload): { nric: string, uuid: string } {
		const { sub } = payload;

		if (sub) {
			const extractionRegex = /s=([STFG]\d{7}[A-Z]).*,u=(.*)/i;
			const matchResult = sub.match(extractionRegex);

			if (!matchResult) {
				throw Error("Token payload sub property is invalid, does not contain valid NRIC and uuid string");
			}

			const nric = matchResult[1];
			const uuid = matchResult[2];

			return { nric, uuid };
		}

		throw Error("Token payload sub property is not defined");
	}

	/**
	 * Refresh the Singpass session, using a valid session id (that is retrieved from Singpass domain cookie)
	 * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
	 * @param state state that will be passed to the your redirect uri from this refresh call. defaults to "dummyState"
	 * @returns INVALID_SESSION_ID - the sessionId param is no longer valid
	 * @returns SINGPASS_ERROR - the call to Singpass server to refresh is not successful
	 * @returns SUCCESS - refresh sessionId successfully
	 */
	public async refreshSession(sessionId: string, state: string = "dummyState"): Promise<SessionRefreshResult> {
		const authorizationUrl = this.constructAuthorizationUrl(state);
		const requestConfig = { headers: { Cookie: `${this.SINGPASS_SESSION_COOKIE_NAME}=${sessionId}` } };
		try {
			const result = await this.axiosClient.get(authorizationUrl, requestConfig);
			if (result.request.res.responseUrl.includes("saml.singpass.gov.sg")) {
				Logger.warn(`Attempted to refresh session with invalid session ID ${sessionId}`);
				return SessionRefreshResult.INVALID_SESSION_ID;
			}
			return SessionRefreshResult.SUCCESS;
		} catch (e) {
			Logger.warn(`Singpass Error while attempting to refresh session for sessionId: ${sessionId}\nError:`, e);
			return SessionRefreshResult.SINGPASS_ERROR;
		}
	}

	/**
	 * [DEPRECATED] Singpass is not managing the logged in user's session anymore thus there is no need to log out.
	 * Keeping for other use cases.
	 *
	 * Log user out of Singpass, using a valid session id (that is retrieved from Singpass domain cookie)
	 * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
	 */
	public async logoutOfSession(sessionId: string): Promise<SessionLogoutResult> {
		if (isNil(this.logoutUrl)) {
			throw new SingpassMyInfoError("Trying to call singpass-helper logoutOfSession without setting the logout URL");
		}

		const requestConfig = { headers: { Cookie: `${this.SINGPASS_SESSION_COOKIE_NAME}=${sessionId}` } };
		try {
			await this.axiosClient.get(this.logoutUrl, requestConfig);
			return SessionLogoutResult.SUCCESS;
		} catch (e) {
			Logger.warn("Singpass Error while attempting to logout of Singpass session", e);
			return SessionLogoutResult.SINGPASS_ERROR;
		}
	}

	public _testExports = {
		singpassClient: this.axiosClient,
	};
}
