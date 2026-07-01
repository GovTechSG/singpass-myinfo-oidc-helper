import * as jose from "node-jose";
import { KeyFormat } from "./KeyUtil";
import { TokenResponse as SingpassTokenResponse } from "../singpass/shared-constants";
import { TokenResponse as CorppassTokenResponse } from "../corppass/shared-constants";
export declare function decryptJWE(jwe: string, decryptKey: string, format?: KeyFormat): Promise<jose.JWE.DecryptResult>;
export declare function verifyJWS(jws: string, verifyCert: string, format?: KeyFormat): Promise<jose.JWS.VerificationResult>;
export declare function verifyJwsUsingKeyStore(jws: string, keys: string | object): Promise<jose.JWS.VerificationResult>;
export declare function extractJwtHeader(jwt: string): Record<string, string>;
export declare function extractKidFromIdToken(tokens: SingpassTokenResponse | CorppassTokenResponse): string;
//# sourceMappingURL=JweUtil.d.ts.map