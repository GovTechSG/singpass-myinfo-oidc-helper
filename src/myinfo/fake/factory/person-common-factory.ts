import { Factory } from "rosie";
import { MyInfoComponents, MyinfoCountryCode, MyinfoDialectCode, MyinfoLifeStatusCode, MyinfoMaritialStatusCode, MyinfoMerdekaGenerationMessageCode, MyinfoNationalityCode, MyinfoRaceCode, MyinfoResidentialCode, MyinfoSexCode } from "../../domain";
import { aliasName } from "../profiles/common";


export const PersonCommonFactory = new Factory<MyInfoComponents.Schemas.PersonCommon>()
	.sequence("uinfin", (i) => ({
		"lastupdated": "2018-06-01",
		"value": "S123456" + i + "A",
		"source": "1",
		"classification": "C",
	}))
	.attrs({
		"edulevel": {
			"lastupdated": "2020-09-10",
			"code": null,
			"source": "2",
			"classification": "C",
			"desc": null,
			"unavailable": false,
		},
		"dialect": {
			"lastupdated": "2018-06-01",
			"code": MyinfoDialectCode.HOKKIEN,
			"source": "1",
			"classification": "C",
			"desc": MyinfoDialectCode.fn.toEnumDesc(MyinfoDialectCode.HOKKIEN),
			"unavailable": false,
		},
		"occupation": {
			"lastupdated": "2020-09-10",
			"code": "",
			"source": "2",
			"classification": "C",
			"desc": "",
			"unavailable": false,
		},
		"regadd": {
			"country": {
				"code": MyinfoCountryCode.SINGAPORE,
				"desc": MyinfoCountryCode.fn.toEnumDesc(MyinfoCountryCode.SINGAPORE),
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
				"value": "",
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
			"lastupdated": "",
			"source": "1",
			"classification": "C",
			"value": "",
			"unavailable": false,
		},
		"divorcedate": {
			"lastupdated": "",
			"source": "1",
			"classification": "C",
			"value": "",
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
				"value": true,
			},
			"lastupdated": "2019-04-01",
			"quantum": {
				"value": 200,
			},
			"source": "1",
			"classification": "C",
			"message": {
				"code": MyinfoMerdekaGenerationMessageCode.ALL_OK,
				"desc": MyinfoMerdekaGenerationMessageCode.fn.toEnumDesc(MyinfoMerdekaGenerationMessageCode.ALL_OK),
			},
		},
		"gstvoucher": {
			"gstregular": {
				"value": 300,
			},
			"year": {
				"value": 2019,
			},
			"exclusion": {
				"value": false,
			},
			"gstmedisave": {
				"value": 250,
			},
			"lastupdated": "2019-04-01",
			"gstspecial": {
				"value": 0,
			},
			"source": "1",
			"classification": "C",
			"signup": {
				"value": true,
			},
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
			"code": MyinfoCountryCode.SINGAPORE,
			"source": "1",
			"classification": "C",
			"desc": MyinfoCountryCode.fn.toEnumDesc(MyinfoCountryCode.SINGAPORE),
			"unavailable": false,
		},
		"race": {
			"lastupdated": "2018-06-01",
			"code": MyinfoRaceCode.CHINESE,
			"source": "1",
			"classification": "C",
			"desc": MyinfoRaceCode.fn.toEnumDesc(MyinfoRaceCode.CHINESE),
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
		},
		"countryofmarriage": {
			"lastupdated": "2018-05-10",
			"code": MyinfoCountryCode.SINGAPORE,
			"source": "1",
			"classification": "C",
			"desc": MyinfoCountryCode.fn.toEnumDesc(MyinfoCountryCode.SINGAPORE),
			"unavailable": false,
		},
		"sex": {
			"lastupdated": "2018-06-01",
			"code": MyinfoSexCode.MALE,
			"source": "1",
			"classification": "C",
			"desc": MyinfoSexCode.fn.toEnumDesc(MyinfoSexCode.MALE),
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
			"code": MyinfoResidentialCode.CITIZEN,
			"source": "1",
			"classification": "C",
			"desc": MyinfoResidentialCode.fn.toEnumDesc(MyinfoResidentialCode.CITIZEN),
			"unavailable": false,
		},
		"passportnumber": {
			"lastupdated": "",
			"source": "1",
			"classification": "C",
			"value": "",
			"unavailable": false,
		},
		"marital": {
			"lastupdated": "2018-05-10",
			"code": MyinfoMaritialStatusCode.MARRIED,
			"source": "1",
			"classification": "C",
			"desc": MyinfoMaritialStatusCode.fn.toEnumDesc(MyinfoMaritialStatusCode.MARRIED),
			"unavailable": false,
		},
		"aliasname": {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": aliasName.JASCKSON_LIM_YONG_XIANG,
			"unavailable": false,
		},
		"nationality": {
			"lastupdated": "2018-06-01",
			"code": MyinfoNationalityCode.SINGAPORE_CITIZEN,
			"source": "1",
			"classification": "C",
			"desc": MyinfoNationalityCode.fn.toEnumDesc(MyinfoNationalityCode.SINGAPORE_CITIZEN),
			"unavailable": false,
		},
		"dob": {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "1953-10-06",
			"unavailable": false,
		},
		"name": {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "User-Name",
			"unavailable": false,
		},
		"secondaryrace": {
			"lastupdated": "2018-06-01",
			"code": MyinfoRaceCode.GERMAN,
			"source": "1",
			"classification": "C",
			"desc": MyinfoRaceCode.fn.toEnumDesc(MyinfoRaceCode.GERMAN),
			"unavailable": false,
		},
	})
	.attr("sponsoredchildrenrecords", () => [sponsoredchildrecordFactory.build(), sponsoredchildrecordFactory.build()])
	.attr("childrenbirthrecords", () => [childrenbirthrecordFactory.build(), childrenbirthrecordFactory.build()]);

export const childrenbirthrecordFactory = new Factory<MyInfoComponents.Schemas.Childrenbirthrecords>()
	.sequence("birthcertno", (i) => ({
		"value": "S556288" + i,
	}))
	.sequence("name", (i) => ({
		"value": "child" + i,
	}))
	.attrs({
		"dialect": {
			"code": MyinfoDialectCode.HOKKIEN,
			"desc": MyinfoDialectCode.fn.toEnumValue(MyinfoDialectCode.HOKKIEN),
		},
		"race": {
			"code": MyinfoRaceCode.CHINESE,
			"desc": MyinfoRaceCode.fn.toEnumDesc(MyinfoRaceCode.CHINESE),
		},
		"lifestatus": {
			"code": MyinfoLifeStatusCode.ALIVE,
			"desc": MyinfoLifeStatusCode.fn.toEnumDesc(MyinfoLifeStatusCode.ALIVE),
		},
		"tob": {
			"value": "0901",
		},
		"sex": {
			"code": MyinfoSexCode.FEMALE,
			"desc": MyinfoSexCode.fn.toEnumDesc(MyinfoSexCode.FEMALE),
		},
		"source": "1",
		"classification": "C",
		"hanyupinyinname": {
			"value": "Cheng Pei Ni",
		},
		"hanyupinyinaliasname": {
			"value": "",
		},
		"marriedname": {
			"value": "",
		},
		"aliasname": {
			"value": "",
		},
		"dob": {
			"value": "2011-09-10",
		},
		"lastupdated": "2018-05-16",
		"secondaryrace": {
			"code": "",
			"desc": "",
		},
	});

export const sponsoredchildrecordFactory = new Factory<MyInfoComponents.Schemas.Sponsoredchildrenrecords>()
	.sequence("name", (i) => ({
		"value": "child" + i,
	}))
	.attrs({
		"dialect": {
			"code": MyinfoDialectCode.HOKKIEN,
			"desc": MyinfoDialectCode.fn.toEnumDesc(MyinfoDialectCode.HOKKIEN),
		},
		"race": {
			"code": MyinfoRaceCode.CHINESE,
			"desc": MyinfoRaceCode.fn.toEnumDesc(MyinfoRaceCode.CHINESE),
		},
		"lifestatus": {
			"code": MyinfoLifeStatusCode.ALIVE,
			"desc": MyinfoLifeStatusCode.fn.toEnumDesc(MyinfoLifeStatusCode.ALIVE),
		},
		"sex": {
			"code": MyinfoSexCode.MALE,
			"desc": MyinfoSexCode.fn.toEnumDesc(MyinfoSexCode.MALE),
		},
		"source": "1",
		"classification": "C",
		"hanyupinyinname": {
			"value": "Sponsored Child",
		},
		"hanyupinyinaliasname": {
			"value": "",
		},
		"marriedname": {
			"value": "",
		},
		"aliasname": {
			"value": "",
		},
		"dob": {
			"value": "2012-09-10",
		},
		"lastupdated": "2018-05-16",
		"secondaryrace": {
			"code": "",
			"desc": "",
		},
	});
