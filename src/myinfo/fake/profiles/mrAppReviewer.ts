import * as _ from "lodash";
import { MyinfoCountryCode, MyinfoDialectCode, MyinfoEduLevelCode, MyinfoMaritialStatusCode, MyinfoMerdekaGenerationMessageCode, MyinfoNationalityCode, MyinfoRaceCode, MyinfoResidentialCode, MyinfoSexCode } from "../../domain";
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
				"code": MyinfoSexCode.MALE,
				"desc": MyinfoSexCode.fn.toEnumDesc(MyinfoSexCode.MALE),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"race": {
				"code": MyinfoRaceCode.CHINESE,
				"desc": MyinfoRaceCode.fn.toEnumDesc(MyinfoRaceCode.CHINESE),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"secondaryrace": {
				"code": MyinfoRaceCode.GERMAN,
				"desc": MyinfoRaceCode.fn.toEnumDesc(MyinfoRaceCode.GERMAN),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"dialect": {
				"code": MyinfoDialectCode.HOKKIEN,
				"desc": MyinfoDialectCode.fn.toEnumValue(MyinfoDialectCode.HOKKIEN),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"nationality": {
				"code": MyinfoNationalityCode.SINGAPORE_CITIZEN,
				"desc": MyinfoNationalityCode.fn.toEnumDesc(MyinfoNationalityCode.SINGAPORE_CITIZEN),
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
				"code": MyinfoCountryCode.SINGAPORE,
				"desc": MyinfoCountryCode.fn.toEnumDesc(MyinfoCountryCode.SINGAPORE),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"residentialstatus": {
				"code": MyinfoResidentialCode.CITIZEN,
				"desc": MyinfoResidentialCode.fn.toEnumDesc(MyinfoResidentialCode.CITIZEN),
				"source": source,
				"classification": classification,
				"lastupdated": lastupdated,
				"unavailable": false,
			},
			"regadd": {
				"type": MyinfoCountryCode.SINGAPORE,
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
					"code": MyinfoCountryCode.SINGAPORE,
					"desc": MyinfoCountryCode.fn.toEnumDesc(MyinfoCountryCode.SINGAPORE),
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
				"code": MyinfoMaritialStatusCode.MARRIED,
				"desc": MyinfoMaritialStatusCode.fn.toEnumDesc(MyinfoMaritialStatusCode.MARRIED),
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
				"code": MyinfoCountryCode.SINGAPORE,
				"desc": MyinfoCountryCode.fn.toEnumDesc(MyinfoCountryCode.SINGAPORE),
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
				"code": MyinfoEduLevelCode.PRIMARY,
				"desc": MyinfoEduLevelCode.fn.toEnumDesc(MyinfoEduLevelCode.PRIMARY),
				"source": "2",
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
			"merdekagen": {
				"eligibility": {
					"value": true,
				},
				"quantum": {
					"value": 100,
				},
				"message": {
					"code": MyinfoMerdekaGenerationMessageCode.ALL_OK,
					"desc": MyinfoMerdekaGenerationMessageCode.fn.toEnumDesc(MyinfoMerdekaGenerationMessageCode.ALL_OK),
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
					"value": 2019,
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
					"value": 2019,
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
