import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8379286H";
const name = ProfileArchetype.MS_CCK_RESIDENT_2;

export const msCckResident2: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "1983-03-04",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "372";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "11";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "388";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "BUKIT BATOK WEST AVENUE 5";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "650388";

		return profile;
	},
};
