import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "T2446959F";
const name = ProfileArchetype.MR_SG_DADDY_CHILD_NONE;

export const mrSGDaddyChildNone: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.uinfin.value = id;

		profile.childrenbirthrecords = [];

		return profile;
	},
};
