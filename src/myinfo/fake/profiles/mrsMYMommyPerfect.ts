import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { aliasName } from "../profiles/common";
import {
	MyInfoCountryPlaceCode,
	MyInfoMaritalStatusCode,
	MyInfoNationalityCitizenshipCode,
	MyInfoSexCode,
} from "../../../types";

const id = "F5994458N";
const name = ProfileArchetype.MRS_MY_MOMMY_PERFECT;

export const mrsMYMommyPerfect: FakeProfile = {
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

		profile.nationality.code = MyInfoNationalityCitizenshipCode.MALAYSIAN;
		profile.birthcountry.code = MyInfoCountryPlaceCode.MALAYSIA;

		profile.residentialstatus.code = "";
		profile.residentialstatus.desc = "";

		(profile.marriagecertno = {
			lastupdated: "2018-05-10",
			source: "1",
			classification: "C",
			value: "PZDarmzK2vPZROwDbTbT7mS3b59xRABwRN9uRM2Y3qBgdQxcNi",
		}),
			(profile.marital = {
				lastupdated: "2022-02-25",
				code: MyInfoMaritalStatusCode.MARRIED,
				desc: MyInfoMaritalStatusCode.fn.toEnumDesc(MyInfoMaritalStatusCode.MARRIED),
				source: "1",
				classification: "C",
			});

		profile.marriagedate = {
			lastupdated: "1993-10-22",
			source: "1",
			classification: "C",
			value: "1993-10-22",
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
