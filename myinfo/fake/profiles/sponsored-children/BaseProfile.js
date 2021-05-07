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
                unavailable: false,
            },
            countryofmarriage: {
                lastupdated: "2018-05-10",
                code: domain_1.MyInfoCountryCode.SINGAPORE,
                desc: domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
                source: "1",
                classification: "C",
                unavailable: false,
            },
            sex: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoSexCode.MALE,
                desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE),
                source: "1",
                classification: "C",
                unavailable: false,
            },
            regadd: address(),
            mobileno: mobileno(),
            dialect: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoDialectCode.HOKKIEN,
                desc: domain_1.MyInfoDialectCode.fn.toEnumDesc(domain_1.MyInfoDialectCode.HOKKIEN),
                source: "1",
                classification: "C",
                unavailable: false,
            },
            occupation: {
                lastupdated: "2020-09-10",
                code: null,
                desc: null,
                source: "2",
                classification: "C",
                unavailable: false,
            },
            nationality: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoNationalityCode.SINGAPORE_CITIZEN,
                desc: domain_1.MyInfoNationalityCode.fn.toEnumDesc(domain_1.MyInfoNationalityCode.SINGAPORE_CITIZEN),
                source: "1",
                classification: "C",
                unavailable: false,
            },
            dob: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: `${new Date().getFullYear() - 60 + 1}-01-01`,
                unavailable: false,
            },
            secondaryrace: {
                lastupdated: "2018-06-01",
                code: null,
                source: "1",
                classification: "C",
                desc: null,
                unavailable: false,
            },
            edulevel: {
                lastupdated: "2020-09-10",
                code: null,
                source: "2",
                classification: "C",
                desc: null,
                unavailable: false,
            },
            passportnumber: {
                lastupdated: "2021-01-01",
                source: "1",
                classification: "C",
                value: "L3280033",
                unavailable: false,
            },
            passportexpirydate: {
                lastupdated: "2021-01-01",
                source: "1",
                classification: "C",
                value: "2030-09-10",
                unavailable: false,
            },
            divorcedate: {
                lastupdated: null,
                source: "1",
                classification: "C",
                value: null,
                unavailable: false,
            },
            marriagecertno: {
                lastupdated: "2018-05-10",
                source: "1",
                classification: "C",
                value: "M525997",
                unavailable: false,
            },
            merdekagen: {
                eligibility: {
                    value: false,
                },
                lastupdated: "2019-04-01",
                quantum: {
                    value: 200,
                },
                source: "1",
                classification: "C",
                message: {
                    code: domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK,
                    "desc": domain_1.MyInfoMerdekaGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoMerdekaGenerationMessageCode.ALL_OK),
                },
                unavailable: false,
            },
            pioneergen: {
                eligibility: {
                    value: false,
                },
                lastupdated: "2021-01-15",
                quantum: {
                    value: "200.00",
                },
                source: "1",
                classification: "C",
                message: {
                    code: domain_1.MyInfoPioneerGenerationMessageCode.NON_PG,
                    desc: domain_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoPioneerGenerationMessageCode.NON_PG),
                },
                unavailable: false,
            },
            gstvoucher: {
                gstregular: {
                    value: 300,
                },
                year: {
                    value: 2018,
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
                unavailable: false,
            },
            email: {
                lastupdated: "2019-04-03",
                source: "4",
                classification: "C",
                value: "gt.govandi@gmail.com",
                unavailable: false,
            },
            birthcountry: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoCountryCode.SINGAPORE,
                desc: domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
                source: "1",
                classification: "C",
                unavailable: false,
            },
            race: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoRaceCode.CHINESE,
                desc: domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
                source: "1",
                classification: "C",
                unavailable: false,
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
                    value: 2019,
                },
                unavailable: false,
            },
            marriagedate: {
                lastupdated: "1993-10-22",
                source: "1",
                classification: "C",
                value: "1988-01-01",
                unavailable: false,
            },
            residentialstatus: {
                lastupdated: "2018-06-01",
                code: domain_1.MyInfoResidentialCode.CITIZEN,
                desc: domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.CITIZEN),
                source: "1",
                classification: "C",
                unavailable: false,
            },
            marital: {
                lastupdated: "2018-05-10",
                code: domain_1.MyInfoMaritialStatusCode.MARRIED,
                desc: domain_1.MyInfoMaritialStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritialStatusCode.MARRIED),
                source: "1",
                classification: "C",
                unavailable: false,
            },
            aliasname: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: common_1.aliasName.LEE_XIU,
                unavailable: false,
            },
            childrenbirthrecords: [],
            sponsoredchildrenrecords: [],
            hdbtype: {
                lastupdated: "2020-08-26",
                code: null,
                desc: null,
                source: "1",
                classification: "C",
                unavailable: false,
            },
            housingtype: {
                lastupdated: "2020-08-26",
                code: null,
                desc: null,
                source: "1",
                classification: "C",
                unavailable: false,
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
                unavailable: false,
            },
            vehicles: [],
        };
    },
};
const address = () => ({
    country: {
        code: domain_1.MyInfoCountryCode.SINGAPORE,
        desc: domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
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
    unavailable: false,
});
const mobileno = () => ({
    areacode: {
        value: "65",
    },
    prefix: {
        value: "+",
    },
    nbr: {
        value: "88158701",
    },
});
//# sourceMappingURL=BaseProfile.js.map