import * as _ from "lodash";
import { MyInfoSexCode } from "../../../domain";
import { FakeProfile, ProfileArchetype } from "../fake-profile";
import { BaseProfile } from "./BaseProfile";
import { Childrenbirthrecords } from "./normalChildren";
import { SponsoredChildrenRecords } from "./sponsoredChildBirthRecords";

const id = "S9116045E";
const name = ProfileArchetype.MS_SG_MOTHER_HAVING_BOTH_CHILDREN;

export const msSGMotherBothChildren: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);
		profile.sex.unavailable = false;

		profile.childrenbirthrecords = _.values(Childrenbirthrecords);
		profile.sponsoredchildrenrecords = _.values(SponsoredChildrenRecords);

		return profile;
	},
};
