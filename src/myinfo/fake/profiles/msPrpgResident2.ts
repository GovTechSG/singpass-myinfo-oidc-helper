import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "T0300210H";
const name = ProfileArchetype.MS_PRPG_RESIDENT_2;

export const msPrpgResident2: FakeProfile = {
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
			value: "2003-09-01",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "238";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "13";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "602";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "ELIAS ROAD";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "510602";

		return profile;
	},
};
