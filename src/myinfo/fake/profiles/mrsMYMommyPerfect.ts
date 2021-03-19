import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { sex } from "../../domain/map";
import { aliasName } from "../profiles/common";

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
		};
		profile.sex.code = "F";
		profile.sex.desc = sex.map.codeToDesc[profile.sex.code];

		profile.nationality.code = "MY";
		profile.birthcountry.code = "MY";

		profile.residentialstatus.code = "";
		profile.residentialstatus.desc = "";

		profile.marital = {
			"lastupdated": "2020-09-10",
			"code": "",
			"source": "2",
			"classification": "C",
			"desc": "",
		};

		profile.marriagedate = {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "",
		};

		profile.occupation = {
			"lastupdated": "2018-05-21",
			"code": "11110",
			"source": "2",
			"classification": "C",
			"desc": "LEGISLATOR",
		};

		profile.dialect = {
			"lastupdated": "2020-09-10",
			"code": "",
			"source": "2",
			"classification": "C",
			"desc": "",
		};

		return profile;
	},
};
