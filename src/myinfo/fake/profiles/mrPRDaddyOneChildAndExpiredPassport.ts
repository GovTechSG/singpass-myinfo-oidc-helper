import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";
import { MyinfoResidentialCode } from "../../domain";

const id = "S7936715Z";
const name = ProfileArchetype.MR_PR_DADDY_ONE_CHILD;

export const mrPRDaddyOneChildAndExpiredPassport: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.residentialstatus.code = MyinfoResidentialCode.PR;
		profile.residentialstatus.desc = MyinfoResidentialCode.fn.toEnumDesc(MyinfoResidentialCode.PR);

		profile.childrenbirthrecords = [ChildrenRecords.childYoungest];
		profile.passportnumber = {
			"lastupdated": "2018-05-10",
			"source": "1",
			"classification": "C",
			"value": "L3280034",
			"unavailable": false,
		},
			profile.passportexpirydate = {
				"lastupdated": "2018-05-10",
				"source": "1",
				"classification": "C",
				"value": "2011-09-10",
				"unavailable": false,
			};
		return profile;
	},
};
