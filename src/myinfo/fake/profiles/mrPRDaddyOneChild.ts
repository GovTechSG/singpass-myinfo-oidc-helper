import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";

const id = "S7936715Z";
const name = ProfileArchetype.MR_PR_DADDY_ONE_CHILD;

export const mrPRDaddyOneChild: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.residentialstatus.value = "P";

		profile.childrenbirthrecords = [ChildrenRecords.childYoungest];

		return profile;
	},
};
