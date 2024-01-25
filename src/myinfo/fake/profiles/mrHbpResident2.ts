import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8672262C";
const name = ProfileArchetype.MR_HBP_RESIDENT_2;

export const mrHbpResident2: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "1986-09-28",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "161";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "13";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "311A";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "CLEMENTI AVENUE 4";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "121311";

		return profile;
	},
};
