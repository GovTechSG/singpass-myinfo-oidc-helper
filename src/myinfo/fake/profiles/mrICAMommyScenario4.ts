import * as _ from "lodash";
import {
	MyInfoComponentsV4,
	MyInfoCountryPlaceCode,
	MyInfoMaritalStatusCode,
	MyInfoNationalityCitizenshipCode,
	MyInfoRaceCode,
	MyInfoResidentialCode,
	MyInfoSexCode,
} from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9005007I";
const name = ProfileArchetype.MRS_ICA_PR_MOMMY_SPOUSE_SCENARIO_4;

export const mrsICAMommyScenario4: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);
		profile.race = {
			lastupdated: "2022-02-25",
			code: MyInfoRaceCode.MALAY,
			desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.MALAY),
			source: "1",
			classification: "C",
		};
		profile.dob = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "1990-01-04",
		};
		profile.residentialstatus = {
			lastupdated: "2018-06-01",
			code: MyInfoResidentialCode.PR,
			desc: MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR),
			source: "1",
			classification: "C",
		};
		profile.nationality.code = MyInfoNationalityCitizenshipCode.MALAYSIAN;
		profile.marriagecertno = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "M56789",
		};
		profile.marriagedate = {
			lastupdated: "2020-09-10",
			source: "2",
			classification: "C",
			value: "2020-09-10",
		};
		profile.countryofmarriage = {
			lastupdated: "2022-02-25",
			code: MyInfoCountryPlaceCode.SINGAPORE,
			desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
			source: "1",
			classification: "C",
		};
		profile.marital = {
			lastupdated: "2022-02-25",
			code: MyInfoMaritalStatusCode.MARRIED,
			desc: MyInfoMaritalStatusCode.fn.toEnumDesc(MyInfoMaritalStatusCode.MARRIED),
			source: "1",
			classification: "C",
		};

		return profile;
	},
};
