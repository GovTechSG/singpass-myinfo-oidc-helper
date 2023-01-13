import { AxiosInstance, AxiosRequestConfig } from "axios";
import { TokenPayload, TokenResponse } from './shared-constants';
export declare enum SessionRefreshResult {
    SUCCESS = "SUCCESS",
    SINGPASS_ERROR = "SINGPASS_ERROR",
    INVALID_SESSION_ID = "INVALID_SESSION_ID"
}
export declare enum SessionLogoutResult {
    SUCCESS = "SUCCESS",
    SINGPASS_ERROR = "SINGPASS_ERROR"
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
    /**
     * Headers already added by the client:
     * Content-Type, Cookie (refreshSession, logoutOfSession)
     */
    additionalHeaders?: Record<string, string>;
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
    private additionalHeaders?;
    constructor(props: OidcHelperConstructor);
    constructAuthorizationUrl: (state: string, nonce?: string, overrideAuthUrl?: string) => string;
    /**
     * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    getTokens: (authCode: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>;
    /**
     * Get fresh tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    refreshTokens: (refreshToken: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>;
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
     * Refresh the Singpass session, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     * @param state state that will be passed to the your redirect uri from this refresh call. defaults to "dummyState"
     * @returns INVALID_SESSION_ID - the sessionId param is no longer valid
     * @returns SINGPASS_ERROR - the call to Singpass server to refresh is not successful
     * @returns SUCCESS - refresh sessionId successfully
     */
    refreshSession(sessionId: string, state?: string): Promise<SessionRefreshResult>;
    /**
     * [DEPRECATED] Singpass is not managing the logged in user's session anymore thus there is no need to log out.
     * Keeping for other use cases.
     *
     * Log user out of Singpass, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     */
    logoutOfSession(sessionId: string): Promise<SessionLogoutResult>;
    private validateStatus;
    _testExports: {
        singpassClient: AxiosInstance;
        validateStatusFn: (status: any) => boolean;
    };
}
//# sourceMappingURL=singpass-helper.d.ts.map