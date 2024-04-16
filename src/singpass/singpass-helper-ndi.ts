import { AxiosInstance, AxiosProxyConfig } from "axios";
import * as querystringUtil from "querystring";
import { createClient } from "../client/axios-client";
import { JweUtil } from "../util";
import { SingpassMyInfoError } from "../util/error/SingpassMyinfoError";
import { logger } from "../util/Logger";
import { TokenPayload, TokenResponse } from "./shared-constants";
import { Key } from "../util/KeyUtil";
import { createClientAssertion } from "../util/SigningUtil";

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

	public constructAuthorizationUrl = async (state: string, nonce?: string): Promise<string> => {
		const {
			data: { authorization_endpoint },
		} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl);

		const queryParams = {
			state,
			...(nonce ? { nonce } : {}),
			redirect_uri: this.redirectUri,
			scope: "openid",
			client_id: this.clientID,
			response_type: "code",
		};
		const queryString = querystringUtil.stringify(queryParams);
		return `${authorization_endpoint}?${queryString}`;
	};

	/**
	 * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
	 * Use getIdTokenPayload on returned Token Response to get the token payload
	 */
	public getTokens = async (authCode: string): Promise<TokenResponse> => {
		const {
			data: { token_endpoint, issuer },
		} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl);

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
		return response.data;
	};

	/**
	 * Decrypts the ID Token JWT inside the TokenResponse to get the payload
	 * Use extractNricAndUuidFromPayload on the returned Token Payload to get the NRIC and UUID
	 */
	public async getIdTokenPayload(tokens: TokenResponse, overrideDecryptKey?: Key): Promise<TokenPayload> {
		try {
			const {
				data: { jwks_uri },
			} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl);
			const {
				data: { keys },
			} = await this.axiosClient.get<{ keys: Object[] }>(jwks_uri);
			let err: Error = null;
			for (const key of keys) {
				try {
					const jwsVerifyKey = JSON.stringify(key);

					const { id_token } = tokens;

					const finalDecryptionKey = overrideDecryptKey ?? this.jweDecryptKey;
					const decryptedJwe = await JweUtil.decryptJWE(
						id_token,
						finalDecryptionKey.key,
						finalDecryptionKey.format,
					);
					const jwsPayload = decryptedJwe.payload.toString();
					const verifiedJws = await JweUtil.verifyJWS(jwsPayload, jwsVerifyKey, "json");
					return JSON.parse(verifiedJws.payload.toString()) as TokenPayload;
				} catch (e) {
					err = e;
				}
			}

			throw err;
		} catch (e) {
			logger.error("Failed to get token payload", e);
			throw e;
		}
	}

	/**
	 * Returns the nric and uuid from the token payload
	 */
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

	private validateStatus(status: number) {
		return status === 302 || (status >= 200 && status < 300);
	}

	public _testExports = {
		getSingpassClient: () => this.axiosClient,
		validateStatusFn: this.validateStatus,
	};
}
