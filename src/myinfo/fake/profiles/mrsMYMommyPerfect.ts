import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { residentialstatus, sex } from "../../domain/map";


const id = "F5994458N";
const name = ProfileArchetype.MRS_MY_MOMMY_PERFECT;

export const mrsMYMommyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.uinfin.value = id;

		profile.sex.code = "F";
		profile.sex.desc = sex.map.codeToDesc[profile.sex.code];

		profile.nationality.code = "MY";
		profile.birthcountry.code = "MY";

		profile.residentialstatus.code = "A";
		profile.residentialstatus.desc = residentialstatus.map.codeToDesc[profile.residentialstatus.code];

		profile.passportnumber.value = "A00000000";

		return profile;
	},
};
