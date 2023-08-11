import { MyInfoLifeStatusCode, MyInfoSexCode } from "../../domain";
import { FakeMyInfoHelper, transformChildBirthRecord, transformItems, transformItemsWithAdditionalMock } from "../fake-helper";
import { ProfileArchetype } from "../profiles/fake-profile";
import { mrSGDaddyPerfect } from "../profiles/mrSGDaddyPerfect";
import { mrSGNoLocalAddress } from "../profiles/mrSGNoLocalAddress ";
import { mrSGFatherNormalChildrenOnly } from "../profiles/sponsored-children/mrSGFatherNormalChildrenOnly";
import { ChildrenBirthRecord, CpfContributionHistory, OverrideMode } from "../types";

// tslint:disable-next-line: no-big-function
describe("FakeMyInfoHelper", () => {
	// tslint:disable-next-line: no-big-function
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

		describe("regadd", () => {
			it("should return base profile regadd if no override provided", () => {
				const fakeHelper = new FakeMyInfoHelper();

				const person = fakeHelper.getPersonBasic({
					archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
				});

				expect(person.regadd).toStrictEqual(mrSGDaddyPerfect.generate().regadd);
			});

			describe("SG Address", () => {
				it("should merge archetype SG address with override", () => {
					const fakeHelper = new FakeMyInfoHelper();
					const person = fakeHelper.getPersonBasic({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						regadd: {
							type: "SG",
							postal: "123456",
							street: "Some street",
							unit: "111"
						}
					});

					expect(person.regadd).toStrictEqual({
						...mrSGDaddyPerfect.generate().regadd,
						postal: { value: "123456" },
						street: { value: "Some street" },
						unit: { value: "111" }
					});
				});

				it("should override with SG address if archetype has unformatted", () => {
					const fakeHelper = new FakeMyInfoHelper();
					const person = fakeHelper.getPersonBasic({
						archetype: ProfileArchetype.MR_SG_NO_LOCAL_ADDRESS,
						regadd: {
							type: "SG",
							block: "123",
							building: "Some building",
							floor: "11",
							postal: "123456",
							street: "Some street",
							unit: "111"
						}
					});

					const baseRegAdd = mrSGNoLocalAddress.generate().regadd;
					expect(person.regadd).toStrictEqual({
						type: "SG",
						country: {
							code: "SG",
							desc: "SINGAPORE"
						},
						block: { value: "123" },
						building: { value: "Some building" },
						floor: { value: "11" },
						postal: { value: "123456" },
						street: { value: "Some street" },
						unit: { value: "111" },
						classification: baseRegAdd.classification,
						lastupdated: baseRegAdd.lastupdated,
						source: baseRegAdd.source,
					});
				});
			});

			describe("Unformatted Address", () => {
				it("should merge archetype unformatted address with override", () => {
					const fakeHelper = new FakeMyInfoHelper();
					const person = fakeHelper.getPersonBasic({
						archetype: ProfileArchetype.MR_SG_NO_LOCAL_ADDRESS,
						regadd: {
							type: "UNFORMATTED",
							line1: "Line 1 address",
						}
					});

					expect(person.regadd).toStrictEqual({
						...mrSGNoLocalAddress.generate().regadd,
						line1: { value: "Line 1 address" },
					});
				});

				it("should override with unformatted address if archetype has SG", () => {
					const fakeHelper = new FakeMyInfoHelper();
					const person = fakeHelper.getPersonBasic({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						regadd: {
							type: "UNFORMATTED",
							line1: "Line 1 address",
							line2: "Line 2 address",
						}
					});

					const baseRegAdd = mrSGDaddyPerfect.generate().regadd;
					expect(person.regadd).toStrictEqual({
						type: "UNFORMATTED",
						line1: { value: "Line 1 address" },
						line2: { value: "Line 2 address" },
						classification: baseRegAdd.classification,
						lastupdated: baseRegAdd.lastupdated,
						source: baseRegAdd.source,
					});
				});
			});
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

					const person = fakeHelper.getPersonBasic({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						childrenoverridemode: OverrideMode.full,
						childrenbirthrecords: mockChildrenbirthrecords,
					});

					expect(person.childrenbirthrecords).toStrictEqual(mockChildrenbirthrecords.map(transformChildBirthRecord));
				});

				it("should NOT override all exisiting children of archetype if childrenbirthrecords is empty", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const childrenbirthrecords = [];

					const person = fakeHelper.getPersonBasic({
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

					const person = fakeHelper.getPersonBasic({
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

					const person = fakeHelper.getPersonBasic({
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

					const person = fakeHelper.getPersonBasic({
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

					const person = fakeHelper.getPersonBasic({
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

		it("should return only requested attributes", () => {
			const requestedAttributes = [
				"drivinglicence.qdl.validity",
				"cpfbalances"
			];
			const fakeHelper = new FakeMyInfoHelper(requestedAttributes);
			const person = fakeHelper.getPerson({ archetype: ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED });

			expect(person).toHaveProperty("drivinglicence.qdl.validity");
			expect(person).toHaveProperty("drivinglicence.lastupdated");
			expect(person).not.toHaveProperty("drivinglicence.pdl.validity");
			expect(person).toHaveProperty("cpfbalances");
			expect(person).not.toHaveProperty("cpfcontributions");
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

						expect(person.cpfcontributions.history).toStrictEqual(mockCpfContributions.map(cpfContribution => transformItems(cpfContribution)));
					});

					it("should override all exisiting cpfContributions of archetype if cpfcontributions is NOT empty and and myinfoPerson.cpfContributions is undefined", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MRS_MY_MOMMY_PERFECT,
							cpfcontributionhistoryoverridemode: OverrideMode.full,
							cpfcontributions: mockCpfContributions,
						});

						expect(person.cpfcontributions.history).toStrictEqual(mockCpfContributions.map(cpfContribution => transformItems(cpfContribution)));
					});

					it("should NOT override all exisiting cpfcontributions of archetype if cpfcontributions is empty", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const cpfcontributions = [];

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.full,
							cpfcontributions,
						});

						expect(person.cpfcontributions).toStrictEqual((mrSGFatherNormalChildrenOnly.generate()).cpfcontributions);
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

						const mrSGFatherNormalChildren = (mrSGFatherNormalChildrenOnly.generate()).cpfcontributions.history;

						expect(person.cpfcontributions.history).toStrictEqual([
							...mockCpfContributions.map(cpfContribution => transformItems(cpfContribution)),
							...mrSGFatherNormalChildren.slice(mockCpfContributions.length, mrSGFatherNormalChildren.length),
						]);
					});

					it("should NOT override any of the exisiting cpfcontributions of archetype if cpfcontributions is empty", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const cpfcontributions = [];

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.partial,
							cpfcontributions,
						});

						expect(person.cpfcontributions).toStrictEqual((mrSGFatherNormalChildrenOnly.generate()).cpfcontributions);
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

						const mrSGaddyPerfectChildren = (mrSGFatherNormalChildrenOnly.generate()).cpfcontributions.history;

						expect(person.cpfcontributions.history).toStrictEqual([
							...mrSGaddyPerfectChildren,
							...mockCpfContributions.map(cpfContribution => transformItems(cpfContribution)),
						]);
					});

					it("should NOT append to the exisiting cpfcontributions of archetype if cpfcontributions is empty", () => {
						const fakeHelper = new FakeMyInfoHelper();

						const cpfcontributions = [];

						const person = fakeHelper.getPerson({
							archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
							cpfcontributionhistoryoverridemode: OverrideMode.appendToExisting,
							cpfcontributions,
						});

						expect(person.cpfcontributions).toStrictEqual((mrSGFatherNormalChildrenOnly.generate()).cpfcontributions);
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

				it("should not update cpfBalances if cpfBalances is not passed through mock params", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const mockNoCpfBalances = {
						ma: 0,
						oa: 0,
						sa: 0,
						ra: 0
					};

					const person = fakeHelper.getPerson({
						archetype: ProfileArchetype.MR_SG_DADDY_PERFECT,
						cpfbalances: mockNoCpfBalances,
					});

					expect(person.cpfbalances).toStrictEqual((mrSGDaddyPerfect.generate()).cpfbalances);
				});

			});

			describe("noaBasic", () => {
				const mockNoaBasic = {
					amount: 123567.89,
					yearofassessment: "2019",
				};
				it("should successfully update noa-basic based on mock params", () => {
					const fakeHelper = new FakeMyInfoHelper();

					const person = fakeHelper.getPerson({
						archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
						noabasic: mockNoaBasic,
					});

					expect(person["noa-basic"]).toStrictEqual(transformItemsWithAdditionalMock(mockNoaBasic));
				});

				it("shouldn't update noa-basic if the mockparams values are empty or 0", () => {
					const fakeHelper = new FakeMyInfoHelper();
					const mockNoa = {
						amount: 0,
						yearofassessment: "",
					};

					const person = fakeHelper.getPerson({
						archetype: ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN,
						noabasic: mockNoa,
					});

					expect(person["noa-basic"]).toStrictEqual((mrSGFatherNormalChildrenOnly.generate())["noa-basic"]);
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
