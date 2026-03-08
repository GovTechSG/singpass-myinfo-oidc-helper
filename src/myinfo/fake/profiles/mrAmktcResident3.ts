import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S6246904H";
const name = ProfileArchetype.MR_AMKTC_RESIDENT_3;

export const mrAmktcResident3: FakeProfile = {
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
			value: "1974-10-17",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "1153";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "15";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "305";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "ANG MO KIO AVENUE 1";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "560305";

		return profile;
	},
};
