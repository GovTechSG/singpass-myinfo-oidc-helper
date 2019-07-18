import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "../fake-profile";
import { BaseProfile } from "./BaseProfile";
import { Childrenbirthrecords } from "./normalChildren";

const id = "S9116045E";
const name = ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN;

export const mrSGFatherNormalChildrenOnly: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = BaseProfile.generate(profileName);
		profile.childrenbirthrecords = _.values(Childrenbirthrecords);

		return profile;
	},
};
