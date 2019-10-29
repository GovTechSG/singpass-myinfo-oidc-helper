import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare enum SessionLogoutResult {
    SUCCESS = "SUCCESS",
    SINGPASS_ERROR = "SINGPASS_ERROR"
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
export declare class OidcHelper {
    private SINGPASS_SESSION_COOKIE_NAME;
    private axiosClient;
    private authorizationUrl;
    private logoutUrl;
    private tokenUrl;
    private clientID;
    private clientSecret;
    private redirectUri;
    private jweDecryptKey;
    private jwsVerifyKey;
    constructor(props: OidcHelperConstructor);
    constructAuthorizationUrl: (state: string, nonce?: string) => string;
    /**
     * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    getTokens: (authCode: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>;
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractNricAndUuidFromPayload on the returned Token Payload to get the NRIC and UUID
     */
    getIdTokenPayload(tokens: TokenResponse): Promise<TokenPayload>;
    /**
     * Returns the nric and uuid from the token payload
     */
    extractNricAndUuidFromPayload(payload: TokenPayload): {
        nric: string;
        uuid: string;
    };
    /**
     * [DEPRECATED] Singpass is not managing the logged in user's session anymore thus there is no need to log out.
     * Keeping for other use cases.
     *
     * Log user out of Singpass, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     */
    logoutOfSession(sessionId: string): Promise<SessionLogoutResult>;
    _testExports: {
        singpassClient: AxiosInstance;
    };
}
