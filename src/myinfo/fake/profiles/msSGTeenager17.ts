import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { aliasName } from "../profiles/common";
import { MyInfoSexCode } from "../../domain";

const id = "T0834325F";
const name = ProfileArchetype.MS_SG_TEENAGER_17;

export const msSgTeenager17: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.silversupport.eligibility.value = false;

		profile.aliasname = {
			lastupdated: "2021-03-19",
			source: "1",
			classification: "C",
			value: aliasName.LEE_XIU,
			unavailable: false,
		};
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 17}-01-01`,
			unavailable: false,
		};
		profile.marital = {
			lastupdated: "2021-03-19",
			code: null,
			source: "2",
			classification: "C",
			desc: null,
			unavailable: false,
		};
		profile.marriagedate = {
			lastupdated: "2021-03-19",
			source: "2",
			classification: "C",
			value: "",
			unavailable: false,
		};
		profile.childrenbirthrecords = [];
		profile.sponsoredchildrenrecords = [];

		return profile;
	},
};
