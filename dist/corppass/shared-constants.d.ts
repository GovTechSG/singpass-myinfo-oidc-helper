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
export {};
//# sourceMappingURL=shared-constants.d.ts.map