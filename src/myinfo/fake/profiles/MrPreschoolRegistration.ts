import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { preschoolEligibleChild_K1, preschoolEligibleChild_N1, preschoolEligibleChild_PG, preschoolIneligibleChild1 } from "./childbirthRecords";

const id = "T2446959F";
const name = ProfileArchetype.MR_PRESCHOOL_REGISTRATION;

export const mrPreschoolRegistration: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.childrenbirthrecords = [
			preschoolEligibleChild_PG,
			preschoolEligibleChild_N1,
			preschoolEligibleChild_K1,
			preschoolIneligibleChild1,
		];
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: "1985-10-06",
		};

		return profile;
	},
};
