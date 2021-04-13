import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S1234567D";
const name = ProfileArchetype.MR_SG_UNCLE_GST_SCENARIO_1A2;

export const mrGstvUncle1a2: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.gstvoucher.exclusion.value = false;
		profile.gstvoucher.signup.value = true;
		profile.gstvoucher.gstregular.value = 100;
		profile.gstvoucher.gstmedisave.value = 0;
		profile.gstvoucher.gstspecial.value = 0;
		profile.merdekagen.eligibility.value = true;
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 61}-01-01`,
			unavailable: false,
		};

		return profile;
	},
};
