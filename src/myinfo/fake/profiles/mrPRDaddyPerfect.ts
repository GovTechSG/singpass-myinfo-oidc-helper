import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { residentialstatus } from "../../domain/map";
import { preschoolEligibleChild2_K2, preschoolEligibleChild2_N2, preschoolEligibleChild2_PG, preschoolIneligibleChild2 } from "./childbirthRecords";

const id = "S2599302J";
const name = ProfileArchetype.MR_PR_DADDY_PERFECT;

export const mrPRDaddyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.nationality.code = "AD";
		profile.residentialstatus.code = "P";
		profile.residentialstatus.desc = residentialstatus.map.codeToDesc[profile.residentialstatus.code];

		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: "1979-06-14",
		};

		profile.childrenbirthrecords = [
			preschoolEligibleChild2_N2,
			preschoolEligibleChild2_PG,
			preschoolEligibleChild2_K2,
			preschoolIneligibleChild2,
		];

		return profile;
	},
};
