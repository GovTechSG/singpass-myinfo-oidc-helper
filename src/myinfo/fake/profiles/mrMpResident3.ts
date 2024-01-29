import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9965211Z";
const name = ProfileArchetype.MR_MP_RESIDENT_3;

export const mrMpResident3: FakeProfile = {
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
			value: "1999-09-21",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "211";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "60";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "CIRCUIT ROAD";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "370060";

		return profile;
	},
};
