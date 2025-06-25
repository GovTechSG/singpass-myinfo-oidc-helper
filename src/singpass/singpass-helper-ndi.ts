import { AxiosInstance, AxiosProxyConfig } from "axios";
import { generators } from "openid-client";
import * as querystringUtil from "querystring";
import { createClient } from "src/client/axios-client";
import { JweUtil } from "src/util";
import { SingpassMyInfoError } from "src/util/error/SingpassMyinfoError";
import { Key } from "src/util/KeyUtil";
import { logger } from "src/util/Logger";
import { createClientAssertion } from "src/util/SigningUtil";
import { MyInfoComponentsV4 } from "../types";
import { TokenPayload, TokenResponse, UserDataPayload } from "./shared-constants";

export interface NdiOidcHelperConstructor {
	oidcConfigUrl: string;
	clientID: string;
	redirectUri: string;
	jweDecryptKey: Key;
	clientAssertionSignKey: Key;
	proxyConfig?: AxiosProxyConfig;
}

interface OidcConfig {
	issuer: string;
	authorization_endpoint: string;
	userinfo_endpoint: string;
	token_endpoint: string;
	jwks_uri: string;
}

export class NdiOidcHelper {
	private axiosClient: AxiosInstance;
	private oidcConfigUrl: string;
	private clientID: string;
	private redirectUri: string;
	private jweDecryptKey: Key;
	private clientAssertionSignKey: Key;
	private oidcConfig: OidcConfig;

	constructor(props: NdiOidcHelperConstructor) {
		this.oidcConfigUrl = props.oidcConfigUrl;
		this.clientID = props.clientID;
		this.redirectUri = props.redirectUri;
		this.jweDecryptKey = props.jweDecryptKey;
		this.clientAssertionSignKey = props.clientAssertionSignKey;

		this.axiosClient = createClient({
			timeout: 10000,
			proxy: props.proxyConfig,
		});
	}

	private getOidcConfig = async (): Promise<OidcConfig> => {
		if (!this.oidcConfig) {
			const response = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl);
			this.oidcConfig = response.data;
		}

		return this.oidcConfig;
	};

	private getKeys = async () => {
		const { jwks_uri } = await this.getOidcConfig();
		const {
			data: { keys },
		} = await this.axiosClient.get<{ keys: object[] }>(jwks_uri);

		return keys;
	};

	public constructAuthorizationUrlV2 = async (params: {
		state: string;
		/**
		 * myinfo attributes to request from NDI
		 *
		 * pass in empty array if not requesting any user info
		 *
		 * myinfo data must be subsequently fetched using the `getUserInfo` method
		 *
		 * @example
		 * ["name", "uinfin", "mobileno"]
		 */
		userInfoScope: string[];
		nonce?: string;
		codeVerifier?: string;
	}) => {
		const { state, nonce, userInfoScope, codeVerifier } = params;
		const { authorization_endpoint } = await this.getOidcConfig();

		userInfoScope.unshift("openid");

		const queryParams = {
			state,
			...(nonce ? { nonce } : {}),
			redirect_uri: this.redirectUri,
			scope: userInfoScope.join(" "),
			client_id: this.clientID,
			response_type: "code",
			...(codeVerifier
				? { code_challenge_method: "S256", code_challenge: generators.codeChallenge(codeVerifier) }
				: {}),
		};
		const queryString = querystringUtil.stringify(queryParams);
		return `${authorization_endpoint}?${queryString}`;
	};

	/**
	 * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
	 * Use getIdTokenPayload on returned Token Response to get the token payload
	 */
	public getTokens = async (authCode: string, codeVerifier?: string): Promise<TokenResponse> => {
		const { token_endpoint, issuer } = await this.getOidcConfig();

		const params = {
			grant_type: "authorization_code",
			code: authCode,
			client_id: this.clientID,
			redirect_uri: this.redirectUri,
			client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
			client_assertion: await createClientAssertion({
				issuer: this.clientID,
				subject: this.clientID,
				audience: issuer,
				key: this.clientAssertionSignKey,
			}),
			...(codeVerifier ? { code_verifier: codeVerifier } : undefined),
		};
		const body = querystringUtil.stringify(params);

		const config = {
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			},
		};
		const response = await this.axiosClient.post<TokenResponse>(token_endpoint, body, config);
		if (!response.data.id_token) {
			logger.error("Failed to get ID token: invalid response data", response.data);
			throw new SingpassMyInfoError("Failed to get ID token");
		}
		if (!response.data.access_token) {
			logger.error("Failed to get access token: invalid response data", response.data);
			throw new SingpassMyInfoError("Failed to get access token");
		}
		return response.data;
	};

	public getUserInfo = async (token: string) => {
		const { userinfo_endpoint } = await this.getOidcConfig();

		const { data } = await this.axiosClient.get<string>(userinfo_endpoint, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return data;
	};

	public verifyUserInfo = async (jweResponse: string, overrideDecryptKey?: Key) => {
		try {
			const keys = await this.getKeys();

			const finalDecryptionKey = overrideDecryptKey ?? this.jweDecryptKey;
			const decryptedJwe = await JweUtil.decryptJWE(
				jweResponse,
				finalDecryptionKey.key,
				finalDecryptionKey.format,
			);
			const jwsPayload = decryptedJwe.payload.toString();
			try {
				const verified = await JweUtil.verifyJwsUsingKeyStore(jwsPayload, keys);

				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { iat, iss, sub, aud, ...payload } = JSON.parse(verified.payload.toString()) as UserDataPayload;
				return payload as MyInfoComponentsV4.Schemas.Person;
			} catch (e) {
				logger.error("could not verify user info payload", e);
				throw e;
			}
		} catch (e) {
			logger.error("Failed to get user info", e);
			throw e;
		}
	};

	public async getIdTokenPayload(tokens: TokenResponse, overrideDecryptKey?: Key): Promise<TokenPayload> {
		try {
			const keys = await this.getKeys();

			const { id_token } = tokens;

			const finalDecryptionKey = overrideDecryptKey ?? this.jweDecryptKey;
			const decryptedJwe = await JweUtil.decryptJWE(id_token, finalDecryptionKey.key, finalDecryptionKey.format);
			const jwsPayload = decryptedJwe.payload.toString();
			try {
				const verified = await JweUtil.verifyJwsUsingKeyStore(jwsPayload, keys);
				return JSON.parse(verified.payload.toString()) as TokenPayload;
			} catch (e) {
				logger.error("could not verify token payload", e);
				throw e;
			}
		} catch (e) {
			logger.error("Failed to get token payload", e);
			throw e;
		}
	}

	public extractNricAndUuidFromPayload(payload: TokenPayload): { nric: string; uuid: string } {
		const { sub } = payload;

		if (sub) {
			const extractionRegex = /s=([STFGM]\d{7}[A-Z]).*,u=(.*)/i;
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

	// =========================================================================
	// Deprecated
	// =========================================================================

	/**
	 * @deprecated should use constructAuthorizationUrlV2
	 */
	public constructAuthorizationUrl = async (
		state: string,
		nonce?: string,
		codeVerifier?: string,
	): Promise<string> => {
		return this.constructAuthorizationUrlV2({ state, nonce, codeVerifier, userInfoScope: [] });
	};

	// =========================================================================
	// Helpers
	// =========================================================================

	private validateStatus(status: number) {
		return status === 302 || (status >= 200 && status < 300);
	}

	public _testExports = {
		getSingpassClient: () => this.axiosClient,
		validateStatusFn: this.validateStatus,
	};
}
