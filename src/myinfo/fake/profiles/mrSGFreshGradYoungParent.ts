import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";
import { MyinfoMaritialStatusCode, MyinfoResidentialCode, MyinfoSexCode } from "../../domain";


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
			unavailable: false,
		};
		profile.residentialstatus = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoResidentialCode.CITIZEN,
			desc: MyinfoResidentialCode.fn.toEnumKey(MyinfoResidentialCode.CITIZEN),
			unavailable: false,
		};
		profile.sex = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoSexCode.MALE,
			desc: MyinfoSexCode.fn.toEnumKey(MyinfoSexCode.MALE),
			unavailable: false,
		};
		profile.marital = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoMaritialStatusCode.MARRIED,
			desc: MyinfoMaritialStatusCode.fn.toEnumKey(MyinfoMaritialStatusCode.MARRIED),
			unavailable: false,
		};
		profile.marriagedate = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 1}-02-10`,
			unavailable: false,
		};
		profile.childrenbirthrecords = [ChildrenRecords.child1MonthOld];
		return profile;
	},
};
