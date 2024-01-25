import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S6743158H";
const name = ProfileArchetype.MS_HBP_RESIDENT_1;

export const msHbpResident1: FakeProfile = {
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
			value: "1967-11-12",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "10";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "16";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "181";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "JELEBU ROAD";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "670181";

		return profile;
	},
};
