import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8484191I";
const name = ProfileArchetype.MR_PRPG_RESIDENT_4;

export const mrPrpgResident4: FakeProfile = {
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
			value: "1984-02-29",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "350";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "03";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "623A";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "PUNGGOL CENTRAL";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "821623";

		return profile;
	},
};
