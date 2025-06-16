import * as _ from "lodash";
import { MyInfoPioneerGenerationMessageCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_NON_PG;

export const mrSGUncleNonPg: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.pioneergen.message.code = MyInfoPioneerGenerationMessageCode.NON_PG;
		profile.pioneergen.message.desc = MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(
			MyInfoPioneerGenerationMessageCode.NON_PG,
		);
		profile.pioneergen.quantum.value = 0.0;
		profile.dob = {
			lastupdated: "2021-01-01",
			source: "1",
			classification: "C",
			value: "1955-01-01",
		};

		return profile;
	},
};
