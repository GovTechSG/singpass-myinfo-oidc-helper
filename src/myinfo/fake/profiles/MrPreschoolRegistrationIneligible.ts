import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { preschoolEligibleChild_IC, preschoolEligibleChild_N2, preschoolIneligibleChild2 } from "./childbirthRecords";

const id = "T2446959F";
const name = ProfileArchetype.MR_PRESCHOOL_REGISTRATION_INELIGIBLE;

export const mrPreschoolRegistrationIneligible: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.childrenbirthrecords = [
			preschoolEligibleChild_IC,
			preschoolEligibleChild_N2,
			preschoolIneligibleChild2,
		];

		return profile;
	},
};
