import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9890162J";
const name = ProfileArchetype.MR_JETC_RESIDENT;

export const mrJeTcResident: FakeProfile = {
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
			value: "1998-11-24",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "180";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "08";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "101";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "JURONG EAST STREET 13";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "600101";

		return profile;
	},
};
