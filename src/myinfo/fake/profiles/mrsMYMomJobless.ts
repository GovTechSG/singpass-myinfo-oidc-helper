import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrsMYMommyPerfect } from "./mrsMYMommyPerfect";
import { ChildrenRecords } from "./childbirthRecords";

const id = "G9403340W";
const name = ProfileArchetype.MRS_MY_MOM_JOBLESS;

export const mrsMYMomJobless: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrsMYMommyPerfect.generate(profileName);
		profile.occupation = {
			lastupdated: "2020-09-10",
			source: "2",
			classification: "C",
			value: "",
		};
		profile.childrenbirthrecords = _.values(ChildrenRecords);

		return profile;
	},
};
