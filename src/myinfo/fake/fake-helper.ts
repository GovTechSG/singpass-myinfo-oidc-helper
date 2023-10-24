import { get, isEmpty, map, omit, partition, set } from "lodash";
// tslint:disable-next-line: max-line-length
import { MyInfoComponents, MyInfoComStatusCode, MyInfoCountryPlaceCode, MyInfoDrivingLicenceValidityCode, MyInfoHDBTypeCode, MyInfoHousingTypeCode, MyInfoLifeStatusCode, MyInfoMaritalStatusCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode, MyInfoVehicleStatus } from "../domain";
import { profiles } from "./profiles/fake-profiles";
import { ChildrenBirthRecord, CpfBalanceExtension, GVS, MockParams, MockParamsPerson, NoaBasicExtension, OverrideMode, UniqueAddressSgKeys, UniqueAddressUnformattedKeys } from "./types";

type PersonBasic = MyInfoComponents.Schemas.PersonBasic;
type Person = MyInfoComponents.Schemas.Person;

export interface IFakeMyInfoHelper {
	getPersonBasic: (mockParams: MockParams) => PersonBasic;
	getPerson: (mockParams: MockParamsPerson) => Person;
}

export class FakeMyInfoHelper implements IFakeMyInfoHelper {
	/**
	 * @param attributes attributes to return in the MyInfoPerson in getPersonData
	 */
	public constructor(
		private readonly attributes?: ReadonlyArray<string>,
	) { }

	/**
	 * fake getPersonData
	 * @param input the mock profile parameters.
	 * See FakeMyInfoPersonArchetypes for the actual person.
	 */
	// tslint:disable-next-line: no-big-function
	public getPersonInfo = (mockParams: MockParams): Person => {
		const mockProfile = profiles.find((profile) => profile.name === mockParams.archetype);
		if (!mockProfile) {
			return null;
		}

		const myinfoPerson = {
			...mockProfile.generate(),
		};

		if (!isEmpty(mockParams.residentialstatus)) {
			myinfoPerson.residentialstatus.code = mockParams.residentialstatus;
			myinfoPerson.residentialstatus.desc = MyInfoResidentialCode.fn.toEnumDesc(mockParams.residentialstatus);
		}

		if (!isEmpty(mockParams.marital)) {
			myinfoPerson.marital.code = mockParams.marital;
			myinfoPerson.marital.desc = MyInfoMaritalStatusCode.fn.toEnumDesc(mockParams.marital);
		}

		if (!isEmpty(mockParams.marriagedate)) {
			myinfoPerson.marriagedate.value = mockParams.marriagedate;
		}

		if (!isEmpty(mockParams.divorcedate)) {
			myinfoPerson.divorcedate.value = mockParams.divorcedate;
		}

		if (!isEmpty(mockParams.marriagecertno)) {
			myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
		}

		if (!isEmpty(mockParams.countryofmarriage)) {
			myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage;
			myinfoPerson.countryofmarriage.desc = MyInfoCountryPlaceCode.fn.toEnumDesc(mockParams.countryofmarriage);
		}

		if (!isEmpty(mockParams.dob) || !isEmpty(myinfoPerson.dob?.value)) {
			myinfoPerson.dob.value = mockParams.dob || myinfoPerson.dob.value;
			const birthYear = new Date(myinfoPerson.dob.value).getFullYear();
			if (birthYear <= 1949) {
				// pioneergen
				myinfoPerson.merdekagen.eligibility.value = false;
				if (myinfoPerson.pioneergen.message.code !== "6") myinfoPerson.pioneergen.eligibility.value = true;
				if (birthYear >= 1945) {
					myinfoPerson.pioneergen.quantum.value = "200.00";
				} else if (birthYear >= 1940) {
					myinfoPerson.pioneergen.quantum.value = "400.00";
				} else if (birthYear >= 1935) {
					myinfoPerson.pioneergen.quantum.value = "600.00";
				} else {
					myinfoPerson.pioneergen.quantum.value = "800.00";
				}
			} else if (birthYear > 1949 && birthYear <= 1959) {
				// merdekagen
				if (myinfoPerson.merdekagen.message.code !== "6") myinfoPerson.merdekagen.eligibility.value = true;
				myinfoPerson.pioneergen.eligibility.value = false;
			} else {
				myinfoPerson.merdekagen.eligibility.value = false;
				myinfoPerson.pioneergen.eligibility.value = false;
				myinfoPerson.merdekagen.quantum.value = 0;
			}
		}

		if (!isEmpty(mockParams.gstvyear)) {
			myinfoPerson.gstvoucher.year.value = mockParams.gstvyear;
		}

		if (!isEmpty(mockParams.gvs)) {
			myinfoPerson.gstvoucher.signup.value = (mockParams.gvs || null).toLocaleLowerCase() === GVS.true;
		}

		if (!isEmpty(mockParams.merdekageneligible)) {
			myinfoPerson.merdekagen.eligibility = { value: mockParams.merdekageneligible };
		}

		if (!isEmpty(mockParams.merdekagenmessagecode)) {
			myinfoPerson.merdekagen.message.code = mockParams.merdekagenmessagecode;
		}

		if (!isEmpty(mockParams.merdekagenquantum)) {
			myinfoPerson.merdekagen.quantum = { value: mockParams.merdekagenquantum };
		}

		if (!isEmpty(mockParams.regadd)) {
			const sgProps: UniqueAddressSgKeys[] = ["block", "building", "country", "floor", "postal", "street", "unit"];
			const unformattedProps: UniqueAddressUnformattedKeys[] = ["line1", "line2"];

			if (mockParams.regadd.type === "SG") {
				const regadd = myinfoPerson.regadd as MyInfoComponents.Schemas.DataitemAddressSg;
				myinfoPerson.regadd = {
					...myinfoPerson.regadd,
					type: "SG",
					country: {
						code: MyInfoCountryPlaceCode.SINGAPORE,
						desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
					},
					block: { value: !isEmpty(mockParams.regadd.block) ? mockParams.regadd.block : regadd.block.value },
					building: { value: !isEmpty(mockParams.regadd.building) ? mockParams.regadd.building : regadd.building.value },
					floor: { value: !isEmpty(mockParams.regadd.floor) ? mockParams.regadd.floor : regadd.floor.value },
					postal: { value: !isEmpty(mockParams.regadd.postal) ? mockParams.regadd.postal : regadd.postal.value },
					street: { value: !isEmpty(mockParams.regadd.street) ? mockParams.regadd.street : regadd.street.value },
					unit: { value: !isEmpty(mockParams.regadd.unit) ? mockParams.regadd.unit : regadd.unit.value },
				};

				myinfoPerson.regadd = omit(myinfoPerson.regadd, unformattedProps) as PersonBasic["regadd"];
			}

			if (mockParams.regadd.type === "UNFORMATTED") {
				const regadd = myinfoPerson.regadd as MyInfoComponents.Schemas.DataitemAddressUnformatted;
				myinfoPerson.regadd = {
					...myinfoPerson.regadd,
					type: "UNFORMATTED",
					line1: { value: !isEmpty(mockParams.regadd.line1) ? mockParams.regadd.line1 : regadd.line1.value },
					line2: { value: !isEmpty(mockParams.regadd.line2) ? mockParams.regadd.line2 : regadd.line2.value },
				};

				myinfoPerson.regadd = omit(myinfoPerson.regadd, sgProps) as PersonBasic["regadd"];
			}
		}

		if (!isEmpty(mockParams.hdbtype)) {
			myinfoPerson.hdbtype = {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				code: mockParams.hdbtype,
				desc: MyInfoHDBTypeCode.fn.toEnumDesc(mockParams.hdbtype),
				unavailable: false,
			};
			myinfoPerson.housingtype = {
				lastupdated: "2020-08-26",
				code: null,
				source: "1",
				classification: "C",
				desc: null,
				unavailable: false,
			};
		} else if (!isEmpty(mockParams.housingtype)) {
			myinfoPerson.housingtype = {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				code: mockParams.housingtype,
				desc: MyInfoHousingTypeCode.fn.toEnumDesc(mockParams.housingtype),
				unavailable: false,
			};
			myinfoPerson.hdbtype = {
				lastupdated: "2020-08-26",
				code: null,
				source: "1",
				classification: "C",
				desc: null,
				unavailable: false,
			};
		}

		if (!isEmpty(mockParams.drivingqdlvalidity)) {
			myinfoPerson.drivinglicence = {
				revocation: {
					startdate: {
						value: null,
					},
					enddate: {
						value: null,
					},
				},
				totaldemeritpoints: {
					value: 0,
				},
				disqualification: {
					startdate: {
						value: null,
					},
					enddate: {
						value: null,
					},
				},
				qdl: {
					expirydate: {
						value: null,
					},
					validity: {
						code: mockParams.drivingqdlvalidity,
						desc: MyInfoDrivingLicenceValidityCode.fn.toEnumDesc(mockParams.drivingqdlvalidity),
					},
					classes: [
						{
							class: {
								value: "3CA",
							},
							issuedate: {
								value: "2017-12-31",
							},
						},
					],
				},
				lastupdated: "2020-08-26",
				pdl: {
					expirydate: {
						value: null,
					},
					validity: {
						code: null,
						desc: null,
					},
					classes: [],
				},
				source: "1",
				classification: "C",
				comstatus: {
					code: MyInfoComStatusCode.ELIGIBLE,
					desc: MyInfoComStatusCode.fn.toEnumDesc(MyInfoComStatusCode.ELIGIBLE),
				},
				photocardserialno: {
					value: null,
				},
				suspension: {
					startdate: {
						value: null,
					},
					enddate: {
						value: null,
					},
				},
				unavailable: false,
			};
			if (mockParams.drivingqdlvalidity === "N") {
				myinfoPerson.drivinglicence.qdl.classes = [];
			}
		}

		if (!isEmpty(mockParams.vehicles)) {
			myinfoPerson.vehicles =
				mockParams.vehicles.map(vehicle => {
					return {
						roadtaxexpirydate: {
							value: "2020-06-06",
						},
						engineno: {
							value: "4G13NU1453",
						},
						attachment3: {
							value: null,
						},
						effectiveownership: {
							value: "2010-06-06T12:09:05",
						},
						scheme: {
							value: "OPC - OFF PEAK CAR",
						},
						powerrate: {
							value: 1.7,
						},
						source: "1",
						primarycolour: {
							value: "MAROON",
						},
						type: {
							value: "STATION WAGON/JEEP/LAND ROVER",
						},
						vehicleno: {
							value: vehicle.vehicleno,
						},
						coeexpirydate: {
							value: "2020-06-06",
						},
						chassisno: {
							value: "TUU28391334KL189",
						},
						noxemission: {
							value: 0.013456,
						},
						model: {
							value: "FORESTER",
						},
						openmarketvalue: {
							value: 23485.3,
						},
						coemission: {
							value: 0.153209,
						},
						attachment2: {
							value: null,
						},
						attachment1: {
							value: "CONTINENTAL TIRE",
						},
						make: {
							value: "SUBARU",
						},
						pmemission: {
							value: 0.199,
						},
						originalregistrationdate: {
							value: "2009-12-06",
						},
						yearofmanufacture: {
							value: "2010",
						},
						vpc: {
							value: null,
						},
						enginecapacity: {
							value: 1600,
						},
						classification: "C",
						nooftransfers: {
							value: 1,
						},
						propellant: {
							value: "Petrol",
						},
						co2emission: {
							value: 145,
						},
						motorno: {
							value: null,
						},
						minimumparfbenefit: {
							value: 2500,
						},
						thcemission: {
							value: 0.187765,
						},
						firstregistrationdate: {
							value: "2010-06-06",
						},
						lastupdated: "2020-08-26",
						maximumunladenweight: {
							value: 1500,
						},
						coecategory: {
							value: "A - CAR UP TO 1600CC & 97KW (130BHP)",
						},
						maximumladenweight: {
							value: 2000,
						},
						secondarycolour: {
							value: null,
						},
						iulabelno: {
							value: vehicle.iulabelno,
						},
						quotapremium: {
							value: 0,
						},
						status: {
							code: vehicle.status,
							desc: MyInfoVehicleStatus.fn.toEnumDesc(vehicle.status),
						},
						unavailable: false,
					};
				});
		}
		if (!isEmpty(mockParams.userdisplayname)) {
			myinfoPerson.name.value = mockParams.userdisplayname;
		}
		if (!isEmpty(mockParams.employment)) {
			myinfoPerson.employment.value = mockParams.employment;
		}

		if (!isEmpty(mockParams.childrenbirthrecords)) {
			const childrenBirthRecords = mockParams.childrenbirthrecords.map(transformChildBirthRecord);

			switch (mockParams.childrenoverridemode) {
				case OverrideMode.appendToExisting:
					myinfoPerson.childrenbirthrecords = [...myinfoPerson.childrenbirthrecords, ...childrenBirthRecords];
					break;

				case OverrideMode.partial:
					if (childrenBirthRecords.length < myinfoPerson.childrenbirthrecords.length) {
						childrenBirthRecords.forEach((childBirthRecord, index) => {
							myinfoPerson.childrenbirthrecords[index] = childBirthRecord;
						});
					} else {
						myinfoPerson.childrenbirthrecords = childrenBirthRecords;
					}
					break;
				case OverrideMode.full:
					myinfoPerson.childrenbirthrecords = childrenBirthRecords;
					break;
			}
		}

		if (!isEmpty(mockParams.race)) {
			myinfoPerson.race.code = mockParams.race;
			myinfoPerson.race.desc = MyInfoRaceCode.fn.toEnumDesc(mockParams.race);
		}

		return myinfoPerson;
	}

	public getPersonBasic = (mockParams: MockParams): PersonBasic => {
		const myinfoPerson = this.getPersonInfo(mockParams);

		if (!this.attributes) {
			return myinfoPerson;
		}

		return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
	}


	public getPerson = (mockParams: MockParamsPerson): Person => {
		const myinfoPerson = this.getPersonInfo(mockParams);

		if (!isEmpty(mockParams.cpfcontributions)) {
			const cpfContributionHistory = mockParams.cpfcontributions.map(cpfContribution => transformItems(cpfContribution));
			if (!myinfoPerson.cpfcontributions) {
				myinfoPerson.cpfcontributions = {
					history: [],
					classification: "C",
					source: "1",
					lastupdated: null
				};
			}
			switch (mockParams.cpfcontributionhistoryoverridemode) {
				case OverrideMode.appendToExisting:
					myinfoPerson.cpfcontributions.history = [...myinfoPerson.cpfcontributions.history, ...cpfContributionHistory];
					break;

				case OverrideMode.partial:
					if (cpfContributionHistory.length < myinfoPerson.cpfcontributions.history.length) {
						cpfContributionHistory.forEach((cpfContributionHistoryItem, index) => {
							myinfoPerson.cpfcontributions.history[index] = cpfContributionHistoryItem;
						});
					} else {
						myinfoPerson.cpfcontributions.history = cpfContributionHistory;
					}
					break;
				case OverrideMode.full:
					myinfoPerson.cpfcontributions.history = cpfContributionHistory;
					break;
			}
		}

		if (mockParams.cpfbalances?.ma || mockParams.cpfbalances?.oa || mockParams.cpfbalances?.ra || mockParams.cpfbalances?.sa) {
			myinfoPerson.cpfbalances = transformItemsWithAdditionalMock(mockParams.cpfbalances) as CpfBalanceExtension;
		}

		if (mockParams.noabasic?.amount || !isEmpty(mockParams.noabasic?.yearofassessment)) {
			myinfoPerson["noa-basic"] = transformItemsWithAdditionalMock(mockParams.noabasic) as NoaBasicExtension;
		}

		if (!this.attributes) {
			return myinfoPerson;
		}

		return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
	}

	private checkIsSingaporeanOrPr(residentialStatusValue: string): boolean {
		return (
			residentialStatusValue === MyInfoResidentialCode.CITIZEN || residentialStatusValue === MyInfoResidentialCode.PR
		);
	}
}

/**
 * @description Returns new fake person with only the attributes listed in attributes param. Does not mutate.
 *
 * For the special field childrenbirthrecords, attributes can include childrenbirthrecords.name, childrenbirthrecords.sex etc.
 * @param person fake MyInfo person
 * @param attributes array of attributes to filter for
 */
function filterThroughMyInfoAttributes(person: PersonBasic, attributes: ReadonlyArray<string>): PersonBasic {
	const [childrenRawCbrAttributes, childrenNormalAttributes] = partition(attributes, (value) => value.startsWith("childrenbirthrecords."));
	const [sponsoredRawCbrAttributes, sponsoredNormalAttributes] = partition(attributes, (value) => value.startsWith("sponsoredchildrenrecords."));
	const [vehiclesRawCbrAttributes, vehiclesNormalAttributes] = partition(attributes, (value) => value.startsWith("vehicles."));
	const [drivinglicenceRawCbrAttributes] = partition(attributes, (value) => value.startsWith("drivinglicence."));

	const childrenFilteredPerson = filterThroughAttributes(person, childrenNormalAttributes);
	const sponsoredFilteredPerson = filterThroughAttributes(person, sponsoredNormalAttributes);
	const vehicleFilteredPerson = filterThroughAttributes(person, vehiclesNormalAttributes);
	let drivinglicenceFilteredPerson = {};

	if (childrenRawCbrAttributes.length > 0) {
		const childrenbirthrecordsAttributes = map(childrenRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
		// get filtered childrenbirthrecords
		const filteredChildrenbirthrecords = map(person.childrenbirthrecords, (cbr) => {
			const result = filterThroughAttributes(cbr, childrenbirthrecordsAttributes);
			return { ...result, ...generateDefaultMockResponse() };
		});
		set(childrenFilteredPerson, "childrenbirthrecords", filteredChildrenbirthrecords);
	}
	if (sponsoredRawCbrAttributes.length > 0) {
		const sponsoredBirthrecordsAttributes = map(sponsoredRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
		// get filtered childrenbirthrecords
		const filteredSponsoredChildrenbirthrecords = map(person.sponsoredchildrenrecords, (cbr) => {
			const result = filterThroughAttributes(cbr, sponsoredBirthrecordsAttributes);
			return { ...result, ...generateDefaultMockResponse() };
		});
		set(sponsoredFilteredPerson, "sponsoredchildrenrecords", filteredSponsoredChildrenbirthrecords);
	}
	if (vehiclesRawCbrAttributes.length > 0) {
		const vehicleBirthrecordsAttributes = map(vehiclesRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
		// get filtered vehicles
		const filteredVehicleChildrenbirthrecords = map(person.vehicles, (cbr) => {
			const result = filterThroughAttributes(cbr, vehicleBirthrecordsAttributes);
			return { ...result, ...generateDefaultMockResponse() };
		});
		set(vehicleFilteredPerson, "vehicles", filteredVehicleChildrenbirthrecords);
	}
	if (drivinglicenceRawCbrAttributes.length > 0) {
		// get filtered driving licences
		const drivingLicence = filterThroughDeepAttributes(person, drivinglicenceRawCbrAttributes);
		drivinglicenceFilteredPerson = {
			drivinglicence: {
				...drivingLicence["drivinglicence"],
				...generateDefaultMockResponse(),
			},
		};
	}
	return {
		...childrenFilteredPerson,
		...sponsoredFilteredPerson,
		...vehicleFilteredPerson,
		...drivinglicenceFilteredPerson,
	};
}

/**
 * @description Checks for nested attribute paths, does not work for object paths with array values
 * @param object fake person object
 * @param attributes array of attributes to filter for, e.g ['vehicles.status', 'drivinglicence.qdl.validity']
 */
function filterThroughAttributes(object: object, attributes: ReadonlyArray<string>): object {
	return attributes.reduce((accumulator, attrPath) => {
		const key = attrPath.split(".")[0];
		const attrValue = get(object, attrPath, null);
		if (!!attrValue) {
			return { ...accumulator, [key]: object[key] };
		}
		return accumulator;
	}, {});
}

/**
 * @description Checks for nested attribute paths, it only works for deep attributes objects with 3 layers e.g ['a.b.c']
 * @param object fake person object
 * @param attributes array of attributes to filter for, e.g ['drivinglicence.qdl.validity', 'drivinglicence.qdl.validity']
 */
function filterThroughDeepAttributes(object: object, attributes: ReadonlyArray<string>): object {
	return attributes.reduce((acc, current) => {
		const result = get(object, current);
		const tmp = { ...acc };
		set(tmp, current, result);
		return tmp;
	}, {});
}


/**
 * @description Return a set of require fields event if the consent attributes are not requesting such keys
 */
function generateDefaultMockResponse(): object {
	return {
		lastupdated: "2020-09-10",
		source: "1",
		classification: "C",
	};
}


export function transformChildBirthRecord(childbirthrecord: ChildrenBirthRecord, index: number): MyInfoComponents.Schemas.Childrenbirthrecords {
	return {
		source: "1",
		classification: "C",
		lastupdated: null,
		birthcertno: { value: childbirthrecord.birthcertno },
		name: { value: childbirthrecord.name || `nameless child ${index + 1}` },
		sex: { code: childbirthrecord.sex, desc: MyInfoSexCode.fn.toEnumDesc(childbirthrecord.sex) },
		lifestatus: { code: childbirthrecord.lifestatus, desc: MyInfoLifeStatusCode.fn.toEnumDesc(childbirthrecord.lifestatus) },
		dob: { value: isNaN(Date.parse(childbirthrecord.dob)) ? "2020-01-01" : childbirthrecord.dob },
		tob: { value: childbirthrecord.tob || "0000" },
		unavailable: false,

	} as MyInfoComponents.Schemas.Childrenbirthrecords;
}


export function transformItems(item: any) {
	return Object.keys(item).reduce((objectKey, key) => {
		if (item[key] === "") {
			return objectKey;
		}
		objectKey[key] = { value: key !== 'yearofassessment' && !isNaN(+item[key]) ? +item[key] : item[key] };
		return objectKey;
	}, {});
}


export function transformItemsWithAdditionalMock(item: any, defaultMockParams: boolean = true,) {
	const transformedItems = transformItems(item);
	const defaultItems = {
		source: "1",
		classification: "C",
		lastupdated: `${new Date().toISOString().split('T')[0]}`,
	};
	return { ...transformedItems, ...defaultItems };
}

