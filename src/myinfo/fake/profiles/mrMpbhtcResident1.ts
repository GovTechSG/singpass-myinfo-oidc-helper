import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S7422226I";
const name = ProfileArchetype.MR_MPBHTC_RESIDENT_1;

export const mrMpbhtcResident1: FakeProfile = {
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
			value: "1949-01-11",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "144";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "07";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "178B";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "HOUGANG STREET 12";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "532178";

		return profile;
	},
};
