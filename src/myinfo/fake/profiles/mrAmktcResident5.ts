import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9586116D";
const name = ProfileArchetype.MR_AMKTC_RESIDENT_5;

export const mrAmktcResident5: FakeProfile = {
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
			value: "1961-02-28",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "2592";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "08";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "508";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "ANG MO KIO AVENUE 8";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "560508";

		return profile;
	},
};
