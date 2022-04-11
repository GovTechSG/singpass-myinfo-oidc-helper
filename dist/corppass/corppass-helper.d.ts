import { AxiosInstance, AxiosRequestConfig } from "axios";
export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    id_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}
interface EntityInfo {
    CPEntID: string;
    CPEnt_TYPE: string;
    CPEnt_Status: string;
    CPNonUEN_Country: string;
    CPNonUEN_RegNo: string;
    CPNonUEN_Name: string;
}
interface AuthInfo {
    Result_Set: {
        ESrvc_Row_Count: number;
        ESrvc_Result: {
            CPESrvcID: string;
            Auth_Result_Set: {
                Row_Count: number;
                Row: {
                    CPEntID_SUB: string;
                    CPRole: string;
                    StartDate: string;
                    EndDate: string;
                    Parameter?: {
                        name: string;
                        value: string;
                    }[];
                }[];
            };
        }[];
    };
}
interface TPAccessInfo {
    Result_Set: {
        ESrvc_Row_Count: number;
        ESrvc_Result: {
            CPESrvcID: string;
            Auth_Set: {
                ENT_ROW_COUNT: number;
                TP_Auth: {
                    CP_Clnt_ID: string;
                    CP_ClntEnt_TYPE: string;
                    Auth_Result_Set: {
                        Row_Count: number;
                        Row: {
                            CP_ClntEnt_SUB: string;
                            CPRole: string;
                            StartDate: string;
                            EndDate: string;
                            Parameter?: {
                                name: string;
                                value: string;
                            }[];
                        }[];
                    };
                }[];
            };
        }[];
    };
}
export interface AccessTokenPayload {
    exp: number;
    iat: number;
    iss: string;
    aud: string;
    EntityInfo: EntityInfo;
    AuthInfo: AuthInfo;
    TPAccessInfo: TPAccessInfo;
}
interface UserInfo {
    CPAccType: string;
    CPUID_FullName: string;
    ISSPHOLDER: string;
}
export interface IdTokenPayload {
    userInfo: UserInfo;
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
    tokenUrl: string;
    clientID: string;
    clientSecret: string;
    redirectUri: string;
    jweDecryptKey: string;
    jwsVerifyKey: string;
}
export declare class OidcHelper {
    private axiosClient;
    private authorizationUrl;
    private tokenUrl;
    private clientID;
    private clientSecret;
    private redirectUri;
    private jweDecryptKey;
    private jwsVerifyKey;
    constructor(props: OidcHelperConstructor);
    constructAuthorizationUrl: (state: string, nonce?: string) => string;
    /**
     * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getAccessTokenPayload and getIdTokenPayload on returned Token Response to get the token payload
     */
    getTokens: (authCode: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>;
    /**
     * Get fresh tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
     * Use getIdTokenPayload on returned Token Response to get the token payload
     */
    refreshTokens: (refreshToken: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>;
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
export {};
//# sourceMappingURL=corppass-helper.d.ts.map