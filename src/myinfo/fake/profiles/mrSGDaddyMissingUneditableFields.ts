import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";


const id = "S8974352D";
const name = ProfileArchetype.MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS;

export const mrSGDaddyMissingUneditableFields: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);

		// Uneditable field
		profile.nationality.value = "";
		profile.dob.value = "";

		profile.regadd.block = "";
		profile.regadd.building = "";
		profile.regadd.classification = "";
		profile.regadd.country = "";
		profile.regadd.floor = "";
		profile.regadd.postal = "";
		profile.regadd.street = "";
		profile.regadd.unit = "";

		return profile;
	},
};
