import { ConfigUtils, JestUtil, StringUtil } from "../../../util";

require("dotenv").config();

const { disableMissingEnvWarnings, getValueFromEnv } = ConfigUtils;
if (JestUtil.isTest()) {
	disableMissingEnvWarnings();
}

export const configs = Object.freeze({
	singpassClientId: getValueFromEnv("SINGPASS_SSO_CLIENT_ID"),

	myInfoApexSigningURL: getValueFromEnv("MY_INFO_APEX_URL_SIGNING"),
	myInfoApexPrivateCert: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_APEX_PRIVATE_CERT")),
	myInfoApexPrivateCertPass: getValueFromEnv("MY_INFO_APEX_PRIVATE_CERT_PASS"),

	myInfoGovFlowClientID: getValueFromEnv("MY_INFO_GOV_FLOW_CLIENT_ID"),
	myInfoGovFlowClientSecret: getValueFromEnv("MY_INFO_GOV_FLOW_CLIENT_SECRET"),
	myInfoPersonBasicURL: getValueFromEnv("MY_INFO_GOV_FLOW_URL_PERSON_BASIC"),

	myInfoJWEPrivateKey: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_JWE_PRIVATE_KEY")),

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
		"childrenbirthrecords",
	],
});
