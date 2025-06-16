/* eslint-disable max-lines-per-function */
import * as _ from "lodash";
import {
	MyInfoCountryPlaceCode,
	MyInfoDialectCode,
	MyInfoLifeStatusCode,
	MyInfoMaritalStatusCode,
	MyInfoMerdekaGenerationMessageCode,
	MyInfoNationalityCitizenshipCode,
	MyInfoPioneerGenerationMessageCode,
	MyInfoRaceCode,
	MyInfoResidentialCode,
	MyInfoSexCode,
} from "../../../types";
import { aliasName } from "../profiles/common";
import { preschoolEligibleChild2_IC, preschoolEligibleChild2_K1 } from "./childbirthRecords";
import { FakeProfile, ProfileArchetype } from "./fake-profile";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_DADDY_PERFECT;

export const mrSGDaddyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		return {
			edulevel: {
				lastupdated: "2020-09-10",
				code: null,
				desc: null,
				source: "2",
				classification: "C",
			},
			dialect: {
				lastupdated: "2018-06-01",
				code: MyInfoDialectCode.HOKKIEN,
				desc: MyInfoDialectCode.fn.toEnumDesc(MyInfoDialectCode.HOKKIEN),
				source: "1",
				classification: "C",
			},
			occupation: {
				lastupdated: "2020-09-10",
				value: null,
				source: "2",
				classification: "C",
			},
			passtype: {
				lastupdated: "2025-01-01",
				code: "",
				desc: "",
				source: "2",
				classification: "C",
			},
			regadd: {
				country: {
					code: MyInfoCountryPlaceCode.SINGAPORE,
					desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
				},
				unit: {
					value: "22",
				},
				street: {
					value: "TOA PAYOH LORONG 1",
				},
				lastupdated: "2018-05-10",
				block: {
					value: "123",
				},
				postal: {
					value: "310123",
				},
				source: "1",
				classification: "C",
				floor: {
					value: "12",
				},
				type: "SG",
				building: {
					value: null,
				},
			},
			mobileno: {
				lastupdated: "2019-04-03",
				source: "4",
				classification: "C",
				areacode: {
					value: "65",
				},
				prefix: {
					value: "+",
				},
				nbr: {
					value: "88158701",
				},
			},
			passportexpirydate: {
				lastupdated: "2021-01-01",
				source: "1",
				classification: "C",
				value: "2030-09-10",
			},
			divorcedate: {
				lastupdated: null,
				source: "1",
				classification: "C",
				value: null,
			},
			marriagecertno: {
				lastupdated: "2018-05-10",
				source: "1",
				classification: "C",
				value: "M525997",
			},
			merdekagen: {
				eligibility: {
					value: false,
				},
				lastupdated: "2019-04-01",
				quantum: {
					value: 200,
				},
				source: "1",
				classification: "C",
				message: {
					code: MyInfoMerdekaGenerationMessageCode.ALL_OK,
					desc: MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(MyInfoMerdekaGenerationMessageCode.ALL_OK),
				},
			},
			pioneergen: {
				eligibility: {
					value: false,
				},
				lastupdated: "2021-01-15",
				quantum: {
					value: 0.0,
				},
				source: "1",
				classification: "C",
				message: {
					code: MyInfoPioneerGenerationMessageCode.NON_PG,
					desc: MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(MyInfoPioneerGenerationMessageCode.NON_PG),
				},
			},
			gstvoucher: {
				gstregular: {
					value: 300,
				},
				year: {
					value: "2018",
				},
				exclusion: {
					value: false,
				},
				gstmedisave: {
					value: 250,
				},
				lastupdated: "2019-04-01",
				gstspecial: {
					value: 300,
				},
				source: "1",
				classification: "C",
				signup: {
					value: false,
				},
			},
			email: {
				lastupdated: "2019-04-03",
				source: "4",
				classification: "C",
				value: "gt.govandi@gmail.com",
			},
			birthcountry: {
				lastupdated: "2018-06-01",
				code: MyInfoCountryPlaceCode.SINGAPORE,
				desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
				source: "1",
				classification: "C",
			},
			race: {
				lastupdated: "2018-06-01",
				code: MyInfoRaceCode.CHINESE,
				desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
				source: "1",
				classification: "C",
			},
			silversupport: {
				eligibility: {
					value: true,
				},
				lastupdated: "2019-04-01",
				amount: {
					value: 300,
				},
				source: "1",
				classification: "C",
				year: {
					value: "2019",
				},
			},
			countryofmarriage: {
				lastupdated: "2018-05-10",
				code: MyInfoCountryPlaceCode.SINGAPORE,
				desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
				source: "1",
				classification: "C",
			},
			sex: {
				lastupdated: "2018-06-01",
				code: MyInfoSexCode.MALE,
				desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE),
				source: "1",
				classification: "C",
			},
			marriagedate: {
				lastupdated: "1993-10-22",
				source: "1",
				classification: "C",
				value: "1993-10-22",
			},
			residentialstatus: {
				lastupdated: "2018-06-01",
				code: MyInfoResidentialCode.CITIZEN,
				desc: MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.CITIZEN),
				source: "1",
				classification: "C",
			},
			passportnumber: {
				lastupdated: "2021-01-01",
				source: "1",
				classification: "C",
				value: "L3280033",
			},
			marital: {
				lastupdated: "2018-05-10",
				code: MyInfoMaritalStatusCode.MARRIED,
				desc: MyInfoMaritalStatusCode.fn.toEnumDesc(MyInfoMaritalStatusCode.MARRIED),
				source: "1",
				classification: "C",
			},
			aliasname: {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				value: aliasName.JASCKSON_LIM_YONG_XIANG,
			},
			childrenbirthrecords: [
				{
					dialect: {
						code: MyInfoDialectCode.HOKKIEN,
						desc: MyInfoDialectCode.fn.toEnumDesc(MyInfoDialectCode.HOKKIEN),
					},
					race: {
						code: MyInfoRaceCode.CHINESE,
						desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
					},
					lifestatus: {
						code: MyInfoLifeStatusCode.ALIVE,
						desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE),
					},
					tob: {
						value: "0901",
					},
					sex: {
						code: MyInfoSexCode.FEMALE,
						desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE),
					},
					source: "1",
					classification: "C",
					birthcertno: {
						value: "S5562882C",
					},
					hanyupinyinname: {
						value: "Cheng Pei Ni",
					},
					hanyupinyinaliasname: {
						value: null,
					},
					marriedname: {
						value: null,
					},
					aliasname: {
						value: null,
					},
					dob: {
						value: "2011-09-10",
					},
					name: {
						value: "Jo Lee Pei Ni",
					},
					lastupdated: "2018-05-16",
					secondaryrace: {
						code: null,
						desc: null,
					},
				},
				preschoolEligibleChild2_IC,
				preschoolEligibleChild2_K1,
			],
			sponsoredchildrenrecords: [],
			nationality: {
				lastupdated: "2018-06-01",
				code: MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN,
				desc: MyInfoNationalityCitizenshipCode.fn.toEnumDesc(
					MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN,
				),
				source: "1",
				classification: "C",
			},
			dob: {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				value: "1975-10-06",
			},
			name: {
				lastupdated: "2018-06-01",
				source: "1",
				classification: "C",
				value: profileName,
			},
			secondaryrace: {
				lastupdated: "2018-06-01",
				code: MyInfoRaceCode.GERMAN,
				desc: MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.GERMAN),
				source: "1",
				classification: "C",
			},
			hdbtype: {
				lastupdated: "2020-08-26",
				code: null,
				desc: null,
				source: "1",
				classification: "C",
			},
			housingtype: {
				lastupdated: "2020-08-26",
				code: null,
				desc: null,
				source: "1",
				classification: "C",
			},
			drivinglicence: {
				revocation: {
					startdate: {
						value: null,
					},
					enddate: {
						value: null,
					},
				},
				totaldemeritpoints: {
					value: 0,
				},
				disqualification: {
					startdate: {
						value: null,
					},
					enddate: {
						value: null,
					},
				},
				qdl: {
					expirydate: {
						value: null,
					},
					validity: {
						code: null,
						desc: null,
					},
					classes: [],
				},
				lastupdated: "2020-08-26",
				pdl: {
					expirydate: {
						value: null,
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
					code: null,
					desc: null,
				},
				photocardserialno: {
					value: null,
				},
				suspension: {
					startdate: {
						value: null,
					},
					enddate: {
						value: null,
					},
				},
			},
		};
	},
};
