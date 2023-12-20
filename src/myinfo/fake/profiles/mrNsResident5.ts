import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "T0871447E";
const name = ProfileArchetype.MR_NS_RESIDENT_5;

export const mrNsResident5: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2023-12-20",
			source: "1",
			classification: "C",
			value: "1962-11-24",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "77";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "868";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "YISHUN STREET 81";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "760868";

		return profile;
	},
};
