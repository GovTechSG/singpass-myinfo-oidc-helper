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

const id = "S9005009E";
const name = ProfileArchetype.MRS_ICA_SC_MOMMY_SPOUSE_SCENARIO_5;

export const mrsICAMommyScenario5: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);
		profile.race = {
			lastupdated: "2022-02-25",
			code: MyInfoRaceCode.CHINESE,
			desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
			source: "1",
			classification: "C",
		};
		profile.dob = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "1990-01-05",
		};
		profile.residentialstatus = {
			lastupdated: "2018-06-01",
			code: MyInfoResidentialCode.CITIZEN,
			desc: MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.CITIZEN),
			source: "1",
			classification: "C",
		};
		profile.nationality.code = MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN;
		profile.marriagecertno = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "M67891",
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
