import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "F5994458N";
const name = ProfileArchetype.MR_SG_JOBLESS;

export const mrSGJobless: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.occupation = {
			"lastupdated": null,
			"code": null,
			"source": null,
			"classification": null,
			"desc": null,
		};

		return profile;
	},
};
