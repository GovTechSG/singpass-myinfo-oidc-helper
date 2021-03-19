import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "T0834325F";
const name = ProfileArchetype.MR_SG_TEENAGER_17;

export const mrSgTeenager17: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.silversupport.eligibility.value = false;
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 17}-01-01`,
		};
		profile.marital = {
			lastupdated: "2021-03-19",
			code: "",
			source: "2",
			classification: "C",
			desc: "",
		};
		profile.marriagedate = {
			lastupdated: "2021-03-19",
			source: "2",
			classification: "C",
			value: "",
		};
		profile.childrenbirthrecords = [];
		profile.sponsoredchildrenrecords = [];

		return profile;
	},
};
