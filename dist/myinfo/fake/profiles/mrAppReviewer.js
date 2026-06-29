"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrAppReviewer = void 0;
/* eslint-disable max-lines-per-function */
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const id = "S1111111D";
const name = fake_profile_1.ProfileArchetype.MR_APP_REVIEWER;
const source = "1";
const classification = "C";
const lastupdated = "2020-01-01";
exports.mrAppReviewer = {
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
                code: types_1.MyInfoSexCode.MALE,
                desc: types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE),
                source,
                classification,
                lastupdated,
                unavailable: false,
            },
            race: {
                code: types_1.MyInfoRaceCode.CHINESE,
                desc: types_1.MyInfoRaceCode.fn.toEnumDesc(types_1.MyInfoRaceCode.CHINESE),
                source,
                classification,
                lastupdated,
                unavailable: false,
            },
            secondaryrace: {
                code: types_1.MyInfoRaceCode.GERMAN,
                desc: types_1.MyInfoRaceCode.fn.toEnumDesc(types_1.MyInfoRaceCode.GERMAN),
                source,
                classification,
                lastupdated,
                unavailable: false,
            },
            dialect: {
                code: types_1.MyInfoDialectCode.HOKKIEN,
                desc: types_1.MyInfoDialectCode.fn.toEnumValue(types_1.MyInfoDialectCode.HOKKIEN),
                source,
                classification,
                lastupdated,
                unavailable: false,
            },
            nationality: {
                code: types_1.MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN,
                desc: types_1.MyInfoNationalityCitizenshipCode.fn.toEnumDesc(types_1.MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN),
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
                code: types_1.MyInfoCountryPlaceCode.SINGAPORE,
                desc: types_1.MyInfoCountryPlaceCode.fn.toEnumDesc(types_1.MyInfoCountryPlaceCode.SINGAPORE),
                source,
                classification,
                lastupdated,
                unavailable: false,
            },
            residentialstatus: {
                code: types_1.MyInfoResidentialCode.CITIZEN,
                desc: types_1.MyInfoResidentialCode.fn.toEnumDesc(types_1.MyInfoResidentialCode.CITIZEN),
                source,
                classification,
                lastupdated,
                unavailable: false,
            },
            regadd: {
                type: types_1.MyInfoCountryPlaceCode.SINGAPORE,
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
                    code: types_1.MyInfoCountryPlaceCode.SINGAPORE,
                    desc: types_1.MyInfoCountryPlaceCode.fn.toEnumDesc(types_1.MyInfoCountryPlaceCode.SINGAPORE),
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
                code: types_1.MyInfoMaritalStatusCode.MARRIED,
                desc: types_1.MyInfoMaritalStatusCode.fn.toEnumDesc(types_1.MyInfoMaritalStatusCode.MARRIED),
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
                code: types_1.MyInfoCountryPlaceCode.SINGAPORE,
                desc: types_1.MyInfoCountryPlaceCode.fn.toEnumDesc(types_1.MyInfoCountryPlaceCode.SINGAPORE),
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
                code: types_1.MyInfoEduLevelCode.PRIMARY,
                desc: types_1.MyInfoEduLevelCode.fn.toEnumDesc(types_1.MyInfoEduLevelCode.PRIMARY),
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
                    code: types_1.MyInfoMerdekaGenerationMessageCode.ALL_OK,
                    desc: types_1.MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(types_1.MyInfoMerdekaGenerationMessageCode.ALL_OK),
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
                    code: types_1.MyInfoPioneerGenerationMessageCode.ALL_OK,
                    desc: types_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(types_1.MyInfoPioneerGenerationMessageCode.ALL_OK),
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
//# sourceMappingURL=mrAppReviewer.js.map