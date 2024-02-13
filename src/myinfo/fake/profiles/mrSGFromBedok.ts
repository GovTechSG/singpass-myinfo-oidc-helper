import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8752571F";
const name = ProfileArchetype.MR_SG_FROM_BEDOK;

export const mrSGFromBedok: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.regadd = {
			...profile.regadd,
			block: { value: "634" },
			street: { value: "BEDOK STREET" },
			postal: { value: "458634" },
		};
		profile.dob = {
			lastupdated: "2018-06-01",
			source: "1",
			classification: "C",
			value: "1983-10-06",
		};

		return profile;
	},
};
