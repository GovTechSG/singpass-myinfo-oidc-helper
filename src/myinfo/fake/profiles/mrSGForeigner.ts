import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrMYDaddyPerfect } from "./mrMYDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_MY_DADDY_PERFECT;

export const mrSGForeigner: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrMYDaddyPerfect.generate(profileName);
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
