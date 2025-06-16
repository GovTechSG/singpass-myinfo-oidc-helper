/* eslint-disable max-lines-per-function */
import * as _ from "lodash";
import {
	MyInfoCountryPlaceCode,
	MyInfoDialectCode,
	MyInfoEduLevelCode,
	MyInfoMaritalStatusCode,
	MyInfoMerdekaGenerationMessageCode,
	MyInfoNationalityCitizenshipCode,
	MyInfoPioneerGenerationMessageCode,
	MyInfoRaceCode,
	MyInfoResidentialCode,
	MyInfoSexCode,
} from "src/types";
import { FakeProfile, ProfileArchetype } from "./fake-profile";

const id = "S1111111D";
const name = ProfileArchetype.MR_APP_REVIEWER;

const source = "1";
const classification = "C";
const lastupdated = "2020-01-01";

export const mrAppReviewer: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		return {
			name: {
				value: profileName,
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			aliasname: {
				value: "TEST PROFILE",
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			sex: {
				code: MyInfoSexCode.MALE,
				desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			race: {
				code: MyInfoRaceCode.CHINESE,
				desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			secondaryrace: {
				code: MyInfoRaceCode.GERMAN,
				desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.GERMAN),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			dialect: {
				code: MyInfoDialectCode.HOKKIEN,
				desc: MyInfoDialectCode.fn.toEnumValue(MyInfoDialectCode.HOKKIEN),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			nationality: {
				code: MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN,
				desc: MyInfoNationalityCitizenshipCode.fn.toEnumDesc(
					MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN,
				),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			dob: {
				value: "1989-10-06",
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			birthcountry: {
				code: MyInfoCountryPlaceCode.SINGAPORE,
				desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			residentialstatus: {
				code: MyInfoResidentialCode.CITIZEN,
				desc: MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.CITIZEN),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			regadd: {
				type: MyInfoCountryPlaceCode.SINGAPORE,
				block: {
					value: "123",
				},
				building: {
					value: null,
				},
				floor: {
					value: "12",
				},
				unit: {
					value: "22",
				},
				street: {
					value: "TEST ACCT STREET",
				},
				country: {
					code: MyInfoCountryPlaceCode.SINGAPORE,
					desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
				},
				postal: {
					value: "310123",
				},
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			email: {
				value: "gt.govandi@gmail.com",
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			homeno: {
				lastupdated: "2020-09-10",
				source: "2",
				classification: "C",
				areacode: {
					value: null,
				},
				prefix: {
					value: null,
				},
				nbr: {
					value: null,
				},
				unavailable: false,
			},
			mobileno: {
				areacode: {
					value: "65",
				},
				prefix: {
					value: "+",
				},
				nbr: {
					value: "97324992",
				},
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			marital: {
				code: MyInfoMaritalStatusCode.MARRIED,
				desc: MyInfoMaritalStatusCode.fn.toEnumDesc(MyInfoMaritalStatusCode.MARRIED),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			passtype: {
				lastupdated: "2025-01-01",
				code: "",
				desc: "",
				source: "2",
				classification: "C",
			},
			marriagecertno: {
				value: "M525997",
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			countryofmarriage: {
				code: MyInfoCountryPlaceCode.SINGAPORE,
				desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			marriagedate: {
				value: "1993-10-22",
				source,
				classification,
				lastupdated,
				unavailable: false,
			},
			edulevel: {
				lastupdated: "2020-09-10",
				code: MyInfoEduLevelCode.PRIMARY,
				desc: MyInfoEduLevelCode.fn.toEnumDesc(MyInfoEduLevelCode.PRIMARY),
				source: "2",
				classification: "C",
				unavailable: false,
			},
			occupation: {
				lastupdated: "2020-09-10",
				value: null,
				source: "2",
				classification: "C",
				unavailable: false,
			},
			merdekagen: {
				eligibility: {
					value: true,
				},
				quantum: {
					value: 100,
				},
				message: {
					code: MyInfoMerdekaGenerationMessageCode.ALL_OK,
					desc: MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(MyInfoMerdekaGenerationMessageCode.ALL_OK),
				},
				source,
				classification,
				lastupdated,
			},
			gstvoucher: {
				gstregular: {
					value: 123,
				},
				year: {
					value: "2019",
				},
				exclusion: {
					value: false,
				},
				gstmedisave: {
					value: 0,
				},
				gstspecial: {
					value: 123,
				},
				signup: {
					value: false,
				},
				source,
				classification,
				lastupdated,
			},
			silversupport: {
				eligibility: {
					value: true,
				},
				amount: {
					value: 123,
				},
				year: {
					value: "2019",
				},
				source,
				classification,
				lastupdated,
			},
			pioneergen: {
				eligibility: {
					value: true,
				},
				quantum: {
					value: 100.0,
				},
				message: {
					code: MyInfoPioneerGenerationMessageCode.ALL_OK,
					desc: MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(MyInfoPioneerGenerationMessageCode.ALL_OK),
				},
				source,
				classification,
				lastupdated,
			},
			childrenbirthrecords: [],
			sponsoredchildrenrecords: [],
			hdbtype: {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				unavailable: true,
			},
			housingtype: {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				unavailable: true,
			},
			drivinglicence: {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				unavailable: true,
			},
		};
	},
};
