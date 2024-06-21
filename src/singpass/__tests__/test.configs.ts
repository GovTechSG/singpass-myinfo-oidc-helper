import { ConfigUtils, JestUtil } from "../../util";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const { disableMissingEnvWarnings, getValueFromEnv } = ConfigUtils;
if (JestUtil.isTest()) {
	disableMissingEnvWarnings();
}

export const configs = {
	ndiOidc: {
		clientId: getValueFromEnv("SINGPASS_AUTH_CLIENT_ID"),
		oidcConfigUrl: getValueFromEnv("SINGPASS_AUTH_OIDC_CONFIG_URL"),
		redirectUri: getValueFromEnv("SINGPASS_AUTH_REDIRECT_URL"),
		jweDecryptKey: {
			key: getValueFromEnv("SINGPASS_AUTH_JWE_DECRYPT_KEY"),
			format: getValueFromEnv("SINGPASS_AUTH_JWE_DECRYPT_KEY_FORMAT")
		},
		clientAssertionSignKey: {
			key: getValueFromEnv("SINGPASS_AUTH_CLIENT_ASSERTION_SIGN_KEY"),
			alg: getValueFromEnv("SINGPASS_AUTH_CLIENT_ASSERTION_SIGN_KEY_ALG"),
		}
	}
};
