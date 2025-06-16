import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S6743158H";
const name = ProfileArchetype.MS_HBP_RESIDENT_1;

export const msHbpResident1: FakeProfile = {
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
			value: "1967-11-12",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "10";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "16";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "181";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "JELEBU ROAD";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "670181";

		return profile;
	},
};
