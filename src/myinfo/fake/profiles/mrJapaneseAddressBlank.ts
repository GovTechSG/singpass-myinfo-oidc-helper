import * as _ from "lodash";
import { MyInfoCountryCode, MyInfoNationalityCode, MyInfoOccupationCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "F5316757T";
const name = ProfileArchetype.MR_JAPANESE_ADDRESS_BLANK;

export const mrJapaneseAddressBlank: FakeProfile = {
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
		profile.employment = {
			classification: "C",
			source: "1",
			lastupdated: "2019-03-26",
			value: "Google Pte Ltd",
			unavailable: false
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
		(profile as any).regadd = {
			"type": "",
			"unit": { "value": "" },
			"block": { "value": "" },
			"floor": { "value": "" },
			"postal": { "value": "" },
			"street": { "value": "" },
			"building": { "value": "" },
			"country": {
				"code": "",
				"desc": "",
			},
			"classification": "C",
			"source": "3",
			"lastupdated": "2018-05-10",
		};
		profile.dob = {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "1983-10-06",
			"unavailable": false,
		};

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
			"source": "2",
			"classification": "C",
			"value": MyInfoOccupationCode.fn.toEnumDesc(MyInfoOccupationCode.LEGISLATOR),
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
