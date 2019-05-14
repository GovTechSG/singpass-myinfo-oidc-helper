
import { MyInfoHelper, MyInfoHelperConstructor } from "..";
import { configs } from "./test.configs";

const props: MyInfoHelperConstructor = {
	attributes: configs.attributes,
	clientID: configs.myInfoGovFlowClientID,
	personBasicURL: configs.myInfoPersonBasicURL,
	singpassEserviceID: configs.singpassClientId,
	keyToDecryptJWE: configs.myInfoJWEPrivateKey,
	apexSigningURL: configs.myInfoApexSigningURL,
	apexPrivateCert: configs.myInfoApexPrivateCert,
	apexPrivateCertPass: configs.myInfoApexPrivateCertPass,
};

const myInfoHelper = new MyInfoHelper(props);

describe("MyInfoClient", () => {
	describe("Person basic API on STAGING", () => {
		it("should use the available env variables, call myinfo, and get back person", async () => {

			const testNric = "S6005040F";

			const result = await myInfoHelper.getPersonData(testNric);

			expect(result.aliasname.value).toEqual("JESSICA LIM JIA MIN");
		});
	});
});
