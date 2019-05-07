import { FakeMyInfoHelper } from "../fake-helper";
import { ProfileArchetype } from "../profiles/fake-profile";

describe("FakeMyInfoHelper", () => {
	describe("getPersonBasic", () => {
		it("should successfully get based on archetype", () => {

			const fakeHelper = new FakeMyInfoHelper();
			const person = fakeHelper.getPersonBasic({ archetype: ProfileArchetype.MR_SG_DADDY_PERFECT });

			expect(person).toHaveProperty("dialect");
			expect(person).toHaveProperty("occupation");
			expect(person).toHaveProperty("regadd");
			expect(person).toHaveProperty("mobileno");
			expect(person).toHaveProperty("passportexpirydate");
			expect(person).toHaveProperty("divorcedate");
			expect(person).toHaveProperty("marriagecertno");
			expect(person).toHaveProperty("merdekagen");
			expect(person).toHaveProperty("gstvoucher");
			expect(person).toHaveProperty("email");
			expect(person).toHaveProperty("birthcountry");
			expect(person).toHaveProperty("race");
			expect(person).toHaveProperty("silversupport");
			expect(person).toHaveProperty("countryofmarriage");
			expect(person).toHaveProperty("sex");
			expect(person).toHaveProperty("marriagedate");
			expect(person).toHaveProperty("residentialstatus");
			expect(person).toHaveProperty("passportnumber");
			expect(person).toHaveProperty("marital");
			expect(person).toHaveProperty("aliasname");
			expect(person).toHaveProperty("childrenbirthrecords");
			expect(person).toHaveProperty("dob");
			expect(person).toHaveProperty("name");
			expect(person).toHaveProperty("secondaryrace");
		});
		it("should filter with the attributes passed into constructor", () => {
			const fakeHelper = new FakeMyInfoHelper(["sex", "marriagedate", "residentialstatus", "passportnumber", "marital"]);
			const person = fakeHelper.getPersonBasic({ archetype: ProfileArchetype.MR_SG_DADDY_PERFECT });

			expect(person).toHaveProperty("sex");
			expect(person).toHaveProperty("marriagedate");
			expect(person).toHaveProperty("residentialstatus");
			expect(person).toHaveProperty("passportnumber");
			expect(person).toHaveProperty("marital");
			expect(person).not.toHaveProperty("secondaryrace");

		});
	});
});
