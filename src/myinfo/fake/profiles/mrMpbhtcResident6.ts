import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S1363668J";
const name = ProfileArchetype.MR_MPBHTC_RESIDENT_6;

export const mrMpbhtcResident6: FakeProfile = {
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
			value: "2004-10-17",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "180";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "16";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "65";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "MARINE DRIVE";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "440065";

		return profile;
	},
};
