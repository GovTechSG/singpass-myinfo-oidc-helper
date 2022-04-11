import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { preschoolEligibleChild2_IC, preschoolEligibleChild2_K1 } from "./childbirthRecords";
import { aliasName } from "../profiles/common";
import { MyInfoCountryCode, MyInfoDialectCode, MyInfoLifeStatusCode, MyInfoMaritialStatusCode, MyInfoMerdekaGenerationMessageCode, MyInfoNationalityCode, MyInfoPioneerGenerationMessageCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode } from "../../domain";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_DADDY_PERFECT;

export const mrSGDaddyPerfect: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		return {
			"edulevel": {
				"lastupdated": "2020-09-10",
				"code": null,
				"desc": null,
				"source": "2",
				"classification": "C",
				"unavailable": false,
			},
			"dialect": {
				"lastupdated": "2018-06-01",
				"code": MyInfoDialectCode.HOKKIEN,
				"desc": MyInfoDialectCode.fn.toEnumDesc(MyInfoDialectCode.HOKKIEN),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"occupation": {
				"lastupdated": "2020-09-10",
				"code": null,
				"desc": null,
				"source": "2",
				"classification": "C",
				"unavailable": false,
			},
			"regadd": {
				"country": {
					"code": MyInfoCountryCode.SINGAPORE,
					"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
				},
				"unit": {
					"value": "22",
				},
				"street": {
					"value": "TOA PAYOH LORONG 1",
				},
				"lastupdated": "2018-05-10",
				"block": {
					"value": "123",
				},
				"postal": {
					"value": "310123",
				},
				"source": "1",
				"classification": "C",
				"floor": {
					"value": "12",
				},
				"type": "SG",
				"building": {
					"value": null,
				},
				"unavailable": false,
			},
			"mobileno": {
				"lastupdated": "2019-04-03",
				"source": "4",
				"classification": "C",
				"areacode": {
					"value": "65",
				},
				"prefix": {
					"value": "+",
				},
				"nbr": {
					"value": "88158701",
				},
				"unavailable": false,
			},
			"passportexpirydate": {
				"lastupdated": "2021-01-01",
				"source": "1",
				"classification": "C",
				"value": "2030-09-10",
				"unavailable": false,
			},
			"divorcedate": {
				"lastupdated": null,
				"source": "1",
				"classification": "C",
				"value": null,
				"unavailable": false,
			},
			"marriagecertno": {
				"lastupdated": "2018-05-10",
				"source": "1",
				"classification": "C",
				"value": "M525997",
				"unavailable": false,
			},
			"merdekagen": {
				"eligibility": {
					"value": false,
				},
				"lastupdated": "2019-04-01",
				"quantum": {
					"value": 200,
				},
				"source": "1",
				"classification": "C",
				"message": {
					"code": MyInfoMerdekaGenerationMessageCode.ALL_OK,
					"desc": MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(MyInfoMerdekaGenerationMessageCode.ALL_OK),
				},
			},
			"pioneergen": {
				"eligibility": {
					"value": false,
				},
				"lastupdated": "2021-01-15",
				"quantum": {
					"value": "0.00",
				},
				"source": "1",
				"classification": "C",
				"message": {
					"code": MyInfoPioneerGenerationMessageCode.NON_PG,
					"desc": MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(MyInfoPioneerGenerationMessageCode.NON_PG),
				},
			},
			"gstvoucher": {
				"gstregular": {
					"value": 300,
				},
				"year": {
					"value": 2018,
				},
				"exclusion": {
					"value": false,
				},
				"gstmedisave": {
					"value": 250,
				},
				"lastupdated": "2019-04-01",
				"gstspecial": {
					"value": 300,
				},
				"source": "1",
				"classification": "C",
				"signup": {
					"value": false,
				},
				"unavailable": false,
			},
			"email": {
				"lastupdated": "2019-04-03",
				"source": "4",
				"classification": "C",
				"value": "gt.govandi@gmail.com",
				"unavailable": false,
			},
			"birthcountry": {
				"lastupdated": "2018-06-01",
				"code": MyInfoCountryCode.SINGAPORE,
				"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"race": {
				"lastupdated": "2018-06-01",
				"code": MyInfoRaceCode.CHINESE,
				"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"silversupport": {
				"eligibility": {
					"value": true,
				},
				"lastupdated": "2019-04-01",
				"amount": {
					"value": 300,
				},
				"source": "1",
				"classification": "C",
				"year": {
					"value": 2019,
				},
				"unavailable": false,
			},
			"countryofmarriage": {
				"lastupdated": "2018-05-10",
				"code": MyInfoCountryCode.SINGAPORE,
				"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"sex": {
				"lastupdated": "2018-06-01",
				"code": MyInfoSexCode.MALE,
				"desc": MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"marriagedate": {
				"lastupdated": "1993-10-22",
				"source": "1",
				"classification": "C",
				"value": "1993-10-22",
				"unavailable": false,
			},
			"residentialstatus": {
				"lastupdated": "2018-06-01",
				"code": MyInfoResidentialCode.CITIZEN,
				"desc": MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.CITIZEN),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"passportnumber": {
				"lastupdated": "2021-01-01",
				"source": "1",
				"classification": "C",
				"value": "L3280033",
				"unavailable": false,
			},
			"marital": {
				"lastupdated": "2018-05-10",
				"code": MyInfoMaritialStatusCode.MARRIED,
				"desc": MyInfoMaritialStatusCode.fn.toEnumDesc(MyInfoMaritialStatusCode.MARRIED),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"aliasname": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"value": aliasName.JASCKSON_LIM_YONG_XIANG,
				"unavailable": false,
			},
			"childrenbirthrecords": [
				{
					"dialect": {
						"code": MyInfoDialectCode.HOKKIEN,
						"desc": MyInfoDialectCode.fn.toEnumDesc(MyInfoDialectCode.HOKKIEN),
					},
					"race": {
						"code": MyInfoRaceCode.CHINESE,
						"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
					},
					"lifestatus": {
						"code": MyInfoLifeStatusCode.ALIVE,
						"desc": MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE),
					},
					"tob": {
						"value": "0901",
					},
					"sex": {
						"code": MyInfoSexCode.FEMALE,
						"desc": MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE),
					},
					"source": "1",
					"classification": "C",
					"birthcertno": {
						"value": "S5562882C",
					},
					"hanyupinyinname": {
						"value": "Cheng Pei Ni",
					},
					"hanyupinyinaliasname": {
						"value": null,
					},
					"marriedname": {
						"value": null,
					},
					"aliasname": {
						"value": null,
					},
					"dob": {
						"value": "2011-09-10",
					},
					"name": {
						"value": "Jo Lee Pei Ni",
					},
					"lastupdated": "2018-05-16",
					"secondaryrace": {
						"code": null,
						"desc": null,
					},
					"unavailable": false,
				},
				preschoolEligibleChild2_IC,
				preschoolEligibleChild2_K1,
			],
			"sponsoredchildrenrecords": [],
			"nationality": {
				"lastupdated": "2018-06-01",
				"code": MyInfoNationalityCode.SINGAPORE_CITIZEN,
				"desc": MyInfoNationalityCode.fn.toEnumDesc(MyInfoNationalityCode.SINGAPORE_CITIZEN),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"dob": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"value": "1975-10-06",
				"unavailable": false,
			},
			"name": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"value": profileName,
				"unavailable": false,
			},
			"secondaryrace": {
				"lastupdated": "2018-06-01",
				"code": MyInfoRaceCode.GERMAN,
				"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.GERMAN),
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"hdbtype": {
				"lastupdated": "2020-08-26",
				"code": null,
				"desc": null,
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"housingtype": {
				"lastupdated": "2020-08-26",
				"code": null,
				"desc": null,
				"source": "1",
				"classification": "C",
				"unavailable": false,
			},
			"drivinglicence": {
				"revocation": {
					"startdate": {
						"value": null,
					},
					"enddate": {
						"value": null,
					},
				},
				"totaldemeritpoints": {
					"value": 0,
				},
				"disqualification": {
					"startdate": {
						"value": null,
					},
					"enddate": {
						"value": null,
					},
				},
				"qdl": {
					"expirydate": {
						"value": null,
					},
					"validity": {
						"code": null,
						"desc": null,
					},
					"classes": [],
				},
				"lastupdated": "2020-08-26",
				"pdl": {
					"expirydate": {
						"value": null,
					},
					"validity": {
						"code": null,
						"desc": null,
					},
					"classes": [],
				},
				"source": "1",
				"classification": "C",
				"comstatus": {
					"code": null,
					"desc": null,
				},
				"photocardserialno": {
					"value": null,
				},
				"suspension": {
					"startdate": {
						"value": null,
					},
					"enddate": {
						"value": null,
					},
				},
				"unavailable": false,
			}
		};
	},
};
