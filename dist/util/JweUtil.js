"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWS = exports.decryptJWE = void 0;
const jose = require("node-jose");
const SingpassMyinfoError_1 = require("./error/SingpassMyinfoError");
function decryptJWE(jwe, decryptKey, format = 'pem') {
    return __awaiter(this, void 0, void 0, function* () {
        if (!jwe)
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing JWE data.");
        if (!decryptKey)
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing key to decrypt JWE payload.");
        // TODO: can be further optimized by caching key in memory instead of regenerating each time
        const key = yield jose.JWK.asKey(decryptKey, format);
        // allow all supported algorithms
        return jose.JWE.createDecrypt(key, { algorithms: ["*"] }).decrypt(jwe);
    });
}
exports.decryptJWE = decryptJWE;
function verifyJWS(jws, verifyCert, format = 'pem') {
    return __awaiter(this, void 0, void 0, function* () {
        if (!jws)
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing JWS data.");
        if (!verifyCert)
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing cert to verify JWS payload.");
        // TODO: can be further optimized by caching key in memory instead of regenerating each time
        const jwsKey = yield jose.JWK.asKey(verifyCert, format);
        return jose.JWS.createVerify(jwsKey).verify(jws);
    });
}
exports.verifyJWS = verifyJWS;
//# sourceMappingURL=JweUtil.js.map