import * as _ from "lodash";
import { MyInfoCountryCode, MyInfoDialectCode, MyInfoEduLevelCode, MyInfoMaritialStatusCode, MyInfoMerdekaGenerationMessageCode, MyInfoNationalityCode, MyInfoPioneerGenerationMessageCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";

const id = "S1111111D";
const name = ProfileArchetype.MR_APP_REVIEWER;

const source = "1";
const classification = "C";
const lastupdated = "2020-01-01";

export const mrAppReviewer: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		return {
			"name": {
				"value": profileName,
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"aliasname": {
				"value": "TEST PROFILE",
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"sex": {
				"code": MyInfoSexCode.MALE,
				"desc": MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"race": {
				"code": MyInfoRaceCode.CHINESE,
				"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"secondaryrace": {
				"code": MyInfoRaceCode.GERMAN,
				"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.GERMAN),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"dialect": {
				"code": MyInfoDialectCode.HOKKIEN,
				"desc": MyInfoDialectCode.fn.toEnumValue(MyInfoDialectCode.HOKKIEN),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"nationality": {
				"code": MyInfoNationalityCode.SINGAPORE_CITIZEN,
				"desc": MyInfoNationalityCode.fn.toEnumDesc(MyInfoNationalityCode.SINGAPORE_CITIZEN),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"dob": {
				"value": "1989-10-06",
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"birthcountry": {
				"code": MyInfoCountryCode.SINGAPORE,
				"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"residentialstatus": {
				"code": MyInfoResidentialCode.CITIZEN,
				"desc": MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.CITIZEN),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"regadd": {
				"type": MyInfoCountryCode.SINGAPORE,
				"block": {
					"value": "123",
				},
				"building": {
					"value": null,
				},
				"floor": {
					"value": "12",
				},
				"unit": {
					"value": "22",
				},
				"street": {
					"value": "TEST ACCT STREET",
				},
				"country": {
					"code": MyInfoCountryCode.SINGAPORE,
					"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
				},
				"postal": {
					"value": "310123",
				},
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"email": {
				"value": "gt.govandi@gmail.com",
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"homeno": {
				"lastupdated": "2020-09-10",
				"source": "2",
				"classification": "C",
				"areacode": {
					"value": null,
				},
				"prefix": {
					"value": null,
				},
				"nbr": {
					"value": null,
				},
				"unavailable": false,
			},
			"mobileno": {
				"areacode": {
					"value": "65",
				},
				"prefix": {
					"value": "+",
				},
				"nbr": {
					"value": "97324992",
				},
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"marital": {
				"code": MyInfoMaritialStatusCode.MARRIED,
				"desc": MyInfoMaritialStatusCode.fn.toEnumDesc(MyInfoMaritialStatusCode.MARRIED),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"marriagecertno": {
				"value": "M525997",
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"countryofmarriage": {
				"code": MyInfoCountryCode.SINGAPORE,
				"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"marriagedate": {
				"value": "1993-10-22",
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"edulevel": {
				"lastupdated": "2020-09-10",
				"code": MyInfoEduLevelCode.PRIMARY,
				"desc": MyInfoEduLevelCode.fn.toEnumDesc(MyInfoEduLevelCode.PRIMARY),
				"source": "2",
				"classification": "C",
				"unavailable": false,
			},
			"occupation": {
				"lastupdated": "2020-09-10",
				"value": null,
				"source": "2",
				"classification": "C",
				"unavailable": false,
			},
			"merdekagen": {
				"eligibility": {
					"value": true,
				},
				"quantum": {
					"value": 100,
				},
				"message": {
					"code": MyInfoMerdekaGenerationMessageCode.ALL_OK,
					"desc": MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(MyInfoMerdekaGenerationMessageCode.ALL_OK),
				},
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
			},
			"gstvoucher": {
				"gstregular": {
					"value": 123,
				},
				"year": {
					"value": "2019",
				},
				"exclusion": {
					"value": false,
				},
				"gstmedisave": {
					"value": 0,
				},
				"gstspecial": {
					"value": 123,
				},
				"signup": {
					"value": false,
				},
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
			},
			"silversupport": {
				"eligibility": {
					"value": true,
				},
				"amount": {
					"value": 123,
				},
				"year": {
					"value": "2019",
				},
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
			},
			"pioneergen": {
				"eligibility": {
					"value": true,
				},
				"quantum": {
					"value": "100.00",
				},
				"message": {
					"code": MyInfoPioneerGenerationMessageCode.ALL_OK,
					"desc": MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(MyInfoPioneerGenerationMessageCode.ALL_OK),
				},
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
			},
			"childrenbirthrecords": [],
			"sponsoredchildrenrecords": [],
			"hdbtype": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"unavailable": true,
			},
			"housingtype": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"unavailable": true,
			},
			"drivinglicence": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"unavailable": true,
			}
		};
	},
};
