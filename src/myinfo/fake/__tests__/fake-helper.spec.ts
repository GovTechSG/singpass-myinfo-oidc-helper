import { MyinfoLifeStatusCode, MyinfoSexCode } from "../../domain";
import { ChildrenBirthRecord, ChildrenOverrideMode, FakeMyInfoHelper, transformChildBirthRecord } from "../fake-helper";
import { ProfileArchetype } from "../profiles/fake-profile";
import { mrSGDaddyPerfect } from "../profiles/mrSGDaddyPerfect";

describe("FakeMyInfoHelper", () => {
	describe("getPersonCommon", () => {
		it("should successfully get based on archetype", () => {
			const fakeHelper = new FakeMyInfoHelper();
			const person = fakeHelper.getPersonCommon({ archetype: ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED });

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
			const person = fakeHelper.getPersonCommon({ archetype: ProfileArchetype.MR_SG_DADDY_MANY_CHILDREN });
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
			const person = fakeHelper.getPersonCommon({ archetype: ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED });
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

		describe("childrenbirthrecords", () => {
			const mockChildrenbirthrecords: ChildrenBirthRecord[] = [
				{
					birthcertno: "T8298488E",
					name: "",
					dob: "",
					tob: "",
					sex: MyinfoSexCode.FEMALE,
					lifestatus: MyinfoLifeStatusCode.ALIVE,
				},
				{
					birthcertno: "S9846203A",
					name: "",
					dob: "",
					tob: "",
					sex: MyinfoSexCode.FEMALE,
					lifestatus: MyinfoLifeStatusCode.ALIVE,
				},
			];

			describe("childrenoverridemode = full", () => {
				it("should override all exisiting children of archetype if childrenbirthrecords is NOT empty", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: ChildrenOverrideMode.full,
						childrenbirthrecords: mockChildrenbirthrecords,
					});

					expect(person.childrenbirthrecords).toStrictEqual(mockChildrenbirthrecords.map(transformChildBirthRecord));
				});

				it("should NOT override all exisiting children of archetype if childrenbirthrecords is empty", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const childrenbirthrecords = [];

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: ChildrenOverrideMode.full,
						childrenbirthrecords,
					});

					expect(person.childrenbirthrecords).toStrictEqual(mrSGDaddyPerfect.generate().childrenbirthrecords);
				});
			});

			describe("childrenoverridemode = partial", () => {
				it("should override only the first two children of archetype if there are two children childrenbirthrecords", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: ChildrenOverrideMode.partial,
						childrenbirthrecords: mockChildrenbirthrecords,
					});

					const mrSGDaddyPerfectChildren = mrSGDaddyPerfect.generate().childrenbirthrecords;

					expect(person.childrenbirthrecords).toStrictEqual([
						...mockChildrenbirthrecords.map(transformChildBirthRecord),
						...mrSGDaddyPerfectChildren.slice(mockChildrenbirthrecords.length, mrSGDaddyPerfectChildren.length),
					]);
				});

				it("should NOT override any of the exisiting children of archetype if childrenbirthrecords is empty", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const childrenbirthrecords = [];

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: ChildrenOverrideMode.partial,
						childrenbirthrecords,
					});

					expect(person.childrenbirthrecords).toStrictEqual(mrSGDaddyPerfect.generate().childrenbirthrecords);
				});
			});

			describe("childrenoverridemode = appendToExisting", () => {
				it("should append to the existing children of archetype", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: ChildrenOverrideMode.appendToExisting,
						childrenbirthrecords: mockChildrenbirthrecords,
					});

					const mrSGDaddyPerfectChildren = mrSGDaddyPerfect.generate().childrenbirthrecords;

					expect(person.childrenbirthrecords).toStrictEqual([
						...mrSGDaddyPerfectChildren,
						...mockChildrenbirthrecords.map(transformChildBirthRecord),
					]);
				});

				it("should NOT append to the exisiting children of archetype if childrenbirthrecords is empty", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const childrenbirthrecords = [];

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: ChildrenOverrideMode.appendToExisting,
						childrenbirthrecords,
					});

					expect(person.childrenbirthrecords).toStrictEqual(mrSGDaddyPerfect.generate().childrenbirthrecords);
				});
			});
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
