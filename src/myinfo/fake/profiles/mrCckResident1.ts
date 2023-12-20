import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8939392B";
const name = ProfileArchetype.MR_CCK_RESIDENT_1;

export const mrCckResident1: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2023-12-20",
			source: "1",
			classification: "C",
			value: "1989-04-24",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "32";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "07";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "130";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "CHOA CHU KANG AVENUE 1";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "680130";

		return profile;
	},
};
