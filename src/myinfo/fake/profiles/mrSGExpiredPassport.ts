import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_EXPIRED_PASSPORT;

export const mrSGExpiredPassport: FakeProfile = {
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
			"value": "L3280034",
		},
			profile.passportexpirydate = {
				"lastupdated": "",
				"source": "1",
				"classification": "C",
				"value": "2011-09-10",
			};

		return profile;
	},
};
