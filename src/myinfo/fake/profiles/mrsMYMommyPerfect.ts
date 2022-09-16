import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { aliasName } from "../profiles/common";
import { MyInfoCountryCode, MyInfoNationalityCode, MyInfoOccupationCode, MyInfoSexCode } from "../../domain";

const id = "F5994458N";
const name = ProfileArchetype.MRS_MY_MOMMY_PERFECT;

export const mrsMYMommyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);

		profile.aliasname = {
			lastupdated: "2021-03-19",
			source: "1",
			classification: "C",
			value: aliasName.LEE_XIU,
			unavailable: false,
		};
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.nationality.code = MyInfoNationalityCode.MALAYSIAN;
		profile.birthcountry.code = MyInfoCountryCode.MALAYSIA;

		profile.residentialstatus.code = "";
		profile.residentialstatus.desc = "";

		profile.marital = {
			"lastupdated": "2020-09-10",
			"code": null,
			"desc": null,
			"source": "2",
			"classification": "C",
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
			"value": MyInfoOccupationCode.fn.toEnumDesc(MyInfoOccupationCode.LEGISLATOR),
			"source": "2",
			"classification": "C",
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
