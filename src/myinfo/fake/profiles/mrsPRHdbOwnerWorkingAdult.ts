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
 * Ownership of Private Residential Property	No
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	Yes
 * Highest Education Level	7
 * Monthly Household Income	5500
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
			"vehicleno": {
				"value": "SDF1235A",
			},
			"type": {
				"value": "PASSENGER MOTOR CAR",
			},
			"iulabelno": {
				"value": "",
			},
			"make": {
				"value": "TOYOTA",
			},
			"model": {
				"value": "COROLLA ALTIS",
			},
			"chassisno": {
				"value": "ZC11S1735800",
			},
			"engineno": {
				"value": "M13A1837453",
			},
			"motorno": {
				"value": "",
			},
			"yearofmanufacture": {
				"value": "2010",
			},
			"firstregistrationdate": {
				"value": "2010-06-06",
			},
			"originalregistrationdate": {
				"value": "2010-06-06",
			},
			"coecategory": {
				"value": "A - CAR UP TO 1600CC & 97KW (130BHP)",
			},
			"coeexpirydate": {
				"value": "2020-06-05",
			},
			"roadtaxexpirydate": {
				"value": "2020-06-05",
			},
			"quotapremium": {
				"value": 14000.01,
			},
			"openmarketvalue": {
				"value": 25000.01,
			},
			"co2emission": {
				"value": 146.01,
			},
			"status": {
				"code": "1",
				"desc": "LIVE",
			},
			"primarycolour": {
				"value": "BLACK",
			},
			"secondarycolour": {
				"value": "WHITE",
			},
			"attachment1": {
				"value": "DISABLED",
			},
			"attachment2": {
				"value": "WITH SUN ROOF",
			},
			"attachment3": {
				"value": "SIDE CURTAIN",
			},
			"scheme": {
				"value": "REVISED OFF-PEAK CAR",
			},
			"thcemission": {
				"value": 1.011001,
			},
			"coemission": {
				"value": 1.100001,
			},
			"noxemission": {
				"value": 0.011001,
			},
			"pmemission": {
				"value": 0.007,
			},
			"enginecapacity": {
				"value": 1600,
			},
			"powerrate": {
				"value": 1.41,
			},
			"effectiveownership": {
				"value": "2010-08-31T20:12:12+08:00",
			},
			"propellant": {
				"value": "Compressed Natural Gas",
			},
			"maximumunladenweight": {
				"value": 1500,
			},
			"maximumladenweight": {
				"value": 1795,
			},
			"minimumparfbenefit": {
				"value": 8770.01,
			},
			"nooftransfers": {
				"value": 2,
			},
			"vpc": {
				"value": "1234567890",
			},
			"classification": "C",
			"source": "1",
			"lastupdated": "2019-03-26",
		};
		profile.edulevel = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: "7",
		};
		profile.householdincome = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			high: {
				value: 5500,
			},
			low: {
				value: 5500,
			},
		};
		return profile;
	},
};
