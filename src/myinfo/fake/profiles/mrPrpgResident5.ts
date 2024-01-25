import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "T0881871H";
const name = ProfileArchetype.MR_PRPG_RESIDENT_5;

export const mrPrpgResident5: FakeProfile = {
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
			value: "2008-01-01",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "19";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "101";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "PASIR RIS STREET 12";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "510101";

		return profile;
	},
};
