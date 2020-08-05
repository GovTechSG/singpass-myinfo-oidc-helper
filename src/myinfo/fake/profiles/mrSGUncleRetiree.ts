import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_RETIREE;
/**
 * ArcheType:
 * Age Range 1957-05-16
 * Residential Status	C
 * Sex	M
 * Marital Status	2
 * Local Registered Birth Records	2
 * HDB Ownership	No
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	No
 * Highest Education Level	4
 * Occupation None
 */
export const mrSGUncleRetiree: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 63}-05-16`,
		};

		profile.residentialstatus = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "C",
		};
		profile.sex = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "M",
		};
		profile.marital = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "2",
		};
		profile.childrenbirthrecords = [ChildrenRecords.childMiddle1, ChildrenRecords.childMiddle2];
		profile.housingtype = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "121",
		};
		profile.drivinglicence = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			qdl: {
				validity: {
					code: "V",
				},
			},
		};
		profile.edulevel = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "4",
		};
		profile.occupation = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			unavailable: true,
		};
		return profile;
	},
};
