import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9353807B";
const name = ProfileArchetype.MR_MPTC_RESIDENT;

export const mrMpTcResident: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "1993-11-24",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "3007";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "06";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "22";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "EUNOS CRESCENT";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "400022";

		return profile;
	},
};
