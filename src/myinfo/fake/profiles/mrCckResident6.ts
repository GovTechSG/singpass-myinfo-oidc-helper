import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S4919079D";
const name = ProfileArchetype.MR_CCK_RESIDENT_6;

export const mrCckResident6: FakeProfile = {
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
			value: "1949-01-11",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "106";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "12";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "803D";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "KEAT HONG CLOSE";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "684803";

		return profile;
	},
};
