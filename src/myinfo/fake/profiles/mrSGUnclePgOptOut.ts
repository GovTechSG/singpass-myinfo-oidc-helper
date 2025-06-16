import * as _ from "lodash";
import { MyInfoPioneerGenerationMessageCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGUncleNonPg } from "./mrSGUncleNonPg";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_PG_OPT_OUT;

export const mrSGUnclePgOptOut: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGUncleNonPg.generate(profileName);
		profile.pioneergen.message.code = MyInfoPioneerGenerationMessageCode.OPT_OUT;
		profile.pioneergen.message.desc = MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(
			MyInfoPioneerGenerationMessageCode.OPT_OUT,
		);
		profile.dob = {
			lastupdated: "2021-01-01",
			source: "1",
			classification: "C",
			value: "1948-01-01",
		};

		return profile;
	},
};
