"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrAppReviewer = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const id = "S1111111D";
const name = fake_profile_1.ProfileArchetype.MR_APP_REVIEWER;
const source = "1";
const classification = "C";
const lastupdated = "2020-01-01";
exports.mrAppReviewer = {
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
                "code": domain_1.MyInfoSexCode.MALE,
                "desc": domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE),
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
                "unavailable": false,
            },
            "race": {
                "code": domain_1.MyInfoRaceCode.CHINESE,
                "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
                "unavailable": false,
            },
            "secondaryrace": {
                "code": domain_1.MyInfoRaceCode.GERMAN,
                "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.GERMAN),
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
                "unavailable": false,
            },
            "dialect": {
                "code": domain_1.MyInfoDialectCode.HOKKIEN,
                "desc": domain_1.MyInfoDialectCode.fn.toEnumValue(domain_1.MyInfoDialectCode.HOKKIEN),
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
                "unavailable": false,
            },
            "nationality": {
                "code": domain_1.MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN,
                "desc": domain_1.MyInfoNationalityCitizenshipCode.fn.toEnumDesc(domain_1.MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN),
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
                "code": domain_1.MyInfoCountryPlaceCode.SINGAPORE,
                "desc": domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
                "unavailable": false,
            },
            "residentialstatus": {
                "code": domain_1.MyInfoResidentialCode.CITIZEN,
                "desc": domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.CITIZEN),
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
                "unavailable": false,
            },
            "regadd": {
                "type": domain_1.MyInfoCountryPlaceCode.SINGAPORE,
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
                    "code": domain_1.MyInfoCountryPlaceCode.SINGAPORE,
                    "desc": domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
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
                "code": domain_1.MyInfoMaritalStatusCode.MARRIED,
                "desc": domain_1.MyInfoMaritalStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritalStatusCode.MARRIED),
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
                "code": domain_1.MyInfoCountryPlaceCode.SINGAPORE,
                "desc": domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
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
                "code": domain_1.MyInfoEduLevelCode.PRIMARY,
                "desc": domain_1.MyInfoEduLevelCode.fn.toEnumDesc(domain_1.MyInfoEduLevelCode.PRIMARY),
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
                    "code": domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK,
                    "desc": domain_1.MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK),
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
                    "code": domain_1.MyInfoPioneerGenerationMessageCode.ALL_OK,
                    "desc": domain_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoPioneerGenerationMessageCode.ALL_OK),
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
//# sourceMappingURL=mrAppReviewer.js.map