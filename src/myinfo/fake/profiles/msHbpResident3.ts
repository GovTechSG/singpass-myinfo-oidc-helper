import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S4050256D";
const name = ProfileArchetype.MS_HBP_RESIDENT_3;

export const msHbpResident3: FakeProfile = {
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
			value: "1940-06-27",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "123";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "04";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "106";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "GANGSA ROAD";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "670106";

		return profile;
	},
};
