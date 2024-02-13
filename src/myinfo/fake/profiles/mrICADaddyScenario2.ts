import * as _ from "lodash";
import {
	MyInfoComponents,
	MyInfoCountryPlaceCode,
	MyInfoMaritalStatusCode,
	MyInfoNationalityCitizenshipCode,
	MyInfoRaceCode,
	MyInfoResidentialCode,
	MyInfoSexCode,
} from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9005004D";
const name = ProfileArchetype.MR_ICA_PR_DADDY_SPOUSE_SCENARIO_2;

export const mrICADaddyScenario2: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);
		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);
		profile.race = {
			lastupdated: "2022-02-25",
			code: MyInfoRaceCode.MALAY,
			desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.MALAY),
			source: "1",
			classification: "C",
		};
		profile.dob = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "1990-02-02",
		};
		profile.residentialstatus = {
			lastupdated: "2018-06-01",
			code: MyInfoResidentialCode.PR,
			desc: MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR),
			source: "1",
			classification: "C",
		};
		profile.nationality.code = MyInfoNationalityCitizenshipCode.MALAYSIAN;
		profile.marriagecertno = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "M23456",
		};
		profile.marriagedate = {
			lastupdated: "2020-09-10",
			source: "2",
			classification: "C",
			value: "2020-09-10",
		};
		profile.countryofmarriage = {
			lastupdated: "2022-02-25",
			code: MyInfoCountryPlaceCode.SINGAPORE,
			desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
			source: "1",
			classification: "C",
		};
		profile.marital = {
			lastupdated: "2022-02-25",
			code: MyInfoMaritalStatusCode.MARRIED,
			desc: MyInfoMaritalStatusCode.fn.toEnumDesc(MyInfoMaritalStatusCode.MARRIED),
			source: "1",
			classification: "C",
		};

		return profile;
	},
};
