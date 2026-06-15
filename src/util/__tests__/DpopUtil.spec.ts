import * as crypto from "crypto";
import * as jose from "node-jose";
import { computeAth, createDpopProof, normalizeHtu } from "../DpopUtil";
import { Key } from "../KeyUtil";

// Generate a test ES256 key pair for use in tests
let testKey: Key;
let testJoseKey: jose.JWK.Key;

beforeAll(async () => {
	// Generate an EC P-256 key pair
	testJoseKey = await jose.JWK.createKey("EC", "P-256", { alg: "ES256", use: "sig" });
	testKey = {
		key: JSON.stringify(testJoseKey.toJSON(true)),
		format: "json",
		alg: "ES256",
	};
});

describe("DpopUtil", () => {
	describe("createDpopProof", () => {
		it("should generate a valid DPoP proof JWT with correct header fields", async () => {
			const result = await createDpopProof({
				htm: "POST",
				htu: "https://stg-id.singpass.gov.sg/fapi/par",
				key: testKey,
			});

			expect(result.proof).toBeDefined();

			// Decode the JWT to verify header
			const [headerB64] = result.proof.split(".");
			const header = JSON.parse(Buffer.from(headerB64, "base64url").toString());

			// RFC 9449 §4.2: typ MUST be "dpop+jwt"
			expect(header.typ).toBe("dpop+jwt");
			// RFC 9449 §4.2: alg MUST identify a digital signature algorithm
			expect(header.alg).toBe("ES256");
			// RFC 9449 §4.2: jwk MUST contain the public key in JWK format
			expect(header.jwk).toBeDefined();
			expect(header.jwk.kty).toBe("EC");
			expect(header.jwk.crv).toBe("P-256");
			expect(header.jwk.x).toBeDefined();
			expect(header.jwk.y).toBeDefined();
			// Private key component must NOT be in the header
			expect(header.jwk.d).toBeUndefined();
		});

		it("should generate a valid DPoP proof JWT with correct payload claims", async () => {
			const result = await createDpopProof({
				htm: "POST",
				htu: "https://stg-id.singpass.gov.sg/fapi/token",
				key: testKey,
			});

			const [, payloadB64] = result.proof.split(".");
			const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());

			// RFC 9449 §4.2: required claims
			expect(payload.jti).toBeDefined();
			expect(payload.htm).toBe("POST");
			expect(payload.htu).toBe("https://stg-id.singpass.gov.sg/fapi/token");
			expect(payload.iat).toBeDefined();
			expect(typeof payload.iat).toBe("number");

			// ath should NOT be present when no accessToken is provided
			expect(payload.ath).toBeUndefined();
		});

		it("should include ath claim when accessToken is provided", async () => {
			const mockAccessToken = "eyJhbGciOiJFUzI1NiJ9.mock-access-token-payload.signature";

			const result = await createDpopProof({
				htm: "GET",
				htu: "https://stg-id.singpass.gov.sg/fapi/userinfo",
				key: testKey,
				accessToken: mockAccessToken,
			});

			const [, payloadB64] = result.proof.split(".");
			const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());

			// RFC 9449 §4.2: ath = base64url(SHA-256(access_token))
			expect(payload.ath).toBeDefined();
			const expectedAth = crypto.createHash("sha256").update(mockAccessToken, "ascii").digest("base64url");
			expect(payload.ath).toBe(expectedAth);
		});

		it("should generate unique jti for each invocation", async () => {
			const result1 = await createDpopProof({
				htm: "POST",
				htu: "https://example.com/token",
				key: testKey,
			});
			const result2 = await createDpopProof({
				htm: "POST",
				htu: "https://example.com/token",
				key: testKey,
			});

			const payload1 = JSON.parse(Buffer.from(result1.proof.split(".")[1], "base64url").toString());
			const payload2 = JSON.parse(Buffer.from(result2.proof.split(".")[1], "base64url").toString());

			expect(payload1.jti).not.toBe(payload2.jti);
		});

		it("should normalize htm to uppercase", async () => {
			const result = await createDpopProof({
				htm: "post",
				htu: "https://example.com/endpoint",
				key: testKey,
			});

			const [, payloadB64] = result.proof.split(".");
			const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
			expect(payload.htm).toBe("POST");
		});

		it("should strip query string from htu", async () => {
			const result = await createDpopProof({
				htm: "GET",
				htu: "https://example.com/userinfo?foo=bar&baz=qux",
				key: testKey,
			});

			const [, payloadB64] = result.proof.split(".");
			const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
			expect(payload.htu).toBe("https://example.com/userinfo");
		});

		it("should throw if key is missing algorithm", async () => {
			const badKey: Key = { key: testKey.key, format: "json" };
			await expect(createDpopProof({ htm: "POST", htu: "https://example.com", key: badKey })).rejects.toThrow(
				"DPoP key must use ES256 algorithm",
			);
		});

		it("should throw if key uses non-ES256 algorithm", async () => {
			const badKey: Key = { key: testKey.key, format: "json", alg: "RS256" };
			await expect(createDpopProof({ htm: "POST", htu: "https://example.com", key: badKey })).rejects.toThrow(
				"DPoP key must use ES256 algorithm",
			);
		});
	});

	describe("computeAth", () => {
		it("should compute base64url(SHA-256(access_token))", () => {
			const accessToken = "test-access-token-value";
			const result = computeAth(accessToken);

			const expected = crypto.createHash("sha256").update(accessToken, "ascii").digest("base64url");
			expect(result).toBe(expected);
		});

		it("should produce different hashes for different tokens", () => {
			const ath1 = computeAth("token-a");
			const ath2 = computeAth("token-b");
			expect(ath1).not.toBe(ath2);
		});
	});

	describe("normalizeHtu", () => {
		it("should strip query string from URL", () => {
			expect(normalizeHtu("https://example.com/path?query=value")).toBe("https://example.com/path");
		});

		it("should strip fragment from URL", () => {
			expect(normalizeHtu("https://example.com/path#fragment")).toBe("https://example.com/path");
		});

		it("should strip both query and fragment", () => {
			expect(normalizeHtu("https://example.com/path?q=1#frag")).toBe("https://example.com/path");
		});

		it("should leave clean URLs unchanged", () => {
			expect(normalizeHtu("https://stg-id.singpass.gov.sg/fapi/par")).toBe(
				"https://stg-id.singpass.gov.sg/fapi/par",
			);
		});

		it("should preserve trailing slash", () => {
			expect(normalizeHtu("https://example.com/path/")).toBe("https://example.com/path/");
		});

		it("should return invalid URIs as-is", () => {
			expect(normalizeHtu("not-a-valid-url")).toBe("not-a-valid-url");
		});
	});
});
