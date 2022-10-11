import * as _ from "lodash";
import { MyInfoPioneerGenerationMessageCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGUnclePgAllOk } from "./mrSGUnclePgAllOk";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_PG_NIL_STATUS;

export const mrSGUnclePgNilStatus: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGUnclePgAllOk.generate(profileName);
		profile.pioneergen.message.code = MyInfoPioneerGenerationMessageCode.NIL_STATUS;
		profile.pioneergen.message.desc = MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(MyInfoPioneerGenerationMessageCode.NIL_STATUS);
		profile.dob = {
			lastupdated: "2021-01-01",
			source: "1",
			classification: "C",
			value: "1948-01-01",
		};

		return profile;
	},
};
