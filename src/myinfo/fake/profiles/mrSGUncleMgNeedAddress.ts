import * as _ from "lodash";
import { MyInfoMerdekaGenerationMessageCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_MG_NEED_ADDR_UPDATE;

export const mrSGUncleMgNeedAddress: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.merdekagen.message.code = MyInfoMerdekaGenerationMessageCode.NEED_ADDRESS_UPDATE;
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
