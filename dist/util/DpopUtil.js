"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDpopProof = createDpopProof;
exports.computeAth = computeAth;
exports.normalizeHtu = normalizeHtu;
const crypto = require("crypto");
const jose = require("node-jose");
const SingpassMyinfoError_1 = require("./error/SingpassMyinfoError");
/**
 * Create a DPoP proof JWT
 *
 * The proof is used in 3 places in the Singpass FAPI 2.0 flow:
 * 1. PAR request (htm: "POST", htu: pushed_authorization_request_endpoint)
 * 2. Token exchange (htm: "POST", htu: token_endpoint)
 * 3. Userinfo request (htm: "GET", htu: userinfo_endpoint, with accessToken for ath claim)
 *
 */
async function createDpopProof(input) {
    const { htm, htu, key, accessToken } = input;
    if (!key)
        throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing key for DPoP proof generation.");
    if (!key.alg || key.alg !== "ES256") {
        throw new SingpassMyinfoError_1.SingpassMyInfoError("DPoP key must use ES256 algorithm.");
    }
    const joseKey = await jose.JWK.asKey(key.key, key.format);
    const publicJwk = joseKey.toJSON();
    const normalizedHtu = normalizeHtu(htu);
    const payload = {
        jti: crypto.randomUUID(),
        htm: htm.toUpperCase(),
        htu: normalizedHtu,
        iat: Math.floor(Date.now() / 1000),
        ...(accessToken ? { ath: computeAth(accessToken) } : {}),
    };
    const header = {
        typ: "dpop+jwt",
        alg: "ES256",
        jwk: publicJwk,
    };
    const signingKey = { key: joseKey, reference: false };
    const proofJwt = await jose.JWS.createSign({ format: "compact", fields: header }, signingKey)
        .update(JSON.stringify(payload))
        .final();
    return {
        proof: proofJwt,
    };
}
function computeAth(accessToken) {
    const hash = crypto.createHash("sha256").update(accessToken, "ascii").digest();
    return base64urlEncode(hash);
}
function normalizeHtu(uri) {
    try {
        const parsed = new URL(uri);
        // Remove query string and fragment
        parsed.search = "";
        parsed.hash = "";
        return parsed.toString();
    }
    catch {
        // If URL parsing fails, return as-is (caller's responsibility)
        return uri;
    }
}
function base64urlEncode(buffer) {
    return buffer.toString("base64url");
}
//# sourceMappingURL=DpopUtil.js.map