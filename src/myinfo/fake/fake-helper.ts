import { get, isEmpty, map, partition, set } from "lodash";
import { domainMap, myInfoDomain } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";
import { profiles } from "./profiles/fake-profiles";

enum GVS {
	true = "true",
	false = "false",
}

export enum ChildrenOverrideMode {
	partial = "partial",
	full = "full",
	appendToExisting = "append",
}
export interface ChildrenBirthRecord {
	birthcertno: string;
	name?: string;
	dob?: string;
	tob?: string;
	sex?: string;
	lifestatus?: string;
}
export interface MockParams {
	archetype: ProfileArchetype;
	userdisplayname?: string;
	// tslint:disable-next-line: max-union-size
	marital?: "1" | "2" | "3" | "5" | "";
	marriagedate?: string;
	divorcedate?: string;
	marriagecertno?: string;
	countryofmarriage?: string;
	childrenbirthrecords?: ChildrenBirthRecord[];
	childrenoverridemode?: ChildrenOverrideMode;
	// tslint:disable-next-line: max-union-size
	residentialstatus?: "A" | "C" | "P" | "U" | "N";
	occupation?: string;
	occupationfreeform?: string;
	dob?: string;
	gstvyear?: number;
	gvs?: GVS;
	merdekageneligible?: boolean;
	merdekagenquantum?: number;
	// tslint:disable-next-line: max-union-size
	merdekagenmessagecode?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
	// tslint:disable-next-line:max-union-size
	hdbtype?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
	// tslint:disable-next-line:max-union-size
	housingtype?: "121" | "122" | "123" | "131" | "132" | "139";
	// tslint:disable-next-line:max-union-size
	drivingqdlvalidity?: "V" | "E" | "I" | "N";
	vehiclestatus?: "1" | "2";
}

type PersonBasic = myInfoDomain.Components.Schemas.PersonBasic;

export interface IFakeMyInfoHelper {
	getPersonBasic: (mockParams: MockParams) => PersonBasic;
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
	public getPersonBasic = (mockParams: MockParams): PersonBasic => {
		const mockProfile = profiles.find((profile) => profile.name === mockParams.archetype);
		if (!mockProfile) {
			return null;
		}

		const myinfoPerson = {
			...mockProfile.generate(),
		};

		if (!isEmpty(mockParams.residentialstatus)) {
			myinfoPerson.residentialstatus.code = mockParams.residentialstatus;
			myinfoPerson.residentialstatus.desc = domainMap.residentialstatus.map.codeToDesc[mockParams.residentialstatus];
		}

		if (!isEmpty(mockParams.marital)) {
			myinfoPerson.marital.code = mockParams.marital;
			myinfoPerson.marital.desc = domainMap.marital.map.codeToDesc[mockParams.marital];
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
			myinfoPerson.countryofmarriage.desc = domainMap.countryofmarriage.map.codeToDesc[mockParams.countryofmarriage];
		}

		if (!isEmpty(mockParams.dob)) {
			myinfoPerson.dob.value = mockParams.dob;
			const birthYear = new Date(myinfoPerson.dob.value).getFullYear();
			if (birthYear <= 1949) {
				// pioneergen
				myinfoPerson.merdekagen.eligibility.value = false;
				myinfoPerson.pioneergen.eligibility.value = true;
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
				myinfoPerson.merdekagen.eligibility.value = true;
				myinfoPerson.pioneergen.eligibility.value = false;
			}
		}

		if (!isEmpty(mockParams.gstvyear)) {
			myinfoPerson.gstvoucher.year.value = mockParams.gstvyear;
		}

		if (!isEmpty(mockParams.gvs)) {
			myinfoPerson.gstvoucher.signup.value = (mockParams.gvs || "").toLocaleLowerCase() === GVS.true;
		}

		if (!isEmpty(mockParams.occupation)) {
			myinfoPerson.occupation.code = mockParams.occupation;
			myinfoPerson.occupation.desc = domainMap.occupation.map.codeToDesc[mockParams.occupation];
			myinfoPerson.occupation.value = null;
		} else {
			if (!isEmpty(mockParams.occupationfreeform)) {
				myinfoPerson.occupation.value = mockParams.occupationfreeform;
				myinfoPerson.occupation.code = null;
				myinfoPerson.occupation.desc = null;
			}
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

		if (!isEmpty(mockParams.hdbtype)) {
			myinfoPerson.hdbtype = {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				code: mockParams.hdbtype,
				desc: domainMap.hdbtype.map.codeToDesc[mockParams.hdbtype],
			};
			myinfoPerson.housingtype = {
				lastupdated: "2020-08-26",
				code: "",
				source: "1",
				classification: "C",
				desc: "",
			};
		} else if (!isEmpty(mockParams.housingtype)) {
			myinfoPerson.housingtype = {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				code: mockParams.housingtype,
				desc: domainMap.housingtype.map.codeToDesc[mockParams.housingtype],
			};
			myinfoPerson.hdbtype = {
				lastupdated: "2020-08-26",
				code: "",
				source: "1",
				classification: "C",
				desc: "",
			};
		}

		if (!isEmpty(mockParams.drivingqdlvalidity)) {
			myinfoPerson.drivinglicence = {
				revocation: {
					startdate: {
						value: "",
					},
					enddate: {
						value: "",
					},
				},
				totaldemeritpoints: {
					value: 0,
				},
				disqualification: {
					startdate: {
						value: "",
					},
					enddate: {
						value: "",
					},
				},
				qdl: {
					expirydate: {
						value: "",
					},
					validity: {
						code: mockParams.drivingqdlvalidity,
						desc: domainMap.qdlValidity.map.codeToDesc[mockParams.drivingqdlvalidity],
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
						value: "",
					},
					validity: {
						code: "",
						desc: "",
					},
					classes: [],
				},
				source: "1",
				classification: "C",
				comstatus: {
					code: "Y",
					desc: "Eligible",
				},
				photocardserialno: {
					value: "",
				},
				suspension: {
					startdate: {
						value: "",
					},
					enddate: {
						value: "",
					},
				},
			};
			if (mockParams.drivingqdlvalidity === "N") {
				myinfoPerson.drivinglicence.qdl.classes = [];
			}
		}

		if (!isEmpty(mockParams.vehiclestatus)) {
			myinfoPerson.vehicles = [
				{
					roadtaxexpirydate: {
						value: "2020-06-06",
					},
					engineno: {
						value: "4G13NU1453",
					},
					attachment3: {
						value: "",
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
						value: "SBP1818T",
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
						value: "",
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
						value: "",
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
						value: "",
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
						value: "",
					},
					iulabelno: {
						value: "",
					},
					quotapremium: {
						value: 0,
					},
					status: {
						code: mockParams.vehiclestatus,
						desc: domainMap.status.map.codeToDesc[mockParams.vehiclestatus],
					},
				},
			];
		}
		if (!isEmpty(mockParams.userdisplayname)) {
			myinfoPerson.name.value = mockParams.userdisplayname;
		}

		if (!isEmpty(mockParams.childrenbirthrecords)) {
			const childrenBirthRecords = mockParams.childrenbirthrecords.map(transformChildBirthRecord);

			switch (mockParams.childrenoverridemode) {
				case ChildrenOverrideMode.appendToExisting:
					myinfoPerson.childrenbirthrecords = [...myinfoPerson.childrenbirthrecords, ...childrenBirthRecords];
					break;

				case ChildrenOverrideMode.partial:
					if (childrenBirthRecords.length < myinfoPerson.childrenbirthrecords.length) {
						childrenBirthRecords.forEach((childBirthRecord, index) => {
							myinfoPerson.childrenbirthrecords[index] = childBirthRecord;
						});
					} else {
						myinfoPerson.childrenbirthrecords = childrenBirthRecords;
					}
					break;
				case ChildrenOverrideMode.full:
					myinfoPerson.childrenbirthrecords = childrenBirthRecords;
					break;
			}
		}

		if (!this.attributes) {
			return myinfoPerson;
		}

		return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
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


export function transformChildBirthRecord(childbirthrecord: ChildrenBirthRecord, index: number) {
	return {
		birthcertno: { value: childbirthrecord.birthcertno },
		name: { value: childbirthrecord.name || `nameless child ${index + 1}` },
		sex: { code: childbirthrecord.sex.charAt(0), desc: childbirthrecord.sex },
		lifestatus: { code: childbirthrecord.lifestatus.charAt(0), desc: childbirthrecord.lifestatus },
		dob: { value: isNaN(Date.parse(childbirthrecord.dob)) ? "2020-01-01" : childbirthrecord.dob },
		tob: { value: childbirthrecord.tob || "0000" },
	} as myInfoDomain.Components.Schemas.Childrenbirthrecords;
}
