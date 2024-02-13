import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { preschoolEligibleChild2_N1, preschoolEligibleChild_K2 } from "./childbirthRecords";
import { aliasName } from "../profiles/common";
import { MyInfoSexCode } from "../../domain";

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
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: "1988-10-16",
		};

		profile.childrenbirthrecords = [preschoolEligibleChild_K2, preschoolEligibleChild2_N1];

		return profile;
	},
};
