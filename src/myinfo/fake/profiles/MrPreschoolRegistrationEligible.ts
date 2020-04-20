import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { preschoolEligibleChild_K1, preschoolEligibleChild_N1, preschoolEligibleChild_PG, preschoolIneligibleChild1 } from "./childbirthRecords";

const id = "T2446959F";
const name = ProfileArchetype.MR_PRESCHOOL_REGISTRATION_ELIGIBLE;

export const mrPreschoolRegistrationEligible: FakeProfile = {
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

		return profile;
	},
};
