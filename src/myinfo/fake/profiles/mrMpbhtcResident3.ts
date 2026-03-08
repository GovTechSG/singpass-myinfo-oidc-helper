import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8254423B";
const name = ProfileArchetype.MR_MPBHTC_RESIDENT_3;

export const mrMpbhtcResident3: FakeProfile = {
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

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "415";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "9";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "HAIG ROAD";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "430009";

		return profile;
	},
};
