import * as jose from "node-jose";
import { SingpassMyInfoError } from "./error/SingpassMyinfoError";
import { KeyFormat } from './KeyUtil';

export async function decryptJWE(jwe: string, decryptKey: string, format: KeyFormat = 'pem'): Promise<jose.JWE.DecryptResult> {
	if (!jwe) throw new SingpassMyInfoError("Missing JWE data.");
	if (!decryptKey) throw new SingpassMyInfoError("Missing key to decrypt JWE payload.");
	// TODO: can be further optimized by caching key in memory instead of regenerating each time
	const key = await jose.JWK.asKey(decryptKey, format);

	// allow all supported algorithms
	return jose.JWE.createDecrypt(key, { algorithms: ["*"] }).decrypt(jwe);
}

export async function verifyJWS(jws: string, verifyCert: string, format: KeyFormat = 'pem'): Promise<jose.JWS.VerificationResult> {
	if (!jws) throw new SingpassMyInfoError("Missing JWS data.");
	if (!verifyCert) throw new SingpassMyInfoError("Missing cert to verify JWS payload.");

	// TODO: can be further optimized by caching key in memory instead of regenerating each time
	const jwsKey = await jose.JWK.asKey(verifyCert, format);

	return jose.JWS.createVerify(jwsKey).verify(jws);
}
