import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";


const id = "T2446959F";
const name = ProfileArchetype.MRS_PR_HDB_OWNER_WORKING_ADULT_MID_CAREER_PMETS;
/**
 * ArcheType:
 * Age Range 1979-05-16
 * Residential Status	P
 * Sex	F
 * Marital Status	2
 * Local Registered Birth Records	3
 * HDB Ownership	Yes
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	Yes
 * Highest Education Level	7
 * Occupation 21441, SOFTWARE_DEVELOPER
 */
export const mrsPRHdbOwnerWorkingAdult: FakeProfile = {
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
			value: `${new Date().getFullYear() - 41}-05-16`,
		};
		profile.residentialstatus = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "P",
		};
		profile.nationality = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "MY",
		};
		profile.birthcountry = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "MY",
			desc: "MALAYSIA",
		};
		profile.sex = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "F",
		};
		profile.marital = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "2",
		};
		profile.childrenbirthrecords = [ChildrenRecords.child1MonthOld, ChildrenRecords.child6YearsOld, ChildrenRecords.childMiddle1];

		profile.hdbownership = {
			list: [
				{
					noofowners: {
						value: 2,
					},
					address: {
						type: "SG",
						block: {
							value: "548",
						},
						building: {
							value: "",
						},
						floor: {
							value: "09",
						},
						unit: {
							value: "128",
						},
						street: {
							value: "BEDOK NORTH AVENUE 1",
						},
						postal: {
							value: "460548",
						},
						country: {
							code: "SG",
							desc: "SINGAPORE",
						},
					},
					hdbtype: {
						code: "112",
						desc: "2-ROOM FLAT (HDB)",
					},
					leasecommencementdate: {
						value: "2008-06-13",
					},
					termoflease: {
						value: 99,
					},
					dateofpurchase: {
						value: "2008-06-13",
					},
					dateofownershiptransfer: {
						value: "2018-06-13",
					},
					loangranted: {
						value: 310000.01,
					},
					originalloanrepayment: {
						value: 25,
					},
					balanceloanrepayment: {
						years: {
							value: 2,
						},
						months: {
							value: 6,
						},
					},
					outstandingloanbalance: {
						value: 50000.01,
					},
					monthlyloaninstalment: {
						value: 1000.01,
					},
					classification: "C",
					source: "1",
					lastupdated: "2019-03-26",
				},
			],
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
		profile.vehicles = {
			status: {
				code: "1",
				desc: "LIVE",
			},
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
		};
		profile.edulevel = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "7",
		};
		profile.occupation = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "25121",
			desc: "SOFTWARE_DEVELOPER",
		};
		return profile;
	},
};
