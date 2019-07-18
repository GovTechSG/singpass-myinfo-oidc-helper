import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "../fake-profile";
import { BaseProfile } from "./BaseProfile";
import { SponsoredChildrenRecords } from "./sponsoredChildBirthRecords";

const id = "S9116045E";
const name = ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED;

export const mrSGFatherSponsoredChildrenOnly: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = BaseProfile.generate(profileName);
		profile.sponsoredchildrenrecords = _.values(SponsoredChildrenRecords);

		return profile;
	},
};
