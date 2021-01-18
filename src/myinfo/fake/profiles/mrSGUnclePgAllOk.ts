import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_PG_ALL_OK;

export const mrSGUnclePgAllOk: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.pioneergen.message.code = "2";
		profile.pioneergen.message.desc = "You are eligible for the Pioneer Generation Package. For further enquiries, please contact 1800-2222-888.";
		profile.pioneergen.eligibility.value = true;
		profile.pioneergen.quantum.value = 200;
		profile.dob = {
			lastupdated: "2021-01-01",
			source: "1",
			classification: "C",
			value: "1948-01-01",
		};

		return profile;
	},
};
