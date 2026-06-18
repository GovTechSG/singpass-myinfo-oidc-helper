/* eslint-disable sonarjs/fixme-tag */
/* eslint-disable sonarjs/no-skipped-tests */
/* eslint-disable sonarjs/os-command */
import { execSync } from "child_process";
import * as jose from "node-jose";
import { generators } from "openid-client";
import { KeyFormat } from "src/util/KeyUtil";
import { logger } from "src/util/Logger";
import { AuthenticationContextType } from "src/util/ParUtil";
import { NdiOidcHelperV2, NdiOidcHelperV2Constructor, TokenPayloadV2 } from "../singpass-helper-ndi-v2";
import { configs } from "./test.configs";

const expectedUinfin = ""; // FIXME: fill in with expected uinfin (e.g. "S9912374E")

/**
 * Convenience tests for NDI OIDC V2 (FAPI 2.0) integration
 *
 * Setup:
 * 1. Fill in `expectedUinfin` above with the NRIC of the test account.
 * 2. Copy .env.sample to .env and fill in the SINGPASS_AUTH_V2_* variables.
 *    To generate fresh keys and a JWKS to register in SDP, run `Key generation utility` (defined below).
 * 3. Run the Step 1 test to generate the PAR-based authorization URL, open it in a browser,
 *    and complete login. Copy the `code` query param from the redirect callback URL.
 * 4. Fill in the `authCode` and `codeVerifier` FIXMEs in Step 3 and run to verify the full flow.
 */
describe("Singpass NDI OIDC V2 (FAPI 2.0) integration", () => {
	const props: NdiOidcHelperV2Constructor = {
		clientID: configs.ndiOidcV2.clientId,
		oidcConfigUrl: configs.ndiOidcV2.oidcConfigUrl,
		redirectUri: configs.ndiOidcV2.redirectUri,
		jweDecryptKey: {
			key: configs.ndiOidcV2.jweDecryptKey.key,
			format: configs.ndiOidcV2.jweDecryptKey.format as KeyFormat,
		},
		clientAssertionSignKey: {
			key: configs.ndiOidcV2.clientAssertionSignKey.key,
			format: "json",
			alg: configs.ndiOidcV2.clientAssertionSignKey.alg as "ES256",
		},
		dpopSignKey: {
			key: configs.ndiOidcV2.dpopSignKey.key,
			format: "json",
			alg: "ES256",
		},
	};

	// =========================================================================
	// Step 1: PAR + Authorization URL
	// Change .skip → .only to run. The browser will open automatically.
	// Note the codeVerifier from the logs, then copy the `code` from the redirect URL.
	// Fill both into Step 3 and change its .skip → .only to run the token exchange.
	// =========================================================================
	describe.skip("Step 1: construct PAR-based authorization URL", () => {
		it("should send PAR request and log the authorization URL", async () => {
			const { authorizationUrl, codeVerifier } = await constructAuthorizationUrlHelper();
			logger.debug("Open this URL in a browser and log in:", authorizationUrl);
			logger.debug("Save this codeVerifier for Step 3: ", codeVerifier);
			// Auto-open in browser — request_uri expires in 60 seconds
			execSync(`open "${authorizationUrl}"`);
			expect(authorizationUrl).toContain("request_uri=");
			expect(authorizationUrl).toContain(`client_id=${configs.ndiOidcV2.clientId}`);
		});
	});

	// =========================================================================
	// Step 3: Token exchange + ID token payload extraction
	// (Step 2 is the manual browser login from Step 1)
	// Change .skip → .only after filling in authCode and codeVerifier below.
	// Auth codes are single-use and expire quickly — run immediately after login.
	// =========================================================================

	describe.skip("Step 3: exchange auth code for tokens and extract identity", () => {
		const authCode = ""; // FIXME: paste the `code` query param from the redirect callback URL
		const codeVerifier = ""; // FIXME: paste the codeVerifier logged in Step 1

		// Auth codes are single-use — token exchange is done once here and shared across assertions
		it("should successfully exchange auth code and extract uuid and identity_number", async () => {
			const helper = new NdiOidcHelperV2(props);
			const tokens = await helper.getTokens(authCode, codeVerifier);
			logger.debug("tokens: ", tokens);
			expect(tokens.token_type).toBe("DPoP");

			const tokenPayload: TokenPayloadV2 = await helper.getIdTokenPayload(tokens);
			logger.debug("tokenPayload: ", tokenPayload);

			const uuid = helper.extractUuidFromPayload(tokenPayload);
			logger.debug("uuid: ", uuid);
			expect(uuid).toBeDefined();

			const identityNumber = helper.extractIdentityNumberFromPayload(tokenPayload);
			logger.debug("identityNumber: ", identityNumber);
			expect(identityNumber).toBe(expectedUinfin);
		});
	});

	// =========================================================================
	// Helpers
	// =========================================================================
	// Note: userinfo endpoint testing (MyInfo data) is in the separate
	// "MyInfo FAPI 2.0" describe block below — Login apps do not use it.

	const constructAuthorizationUrlHelper = async () => {
		const helper = new NdiOidcHelperV2(props);
		const nonce = generators.nonce();
		const state = generators.state();
		const codeVerifier = generators.codeVerifier();

		const parInput = {
			state,
			nonce,
			userInfoScope: ["email", "mobileno", "name", "openid", "user.identity"],
			codeVerifier,
			authenticationContextType: AuthenticationContextType.AppAuthenticationDefault,
			authenticationContextMessage: "Log in to your account",
		};
		logger.debug("PAR input: ", parInput);
		const parResponse = await helper.fetchPushedAuthorizationRequest(parInput);
		logger.debug("PAR response: ", parResponse);

		const authorizationUrl = await helper.constructAuthorizationUrl(parResponse.request_uri);
		return { authorizationUrl, codeVerifier, state, nonce };
	};
});

/* -------------------------------------------------------------------------- */
/*                     MyInfo FAPI 2.0 (userinfo endpoint)                   */
/* -------------------------------------------------------------------------- */
/**
 * Use this suite to test the MyInfo userinfo endpoint.
 * Requires a separate MyInfo app registered in SDP with data catalog scopes
 * (e.g. uinfin, name, nationality). No authenticationContextType needed.
 * Set the MYINFO_AUTH_V2_* env vars in .env before running.
 */
describe("MyInfo FAPI 2.0 (userinfo endpoint)", () => {
	const myInfoProps: NdiOidcHelperV2Constructor = {
		clientID: configs.ndiOidcV2MyInfo.clientId,
		oidcConfigUrl: configs.ndiOidcV2MyInfo.oidcConfigUrl,
		redirectUri: configs.ndiOidcV2MyInfo.redirectUri,
		jweDecryptKey: {
			key: configs.ndiOidcV2MyInfo.jweDecryptKey.key,
			format: configs.ndiOidcV2MyInfo.jweDecryptKey.format as KeyFormat,
		},
		clientAssertionSignKey: {
			key: configs.ndiOidcV2MyInfo.clientAssertionSignKey.key,
			format: "json",
			alg: configs.ndiOidcV2MyInfo.clientAssertionSignKey.alg as "ES256",
		},
		dpopSignKey: {
			key: configs.ndiOidcV2MyInfo.dpopSignKey.key,
			format: "json",
			alg: "ES256",
		},
	};

	// =========================================================================
	// Step 1: PAR + Authorization URL
	// Change .skip → .only to run. The browser will open automatically.
	// Note the codeVerifier from the logs, then copy the `code` from the redirect URL.
	// Fill both into Step 3 and change its .skip → .only to run the token exchange.
	// =========================================================================
	describe.skip("Step 1: construct PAR-based authorization URL (MyInfo)", () => {
		it("should send PAR request and log the authorization URL", async () => {
			const helper = new NdiOidcHelperV2(myInfoProps);
			const nonce = generators.nonce();
			const state = generators.state();
			const codeVerifier = generators.codeVerifier();

			const parInput = {
				state,
				nonce,
				userInfoScope: ["uinfin", "name", "nationality"], // FIXME: replace with scopes approved for your MyInfo app
				codeVerifier,
				// No authenticationContextType — MyInfo apps do not use it
			};
			logger.debug("PAR input: ", parInput);
			const parResponse = await helper.fetchPushedAuthorizationRequest(parInput);
			logger.debug("PAR response: ", parResponse);

			const authorizationUrl = await helper.constructAuthorizationUrl(parResponse.request_uri);
			logger.debug("Open this URL in a browser and log in:", authorizationUrl);
			logger.debug("Save this codeVerifier for Step 3: ", codeVerifier);
			// Auto-open in browser — request_uri expires in 60 seconds
			execSync(`open "${authorizationUrl}"`);

			expect(authorizationUrl).toContain("request_uri=");
			expect(authorizationUrl).toContain(`client_id=${configs.ndiOidcV2MyInfo.clientId}`);
		});
	});

	// =========================================================================
	// Step 3: Token exchange + userinfo
	// (Step 2 is the manual browser login from Step 1)
	// Change .skip → .only after filling in authCode and codeVerifier below.
	// Auth codes are single-use and expire quickly — run immediately after login.
	// =========================================================================
	describe.skip("Step 3: exchange auth code and fetch userinfo (MyInfo)", () => {
		const authCode = ""; // FIXME: paste the `code` query param from the redirect callback URL
		const codeVerifier = ""; // FIXME: paste the codeVerifier logged in Step 1

		// Auth codes are single-use — token exchange is done once here and shared across assertions
		it("should fetch and decrypt userinfo JWE and return person_info", async () => {
			const helper = new NdiOidcHelperV2(myInfoProps);

			const tokens = await helper.getTokens(authCode, codeVerifier);
			logger.debug("tokens: ", tokens);
			expect(tokens.token_type).toBe("DPoP");

			const userInfoJwe = await helper.getUserInfo(tokens.access_token);
			logger.debug("userInfoJwe (raw JWE): ", userInfoJwe);

			const personInfo = await helper.verifyUserInfo(userInfoJwe);
			logger.debug("personInfo: ", personInfo);
			expect(personInfo).toBeDefined();
		});
	});
});

/* -------------------------------------------------------------------------- */
/*                            Key generation utility                          */
/* -------------------------------------------------------------------------- */
async function generateAndLogKeys(): Promise<void> {
	const sigKey = await jose.JWK.createKey("EC", "P-256", { alg: "ES256", use: "sig", kid: "sig-2026-01" });
	const encKey = await jose.JWK.createKey("EC", "P-256", { alg: "ECDH-ES+A256KW", use: "enc", kid: "enc-2026-01" });
	const dpopKey = await jose.JWK.createKey("EC", "P-256", { alg: "ES256", use: "sig", kid: "dpop-2026-01" });

	console.log("=== Paste into .env (adjust prefix for Login vs MyInfo app) ===");
	console.log("SINGPASS_AUTH_V2_CLIENT_ASSERTION_SIGN_KEY=" + JSON.stringify(sigKey.toJSON(true)));
	console.log("SINGPASS_AUTH_V2_CLIENT_ASSERTION_SIGN_KEY_ALG=ES256");
	console.log("SINGPASS_AUTH_V2_JWE_DECRYPT_KEY=" + JSON.stringify(encKey.toJSON(true)));
	console.log("SINGPASS_AUTH_V2_JWE_DECRYPT_KEY_FORMAT=json");
	console.log("SINGPASS_AUTH_V2_DPOP_SIGN_KEY=" + JSON.stringify(dpopKey.toJSON(true)));
	console.log("(For MyInfo app, use MYINFO_AUTH_V2_* prefix instead)");

	console.log("\n=== Paste into Singpass Dev Portal as JWKS object ===");
	console.log(JSON.stringify({ keys: [sigKey.toJSON(), encKey.toJSON(), dpopKey.toJSON()] }, null, 2));
}
// Run once to generate a fresh key set, then paste the output into .env and SDP.
describe("Key generation utility", () => {
	it("generateAndLogKeys", async () => {
		await generateAndLogKeys();
	});
});
