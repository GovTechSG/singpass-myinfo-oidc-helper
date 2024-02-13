import { MyInfoHelper, MyInfoHelperConstructor } from "..";
import { configs } from "./test.configs";
import { set } from "lodash";
import { aliasName } from "../../fake/profiles/common";

describe("MyInfoClient", () => {
	describe("STAGING Person basic API V3", () => {
		it("should use the available env variables, call myinfo, and get back person", async () => {
			const props: MyInfoHelperConstructor = {
				clientID: configs.myinfoGovFlowClientID,
				environment: configs.environment,
				singpassEserviceID: configs.singpassClientId,
				keyToDecryptJWE: configs.myinfoJWEPrivateKey,
				certToVerifyJWS: configs.myinfoJWSPublicCert,
				privateKeyToSignRequest: configs.myinfoAuthKey,
				privateKeyPassword: configs.myinfoAuthKeyPassphrase,
			};
			if (configs.overridePersonBasicUrl) {
				set(props, "overridePersonBasicUrl", configs.overridePersonBasicUrl);
			}

			type V3Attributes =
				| "name"
				| "aliasname"
				| "sex"
				| "race"
				| "secondaryrace"
				| "dialect"
				| "nationality"
				| "dob"
				| "birthcountry"
				| "residentialstatus"
				| "email"
				| "mobileno"
				| "regadd"
				| "marital"
				| "marriagedate"
				| "occupation"
				| "edulevel"
				| "countryofmarriage"
				| "marriagecertno"
				| "childrenbirthrecords";

			const myInfoHelper = new MyInfoHelper(props);
			const testNric = "S1627395C";

			const result = await myInfoHelper.getPersonBasic<V3Attributes>(testNric, configs.attributes);

			expect(result.aliasname.value).toEqual(aliasName.JASCKSON_LIM_YONG_XIANG);
		});
	});

	describe("STAGING Profile status API V3", () => {
		it("should pass", async () => {
			const props: MyInfoHelperConstructor = {
				clientID: configs.myinfoGovFlowClientID,
				environment: configs.environment,
				singpassEserviceID: configs.singpassClientId,
				keyToDecryptJWE: configs.myinfoJWEPrivateKey,
				certToVerifyJWS: configs.myinfoJWSPublicCert,
				privateKeyToSignRequest: configs.myinfoAuthKey,
				privateKeyPassword: configs.myinfoAuthKeyPassphrase,
			};
			if (configs.overrideProfileStatusUrl) {
				set(props, "overridePersonBasicUrl", configs.overrideProfileStatusUrl);
			}

			const myInfoHelper = new MyInfoHelper(props);
			const testNric = "S1627395C";

			const result = await myInfoHelper.getProfileStatus(testNric);
			expect(result.status).toEqual("03");
		});
	});
});
