import { MyInfoComponentsV4 } from "../types/v4/myinfo-domain";
export interface TokenResponse {
    access_token: string;
    token_type: string;
    id_token: string;
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
export interface UserDataPayload extends MyInfoComponentsV4.Schemas.Person {
    iat: number;
    iss: string;
    sub: string;
    aud: string;
}
//# sourceMappingURL=shared-constants.d.ts.map