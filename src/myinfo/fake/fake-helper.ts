import { isEmpty, map, partition, set, toPairs } from "lodash";
import { domainMap, myInfoDomain } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";
import { profiles } from "./profiles/fake-profiles";

enum GVS {
	true = "true",
	false = "false",
}

export interface MockParams {
	archetype: ProfileArchetype;
	// tslint:disable-next-line: max-union-size
	marital?: "1" | "2" | "3" | "5";
	marriagedate?: string;
	marriagecertno?: string;
	countryofmarriage?: string;
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

		if (!isEmpty(mockParams.marriagecertno)) {
			myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
		}

		if (!isEmpty(mockParams.countryofmarriage)) {
			myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage;
			myinfoPerson.countryofmarriage.desc = domainMap.countryofmarriage.map.codeToDesc[mockParams.countryofmarriage];
		}

		if (!isEmpty(mockParams.dob)) {
			myinfoPerson.dob.value = mockParams.dob;
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
	const childrenFilteredPerson = filterThroughAttributes(person, childrenNormalAttributes);
	const sponsoredFilteredPerson = filterThroughAttributes(person, sponsoredNormalAttributes);

	if (childrenRawCbrAttributes.length > 0) {
		const childrenbirthrecordsAttributes = map(childrenRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
		// get filtered childrenbirthrecords
		const filteredChildrenbirthrecords = map(person.childrenbirthrecords, (cbr) => filterThroughAttributes(cbr, childrenbirthrecordsAttributes));
		set(childrenFilteredPerson, "childrenbirthrecords", filteredChildrenbirthrecords);
	}
	if (sponsoredRawCbrAttributes.length > 0) {
		const sponsoredBirthrecordsAttributes = map(sponsoredRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
		// get filtered childrenbirthrecords
		const filteredSponsoredChildrenbirthrecords = map(person.sponsoredchildrenrecords, (cbr) => filterThroughAttributes(cbr, sponsoredBirthrecordsAttributes));
		set(sponsoredFilteredPerson, "sponsoredchildrenrecords", filteredSponsoredChildrenbirthrecords);
	}
	return {
		...childrenFilteredPerson,
		...sponsoredFilteredPerson,
	};
}

function filterThroughAttributes(object: object, attributes: ReadonlyArray<string>): object {
	const attrs = new Set(attributes);
	return toPairs(object)
		.filter(([k]) => attrs.has(k))
		.reduce((accumulator, [k, v]) => ({ ...accumulator, [k]: v }), {});
}
