import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S1234567D";
const name = ProfileArchetype.MR_SG_UNCLE_GST_SCENARIO_2A2;

export const mrGstvUncle2a2: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.gstvoucher.exclusion.value = false;
		profile.gstvoucher.signup.value = false;
		profile.gstvoucher.gstregular.value = 0;
		profile.gstvoucher.gstmedisave.value = 0;
		profile.gstvoucher.gstspecial.value = 300;
		profile.merdekagen.eligibility.value = true;
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 61}-01-01`,
		};

		return profile;
	},
};
