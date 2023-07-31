import { AxiosInstance, AxiosProxyConfig } from "axios";
import { TokenPayload, TokenResponse } from './shared-constants';
import { Key } from '../util/KeyUtil';
export interface NdiOidcHelperConstructor {
    oidcConfigUrl: string;
    clientID: string;
    redirectUri: string;
    jweDecryptKey: Key;
    clientAssertionSignKey: Key;
    proxyConfig?: AxiosProxyConfig;
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
     * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    getTokens: (authCode: string) => Promise<TokenResponse>;
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
    private validateStatus;
    _testExports: {
        getSingpassClient: () => AxiosInstance;
        validateStatusFn: (status: number) => boolean;
    };
}
//# sourceMappingURL=singpass-helper-ndi.d.ts.map