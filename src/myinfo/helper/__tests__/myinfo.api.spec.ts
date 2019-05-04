
import { MyInfoHelper, MyInfoHelperConstructor } from "..";
import { myinfoV2Configs, myinfoV3Configs } from "./test.configs";

describe("MyInfoClient", () => {
	xdescribe("STAGING Person basic API V2", () => {
		it("should use the available env variables, call myinfo, and get back person", async () => {
			const props: MyInfoHelperConstructor = {
				attributes: myinfoV2Configs.attributes,
				clientID: myinfoV2Configs.myinfoGovFlowClientID,
				personBasicURL: myinfoV2Configs.myInfoPersonBasicURL,
				singpassEserviceID: myinfoV2Configs.singpassClientId,
				keyToDecryptJWE: myinfoV2Configs.myinfoJWEPrivateKey,
				apexSigningURL: myinfoV2Configs.myinfoApexSigningURL,
				apexPrivateCert: myinfoV2Configs.myinfoAuthKey,
				apexPrivateCertPass: myinfoV2Configs.myinfoAuthKeyPassphrase,
				version: "v2",
			};

			const myInfoHelper = new MyInfoHelper(props);
			const testNric = "S6005040F";

			const result = await myInfoHelper.getPersonData(testNric);

			expect(result.aliasname.value).toEqual("JESSICA LIM JIA MIN");
		});
	});

	describe("STAGING Person basic API V3", () => {
		it("should use the available env variables, call myinfo, and get back person", async () => {
			const props: MyInfoHelperConstructor = {
				attributes: myinfoV3Configs.attributes,
				clientID: myinfoV3Configs.myinfoGovFlowClientID,
				personBasicURL: myinfoV3Configs.myInfoPersonBasicURL,
				singpassEserviceID: myinfoV3Configs.singpassClientId,
				keyToDecryptJWE: myinfoV3Configs.myinfoJWEPrivateKey,
				certToVerifyJWS: myinfoV3Configs.myinfoJWSPublicCert,
				apexPrivateCert: myinfoV3Configs.myinfoAuthKey,
				apexPrivateCertPass: myinfoV3Configs.myinfoAuthKeyPassphrase,
				version: "v3",
			};

			const myInfoHelper = new MyInfoHelper(props);
			const testNric = "S1627395C";

			const result = await myInfoHelper.getPersonBasicV3(testNric);

			expect(result.aliasname.value).toEqual("JASCKSON LIM YONG XIANG");
		});
	});
});
