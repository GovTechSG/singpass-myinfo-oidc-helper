import { AxiosInstance, AxiosProxyConfig } from "axios";
import * as querystringUtil from "querystring";
import { createClient } from "../client/axios-client";
import { JweUtil } from "../util";
import { SingpassMyInfoError } from "../util/error/SingpassMyinfoError";
import { logger } from "../util/Logger";
import { EntityInfo, TokenResponse, UserInfo } from "./shared-constants";
import { Key } from "../util/KeyUtil";
import { createClientAssertion } from "../util/SigningUtil";

interface AccessTokenPayload {
	exp: number;
	iat: number;
	iss: string;
	aud: string;
}

export interface NDIIdTokenPayload {
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
	entityInfo: EntityInfo;
	userInfo: UserInfo;
}

export interface NdiOidcHelperConstructor {
	oidcConfigUrl: string;
	clientID: string;
	redirectUri: string;
	jweDecryptKey: Key;
	clientAssertionSignKey: Key;
	proxyConfig?: AxiosProxyConfig;
	additionalHeaders?: Record<string, string>;
	// One of the infra setup of the user of this library is that all their external traffic is proxied through AWS API gateway with a lambda function
	// This means that calling external APIs directly from the server is blocked, hence here we specify a parameter to take in the proxy endpoint
	// so that instead of calling corppass APIs directly, the helper will call the proxy endpoint instead
	// This will affect the following API calls:
	// 	- "token_endpoint"
	// 	- "jwks_uri"
	// What this library does is given a "proxyBaseUrl", we will replace the "issuer" string found in "token_endpoint" with the proxyBaserurl
	// 		e.g. proxyBaseUrl = https://www.test.gov.sg, issuer=https://stg-id.corppass.gov.sg, token_endpoint=https://stg-id.corppass.gov.sg/mga/sps/oauth/oauth20/token
	// 		 The final endpoint this library will call is https://www.test.gov.sg/mga/sps/oauth/oauth20/token
	proxyBaseUrl?: string;
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
	private additionalHeaders?: Record<string, string>;
	public proxyBaseUrl?: string;

	constructor(props: NdiOidcHelperConstructor) {
		this.oidcConfigUrl = props.oidcConfigUrl;
		this.clientID = props.clientID;
		this.redirectUri = props.redirectUri;
		this.jweDecryptKey = props.jweDecryptKey;
		this.clientAssertionSignKey = props.clientAssertionSignKey;
		this.additionalHeaders = props.additionalHeaders || {};
		this.proxyBaseUrl = props.proxyBaseUrl;

		this.axiosClient = createClient({
			timeout: 10000,
			proxy: props.proxyConfig,
		});
	}

	public constructAuthorizationUrl = async (state: string, nonce?: string): Promise<string> => {
		const {
			data: { authorization_endpoint },
		} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl, { headers: this.additionalHeaders });

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
	 * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
	 * Use getIdTokenPayload on returned Token Response to get the token payload
	 */
	public getTokens = async (authCode: string): Promise<TokenResponse> => {
		const {
			data: { token_endpoint, issuer },
		} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl, { headers: this.additionalHeaders });

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
				...this.additionalHeaders,
				"content-type": "application/x-www-form-urlencoded",
			},
		};
		const finalTokenEndpoint = this.proxyBaseUrl ? token_endpoint.replace(issuer, this.proxyBaseUrl) : token_endpoint;
		const response = await this.axiosClient.post<TokenResponse>(finalTokenEndpoint, body, config);
		if (!response.data.id_token) {
			logger.error("Failed to get ID token: invalid response data", response.data);
			throw new SingpassMyInfoError("Failed to get ID token");
		}
		return response.data;
	};

	/**
	 * Decodes the access Token JWT inside the TokenResponse to get the payload
	 */
	public async getAccessTokenPayload(tokens: TokenResponse): Promise<AccessTokenPayload> {
		try {
			const {
				data: { jwks_uri, issuer },
			} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl, { headers: this.additionalHeaders });

			const finalJwksUri = this.proxyBaseUrl ? jwks_uri.replace(issuer, this.proxyBaseUrl) : jwks_uri;

			const {
				data: { keys },
			} = await this.axiosClient.get<{ keys: Object[] }>(finalJwksUri, { headers: this.additionalHeaders });
			const jwsVerifyKey = JSON.stringify(keys[0]);

			const { access_token } = tokens;
			const verifiedJws = await JweUtil.verifyJWS(access_token, jwsVerifyKey, "json");
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
	public async getIdTokenPayload(tokens: TokenResponse): Promise<NDIIdTokenPayload> {
		try {
			const {
				data: { jwks_uri, issuer },
			} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl, { headers: this.additionalHeaders });
			const finalJwksUri = this.proxyBaseUrl ? jwks_uri.replace(issuer, this.proxyBaseUrl) : jwks_uri;

			const {
				data: { keys },
			} = await this.axiosClient.get<{ keys: Object[] }>(finalJwksUri, { headers: this.additionalHeaders });
			const jwsVerifyKey = JSON.stringify(keys[0]);

			const { id_token } = tokens;
			const decryptedJwe = await JweUtil.decryptJWE(id_token, this.jweDecryptKey.key, this.jweDecryptKey.format);
			const jwsPayload = decryptedJwe.payload.toString();
			const verifiedJws = await JweUtil.verifyJWS(jwsPayload, jwsVerifyKey, "json");
			return JSON.parse(verifiedJws.payload.toString()) as NDIIdTokenPayload;
		} catch (e) {
			logger.error("Failed to get ID token payload", e);
			throw e;
		}
	}

	/**
	 * Returns the NRIC, system defined ID and country code from the ID token payload
	 */
	public extractInfoFromIdTokenSubject(payload: NDIIdTokenPayload): {
		nric: string;
		uuid?: string;
		countryCode?: string;
	} {
		const { sub } = payload;

		if (sub) {
			const trimmedSub = sub.replace(/ /g, "");
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
		getCorppassClient: () => this.axiosClient,
		validateStatusFn: this.validateStatus,
	};
}
