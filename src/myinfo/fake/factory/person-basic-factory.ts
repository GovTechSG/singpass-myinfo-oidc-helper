import { Factory } from "rosie";
import { MyInfoComponents, MyInfoCountryCode, MyInfoDialectCode, MyInfoLifeStatusCode, MyInfoMaritialStatusCode, MyInfoMerdekaGenerationMessageCode, MyInfoNationalityCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode } from "../../domain";
import { aliasName } from "../profiles/common";


export const PersonBasicFactory = new Factory<MyInfoComponents.Schemas.PersonBasic>()
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
		},
		"dialect": {
			"lastupdated": "2018-06-01",
			"code": MyInfoDialectCode.HOKKIEN,
			"source": "1",
			"classification": "C",
			"desc": MyInfoDialectCode.fn.toEnumDesc(MyInfoDialectCode.HOKKIEN),
		},
		"occupation": {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "",
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
				"value": "",
			},
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
		},
		"passportexpirydate": {
			"lastupdated": "",
			"source": "1",
			"classification": "C",
			"value": "",
		},
		"divorcedate": {
			"lastupdated": "",
			"source": "1",
			"classification": "C",
			"value": "",
		},
		"marriagecertno": {
			"lastupdated": "2018-05-10",
			"source": "1",
			"classification": "C",
			"value": "M525997",
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
				"code": MyInfoMerdekaGenerationMessageCode.ALL_OK,
				"desc": MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(MyInfoMerdekaGenerationMessageCode.ALL_OK),
			},
		},
		"gstvoucher": {
			"gstregular": {
				"value": 300,
			},
			"year": {
				"value": "2019",
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
		},
		"birthcountry": {
			"lastupdated": "2018-06-01",
			"code": MyInfoCountryCode.SINGAPORE,
			"source": "1",
			"classification": "C",
			"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
		},
		"race": {
			"lastupdated": "2018-06-01",
			"code": MyInfoRaceCode.CHINESE,
			"source": "1",
			"classification": "C",
			"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.CHINESE),
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
				"value": "2019",
			},
		},
		"countryofmarriage": {
			"lastupdated": "2018-05-10",
			"code": MyInfoCountryCode.SINGAPORE,
			"source": "1",
			"classification": "C",
			"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
		},
		"sex": {
			"lastupdated": "2018-06-01",
			"code": MyInfoSexCode.MALE,
			"source": "1",
			"classification": "C",
			"desc": MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE),
		},
		"marriagedate": {
			"lastupdated": "1993-10-22",
			"source": "1",
			"classification": "C",
			"value": "1993-10-22",
		},
		"residentialstatus": {
			"lastupdated": "2018-06-01",
			"code": MyInfoResidentialCode.CITIZEN,
			"source": "1",
			"classification": "C",
			"desc": MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.CITIZEN),
		},
		"passportnumber": {
			"lastupdated": "",
			"source": "1",
			"classification": "C",
			"value": "",
		},
		"marital": {
			"lastupdated": "2018-05-10",
			"code": MyInfoMaritialStatusCode.MARRIED,
			"source": "1",
			"classification": "C",
			"desc": MyInfoMaritialStatusCode.fn.toEnumDesc(MyInfoMaritialStatusCode.MARRIED),
		},
		"aliasname": {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": aliasName.JASCKSON_LIM_YONG_XIANG,
		},
		"nationality": {
			"lastupdated": "2018-06-01",
			"code": MyInfoNationalityCode.SINGAPORE_CITIZEN,
			"source": "1",
			"classification": "C",
			"desc": MyInfoNationalityCode.fn.toEnumDesc(MyInfoNationalityCode.SINGAPORE_CITIZEN),
		},
		"dob": {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "1953-10-06",
		},
		"name": {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "User-Name",
		},
		"secondaryrace": {
			"lastupdated": "2018-06-01",
			"code": MyInfoRaceCode.GERMAN,
			"source": "1",
			"classification": "C",
			"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.GERMAN),
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
			"code": MyInfoDialectCode.HOKKIEN,
			"desc": MyInfoDialectCode.fn.toEnumValue(MyInfoDialectCode.HOKKIEN),
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
		"sex": {
			"code": MyInfoSexCode.MALE,
			"desc": MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE),
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
