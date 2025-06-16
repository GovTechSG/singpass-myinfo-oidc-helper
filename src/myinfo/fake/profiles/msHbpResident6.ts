import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S6217524I";
const name = ProfileArchetype.MS_HBP_RESIDENT_6;

export const msHbpResident6: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2023-12-20",
			source: "1",
			classification: "C",
			value: "1962-11-24",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "167";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "21";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "GHIM MOH ROAD";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "270021";

		return profile;
	},
};
