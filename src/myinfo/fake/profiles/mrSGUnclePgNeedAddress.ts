import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGUnclePgAllOk } from "./mrSGUnclePgAllOk";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_PG_NEED_ADDR_UPDATE;

export const mrSGUnclePgNeedAddress: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGUnclePgAllOk.generate(profileName);
		profile.pioneergen.message.code = "3";
		profile.pioneergen.message.desc = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to receive your Pioneer Generation card.";

		return profile;
	},
};
