import { AxiosInstance, AxiosProxyConfig } from "axios";
import * as querystringUtil from "querystring";
import { createClient } from "../client/axios-client";
import { JweUtil } from "../util";
import { SingpassMyInfoError } from "../util/error/SingpassMyinfoError";
import { logger } from "../util/Logger";
import { AccessTokenPayload, IdTokenPayload, TokenResponse } from './shared-constants';
import { Key } from'../util/KeyUtil';
import { createClientAssertion } from'../util/SigningUtil';

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

	private axiosClient: AxiosInstance = createClient({
		timeout: 10000,
	});

	private oidcConfigUrl: string;
	private clientID: string;
	private redirectUri: string;
	private jweDecryptKey: Key;
	private clientAssertionSignKey: Key;
	private proxyConfig: AxiosProxyConfig;

	constructor(props: NdiOidcHelperConstructor) {
		this.oidcConfigUrl = props.oidcConfigUrl;
		this.clientID = props.clientID;
		this.redirectUri = props.redirectUri;
		this.jweDecryptKey = props.jweDecryptKey;
		this.clientAssertionSignKey = props.clientAssertionSignKey;
		this.proxyConfig = props.proxyConfig;
	}

	public constructAuthorizationUrl = async (
		state: string,
		nonce?: string
	): Promise<string> => {
		const {data: {authorization_endpoint}} = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl, { proxy: this.proxyConfig });

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
	}

	/**
	 * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
	 * Use getIdTokenPayload on returned Token Response to get the token payload
	 */
	public getTokens = async (authCode: string): Promise<TokenResponse> => {
		const { data: { token_endpoint, issuer } } = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl);

		const params = {
			grant_type: "authorization_code",
			code: authCode,
			client_id: this.clientID,
			redirect_uri: this.redirectUri,
			client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
			client_assertion: await createClientAssertion({
				issuer: this.clientID,
				subject: this.clientID,
				audience: issuer,
				key: this.clientAssertionSignKey,
			})
		};
		const body = querystringUtil.stringify(params);

		const config = {
			headers: {
				"content-type": "application/x-www-form-urlencoded"
			},
			proxy: this.proxyConfig
		};
		const response = await this.axiosClient.post<TokenResponse>(token_endpoint, body, config);
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
			const { data: { jwks_uri } } = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl);
			const { data: keys } = await this.axiosClient.get<{keys: Object[]}>(jwks_uri);
			const jwsVerifyKey = keys[0];

			const { access_token } = tokens;
			const verifiedJws = await JweUtil.verifyJWS(access_token, jwsVerifyKey, 'json');
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
			const { data: { jwks_uri } } = await this.axiosClient.get<OidcConfig>(this.oidcConfigUrl);
			const { data: keys } = await this.axiosClient.get<{keys: Object[]}>(jwks_uri);
			const jwsVerifyKey = keys[0];

			const { id_token } = tokens;
			const decryptedJwe = await JweUtil.decryptJWE(id_token, this.jweDecryptKey.key, this.jweDecryptKey.format);
			const jwsPayload = decryptedJwe.payload.toString();
			const verifiedJws = await JweUtil.verifyJWS(jwsPayload, jwsVerifyKey, 'json');
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
