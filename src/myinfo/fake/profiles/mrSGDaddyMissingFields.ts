import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { unavailableField } from "./common";

const id = "S8779834H";
const name = ProfileArchetype.MR_SG_DADDY_MISSING_FIELDS;

export const mrSGDaddyMissingFields: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.hanyupinyinname = unavailableField;
		profile.aliasname = unavailableField;
		profile.hanyupinyinaliasname = unavailableField;
		profile.secondaryrace = unavailableField;
		profile.residentialstatus = unavailableField;
		profile.homeno = unavailableField;
		profile.marriagecertno = unavailableField;
		profile.countryofmarriage = unavailableField;
		if (profile.childrenbirthrecords) {
			profile.childrenbirthrecords = profile.childrenbirthrecords.slice(0, 1);
		}
		profile.edulevel = unavailableField;
		profile.occupation = unavailableField;

		return profile;
	},
};
