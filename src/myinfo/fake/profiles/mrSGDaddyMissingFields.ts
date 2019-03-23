import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";


const id = "S8779834H";
const name = ProfileArchetype.MR_SG_DADDY_MISSING_FIELDS;

export const mrSGDaddyMissingFields: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.hanyupinyinname.value = "";
		profile.aliasname.value = null;
		profile.hanyupinyinaliasname.value = "";
		profile.secondaryrace.value = "";
		profile.residentialstatus.value = "U";
		profile.homeno.nbr = "";
		profile.marriagecertno.value = "";
		profile.countryofmarriage.value = "";
		profile.childrenbirthrecords = profile.childrenbirthrecords.slice(0, 1);
		profile.edulevel.value = "0";
		profile.occupation.desc = "SPACE PIRATE";
		profile.occupation.value = "";
		profile.cpfcontributions.cpfcontribution = profile.cpfcontributions.cpfcontribution.slice(0, 1);

		return profile;
	},
};
