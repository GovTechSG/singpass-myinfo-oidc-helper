import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S7456600F";
const name = ProfileArchetype.MR_MP_RESIDENT_4;

export const mrMpResident4: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2023-12-20",
			source: "1",
			classification: "C",
			value: "1974-10-17",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "65";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "08";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "58";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "MARINE TERRACE";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "440058";

		return profile;
	},
};
