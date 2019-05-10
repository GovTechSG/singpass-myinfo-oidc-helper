import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";

const id = "T2446959F";
const name = ProfileArchetype.MR_SG_DADDY_LONG_NAMES;

export const mrSGDaddyLongNames: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		const longName = "Princess Aura Nurr Ermily Amara Auliya Bidadari S/O (Nawal), El@Björk' María-Jose!";
		profileName = _.isEmpty(profileName) ? longName : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.uinfin.value = id;

		profile.childrenbirthrecords = _.values(ChildrenRecords);
		profile.childrenbirthrecords[0].name.value = longName + " JR";

		return profile;
	},
};
