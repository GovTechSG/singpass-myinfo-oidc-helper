export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    id_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
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
//# sourceMappingURL=shared-constants.d.ts.map