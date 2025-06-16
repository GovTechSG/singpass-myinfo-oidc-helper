import * as _ from "lodash";
import {
	MyInfoComponentsV4,
	MyInfoNationalityCitizenshipCode,
	MyInfoRaceCode,
	MyInfoResidentialCode,
	MyInfoSexCode,
} from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9005011G";
const name = ProfileArchetype.MRS_ICA_PR_MOMMY_MAIN_SCENARIO_6;

export const mrsICAMommyScenario6: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);
		profile.race = {
			lastupdated: "2022-02-25",
			code: MyInfoRaceCode.INDIAN,
			desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.INDIAN),
			source: "1",
			classification: "C",
		};
		profile.dob = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "1990-01-06",
		};
		profile.residentialstatus = {
			lastupdated: "2018-06-01",
			code: MyInfoResidentialCode.PR,
			desc: MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR),
			source: "1",
			classification: "C",
		};
		profile.nationality.code = MyInfoNationalityCitizenshipCode.MALAYSIAN;

		return profile;
	},
};
