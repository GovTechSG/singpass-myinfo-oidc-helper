import { AxiosInstance, AxiosProxyConfig } from "axios";
import { EntityInfo, TokenResponse, UserInfo } from "./shared-constants";
import { Key } from "../util/KeyUtil";
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
    proxyBaseUrl?: string;
}
export declare class NdiOidcHelper {
    private axiosClient;
    private oidcConfigUrl;
    private clientID;
    private redirectUri;
    private jweDecryptKey;
    private clientAssertionSignKey;
    private additionalHeaders?;
    proxyBaseUrl?: string;
    constructor(props: NdiOidcHelperConstructor);
    constructAuthorizationUrl: (state: string, nonce?: string) => Promise<string>;
    /**
     * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    getTokens: (authCode: string) => Promise<TokenResponse>;
    /**
     * Decodes the access Token JWT inside the TokenResponse to get the payload
     */
    getAccessTokenPayload(tokens: TokenResponse): Promise<AccessTokenPayload>;
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractInfoFromIdTokenSubject on the returned Token Payload to get the NRIC, system defined ID and country code
     */
    getIdTokenPayload(tokens: TokenResponse): Promise<NDIIdTokenPayload>;
    /**
     * Returns the NRIC, system defined ID and country code from the ID token payload
     */
    extractInfoFromIdTokenSubject(payload: NDIIdTokenPayload): {
        nric: string;
        uuid?: string;
        countryCode?: string;
    };
    private validateStatus;
    _testExports: {
        getCorppassClient: () => AxiosInstance;
        validateStatusFn: (status: number) => boolean;
    };
}
export {};
//# sourceMappingURL=corppass-helper-ndi.d.ts.map