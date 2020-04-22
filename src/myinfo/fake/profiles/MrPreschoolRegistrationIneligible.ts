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
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: "1985-10-06",
		};

		return profile;
	},
};
