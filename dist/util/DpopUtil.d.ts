import { Key } from "./KeyUtil";
export interface DpopProofInput {
    htm: string;
    htu: string;
    key: Key;
    accessToken?: string;
}
export interface DpopProofPayload {
    htm: string;
    htu: string;
    iat: number;
    exp?: number;
    jti: string;
    ath?: string;
}
export interface DpopProofResult {
    proof: string;
}
/**
 * Create a DPoP proof JWT
 *
 * The proof is used in 3 places in the Singpass FAPI 2.0 flow:
 * 1. PAR request (htm: "POST", htu: pushed_authorization_request_endpoint)
 * 2. Token exchange (htm: "POST", htu: token_endpoint)
 * 3. Userinfo request (htm: "GET", htu: userinfo_endpoint, with accessToken for ath claim)
 *
 */
export declare function createDpopProof(input: DpopProofInput): Promise<DpopProofResult>;
export declare function computeAth(accessToken: string): string;
export declare function normalizeHtu(uri: string): string;
//# sourceMappingURL=DpopUtil.d.ts.map