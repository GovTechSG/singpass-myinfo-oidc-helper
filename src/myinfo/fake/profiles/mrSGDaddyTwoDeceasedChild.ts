import * as _ from "lodash";
import { ChildrenRecords } from "./childbirthRecords";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S4315482F";
const name = ProfileArchetype.MR_SG_DADDY_TWO_DECEASED_CHILD;

export const mrSGDaddyTwoDeceasedChild: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.childrenbirthrecords = [ChildrenRecords.child2MonthsOld, ChildrenRecords.childDeceased1, ChildrenRecords.childDeceased2];

		return profile;
	},
};
