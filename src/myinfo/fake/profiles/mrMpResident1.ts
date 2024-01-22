import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S5395307G";
const name = ProfileArchetype.MR_MP_RESIDENT_1;

export const mrMpResident1: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-22",
			source: "1",
			classification: "C",
			value: "1953-05-15",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "521";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "12";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "320";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "UBI AVENUE 1";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "400320";

		return profile;
	},
};
