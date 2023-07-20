"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProfile = void 0;
const _ = require("lodash");
const domain_1 = require("../../../domain");
const common_1 = require("../common");
const id = "S8399420G";
exports.BaseProfile = {
    id,
    name: null,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? "" : profileName;
        return {
            name: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: profileName,
            },
            countryofmarriage: {
                lastupdated: "2018-05-10",
                code: domain_1.MyInfoCountryPlaceCode.SINGAPORE,
                desc: domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
                source: "1",
                classification: "C",
            },
            sex: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoSexCode.MALE,
                desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE),
                source: "1",
                classification: "C",
            },
            regadd: address(),
            mobileno: {
                areacode: {
                    value: "65",
                },
                prefix: {
                    value: "+",
                },
                nbr: {
                    value: "88158701",
                },
                lastupdated: "2022-07-14",
                source: "4",
                classification: "C",
            },
            dialect: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoDialectCode.HOKKIEN,
                desc: domain_1.MyInfoDialectCode.fn.toEnumDesc(domain_1.MyInfoDialectCode.HOKKIEN),
                source: "1",
                classification: "C",
            },
            occupation: {
                lastupdated: "2020-09-10",
                code: "",
                desc: "",
                source: "2",
                classification: "C",
            },
            employment: {
                classification: "C",
                source: "2",
                lastupdated: "2019-03-26",
                value: "Google Pte Ltd",
            },
            nationality: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN,
                desc: domain_1.MyInfoNationalityCitizenshipCode.fn.toEnumDesc(domain_1.MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN),
                source: "1",
                classification: "C",
            },
            dob: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: `${new Date().getFullYear() - 60 + 1}-01-01`,
            },
            secondaryrace: {
                lastupdated: "2018-06-01",
                code: "",
                source: "1",
                classification: "C",
                desc: "",
            },
            edulevel: {
                lastupdated: "2020-09-10",
                code: null,
                source: "2",
                classification: "C",
                desc: null,
            },
            passportnumber: {
                lastupdated: "2021-01-01",
                source: "1",
                classification: "C",
                value: "L3280033",
            },
            passportexpirydate: {
                lastupdated: "2021-01-01",
                source: "1",
                classification: "C",
                value: "2030-09-10",
            },
            divorcedate: {
                lastupdated: "2022-09-21",
                source: "1",
                classification: "C",
                value: "",
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
                    value: 0,
                },
                source: "1",
                classification: "C",
                message: {
                    code: domain_1.MyInfoMerdekaGenerationMessageCode.NON_MG,
                    desc: domain_1.MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoMerdekaGenerationMessageCode.NON_MG),
                },
            },
            pioneergen: {
                eligibility: {
                    value: false,
                },
                lastupdated: "2021-01-15",
                quantum: {
                    value: "",
                },
                source: "1",
                classification: "C",
                message: {
                    code: domain_1.MyInfoPioneerGenerationMessageCode.NON_PG,
                    desc: domain_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoPioneerGenerationMessageCode.NON_PG),
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
                code: domain_1.MyInfoCountryPlaceCode.SINGAPORE,
                desc: domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
                source: "1",
                classification: "C",
            },
            race: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoRaceCode.CHINESE,
                desc: domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
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
            marriagedate: {
                lastupdated: "1993-10-22",
                source: "1",
                classification: "C",
                value: "1988-01-01",
            },
            residentialstatus: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoResidentialCode.CITIZEN,
                desc: domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.CITIZEN),
                source: "1",
                classification: "C",
            },
            marital: {
                lastupdated: "2018-05-10",
                code: domain_1.MyInfoMaritalStatusCode.MARRIED,
                desc: domain_1.MyInfoMaritalStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritalStatusCode.MARRIED),
                source: "1",
                classification: "C",
            },
            aliasname: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: common_1.aliasName.LEE_XIU,
            },
            childrenbirthrecords: [],
            sponsoredchildrenrecords: [],
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
            vehicles: [],
        };
    },
};
const address = () => ({
    country: {
        code: domain_1.MyInfoCountryPlaceCode.SINGAPORE,
        desc: domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
    },
    unit: {
        value: "22",
    },
    street: {
        value: "UBI 1",
    },
    lastupdated: "2018-05-10",
    block: {
        value: "123",
    },
    postal: {
        value: "900743",
    },
    source: "1",
    classification: "C",
    floor: {
        value: "15",
    },
    type: "SG",
    building: {
        value: null,
    },
});
//# sourceMappingURL=BaseProfile.js.map