import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S7680309I";
const name = ProfileArchetype.MR_NS_RESIDENT_3;

export const mrNsResident3: FakeProfile = {
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
			value: "1976-02-12",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "229";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "131";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "YISHUN STREET 11";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "760131";

		return profile;
	},
};
