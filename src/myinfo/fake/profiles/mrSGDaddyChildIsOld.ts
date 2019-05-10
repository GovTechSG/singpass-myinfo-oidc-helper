import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";

const id = "T2446959F";
const name = ProfileArchetype.MR_SG_DADDY_CHILD_IS_OLD;

export const mrSGDaddyChildIsOld: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.childrenbirthrecords = [ChildrenRecords.childSuperOld];

		return profile;
	},
};
