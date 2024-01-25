import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "T0704234A";
const name = ProfileArchetype.MS_MP_RESIDENT_5;

export const msMpResident5: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "2007-08-30",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "97";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "03";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "262";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "SERANGOON CENTRAL DRIVE";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "550262";

		return profile;
	},
};
