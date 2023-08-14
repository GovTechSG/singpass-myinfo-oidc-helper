"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWS = exports.decryptJWE = void 0;
const jose = require("node-jose");
const SingpassMyinfoError_1 = require("./error/SingpassMyinfoError");
async function decryptJWE(jwe, decryptKey, format = 'pem') {
    if (!jwe)
        throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing JWE data.");
    if (!decryptKey)
        throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing key to decrypt JWE payload.");
    // TODO: can be further optimized by caching key in memory instead of regenerating each time
    const key = await jose.JWK.asKey(decryptKey, format);
    // allow all supported algorithms
    return jose.JWE.createDecrypt(key, { algorithms: ["*"] }).decrypt(jwe);
}
exports.decryptJWE = decryptJWE;
async function verifyJWS(jws, verifyCert, format = 'pem') {
    if (!jws)
        throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing JWS data.");
    if (!verifyCert)
        throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing cert to verify JWS payload.");
    // TODO: can be further optimized by caching key in memory instead of regenerating each time
    const jwsKey = await jose.JWK.asKey(verifyCert, format);
    return jose.JWS.createVerify(jwsKey).verify(jws);
}
exports.verifyJWS = verifyJWS;
//# sourceMappingURL=JweUtil.js.map