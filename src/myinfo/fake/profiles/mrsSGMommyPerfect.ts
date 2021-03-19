import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { sex } from "../../domain/map";
import { preschoolEligibleChild2_N1, preschoolEligibleChild_K2 } from "./childbirthRecords";
import { aliasName } from "../profiles/common";

const id = "T2446959F";
const name = ProfileArchetype.MRS_SG_MOMMY_PERFECT;

export const mrsSGMommyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);

		profile.aliasname = {
			lastupdated: "2021-03-19",
			source: "1",
			classification: "C",
			value: aliasName.LEE_XIU,
		};
		profile.sex.code = "F";
		profile.sex.desc = sex.map.codeToDesc[profile.sex.code];

		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: "1988-10-16",
		};

		profile.childrenbirthrecords = [
			preschoolEligibleChild_K2,
			preschoolEligibleChild2_N1,
		];

		return profile;
	},
};
