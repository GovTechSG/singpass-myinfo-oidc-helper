import { FakeMyInfoHelper } from "../fake-helper";
import { ProfileArchetype } from "../profiles/fake-profile";

describe("FakeMyInfoHelper", () => {
	describe("getPersonBasic", () => {
		it("should successfully get based on archetype", () => {
			const fakeHelper = new FakeMyInfoHelper();
			const person = fakeHelper.getPersonBasic({ archetype: ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED });

			expect(person).toHaveProperty("dialect");
			expect(person).toHaveProperty("occupation");
			expect(person).toHaveProperty("regadd");
			expect(person).toHaveProperty("mobileno");
			expect(person).toHaveProperty("passportexpirydate");
			expect(person).toHaveProperty("divorcedate");
			expect(person).toHaveProperty("marriagecertno");
			expect(person).toHaveProperty("merdekagen");
			expect(person).toHaveProperty("pioneergen");
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
			expect(person).toHaveProperty("vehicles");
		});
		it("should filter for parents with children", () => {
			const fakeHelper = new FakeMyInfoHelper(testAttributes);
			const person = fakeHelper.getPersonBasic({ archetype: ProfileArchetype.MR_SG_DADDY_MANY_CHILDREN });
			expect(person).toHaveProperty("sex");
			expect(person).toHaveProperty("marriagedate");
			expect(person).toHaveProperty("residentialstatus");
			expect(person).toHaveProperty("passportnumber");
			expect(person).toHaveProperty("marital");
			expect(person.childrenbirthrecords[0]).toHaveProperty("birthcertno");
			expect(person.childrenbirthrecords[0]).toHaveProperty("name");
			expect(person.childrenbirthrecords[0]).toHaveProperty("lastupdated");
			expect(person).toHaveProperty("sponsoredchildrenrecords");
			expect(person).toHaveProperty("vehicles");
			expect(person).toHaveProperty("drivinglicence.pdl.validity");
			expect(person).toHaveProperty("drivinglicence.lastupdated");
		});

		it("should filter for parents with sponsor children", () => {
			const fakeHelper = new FakeMyInfoHelper(testAttributes);
			const person = fakeHelper.getPersonBasic({ archetype: ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED });
			expect(person).toHaveProperty("sex");
			expect(person).toHaveProperty("marriagedate");
			expect(person).toHaveProperty("residentialstatus");
			expect(person).toHaveProperty("passportnumber");
			expect(person).toHaveProperty("marital");
			expect(person).toHaveProperty("childrenbirthrecords");
			expect(person.sponsoredchildrenrecords[0]).toHaveProperty("nric");
			expect(person.sponsoredchildrenrecords[0]).toHaveProperty("name");
			expect(person.sponsoredchildrenrecords[0]).toHaveProperty("lastupdated");
			expect(person).toHaveProperty("vehicles");
			expect(person).toHaveProperty("drivinglicence.pdl.validity");
			expect(person).toHaveProperty("drivinglicence.lastupdated");
		});
	});
});

export const testAttributes: string[] = [
	"sex",
	"marriagedate",
	"residentialstatus",
	"passportnumber",
	"marital",
	"childrenbirthrecords.birthcertno",
	"childrenbirthrecords.name",
	"sponsoredchildrenrecords.nric",
	"sponsoredchildrenrecords.name",
	"vehicles.status",
	"drivinglicence.pdl.validity",
	"drivinglicence.totaldemeritpoints",
];
