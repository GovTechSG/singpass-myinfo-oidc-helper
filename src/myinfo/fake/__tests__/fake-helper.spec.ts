import { MyInfoComponents, MyInfoLifeStatusCode, MyInfoSexCode } from "../../domain";
import { ChildrenBirthRecord, CpfContributionHistory, FakeMyInfoHelper, OverrideMode, transformChildBirthRecord, transformCpfContributions, transformItemsWithAdditionalMock } from "../fake-helper";
import { ProfileArchetype } from "../profiles/fake-profile";
import { mrSGFatherNormalChildrenOnly } from "../profiles/sponsored-children/mrSGFatherNormalChildrenOnly";
import { mrSGDaddyPerfect } from "../profiles/mrSGDaddyPerfect";

// tslint:disable-next-line: no-big-function
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
					sex: MyInfoSexCode.FEMALE,
					lifestatus: MyInfoLifeStatusCode.ALIVE,
				},
				{
					birthcertno: "S9846203A",
					name: "",
					dob: "",
					tob: "",
					sex: MyInfoSexCode.FEMALE,
					lifestatus: MyInfoLifeStatusCode.ALIVE,
				},
			];

			describe("childrenoverridemode = full", () => {
				it("should override all exisiting children of archetype if childrenbirthrecords is NOT empty", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: OverrideMode.full,
						childrenbirthrecords: mockChildrenbirthrecords,
					});

					expect(person.childrenbirthrecords).toStrictEqual(mockChildrenbirthrecords.map(transformChildBirthRecord));
				});

				it("should NOT override all exisiting children of archetype if childrenbirthrecords is empty", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const childrenbirthrecords = [];

					const person = fakeHelper.getPersonCommon({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: OverrideMode.full,
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
						childrenoverridemode: OverrideMode.partial,
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
						childrenoverridemode: OverrideMode.partial,
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
						childrenoverridemode: OverrideMode.appendToExisting,
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
						childrenoverridemode: OverrideMode.appendToExisting,
						childrenbirthrecords,
					});

					expect(person.childrenbirthrecords).toStrictEqual(mrSGDaddyPerfect.generate().childrenbirthrecords);
				});
			});
		});
	});

	// tslint:disable-next-line: no-big-function
	describe("getPerson", () => {
		it("should successfully get based on archetype", () => {
			const fakeHelper = new FakeMyInfoHelper();
			const person = fakeHelper.getPerson({ archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN });

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
			expect(person).toHaveProperty("cpfbalances");
			expect(person).toHaveProperty("noa-basic");
			expect(person).toHaveProperty("cpfcontributions");


		});

		describe("FinancialData", () => {
			describe("CpfContributions", () => {
				const mockCpfContributions: CpfContributionHistory[] = [
					{
						date: "",
						amount: 1234,
						month: "09",
						employer: "emp1",
					},
					{
						date: "",
						amount: 1234,
						month: "09",
						employer: "emp1",
					},
				];
				describe("cpfcontributionhistoryoverridemode = full", () => {
					it("should override all exisiting cpfContributions of archetype if cpfcontributions is NOT empty", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.full,
							cpfcontributions: mockCpfContributions,
						});

						expect(person.cpfcontributions.history).toStrictEqual(transformCpfContributions(mockCpfContributions).history);
					});

					it("should NOT override all exisiting cpfcontributions of archetype if childrenbirthrecords is empty", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const cpfcontributions = [];

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.full,
							cpfcontributions,
						});

						expect(person.cpfcontributions).toStrictEqual((mrSGFatherNormalChildrenOnly.generate() as MyInfoComponents.Schemas.Person).cpfcontributions);
					});
				});

				describe("cpfcontributionhistoryoverridemode = partial", () => {
					it("should override only the first two cpfcontributions of archetype if there are two cpfcontributions", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.partial,
							cpfcontributions: mockCpfContributions,
						});

						const mrSGFatherNormalChildren = (mrSGFatherNormalChildrenOnly.generate() as MyInfoComponents.Schemas.Person).cpfcontributions.history;

						expect(person.cpfcontributions.history).toStrictEqual([
							...transformCpfContributions(mockCpfContributions).history,
							...mrSGFatherNormalChildren.slice(mockCpfContributions.length, mrSGFatherNormalChildren.length),
						]);
					});

					it("sould NOT override any of the exisiting cpfcontributions of archetype if cpfcontributions is empty", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const cpfcontributions = [];

						const erson = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.partial,
							cpfcontributions,
						});

						expect(erson.cpfcontributions).toStrictEqual((mrSGFatherNormalChildrenOnly.generate() as MyInfoComponents.Schemas.Person).cpfcontributions);
					});
				});

				describe("cpfcontributionhistoryoverridemode = appendToExisting", () => {
					it("should append to the existing cpfcontributions of archetype", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.appendToExisting,
							cpfcontributions: mockCpfContributions,
						});

						const mrSGaddyPerfectChildren = (mrSGFatherNormalChildrenOnly.generate() as MyInfoComponents.Schemas.Person).cpfcontributions.history;

						expect(person.cpfcontributions.history).toStrictEqual([
							...mrSGaddyPerfectChildren,
							...transformCpfContributions(mockCpfContributions).history,
						]);
					});

					it("should NO append to the exisiting cpfcontributions of archetype if cpfcontributions is empty", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const cpfcontributions = [];

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.appendToExisting,
							cpfcontributions,
						});

						expect(person.cpfcontributions).toStrictEqual((mrSGFatherNormalChildrenOnly.generate() as MyInfoComponents.Schemas.Person).cpfcontributions);
					});
				});
			});


			describe("cpfBalances", () => {

				const mockCpfBalances = {
					ma: 1234.89,
					oa: 1234.89,
					sa: 1234.89,
					ra: 1234.89,
				};
				it("should successfully update cpfBalances based on mock params", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPerson({
						archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
						cpfbalances: mockCpfBalances,
					});

					expect(person.cpfbalances).toStrictEqual(transformItemsWithAdditionalMock(mockCpfBalances));
				});

				it("shouldnot update cpfBalances if cpfBalances is not passed through mock params", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPerson({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						cpfbalances: mockCpfBalances,
					});

					expect(person.cpfbalances).toStrictEqual(transformItemsWithAdditionalMock(mockCpfBalances));
				});

			});

			describe("noaBasic", () => {
				const mockNoaBasic = {
					amount: 123567.89,
					yearofassessment: 2019,
				};
				it("should successfully update noa-basic based on mock params", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPerson({
						archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
						noabasic: mockNoaBasic,
					});

					expect(person["noa-basic"]).toStrictEqual(transformItemsWithAdditionalMock(mockNoaBasic));
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
