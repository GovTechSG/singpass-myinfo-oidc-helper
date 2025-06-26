import { AxiosInstance, AxiosProxyConfig } from "axios";
import { Key } from "../util/KeyUtil";
import { MyInfoComponentsV4 } from "../types";
import { TokenPayload, TokenResponse } from "./shared-constants";
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
    private oidcConfig;
    constructor(props: NdiOidcHelperConstructor);
    private getOidcConfig;
    private getKeys;
    constructAuthorizationUrlV2: (params: {
        state: string;
        /**
         * myinfo attributes to request from NDI
         *
         * pass in empty array if not requesting any user info
         *
         * myinfo data must be subsequently fetched using the `getUserInfo` method
         *
         * @example
         * ["name", "uinfin", "mobileno"]
         */
        userInfoScope: string[];
        nonce?: string;
        codeVerifier?: string;
    }) => Promise<string>;
    /**
     * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    getTokens: (authCode: string, codeVerifier?: string) => Promise<TokenResponse>;
    getUserInfo: (token: string) => Promise<string>;
    verifyUserInfo: (jweResponse: string, overrideDecryptKey?: Key) => Promise<MyInfoComponentsV4.Schemas.Person>;
    getIdTokenPayload(tokens: TokenResponse, overrideDecryptKey?: Key): Promise<TokenPayload>;
    extractNricAndUuidFromPayload(payload: TokenPayload): {
        nric: string;
        uuid: string;
    };
    /**
     * @deprecated should use constructAuthorizationUrlV2
     */
    constructAuthorizationUrl: (state: string, nonce?: string, codeVerifier?: string) => Promise<string>;
    private validateStatus;
    _testExports: {
        getSingpassClient: () => AxiosInstance;
        validateStatusFn: (status: number) => boolean;
    };
}
//# sourceMappingURL=singpass-helper-ndi.d.ts.map