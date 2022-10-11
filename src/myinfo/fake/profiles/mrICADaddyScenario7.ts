
import * as _ from "lodash";
import { MyInfoComponents, MyInfoCountryCode, MyInfoMaritialStatusCode, MyInfoNationalityCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9005014A";
const name = ProfileArchetype.MR_ICA_SC_DADDY_MAIN_SCENARIO_7;

export const mrICADaddyScenario7: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);
		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);
		profile.race = {
			"lastupdated": "2022-02-25",
			"code": MyInfoRaceCode.CHINESE,
			"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
			"source": "1",
			"classification": "C",
		};
		profile.dob = {
			"lastupdated": "2022-02-25",
			"source": "1",
			"classification": "C",
			"value": "1990-02-07",
		};
		profile.residentialstatus = {
			"lastupdated": "2018-06-01",
			"code": MyInfoResidentialCode.CITIZEN,
			"desc": MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.CITIZEN),
			"source": "1",
			"classification": "C",
		};
		profile.nationality.code = MyInfoNationalityCode.SINGAPORE_CITIZEN;
		profile.marriagecertno = {
			"lastupdated": "2022-02-25",
			"source": "1",
			"classification": "C",
			"value": "M78901",
		};
		profile.marriagedate = {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "2020-09-10",
		};
		profile.countryofmarriage = {
			"lastupdated": "2022-02-25",
			"code": MyInfoCountryCode.SINGAPORE,
			"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
			"source": "1",
			"classification": "C",
		};
		profile.marital = {
			"lastupdated": "2022-02-25",
			"code": MyInfoMaritialStatusCode.MARRIED,
			"desc": MyInfoMaritialStatusCode.fn.toEnumDesc(MyInfoMaritialStatusCode.MARRIED),
			"source": "1",
			"classification": "C",
		};

		return profile;
	}
};
