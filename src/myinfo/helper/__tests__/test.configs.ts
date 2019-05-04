import { ConfigUtils, JestUtil, StringUtil } from "../../../util";
import { extend, clone } from "lodash";

require("dotenv").config();

const { disableMissingEnvWarnings, getValueFromEnv } = ConfigUtils;
if (JestUtil.isTest()) {
	disableMissingEnvWarnings();
}

const configs = {
	singpassClientId: getValueFromEnv("SINGPASS_ESERVICE_ID"),

	myinfoApexSigningURL: getValueFromEnv("MY_INFO_APEX_URL_SIGNING"),
	myinfoAuthKey: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_APEX_PRIVATE_CERT")),
	myinfoAuthKeyPassphrase: getValueFromEnv("MY_INFO_APEX_PRIVATE_CERT_PASS"),

	myinfoGovFlowClientID: getValueFromEnv("MY_INFO_GOV_FLOW_CLIENT_ID"),

	myinfoJWEPrivateKey: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_JWE_PRIVATE_KEY")),

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
	],
}

export const myinfoV2Configs = extend(clone(configs), {
	myInfoPersonBasicURL: getValueFromEnv("MY_INFO_GOV_FLOW_URL_PERSON_BASIC_V2"),
	myinfoApexSigningURL: getValueFromEnv("MY_INFO_APEX_URL_SIGNING"),
});

export const myinfoV3Configs = extend(clone(configs), {
	myInfoPersonBasicURL: getValueFromEnv("MY_INFO_GOV_FLOW_URL_PERSON_BASIC_V3"),
	myinfoJWSPublicCert: StringUtil.replaceLineBreaks(getValueFromEnv("MY_INFO_GOV_FLOW_PUBLIC_CERT")),
});
