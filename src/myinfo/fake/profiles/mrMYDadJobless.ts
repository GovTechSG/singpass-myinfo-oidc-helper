import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrMYDaddyPerfect } from "./mrMYDaddyPerfect";

const id = "G9403340W";
const name = ProfileArchetype.MR_MY_DAD_JOBLESS;

export const mrMYDadJobless: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrMYDaddyPerfect.generate(profileName);
		profile.occupation = {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "",
		};

		return profile;
	},
};
