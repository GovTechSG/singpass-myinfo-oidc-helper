import * as _ from "lodash";

import { Person } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";
import { profiles } from "./profiles/fake-profiles";

export interface MockParams {
	archetype: ProfileArchetype;
	marital?: string;
	marriagedate?: string;
	marriagecertno?: string;
	countryofmarriage?: string;
	occupation?: string;
	occupationfreeform?: string;
	dob?: string;
}

export interface IFakeMyInfoHelper {
	getPersonData: (mockParams: MockParams) => Person;
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
	public getPersonData = (mockParams: MockParams): Person => {
		const mockProfile = profiles.find((profile) => profile.name === mockParams.archetype);
		if (!mockProfile)
			return null;

		const myinfoPerson = {
			...mockProfile.generate(),
		};

		if (!_.isEmpty(mockParams.marital)) {
			myinfoPerson.marital.value = mockParams.marital;
		}

		if (!_.isEmpty(mockParams.marriagedate)) {
			myinfoPerson.marriagedate.value = mockParams.marriagedate;
		}

		if (!_.isEmpty(mockParams.marriagecertno)) {
			myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
		}

		if (!_.isEmpty(mockParams.countryofmarriage)) {
			myinfoPerson.countryofmarriage.value = mockParams.countryofmarriage;
		}

		if (!_.isEmpty(mockParams.dob)) {
			myinfoPerson.dob.value = mockParams.dob;
		}

		if (!_.isEmpty(mockParams.occupation)) {
			myinfoPerson.occupation.value = mockParams.occupation;
		} else {
			if (!_.isEmpty(mockParams.occupationfreeform)) {
				myinfoPerson.occupation.value = "";
				myinfoPerson.occupation.desc = mockParams.occupationfreeform;
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
 * @param person fake MyInfo person
 * @param attributes array of attributes to filter for
 */
function filterThroughMyInfoAttributes(person: Person, attributes: ReadonlyArray<string>): Person {
	const attrs = new Set(attributes);

	return _.toPairs(person)
		.filter(([k]) => attrs.has(k))
		.reduce((accumulator, [k, v]) => ({ ...accumulator, [k]: v }), {} as Person);
}
