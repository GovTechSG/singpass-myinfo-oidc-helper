import { ConfigUtils, JestUtil, StringUtil } from "../../../util";

require("dotenv").config();

const { disableMissingEnvWarnings, getValueFromEnv } = ConfigUtils;
if (JestUtil.isTest()) {
	disableMissingEnvWarnings();
}

export const configs = {
	singpassClientId: getValueFromEnv("SINGPASS_ESERVICE_ID"),

	environment: getValueFromEnv("MY_INFO_ENVIRONMENT") as "test" | "sandbox" | "prod",
	myInfoPersonBasicURL: getValueFromEnv("MY_INFO_URL_PERSON_BASIC"),
	myinfoJWSPublicCert: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_PUBLIC_CERT")),
	myinfoAuthKey: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_PRIVATE_KEY")),
	myinfoAuthKeyPassphrase: getValueFromEnv("MY_INFO_PRIVATE_KEY_PASS"),

	myinfoGovFlowClientID: getValueFromEnv("MY_INFO_CLIENT_ID"),

	myinfoJWEPrivateKey: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_JWE_PRIVATE_KEY")),

	overridePersonBasicUrl: getValueFromEnv("MY_INFO_PERSON_BASIC_URL"),
	overrideProfileStatusUrl: getValueFromEnv("MY_INFO_PROFILE_STATUS_URL"),

	attributes: [
		"name",
		"aliasname",
		"sex",
		"race",
		"secondaryrace",
		"dialect",
		"nationality",
		"dob",
		"birthcountry",
		"residentialstatus",
		"email",
		"mobileno",
		"regadd",
		"marital",
		"marriagedate",
		"occupation",
		"edulevel",
		"countryofmarriage",
		"marriagecertno",
		"childrenbirthrecords.name",
	],

};
