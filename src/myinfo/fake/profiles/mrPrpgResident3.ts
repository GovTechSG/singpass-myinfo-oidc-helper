import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8759130A";
const name = ProfileArchetype.MR_PRPG_RESIDENT_3;

export const mrPrpgResident3: FakeProfile = {
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
			value: "1987-11-30",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "145";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "18";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "224A";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "SUMANG LANE";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "821224";

		return profile;
	},
};
