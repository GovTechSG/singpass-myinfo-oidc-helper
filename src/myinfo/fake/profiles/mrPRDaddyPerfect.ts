import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S2599302J";
const name = ProfileArchetype.MR_PR_DADDY_PERFECT;

export const mrPRDaddyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.nationality.value = "AD";
		profile.residentialstatus.value = "P";

		return profile;
	},
};
