/// <reference types="node" />
interface JWT {
    header: {
        alg: string;
        enc: string;
        kid: string;
        cty: string;
    };
    protected: string[];
    payload: Buffer;
}
export interface JWE extends JWT {
    plaintext: Buffer;
}
export interface JWS extends JWT {
    signature: Buffer;
}
export declare function decryptJWE(jwe: string, decryptKey: string): Promise<JWE>;
export declare function verifyJWS(jws: string, verifyCert: string): Promise<JWS>;
export {};
