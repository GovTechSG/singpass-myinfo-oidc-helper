import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8199715B";
const name = ProfileArchetype.MR_AMKTC_RESIDENT_1;

export const mrAmktcResident1: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-08-01",
			source: "1",
			classification: "C",
			value: "1949-01-11",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "244";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "04";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "400C";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "FERNVALE LANE";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "793400";

		return profile;
	},
};
