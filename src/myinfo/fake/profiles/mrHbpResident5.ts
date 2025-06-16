import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "../../../types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "T0892280I";
const name = ProfileArchetype.MR_HBP_RESIDENT_5;

export const mrHbpResident5: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-22",
			source: "1",
			classification: "C",
			value: "2008-02-26",
		};

		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).unit.value = "63";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).floor.value = "03";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).block.value = "15";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).street.value = "TOH YI DRIVE";
		(profile.regadd as MyInfoComponentsV4.Schemas.DataitemAddressSg).postal.value = "590015";

		return profile;
	},
};
