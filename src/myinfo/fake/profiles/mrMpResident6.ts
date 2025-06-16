import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S7465038D";
const name = ProfileArchetype.MR_MP_RESIDENT_6;

export const mrMpResident6: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-22",
			source: "1",
			classification: "C",
			value: "1974-10-17",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "122";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "07";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "808A";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "CHAI CHEE ROAD";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "461808";

		return profile;
	},
};
