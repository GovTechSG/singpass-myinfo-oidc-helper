import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S6223030D";
const name = ProfileArchetype.MS_HBP_RESIDENT_4;

export const msHbpResident4: FakeProfile = {
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
			value: "1962-11-24",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "123";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "04";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "106";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "GANGSA ROAD";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "670106";

		return profile;
	},
};
