import * as jwt from "jsonwebtoken";
import { generators } from "openid-client";
import { KeyFormat } from "../../util/KeyUtil";
import { logger } from "../../util/Logger";
import { NdiOidcHelper, NdiOidcHelperConstructor } from "../singpass-helper-ndi";
import { configs } from "./test.configs";

const expectedUinfin = ""; // FIXME: fill in with expected uinfin

/**
 * Convenience tests for NDI OIDC config / integration
 * 1. Fill up the FIXME: for expectedUinfin
 * 2. Use the first test to generate auth url and login with your account, then fill up FIXME:
 * 		on second test to verify your setup/keys work (authcode comes from the `code` param in the redirect after login)
 * 3. If public keys are not yet deployed to well known endpoint (or it's not possible to expose such endpoints),
 * 		one will need to set the client app on SP dev portal to use JWKS object
 * 4. .env variables must be set, make a copy of .env.sample
 */
describe.skip("Singpass NDI OIDC integration", () => {
	const props: NdiOidcHelperConstructor = {
		clientID: configs.ndiOidc.clientId,
		oidcConfigUrl: configs.ndiOidc.oidcConfigUrl,
		redirectUri: configs.ndiOidc.redirectUri,
		clientAssertionSignKey: {
			key: configs.ndiOidc.clientAssertionSignKey.key,
			alg: configs.ndiOidc.clientAssertionSignKey.alg as jwt.Algorithm,
		},
		jweDecryptKey: {
			key: configs.ndiOidc.jweDecryptKey.key,
			format: configs.ndiOidc.jweDecryptKey.format as KeyFormat,
		},
	};

	describe("integration tester for Ndi OIDC", () => {
		describe("construct authorization url", () => {
			it("should successfully construct authorization url", async () => {
				await constructAuthorizationUrlHelper();
			});
		});

		describe("get user identity after successful redirect with auth code", () => {
			it("should successfully extract nric and uuid", async () => {
				const authCode = ""; // FIXME: fill in with authCode
				const nric = await extractNricHelper(authCode);
				expect(nric).toMatch(expectedUinfin);
			});
		});
	});

	describe("integration tester for Ndi OIDC with PKCE", () => {
		describe("construct authorization url", () => {
			it("should successfully construct authorization url", async () => {
				await constructAuthorizationUrlHelper(true);
			});
		});

		describe("get user identity after successful redirect with auth code", () => {
			it("should successfully extract nric and uuid", async () => {
				const authCode = ""; // FIXME: fill in with authCode
				const codeVerifier = ""; // FIXME: fill in with codeVerifier
				const nric = await extractNricHelper(authCode, codeVerifier);
				expect(nric).toMatch(expectedUinfin);
			});
		});
	});

	const constructAuthorizationUrlHelper = async (pkceFlow?: boolean) => {
		const spNdiHelper = new NdiOidcHelper(props);
		const nonce = Date.now() + "";
		const state = nonce + "-state";
		const codeVerifier = pkceFlow ? generators.codeVerifier() : undefined;
		const authorizationUrl = await spNdiHelper.constructAuthorizationUrl(state, nonce, codeVerifier);
		logger.debug("authorizationUrl: ", authorizationUrl);
		codeVerifier && logger.debug("codeVerifier: ", codeVerifier);
	};

	const extractNricHelper = async (authCode: string, codeVerifier?: string) => {
		const spNdiHelper = new NdiOidcHelper(props);

		const tokens = await spNdiHelper.getTokens(authCode, codeVerifier);
		logger.debug("tokens", tokens);

		const tokenPayload = await spNdiHelper.getIdTokenPayload(tokens);
		logger.debug("tokenPayload", tokenPayload);

		const { nric } = await spNdiHelper.extractNricAndUuidFromPayload(tokenPayload);
		logger.debug("nric", nric);

		return nric;
	};
});
