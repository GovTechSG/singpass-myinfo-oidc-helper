import { ConfigUtils, JestUtil } from "src/util";

// eslint-disable-next-line @typescript-eslint/no-require-imports
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
			format: getValueFromEnv("SINGPASS_AUTH_JWE_DECRYPT_KEY_FORMAT"),
		},
		clientAssertionSignKey: {
			key: getValueFromEnv("SINGPASS_AUTH_CLIENT_ASSERTION_SIGN_KEY"),
			alg: getValueFromEnv("SINGPASS_AUTH_CLIENT_ASSERTION_SIGN_KEY_ALG"),
		},
	},
	ndiOidcV2: {
		clientId: getValueFromEnv("SINGPASS_AUTH_V2_CLIENT_ID"),
		oidcConfigUrl: getValueFromEnv("SINGPASS_AUTH_V2_OIDC_CONFIG_URL"),
		redirectUri: getValueFromEnv("SINGPASS_AUTH_V2_REDIRECT_URL"),
		jweDecryptKey: {
			key: getValueFromEnv("SINGPASS_AUTH_V2_JWE_DECRYPT_KEY"),
			format: getValueFromEnv("SINGPASS_AUTH_V2_JWE_DECRYPT_KEY_FORMAT"),
		},
		clientAssertionSignKey: {
			key: getValueFromEnv("SINGPASS_AUTH_V2_CLIENT_ASSERTION_SIGN_KEY"),
			alg: getValueFromEnv("SINGPASS_AUTH_V2_CLIENT_ASSERTION_SIGN_KEY_ALG"),
		},
		// ES256 EC P-256 key in JWK format (JSON string). Must be registered with Singpass as dpop_jkt.
		dpopSignKey: {
			key: getValueFromEnv("SINGPASS_AUTH_V2_DPOP_SIGN_KEY"),
		},
	},
	ndiOidcV2MyInfo: {
		clientId: getValueFromEnv("MYINFO_AUTH_V2_CLIENT_ID"),
		oidcConfigUrl: getValueFromEnv("MYINFO_AUTH_V2_OIDC_CONFIG_URL"),
		redirectUri: getValueFromEnv("MYINFO_AUTH_V2_REDIRECT_URL"),
		jweDecryptKey: {
			key: getValueFromEnv("MYINFO_AUTH_V2_JWE_DECRYPT_KEY"),
			format: getValueFromEnv("MYINFO_AUTH_V2_JWE_DECRYPT_KEY_FORMAT"),
		},
		clientAssertionSignKey: {
			key: getValueFromEnv("MYINFO_AUTH_V2_CLIENT_ASSERTION_SIGN_KEY"),
			alg: getValueFromEnv("MYINFO_AUTH_V2_CLIENT_ASSERTION_SIGN_KEY_ALG"),
		},
		dpopSignKey: {
			key: getValueFromEnv("MYINFO_AUTH_V2_DPOP_SIGN_KEY"),
		},
	},
};
