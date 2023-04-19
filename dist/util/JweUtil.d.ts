import * as jose from "node-jose";
import { KeyFormat } from './KeyUtil';
export declare function decryptJWE(jwe: string, decryptKey: string, format?: KeyFormat): Promise<jose.JWE.DecryptResult>;
export declare function verifyJWS(jws: string, verifyCert: string, format?: KeyFormat): Promise<jose.JWS.VerificationResult>;
//# sourceMappingURL=JweUtil.d.ts.map