import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { SponsoredChildrenRecords } from "./sponsoredchildbirthRecords";

const id = "S9116045E";
const name = ProfileArchetype.MR_SG_DADDY_MANY_SPONSORED_CHILDREN;

export const mrSGDaddyWithSponsoredChildren: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.sponsoredchildrenrecords = _.values(SponsoredChildrenRecords);

		return profile;
	},
};
