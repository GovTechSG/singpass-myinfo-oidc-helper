"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGDaddyPerfect = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const childbirthRecords_1 = require("./childbirthRecords");
const common_1 = require("../profiles/common");
const domain_1 = require("../../domain");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_DADDY_PERFECT;
exports.mrSGDaddyPerfect = {
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
                "code": domain_1.MyInfoDialectCode.HOKKIEN,
                "desc": domain_1.MyInfoDialectCode.fn.toEnumDesc(domain_1.MyInfoDialectCode.HOKKIEN),
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
                    "code": domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK,
                    "desc": domain_1.MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK),
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
                    "code": domain_1.MyInfoPioneerGenerationMessageCode.NON_PG,
                    "desc": domain_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoPioneerGenerationMessageCode.NON_PG),
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
                "code": domain_1.MyInfoCountryCode.SINGAPORE,
                "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
                "source": "1",
                "classification": "C",
                "unavailable": false,
            },
            "race": {
                "lastupdated": "2018-06-01",
                "code": domain_1.MyInfoRaceCode.CHINESE,
                "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
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
                "code": domain_1.MyInfoCountryCode.SINGAPORE,
                "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
                "source": "1",
                "classification": "C",
                "unavailable": false,
            },
            "sex": {
                "lastupdated": "2018-06-01",
                "code": domain_1.MyInfoSexCode.MALE,
                "desc": domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE),
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
                "code": domain_1.MyInfoResidentialCode.CITIZEN,
                "desc": domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.CITIZEN),
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
                "code": domain_1.MyInfoMaritialStatusCode.MARRIED,
                "desc": domain_1.MyInfoMaritialStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritialStatusCode.MARRIED),
                "source": "1",
                "classification": "C",
                "unavailable": false,
            },
            "aliasname": {
                "lastupdated": "2018-06-01",
                "source": "1",
                "classification": "C",
                "value": common_1.aliasName.JASCKSON_LIM_YONG_XIANG,
                "unavailable": false,
            },
            "childrenbirthrecords": [
                {
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
                    "tob": {
                        "value": "0901",
                    },
                    "sex": {
                        "code": domain_1.MyInfoSexCode.FEMALE,
                        "desc": domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE),
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
                childbirthRecords_1.preschoolEligibleChild2_IC,
                childbirthRecords_1.preschoolEligibleChild2_K1,
            ],
            "sponsoredchildrenrecords": [],
            "nationality": {
                "lastupdated": "2018-06-01",
                "code": domain_1.MyInfoNationalityCode.SINGAPORE_CITIZEN,
                "desc": domain_1.MyInfoNationalityCode.fn.toEnumDesc(domain_1.MyInfoNationalityCode.SINGAPORE_CITIZEN),
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
                "code": domain_1.MyInfoRaceCode.GERMAN,
                "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.GERMAN),
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
//# sourceMappingURL=mrSGDaddyPerfect.js.map