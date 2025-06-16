import * as _ from "lodash";
import {
	MyInfoComponentsV4,
	MyInfoCountryPlaceCode,
	MyInfoMaritalStatusCode,
	MyInfoNationalityCitizenshipCode,
	MyInfoRaceCode,
	MyInfoResidentialCode,
	MyInfoSexCode,
} from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9005001Z";
const name = ProfileArchetype.MRS_ICA_SG_MOMMY_MAIN_SCENARIO_1;

export const mrsICAMommyScenario1: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);
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
			value: "1990-01-01",
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
			value: "M12345",
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
