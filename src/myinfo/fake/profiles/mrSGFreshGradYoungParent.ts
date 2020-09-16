import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";


const id = "T2446959F";
const name = ProfileArchetype.MR_SG_FRESH_GRAD_YOUNG_PARENT;
/**
 * ArcheType:
 * Age Range 1995-02-10
 * Residential Status	C
 * Sex	M
 * Marital Status	2
 * Local Registered Birth Records	1
 * HDB Ownership	No
 * Type of Housing for Registered Address	null
 * Driving License	No
 * Vehicle Ownership	No
 * Highest Education Level	7
 * Occupation 21441, MECHANICAL_ENGINEER_GENERAL
 */
export const mrSGFreshGradYoungParent: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 25}-02-10`,
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
			desc: "Male",
		};
		profile.marital = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "2",
			desc: "MARRIED",
		};
		profile.marriagedate = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 1}-02-10`,
		};
		profile.childrenbirthrecords = [ChildrenRecords.child1MonthOld];
		return profile;
	},
};
