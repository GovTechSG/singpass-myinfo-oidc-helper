import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrsMYMommyPerfect } from "./mrsMYMommyPerfect";

const id = "G9403340W";
const name = ProfileArchetype.MRS_MY_MOM_JOBLESS;

export const mrsMYMomJobless: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrsMYMommyPerfect.generate(profileName);
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
