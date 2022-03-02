
import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { MyInfoComponents, MyInfoCountryCode, MyInfoMaritialStatusCode, MyInfoNationalityCode, MyInfoOccupationCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode } from "../../domain";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9005011G";
const name = ProfileArchetype.MRS_ICA_PR_MOMMY_MAIN_SCENARIO_6;

export const mrsICAMommyScenario6: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);
		profile.race = {
			"lastupdated": "2022-02-25",
			"code": MyInfoRaceCode.INDIAN,
			"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.INDIAN),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		},
		profile.dob = {
			"lastupdated": "2022-02-25",
			"source": "1",
			"classification": "C",
			"value": "1990-01-06",
			"unavailable": false,
		};
		profile.residentialstatus = {
			"lastupdated": "2018-06-01",
			"code": MyInfoResidentialCode.PR,
			"desc": MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		},
		profile.nationality.code = MyInfoNationalityCode.MALAYSIAN;

		return profile;
	}
};
