import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { MyinfoCountryCode, MyinfoNationalityCode, MyinfoOccupationCode, MyinfoSexCode } from "../../domain";

const id = "F5994458N";
const name = ProfileArchetype.MR_MY_DADDY_PERFECT;

export const mrMYDaddyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.sex.code = MyinfoSexCode.MALE;
		profile.sex.desc = MyinfoSexCode.fn.toEnumDesc(MyinfoSexCode.MALE);
		profile.nationality.code = MyinfoNationalityCode.MALAYSIAN;
		profile.birthcountry.code = MyinfoCountryCode.MALAYSIA;
		profile.residentialstatus.code = "";
		profile.residentialstatus.desc = "";
		profile.marital = {
			"lastupdated": "2020-09-10",
			"code": null,
			"source": "2",
			"classification": "C",
			"desc": null,
			"unavailable": false,
		};
		profile.marriagedate = {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "",
			"unavailable": false,
		};
		profile.occupation = {
			"lastupdated": "2018-05-21",
			"code": MyinfoOccupationCode.LEGISLATOR,
			"source": "2",
			"classification": "C",
			"desc": MyinfoOccupationCode.fn.toEnumDesc(MyinfoOccupationCode.LEGISLATOR),
			"unavailable": false,
		};

		profile.dialect = {
			"lastupdated": "2020-09-10",
			"code": "",
			"source": "2",
			"classification": "C",
			"desc": "",
			"unavailable": false,
		};

		return profile;
	},
};
