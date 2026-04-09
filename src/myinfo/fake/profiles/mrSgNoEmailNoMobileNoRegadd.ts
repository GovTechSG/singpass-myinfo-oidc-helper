import * as _ from "lodash";
import { MyInfoComponentsV4 } from "src/types";
import { unavailableField } from "./common";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S9005015Z";
const name = ProfileArchetype.MR_SG_NO_EMAIL_NO_MOBILE_NO_REGADD;

export const mrSgNoEmailNoMobileNoRegadd: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);
		profile.dob = {
			lastupdated: "2022-02-25",
			source: "1",
			classification: "C",
			value: "1970-01-08",
		};
		profile.email = unavailableField;
		profile.mobileno = unavailableField;
		profile.regadd = unavailableField;

		return profile;
	},
};
