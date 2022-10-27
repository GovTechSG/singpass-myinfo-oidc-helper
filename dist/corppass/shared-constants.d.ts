export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    id_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}
export interface EntityInfo {
    CPEntID: string;
    CPEnt_TYPE: string;
    CPEnt_Status: string;
    CPNonUEN_Country: string;
    CPNonUEN_RegNo: string;
    CPNonUEN_Name: string;
}
export interface UserInfo {
    CPAccType: string;
    CPUID_FullName: string;
    ISSPHOLDER: string;
}
//# sourceMappingURL=shared-constants.d.ts.map