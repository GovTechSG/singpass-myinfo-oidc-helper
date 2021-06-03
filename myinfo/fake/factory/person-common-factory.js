"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsoredchildrecordFactory = exports.childrenbirthrecordFactory = exports.PersonCommonFactory = void 0;
const rosie_1 = require("rosie");
const domain_1 = require("../../domain");
const common_1 = require("../profiles/common");
exports.PersonCommonFactory = new rosie_1.Factory()
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
        "code": domain_1.MyInfoDialectCode.HOKKIEN,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoDialectCode.fn.toEnumDesc(domain_1.MyInfoDialectCode.HOKKIEN),
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
            "code": domain_1.MyInfoCountryCode.SINGAPORE,
            "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
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
            "code": domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK,
            "desc": domain_1.MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK),
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
        "code": domain_1.MyInfoCountryCode.SINGAPORE,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
        "unavailable": false,
    },
    "race": {
        "lastupdated": "2018-06-01",
        "code": domain_1.MyInfoRaceCode.CHINESE,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
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
        "code": domain_1.MyInfoCountryCode.SINGAPORE,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
        "unavailable": false,
    },
    "sex": {
        "lastupdated": "2018-06-01",
        "code": domain_1.MyInfoSexCode.MALE,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE),
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
        "code": domain_1.MyInfoResidentialCode.CITIZEN,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.CITIZEN),
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
        "code": domain_1.MyInfoMaritialStatusCode.MARRIED,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoMaritialStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritialStatusCode.MARRIED),
        "unavailable": false,
    },
    "aliasname": {
        "lastupdated": "2018-06-01",
        "source": "1",
        "classification": "C",
        "value": common_1.aliasName.JASCKSON_LIM_YONG_XIANG,
        "unavailable": false,
    },
    "nationality": {
        "lastupdated": "2018-06-01",
        "code": domain_1.MyInfoNationalityCode.SINGAPORE_CITIZEN,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoNationalityCode.fn.toEnumDesc(domain_1.MyInfoNationalityCode.SINGAPORE_CITIZEN),
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
        "code": domain_1.MyInfoRaceCode.GERMAN,
        "source": "1",
        "classification": "C",
        "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.GERMAN),
        "unavailable": false,
    },
})
    .attr("sponsoredchildrenrecords", () => [exports.sponsoredchildrecordFactory.build(), exports.sponsoredchildrecordFactory.build()])
    .attr("childrenbirthrecords", () => [exports.childrenbirthrecordFactory.build(), exports.childrenbirthrecordFactory.build()]);
exports.childrenbirthrecordFactory = new rosie_1.Factory()
    .sequence("birthcertno", (i) => ({
    "value": "S556288" + i,
}))
    .sequence("name", (i) => ({
    "value": "child" + i,
}))
    .attrs({
    "dialect": {
        "code": domain_1.MyInfoDialectCode.HOKKIEN,
        "desc": domain_1.MyInfoDialectCode.fn.toEnumValue(domain_1.MyInfoDialectCode.HOKKIEN),
    },
    "race": {
        "code": domain_1.MyInfoRaceCode.CHINESE,
        "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
    },
    "lifestatus": {
        "code": domain_1.MyInfoLifeStatusCode.ALIVE,
        "desc": domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    "tob": {
        "value": "0901",
    },
    "sex": {
        "code": domain_1.MyInfoSexCode.FEMALE,
        "desc": domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE),
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
exports.sponsoredchildrecordFactory = new rosie_1.Factory()
    .sequence("name", (i) => ({
    "value": "child" + i,
}))
    .attrs({
    "dialect": {
        "code": domain_1.MyInfoDialectCode.HOKKIEN,
        "desc": domain_1.MyInfoDialectCode.fn.toEnumDesc(domain_1.MyInfoDialectCode.HOKKIEN),
    },
    "race": {
        "code": domain_1.MyInfoRaceCode.CHINESE,
        "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
    },
    "lifestatus": {
        "code": domain_1.MyInfoLifeStatusCode.ALIVE,
        "desc": domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    "sex": {
        "code": domain_1.MyInfoSexCode.MALE,
        "desc": domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE),
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
//# sourceMappingURL=person-common-factory.js.map