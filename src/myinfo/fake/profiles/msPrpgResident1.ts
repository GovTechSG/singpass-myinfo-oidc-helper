import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S6003491E";
const name = ProfileArchetype.MS_PRPG_RESIDENT_1;

export const msPrpgResident1: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2023-12-20",
			source: "1",
			classification: "C",
			value: "1960-06-04",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "317";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "12";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "458";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "PASIR RIS DRIVE 4";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "510458";

		return profile;
	},
};
