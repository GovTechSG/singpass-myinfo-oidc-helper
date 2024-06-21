/* eslint-disable max-len */
import * as jose from "node-jose";
import { TokenResponse } from "../../singpass/shared-constants";
import { decryptJWE, extractJwtHeader, extractKidFromIdToken } from "../JweUtil";
import { SingpassMyInfoError } from "../error/SingpassMyinfoError";

describe("extractJwtHeader", () => {
	it("should extract JWT header", () => {
		const SAMPLE_JWT =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
		expect(extractJwtHeader(SAMPLE_JWT)).toStrictEqual({
			alg: "HS256",
			typ: "JWT",
		});
	});
});

describe("extractKidFromIdToken", () => {
	const SAMPLE_JWT_WITHOUT_KID =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
	const SAMPLE_JWT_WITH_KID =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRlc3Qta2lkIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.dcwcwIMbXPoifMvEnN_SlEEYOoErMH7CchiTQ8m9oy8";
	it("should throw error when id_token header does not contain kid", () => {
		const SAMPLE_TOKEN: TokenResponse = {
			access_token: "",
			refresh_token: "",
			id_token: SAMPLE_JWT_WITHOUT_KID,
			token_type: "",
			expires_in: 0,
			scope: "",
		};
		expect(() => extractKidFromIdToken(SAMPLE_TOKEN)).toThrow(SingpassMyInfoError);
	});
	it("should return kid in id_token", () => {
		const SAMPLE_TOKEN: TokenResponse = {
			access_token: "",
			refresh_token: "",
			id_token: SAMPLE_JWT_WITH_KID,
			token_type: "",
			expires_in: 0,
			scope: "",
		};
		expect(extractKidFromIdToken(SAMPLE_TOKEN)).toEqual("test-kid");
	});
});

fdescribe("decryptJWE", () => {
	describe("decryptJWE when called with format `json`", () => {
		const jwkKey = {
			kty: "EC",
			x: "iCnRVkhmvVj1iqD8QIlbnhWjh2a-m-OWg4EtBYtQPmM",
			y: "_9PJSieTEaVE-L9MNkRdw755M4qTRhjI_FnrFBtYChU",
			crv: "P-256",
			d: "4yo4UhZCl7wrfi1Wi5TzHUMfDNhN_aUn-kNM4zJvsaM",
			use: "enc",
			kid: "MatchingKey",
			alg: "ECDH-ES+A128KW"
		};
		const jwks = JSON.stringify({
			keys: [
				{
					...jwkKey,
					kid: "MatchingKey",
				},
				{
					...jwkKey,
					kid: "NonMatchingKey"
				}
			]
		});
		const jwk = JSON.stringify({ ...jwkKey, kid: "MatchingKey" });
		const payload = JSON.stringify({ foo: "bar" });

		it("should decrypt successfully when key is JWK string", async () => {
			const key = await jose.JWK.asKey(jwk, "json");
			const jwe = await jose.JWE.createEncrypt({ format: "compact" }, key).update(payload).final();
			const decrypted = await decryptJWE(jwe, jwk, "json");
			expect(decrypted.payload.toString()).toEqual(payload);
		});
		it("should decrypt successfully when key is JWKS string", async () => {
			const key = await jose.JWK.asKey(jwk, "json");
			const jwe = await jose.JWE.createEncrypt({ format: "compact" }, key).update(payload).final();
			const decrypted = await decryptJWE(jwe, jwks, "json");
			expect(decrypted.payload.toString()).toEqual(payload);
		});
	});
});
