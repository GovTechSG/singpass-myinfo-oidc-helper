import * as jwt from 'jsonwebtoken';
export declare type KeyFormat = 'json' | 'pkcs8' | 'spki' | 'pkix' | 'x509' | 'pem';
export interface Key {
    key: string;
    format?: KeyFormat;
    alg?: jwt.Algorithm;
}
//# sourceMappingURL=KeyUtil.d.ts.map