import * as _ from "lodash";
import { MyinfoPioneerGenerationMessageCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGUnclePgAllOk } from "./mrSGUnclePgAllOk";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_PG_CALL_RECEIVE;

export const mrSGUnclePgCallReceive: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGUnclePgAllOk.generate(profileName);
		profile.pioneergen.message.code = MyinfoPioneerGenerationMessageCode.CALL_TO_RECEIVE;
		profile.pioneergen.message.desc = MyinfoPioneerGenerationMessageCode.fn.toEnumDesc(MyinfoPioneerGenerationMessageCode.CALL_TO_RECEIVE);

		return profile;
	},
};
