import * as _ from "lodash";
import { MyInfoMerdekaGenerationMessageCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_MG_NEED_MEDISAVE;

export const mrSGUncleMgNeedMedisave: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.merdekagen.message.code = MyInfoMerdekaGenerationMessageCode.NEED_MEDISAVE_TOPUP;
		profile.merdekagen.eligibility.value = true;
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `1959-01-01`,
		};

		return profile;
	},
};
