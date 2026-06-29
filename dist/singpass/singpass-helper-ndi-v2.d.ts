import { AxiosInstance, AxiosProxyConfig } from "axios";
import { Key } from "../util/KeyUtil";
import { PARInput, PARRequestParams, PARResponse } from "../util/ParUtil";
import type { TokenPayloadV2, TokenResponse } from "./shared-constants";
import { MyInfoComponentsV4 } from "../types";
export type { PARRequestParams, PARResponse };
export type { SubAttributes, TokenPayloadV2, UserDataPayloadV2 } from "./shared-constants";
export interface NdiOidcHelperV2Constructor {
    oidcConfigUrl: string;
    clientID: string;
    redirectUri: string;
    jweDecryptKey: Key;
    clientAssertionSignKey: Key;
    dpopSignKey: Key;
    proxyConfig?: AxiosProxyConfig;
}
export interface TokenRequestBody {
    redirect_uri: string;
    grant_type: "authorization_code";
    code: string;
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    client_assertion: string;
    code_verifier: string;
}
export declare class NdiOidcHelperV2 {
    private axiosClient;
    private oidcConfigUrl;
    private clientID;
    private redirectUri;
    private jweDecryptKey;
    private clientAssertionSignKey;
    private dpopSignKey;
    private oidcConfig;
    constructor(props: NdiOidcHelperV2Constructor);
    private getOidcConfig;
    private getKeys;
    /**
     * Send a Pushed Authorization Request.
     *
     * Flow:
     * 1. POST params to pushed_authorization_request_endpoint (with DPoP header)
     * 2. Receive request_uri in response
     * 3. Use request_uri to construct the authorization URL (see constructAuthorizationUrl)
     */
    fetchPushedAuthorizationRequest: (input: PARInput) => Promise<PARResponse>;
    /**
     * Construct the authorization URL using the request_uri from PAR.
     */
    constructAuthorizationUrl: (requestUri: string) => Promise<string>;
    /**
     * Exchange authorization code for tokens.
     *
     * Sends a POST to the token endpoint with DPoP header.
     * The token_type in the response will be "DPoP" (not "Bearer") per FAPI 2.0.
     *
     * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/3.-token-exchange
     */
    getTokens: (authCode: string, codeVerifier: string) => Promise<TokenResponse>;
    /**
     * Decrypt and verify the ID token from the token response.
     * ref 1: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/4.-parsing-the-id-token
     * ref 2: https://docs.developer.singpass.gov.sg/docs/technical-specifications/migration-guides/login-myinfo-v5-apps#id-1.-implement-decryption-of-the-id-token
     */
    getIdTokenPayload(tokens: TokenResponse, overrideDecryptKey?: Key): Promise<TokenPayloadV2>;
    /**
     * Fetch user info from the userinfo endpoint.
     *
     * This step is only applicable to MyInfo (v5) apps.
     * Requires DPoP proof with ath (access token hash) claim.
     * Authorization header uses "DPoP" prefix instead of "Bearer" (changed from V1).
     *
     * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/5.-requesting-for-userinfo#request
     */
    getUserInfo: (accessToken: string) => Promise<string>;
    verifyUserInfo: (jweResponse: string, overrideDecryptKey?: Key) => Promise<MyInfoComponentsV4.Schemas.Person>;
    extractUuidFromPayload(payload: TokenPayloadV2): string;
    extractIdentityNumberFromPayload(payload: TokenPayloadV2): string;
    _testExports: {
        getAxiosClient: () => AxiosInstance;
    };
}
//# sourceMappingURL=singpass-helper-ndi-v2.d.ts.map