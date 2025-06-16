import * as _ from "lodash";
import { MyInfoSexCode } from "../../../types";
import { aliasName } from "../profiles/common";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "T0834325F";
const name = ProfileArchetype.MS_SG_TEENAGER_17;

export const msSgTeenager17: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);

		profile.aliasname = {
			lastupdated: "2021-03-19",
			source: "1",
			classification: "C",
			value: aliasName.LEE_XIU,
		};
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 17}-01-01`,
		};
		profile.marital = {
			lastupdated: "2021-03-19",
			code: null,
			source: "2",
			classification: "C",
			desc: null,
		};
		profile.marriagedate = {
			lastupdated: "2021-03-19",
			source: "2",
			classification: "C",
			value: "",
		};
		profile.childrenbirthrecords = [];
		profile.sponsoredchildrenrecords = [];

		return profile;
	},
};
