import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "../fake-profile";
import { BaseProfile } from "./BaseProfile";
import { Childrenbirthrecords } from "./normalChildren";
import { SponsoredChildrenRecords } from "./sponsoredChildBirthRecords";

const id = "S9116045E";
const name = ProfileArchetype.MS_SG_MOTHER_HAVING_BOTH_CHILDREN;

export const msSGMotherBothChildren: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = BaseProfile.generate(profileName);

		profile.sex.code = "F";
		profile.sex.desc = "Female";
		profile.sex.unavailable = false;

		profile.childrenbirthrecords = _.values(Childrenbirthrecords);
		profile.sponsoredchildrenrecords = _.values(SponsoredChildrenRecords);

		return profile;
	},
};
