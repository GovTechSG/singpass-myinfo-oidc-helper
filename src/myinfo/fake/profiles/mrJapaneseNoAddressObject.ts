import * as _ from "lodash";
import { MyInfoCountryCode, MyInfoNationalityCode, MyInfoOccupationCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "F2734981K";
const name = ProfileArchetype.MR_JAPANESE_NO_ADDRESS_OBJECT;

export const mrJapaneseNoAddressObject: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.residentialstatus = {
			"code": "",
			"desc": "",
			"source": "3",
			"classification": "C",
			"lastupdated": "",
			"unavailable": false,
		};
		profile.nationality = {
			"code": MyInfoNationalityCode.JAPANESE,
			"desc": MyInfoNationalityCode.fn.toEnumDesc(MyInfoNationalityCode.JAPANESE),
			"source": "1",
			"classification": "C",
			"lastupdated": "2019-09-18",
			"unavailable": false,
		};
		profile.birthcountry = {
			"code": MyInfoCountryCode.JAPAN,
			"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.JAPAN),
			"source": "1",
			"classification": "C",
			"lastupdated": "2019-09-18",
			"unavailable": false,

		};
		profile.dob = {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "1983-10-06",
			"unavailable": false,
		};
		profile.regadd = undefined;

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
			"code": MyInfoOccupationCode.LEGISLATOR,
			"source": "2",
			"classification": "C",
			"desc": MyInfoOccupationCode.fn.toEnumDesc(MyInfoOccupationCode.LEGISLATOR),
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
