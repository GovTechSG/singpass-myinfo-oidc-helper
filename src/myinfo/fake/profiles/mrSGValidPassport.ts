import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_DADDY_PERFECT;

export const mrSGValidPassport: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.passportnumber = {
			"lastupdated": "",
			"source": "1",
			"classification": "C",
			"value": "L3280033",
		},
			profile.passportexpirydate = {
				"lastupdated": "",
				"source": "1",
				"classification": "C",
				"value": "2030-09-10",
			};

		return profile;
	},
};
