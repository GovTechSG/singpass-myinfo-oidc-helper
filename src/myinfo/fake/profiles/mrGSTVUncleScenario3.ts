import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S1234567D";
const name = ProfileArchetype.MR_SG_UNCLE_GST_SCENARIO_3;

export const mrGstvUncle3: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.gstvoucher.exclusion.value = true;
		profile.gstvoucher.signup.value = true;
		profile.gstvoucher.gstregular.value = 100;
		profile.gstvoucher.gstmedisave.value = 200;
		profile.gstvoucher.gstspecial.value = 0;

		return profile;
	},
};
