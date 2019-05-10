import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { sex } from "../../domain/map";


const id = "T2446959F";
const name = ProfileArchetype.MRS_SG_MOMMY_PERFECT;

export const mrsSGMommyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.uinfin.value = id;

		profile.sex.code = "F";
		profile.sex.desc = sex.map.codeToDesc[profile.sex.code];

		return profile;
	},
};
