import { AxiosInstance, AxiosRequestConfig } from "axios";
import { AccessTokenPayload, IdTokenPayload, TokenResponse } from './shared-constants';
import { Key } from '../util/KeyUtil';
export interface NdiOidcHelperConstructor {
    oidcConfigUrl: string;
    clientID: string;
    redirectUri: string;
    jweDecryptKey: Key;
    clientAssertionSignKey: Key;
}
export declare class NdiOidcHelper {
    private axiosClient;
    private oidcConfigUrl;
    private clientID;
    private redirectUri;
    private jweDecryptKey;
    private clientAssertionSignKey;
    constructor(props: NdiOidcHelperConstructor);
    constructAuthorizationUrl: (state: string, nonce?: string) => Promise<string>;
    /**
     * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    getTokens: (authCode: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>;
    /**
     * Decodes the access Token JWT inside the TokenResponse to get the payload
     */
    getAccessTokenPayload(tokens: TokenResponse): Promise<AccessTokenPayload>;
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractInfoFromIdTokenSubject on the returned Token Payload to get the NRIC, system defined ID and country code
     */
    getIdTokenPayload(tokens: TokenResponse): Promise<IdTokenPayload>;
    /**
     * Returns the NRIC, system defined ID and country code from the ID token payload
     */
    extractInfoFromIdTokenSubject(payload: IdTokenPayload): {
        nric: string;
        uuid: string;
        countryCode: string;
    };
    private validateStatus;
    _testExports: {
        corppassClient: AxiosInstance;
        validateStatusFn: (status: number) => boolean;
    };
}
//# sourceMappingURL=corppass-helper-ndi.d.ts.map