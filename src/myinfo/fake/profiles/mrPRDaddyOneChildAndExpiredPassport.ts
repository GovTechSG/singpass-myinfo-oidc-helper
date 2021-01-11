import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";
import { residentialstatus } from "../../domain/map";

const id = "S7936715Z";
const name = ProfileArchetype.MR_PR_DADDY_ONE_CHILD;

export const mrPRDaddyOneChildAndExpiredPassport: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.residentialstatus.code = "P";
		profile.residentialstatus.desc = residentialstatus.map.codeToDesc[profile.residentialstatus.code];

		profile.childrenbirthrecords = [ChildrenRecords.childYoungest];
		profile.passportnumber = {
			"lastupdated": "2018-05-10",
			"source": "1",
			"classification": "C",
			"value": "L3280034",
		},
			profile.passportexpirydate = {
				"lastupdated": "2018-05-10",
				"source": "1",
				"classification": "C",
				"value": "2011-09-10",
			};
		return profile;
	},
};
