import * as jose from "node-jose";
import { SingpassMyInfoError } from "./error/SingpassMyinfoError";
import { KeyFormat } from './KeyUtil';
import { TokenResponse as SingpassTokenResponse } from "../singpass/shared-constants";
import { TokenResponse as CorppassTokenResponse } from "../corppass/shared-constants";

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

export async function verifyJwsUsingKeyStore(jws: string, keys: string | object) {
	if (!jws) throw new SingpassMyInfoError("Missing JWT data.");
	if (!keys) throw new SingpassMyInfoError("Missing key set");
	const keyStore = await jose.JWK.asKeyStore(keys);
	return jose.JWS.createVerify(keyStore).verify(jws);
}

export function extractJwtHeader(jwt: string): Record<string, string> {
	const jwtComponents = jwt.split(".");
	const header = jose.util.base64url.decode(jwtComponents[0]);
	return JSON.parse(header.toString());
}

export function extractKidFromIdToken(tokens: SingpassTokenResponse | CorppassTokenResponse): string {
	const { id_token: idToken } = tokens;
	const { kid } = extractJwtHeader(idToken);
	return kid;
}
