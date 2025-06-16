import * as _ from "lodash";
import { MyInfoPioneerGenerationMessageCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_PG_ALL_OK;

export const mrSGUnclePgAllOk: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.pioneergen.message.code = MyInfoPioneerGenerationMessageCode.ALL_OK;
		profile.pioneergen.message.desc = MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(
			MyInfoPioneerGenerationMessageCode.ALL_OK,
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
