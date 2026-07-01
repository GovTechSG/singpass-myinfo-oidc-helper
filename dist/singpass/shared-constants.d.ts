import { MyInfoComponentsV4 } from "../types/v4/myinfo-domain";
export interface TokenResponse {
    access_token: string;
    token_type: string;
    id_token: string;
}
/**
 * only for legacy Singpass
 * use TokenPayloadV2 for Singpass v5
 */
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
/**
 * only for legacy Singpass
 * use UserDataPayloadV2 for Singpass v5
 */
export interface UserDataPayload extends MyInfoComponentsV4.Schemas.Person {
    iat: number;
    iss: string;
    sub: string;
    aud: string;
}
export interface SubAttributes {
    account_type?: "standard" | "foreign";
    identity_number?: string;
    identity_coi?: string;
    name?: string;
    email?: string;
    mobileno?: string;
}
export interface TokenPayloadV2 {
    sub: string;
    sub_type: string;
    sub_attributes?: SubAttributes;
    act?: {
        sub: string;
        sub_attributes?: SubAttributes;
    };
    aud: string;
    iss: string;
    iat: number;
    exp: number;
    amr: string[];
    acr: string;
    nonce: string;
}
export interface UserDataPayloadV2 {
    person_info: MyInfoComponentsV4.Schemas.Person;
    iss: string;
    sub: string;
    aud: string;
    iat: number;
}
//# sourceMappingURL=shared-constants.d.ts.map