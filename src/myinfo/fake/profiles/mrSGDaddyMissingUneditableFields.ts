import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { unavailableField } from "./common";


const id = "S8974352D";
const name = ProfileArchetype.MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS;

export const mrSGDaddyMissingUneditableFields: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);

		// Uneditable field
		profile.nationality = unavailableField;
		profile.dob = unavailableField;
		profile.regadd = unavailableField;
		profile.sex = unavailableField;

		return profile;
	},
};
