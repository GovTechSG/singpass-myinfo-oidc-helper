import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8939392B";
const name = ProfileArchetype.MR_CCK_RESIDENT_1;

export const mrCckResident1: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2023-12-20",
			source: "1",
			classification: "C",
			value: "1989-04-24",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "32";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "07";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "130";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "CHOA CHU KANG AVENUE 1";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "680130";

		return profile;
	},
};
