import * as _ from "lodash";
import {
	MyInfoComStatusCode,
	MyInfoDrivingLicenceValidityCode,
	MyInfoHousingTypeCode,
	MyInfoMaritalStatusCode,
	MyInfoResidentialCode,
	MyInfoSexCode,
} from "../../../types";
import { ChildrenRecords } from "./childbirthRecords";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

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
 */
export const mrSGUncleRetiree: FakeProfile = {
	id,
	name,
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
			code: MyInfoResidentialCode.CITIZEN,
		};
		profile.sex = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyInfoSexCode.MALE,
			desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE),
		};
		profile.marital = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyInfoMaritalStatusCode.MARRIED,
			desc: MyInfoMaritalStatusCode.fn.toEnumDesc(MyInfoMaritalStatusCode.MARRIED),
		};
		profile.childrenbirthrecords = [ChildrenRecords.childMiddle1, ChildrenRecords.childMiddle2];
		profile.housingtype = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyInfoHousingTypeCode.DETACHED_HOUSE,
			desc: MyInfoHousingTypeCode.fn.toEnumDesc(MyInfoHousingTypeCode.DETACHED_HOUSE),
		};
		profile.hdbtype = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: null,
			desc: null,
		};
		profile.drivinglicence = {
			revocation: {
				startdate: {
					value: "",
				},
				enddate: {
					value: "",
				},
			},
			totaldemeritpoints: {
				value: 0,
			},
			disqualification: {
				startdate: {
					value: "",
				},
				enddate: {
					value: "",
				},
			},
			qdl: {
				expirydate: {
					value: "",
				},
				validity: {
					code: MyInfoDrivingLicenceValidityCode.VALID,
					desc: MyInfoDrivingLicenceValidityCode.fn.toEnumDesc(MyInfoDrivingLicenceValidityCode.VALID),
				},
				classes: [
					{
						class: {
							value: "3CA",
						},
						issuedate: {
							value: "2017-12-31",
						},
					},
				],
			},
			lastupdated: "2020-08-26",
			pdl: {
				expirydate: {
					value: "",
				},
				validity: {
					code: null,
					desc: null,
				},
				classes: [],
			},
			source: "1",
			classification: "C",
			comstatus: {
				code: MyInfoComStatusCode.ELIGIBLE,
				desc: MyInfoComStatusCode.fn.toEnumDesc(MyInfoComStatusCode.ELIGIBLE),
			},
			photocardserialno: {
				value: "",
			},
			suspension: {
				startdate: {
					value: "",
				},
				enddate: {
					value: "",
				},
			},
		};

		return profile;
	},
};
