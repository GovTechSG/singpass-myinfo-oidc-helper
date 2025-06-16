import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8993188F";
const name = ProfileArchetype.MR_NS_RESIDENT_2;

export const mrNsResident2: FakeProfile = {
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
			value: "1989-07-23",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "3549";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "855";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "YISHUN RING ROAD";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "760855";

		return profile;
	},
};
