import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S0070404J";
const name = ProfileArchetype.MR_AMKTC_RESIDENT_4;

export const mrAmktcResident4: FakeProfile = {
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
			value: "1988-08-08",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "11";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "26";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "407B";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "FERNVALE ROAD";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "792407";

		return profile;
	},
};
