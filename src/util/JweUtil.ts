import * as jose from "node-jose";
import { SingpassMyInfoError } from "./error/SingpassMyinfoError";

interface JWT {
	header:
	{
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

export async function decryptJWE(jwe: string, decryptKey: string): Promise<JWE> {
	if (!jwe) throw new SingpassMyInfoError("Missing JWE data.");
	if (!decryptKey) throw new SingpassMyInfoError("Missing key to decrypt JWE payload.");
	// TODO: can be further optimized by caching key in memory instead of regenerating each time
	const key = await jose.JWK.asKey(decryptKey, "pem");

	// allow all supported algorithms
	return jose.JWE.createDecrypt(key, { algorithms: ["*"] }).decrypt(jwe);
}

export async function verifyJWS(jws: string, verifyCert: string): Promise<JWS> {
	if (!jws) throw new SingpassMyInfoError("Missing JWS data.");
	if (!verifyCert) throw new SingpassMyInfoError("Missing cert to verify JWS payload.");

	// TODO: can be further optimized by caching key in memory instead of regenerating each time
	const jwsKey = await jose.JWK.asKey(verifyCert, "pem");

	return jose.JWS.createVerify(jwsKey).verify(jws);
}
