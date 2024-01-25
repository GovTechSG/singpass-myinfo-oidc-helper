import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S5823426E";
const name = ProfileArchetype.MR_CCK_RESIDENT_3;

export const mrCckResident3: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "1958-05-15",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "275";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "16";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "406";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "CHOA CHU KANG AVENUE 3";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "680406";

		return profile;
	},
};
