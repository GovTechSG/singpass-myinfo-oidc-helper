import * as jwt from "jsonwebtoken";
import { KeyFormat } from "../../util/KeyUtil";
import { logger } from "../../util/Logger";
import { NdiOidcHelper, NdiOidcHelperConstructor } from "../singpass-helper-ndi";
import { configs } from "./test.configs";

/**
 * Convenience tests for NDI OIDC config / integration
 * - Use the first test to generate auth url and login with your account
 * - then fill up info on second test to verify your setup/keys work
 * - if public keys are not yet deployed to well known endpoint one will need to set the app on SP portal to use JWKS object
 * .env variables must be set
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

	fdescribe("construct authorization url", () => {
		// extract the code after successful login and browser redirect from the callback
		// {callbackEndpoint}?code={CODE-HERE}&state=xxx
		it("should successfully construct authorization url", async () => {
			const spNdiHelper = new NdiOidcHelper(props);
			const nonce = Date.now() + "";
			const state = nonce + "-state";
			const authorizationUrl = await spNdiHelper.constructAuthorizationUrl(state, nonce);
			logger.debug("authorizationUrl: ", authorizationUrl);
		});
	});

	xdescribe("get user identity after successful redirect with auth code", () => {
		it("should successfully extract nric and uuid", async () => {
			const authCode = ""; // FIXME: fill in with authcode
			const expectedUinfin = ""; // FIXME: fill in with expected uinfin
			const spNdiHelper = new NdiOidcHelper(props);

			const tokens = await spNdiHelper.getTokens(authCode);
			logger.debug("tokens", tokens);

			const tokenPayload = await spNdiHelper.getIdTokenPayload(tokens);
			logger.debug("tokenPayload", tokenPayload);

			const { nric } = await spNdiHelper.extractNricAndUuidFromPayload(tokenPayload);
			logger.debug("nric", nric);
			expect(nric).toMatch(expectedUinfin);
		});
	});
});
