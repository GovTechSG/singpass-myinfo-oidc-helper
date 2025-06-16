import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8844367E";
const name = ProfileArchetype.MS_NS_RESIDENT_6;

export const msNsResident6: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2023-01-22",
			source: "1",
			classification: "C",
			value: "1988-08-08",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "221";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "05";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "250";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "YISHUN AVENUE 9";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "760250";

		return profile;
	},
};
