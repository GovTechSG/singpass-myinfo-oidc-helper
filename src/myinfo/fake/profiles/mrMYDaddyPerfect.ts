import * as _ from "lodash";
import { MyInfoCountryPlaceCode, MyInfoNationalityCitizenshipCode, MyInfoSexCode } from "src/types";
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
		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);
		profile.nationality.code = MyInfoNationalityCitizenshipCode.MALAYSIAN;
		profile.birthcountry.code = MyInfoCountryPlaceCode.MALAYSIA;
		profile.residentialstatus.code = "";
		profile.residentialstatus.desc = "";
		profile.marital = {
			lastupdated: "2020-09-10",
			code: null,
			source: "2",
			classification: "C",
			desc: null,
		};
		profile.marriagedate = {
			lastupdated: "2020-09-10",
			source: "2",
			classification: "C",
			value: "",
		};
		profile.passtype = {
			code: "RPass",
			desc: "Work Permit",
			classification: "C",
			source: "1",
			lastupdated: "2025-01-01",
		};
		profile.dialect = {
			lastupdated: "2020-09-10",
			code: "",
			source: "2",
			classification: "C",
			desc: "",
		};

		return profile;
	},
};
