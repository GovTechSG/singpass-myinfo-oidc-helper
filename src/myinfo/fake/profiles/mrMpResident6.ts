import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S7465038D";
const name = ProfileArchetype.MR_MP_RESIDENT_6;

export const mrMpResident6: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-22",
			source: "1",
			classification: "C",
			value: "1974-10-17",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "122";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "07";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "808A";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "CHAI CHEE ROAD";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "461808";

		return profile;
	},
};
