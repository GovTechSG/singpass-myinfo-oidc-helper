import { AxiosInstance, AxiosProxyConfig } from "axios";
import * as querystringUtil from "querystring";
import { createClient } from "src/client/axios-client";
import { JweUtil } from "src/util";
import { createDpopProof } from "src/util/DpopUtil";
import { SingpassMyInfoError } from "src/util/error/SingpassMyinfoError";
import { Key } from "src/util/KeyUtil";
import { logger } from "src/util/Logger";
import {
	constructAuthorizationUrl as parConstructAuthorizationUrl,
	PARInput,
	PARRequestParams,
	PARResponse,
	sendPushedAuthorizationRequest,
} from "src/util/ParUtil";
import { createClientAssertion } from "src/util/SigningUtil";
import { MyInfoComponentsV4 } from "../types";
import { TokenPayloadV2, TokenResponse, UserDataPayloadV2 } from "./shared-constants";

export type { PARRequestParams, PARResponse };
export type { SubAttributes, TokenPayloadV2, UserDataPayloadV2 } from "./shared-constants";

// =============================================================================
// Types
// =============================================================================

export interface NdiOidcHelperV2Constructor {
	oidcConfigUrl: string;
	clientID: string;
	redirectUri: string;
	jweDecryptKey: Key;
	clientAssertionSignKey: Key;
	dpopSignKey: Key;
	proxyConfig?: AxiosProxyConfig;
}

interface OidcConfigV2 {
	issuer: string;
	authorization_endpoint: string;
	userinfo_endpoint: string;
	token_endpoint: string;
	jwks_uri: string;
	pushed_authorization_request_endpoint: string;
}

// ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/3.-token-exchange#request-body
export interface TokenRequestBody {
	redirect_uri: string;
	grant_type: "authorization_code";
	code: string;
	client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
	client_assertion: string;
	code_verifier: string;
}

// =============================================================================
// Helper Class
// =============================================================================

export class NdiOidcHelperV2 {
	private axiosClient: AxiosInstance;
	private oidcConfigUrl: string;
	private clientID: string;
	private redirectUri: string;
	private jweDecryptKey: Key;
	private clientAssertionSignKey: Key;
	private dpopSignKey: Key;
	private oidcConfig: OidcConfigV2 | undefined;

	constructor(props: NdiOidcHelperV2Constructor) {
		this.oidcConfigUrl = props.oidcConfigUrl;
		this.clientID = props.clientID;
		this.redirectUri = props.redirectUri;
		this.jweDecryptKey = props.jweDecryptKey;
		this.clientAssertionSignKey = props.clientAssertionSignKey;
		this.dpopSignKey = props.dpopSignKey;

		this.axiosClient = createClient({
			timeout: 10000,
			proxy: props.proxyConfig,
		});
	}

	private getOidcConfig = async (): Promise<OidcConfigV2> => {
		if (!this.oidcConfig) {
			const response = await this.axiosClient.get<OidcConfigV2>(this.oidcConfigUrl);
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

	// =========================================================================
	// Step 1: Pushed Authorization Request (PAR)
	// =========================================================================

	/**
	 * Send a Pushed Authorization Request.
	 *
	 * Flow:
	 * 1. POST params to pushed_authorization_request_endpoint (with DPoP header)
	 * 2. Receive request_uri in response
	 * 3. Use request_uri to construct the authorization URL (see constructAuthorizationUrl)
	 */
	public fetchPushedAuthorizationRequest = async (input: PARInput): Promise<PARResponse> => {
		const { pushed_authorization_request_endpoint, issuer } = await this.getOidcConfig();

		return sendPushedAuthorizationRequest(input, {
			clientID: this.clientID,
			redirectUri: this.redirectUri,
			parEndpoint: pushed_authorization_request_endpoint,
			issuer,
			clientAssertionSignKey: this.clientAssertionSignKey,
			dpopSignKey: this.dpopSignKey,
			axiosClient: this.axiosClient,
		});
	};

	// =========================================================================
	// Step 2: Construct Authorization URL
	// =========================================================================

	/**
	 * Construct the authorization URL using the request_uri from PAR.
	 */
	public constructAuthorizationUrl = async (requestUri: string): Promise<string> => {
		const { authorization_endpoint } = await this.getOidcConfig();
		return parConstructAuthorizationUrl(authorization_endpoint, this.clientID, requestUri);
	};

	// =========================================================================
	// Step 3: Token Exchange
	// =========================================================================

	/**
	 * Exchange authorization code for tokens.
	 *
	 * Sends a POST to the token endpoint with DPoP header.
	 * The token_type in the response will be "DPoP" (not "Bearer") per FAPI 2.0.
	 *
	 * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/3.-token-exchange
	 */
	public getTokens = async (authCode: string, codeVerifier: string): Promise<TokenResponse> => {
		const { token_endpoint, issuer } = await this.getOidcConfig();

		const clientAssertion = await createClientAssertion({
			issuer: this.clientID,
			subject: this.clientID,
			audience: issuer,
			key: this.clientAssertionSignKey,
		});

		// DPoP proof for token endpoint (htm: POST, htu: token_endpoint)
		const { proof: dpopProof } = await createDpopProof({
			htm: "POST",
			htu: token_endpoint,
			key: this.dpopSignKey,
		});

		// Token request body per Singpass docs
		const tokenRequestBody: TokenRequestBody = {
			grant_type: "authorization_code",
			code: authCode,
			redirect_uri: this.redirectUri,
			client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
			client_assertion: clientAssertion,
			code_verifier: codeVerifier,
		};
		const body = querystringUtil.stringify(tokenRequestBody as unknown as Record<string, string>);

		const response = await this.axiosClient.post<TokenResponse>(token_endpoint, body, {
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				DPoP: dpopProof,
			},
		});

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

	// =========================================================================
	// Step 4: Parse ID Token
	// =========================================================================

	/**
	 * Decrypt and verify the ID token from the token response.
	 * ref 1: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/4.-parsing-the-id-token
	 * ref 2: https://docs.developer.singpass.gov.sg/docs/technical-specifications/migration-guides/login-myinfo-v5-apps#id-1.-implement-decryption-of-the-id-token
	 */
	public async getIdTokenPayload(tokens: TokenResponse, overrideDecryptKey?: Key): Promise<TokenPayloadV2> {
		try {
			const keys = await this.getKeys();
			const { id_token } = tokens;

			const finalDecryptionKey = overrideDecryptKey ?? this.jweDecryptKey;
			const decryptedJwe = await JweUtil.decryptJWE(id_token, finalDecryptionKey.key, finalDecryptionKey.format);
			const jwsPayload = decryptedJwe.payload.toString();

			try {
				const verified = await JweUtil.verifyJwsUsingKeyStore(jwsPayload, keys);
				return JSON.parse(verified.payload.toString()) as TokenPayloadV2;
			} catch (e) {
				logger.error("could not verify token payload", e);
				throw e;
			}
		} catch (e) {
			logger.error("Failed to get token payload", e);
			throw e;
		}
	}

	// =========================================================================
	// Step 5: Userinfo Request (MyInfo V5 apps only)
	// =========================================================================

	/**
	 * Fetch user info from the userinfo endpoint.
	 *
	 * This step is only applicable to MyInfo (v5) apps.
	 * Requires DPoP proof with ath (access token hash) claim.
	 * Authorization header uses "DPoP" prefix instead of "Bearer" (changed from V1).
	 *
	 * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/5.-requesting-for-userinfo#request
	 */
	public getUserInfo = async (accessToken: string): Promise<string> => {
		const { userinfo_endpoint } = await this.getOidcConfig();

		const { proof: dpopProof } = await createDpopProof({
			htm: "GET",
			htu: userinfo_endpoint,
			key: this.dpopSignKey,
			accessToken,
		});

		const { data } = await this.axiosClient.get<string>(userinfo_endpoint, {
			headers: {
				Authorization: `DPoP ${accessToken}`,
				DPoP: dpopProof,
			},
		});

		return data;
	};

	public verifyUserInfo = async (
		jweResponse: string,
		overrideDecryptKey?: Key,
	): Promise<MyInfoComponentsV4.Schemas.Person> => {
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
				const payload = JSON.parse(verified.payload.toString()) as UserDataPayloadV2;

				return payload.person_info;
			} catch (e) {
				logger.error("could not verify user info payload", e);
				throw e;
			}
		} catch (e) {
			logger.error("Failed to get user info", e);
			throw e;
		}
	};

	// =========================================================================
	// Helpers
	// =========================================================================

	public extractUuidFromPayload(payload: TokenPayloadV2): string {
		const { sub } = payload;
		if (!sub) {
			throw new SingpassMyInfoError("Token payload sub property is not defined");
		}
		return sub;
	}

	public extractIdentityNumberFromPayload(payload: TokenPayloadV2): string {
		const identityNumber = payload.sub_attributes?.identity_number;
		if (!identityNumber) {
			throw new SingpassMyInfoError(
				"Token payload does not contain identity_number in sub_attributes. " +
					"Ensure the 'user.identity' scope is requested.",
			);
		}
		return identityNumber;
	}

	public _testExports = {
		getAxiosClient: () => this.axiosClient,
	};
}
