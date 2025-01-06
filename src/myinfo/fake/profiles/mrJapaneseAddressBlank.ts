import * as _ from "lodash";
import { MyInfoCountryPlaceCode, MyInfoNationalityCitizenshipCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "F5316757T";
const name = ProfileArchetype.MR_JAPANESE_ADDRESS_BLANK;

export const mrJapaneseAddressBlank: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.residentialstatus = {
			code: "",
			desc: "",
			source: "3",
			classification: "C",
			lastupdated: "",
		};
		profile.employment = {
			classification: "C",
			source: "1",
			lastupdated: "2019-03-26",
			value: "Google Pte Ltd",
		};
		profile.nationality = {
			code: MyInfoNationalityCitizenshipCode.JAPANESE,
			desc: MyInfoNationalityCitizenshipCode.fn.toEnumDesc(MyInfoNationalityCitizenshipCode.JAPANESE),
			source: "1",
			classification: "C",
			lastupdated: "2019-09-18",
		};
		profile.birthcountry = {
			code: MyInfoCountryPlaceCode.JAPAN,
			desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.JAPAN),
			source: "1",
			classification: "C",
			lastupdated: "2019-09-18",
		};
		(profile as any).regadd = {
			type: "",
			unit: { value: "" },
			block: { value: "" },
			floor: { value: "" },
			postal: { value: "" },
			street: { value: "" },
			building: { value: "" },
			country: {
				code: "",
				desc: "",
			},
			classification: "C",
			source: "3",
			lastupdated: "2018-05-10",
		};
		profile.dob = {
			lastupdated: "2018-06-01",
			source: "1",
			classification: "C",
			value: "1983-10-06",
		};

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
