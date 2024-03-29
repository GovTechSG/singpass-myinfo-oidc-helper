import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9253681E";
const name = ProfileArchetype.MS_MP_RESIDENT_2;

export const msMpResident2: FakeProfile = {
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
			value: "1992-09-28",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "3007";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "06";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "22";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "EUNOS CRESCENT";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "400022";

		return profile;
	},
};
