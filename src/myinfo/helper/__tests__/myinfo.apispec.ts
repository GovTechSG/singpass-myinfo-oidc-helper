
import { MyInfoHelper, MyInfoHelperConstructor } from "..";
import { configs } from "./test.configs";

describe("MyInfoClient", () => {

	describe("STAGING Person basic API V3", () => {
		it("should use the available env variables, call myinfo, and get back person", async () => {
			const props: MyInfoHelperConstructor = {
				attributes: configs.attributes,
				clientID: configs.myinfoGovFlowClientID,
				environment: configs.environment,
				singpassEserviceID: configs.singpassClientId,
				keyToDecryptJWE: configs.myinfoJWEPrivateKey,
				certToVerifyJWS: configs.myinfoJWSPublicCert,
				privateKeyToSignRequest: configs.myinfoAuthKey,
				privateKeyPassword: configs.myinfoAuthKeyPassphrase,
			};

			type V3Attributes =
				"name" |
				"aliasname" |
				"sex" |
				"race" |
				"secondaryrace" |
				"dialect" |
				"nationality" |
				"dob" |
				"birthcountry" |
				"residentialstatus" |
				"email" |
				"mobileno" |
				"regadd" |
				"marital" |
				"marriagedate" |
				"occupation" |
				"edulevel" |
				"countryofmarriage" |
				"marriagecertno" |
				"childrenbirthrecords";

			const myInfoHelper = new MyInfoHelper(props);
			const testNric = "S1627395C";

			const result = await myInfoHelper.getPersonBasic<V3Attributes>(testNric);

			expect(result.aliasname.value).toEqual("JASCKSON LIM YONG XIANG");
		});
	});

	describe("STAGING Profile status API V3", () => {
		it("should pass", async () => {
			const props: MyInfoHelperConstructor = {
				attributes: configs.attributes,
				clientID: configs.myinfoGovFlowClientID,
				environment: configs.environment,
				singpassEserviceID: configs.singpassClientId,
				keyToDecryptJWE: configs.myinfoJWEPrivateKey,
				certToVerifyJWS: configs.myinfoJWSPublicCert,
				privateKeyToSignRequest: configs.myinfoAuthKey,
				privateKeyPassword: configs.myinfoAuthKeyPassphrase,
			};

			const myInfoHelper = new MyInfoHelper(props);
			const testNric = "S1627395C";

			const result = await myInfoHelper.getProfileStatus(testNric);
			expect(result.status).toEqual("03");
		});
	});
});
