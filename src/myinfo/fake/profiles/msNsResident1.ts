import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S7952261I";
const name = ProfileArchetype.MS_NS_RESIDENT_1;

export const msNsResident1: FakeProfile = {
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
			value: "1979-10-18",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "174";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "01";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "105";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "YISHUN RING ROAD";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "760105";

		return profile;
	},
};
