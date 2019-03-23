import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";


const id = "F5994458N";
const name = ProfileArchetype.MR_MY_DADDY_PERFECT;

export const mrMYDaddyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.sex.value = "M";
		profile.nationality.value = "MY";
		profile.birthcountry.value = "MY";
		profile.residentialstatus.value = "A";
		profile.passportnumber.value = "A00000000";

		return profile;
	},
};
