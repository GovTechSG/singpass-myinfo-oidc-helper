import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S8838208J";
const name = ProfileArchetype.MS_NS_RESIDENT_4;

export const msNsResident4: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "1988-08-08",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "229";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "131";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "YISHUN STREET 11";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "760131";

		return profile;
	},
};
