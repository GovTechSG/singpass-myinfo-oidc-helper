"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
                code: "SG",
                source: "1",
                classification: "C",
                desc: "SINGAPORE",
            },
            sex: {
                lastupdated: "2018-06-01",
                code: "M",
                source: "1",
                classification: "C",
                desc: "Male",
            },
            regadd: address(),
            mobileno: mobileno(),
            dialect: {
                lastupdated: "2018-06-01",
                code: "HK",
                source: "1",
                classification: "C",
                desc: "HOKKIEN",
            },
            occupation: {
                lastupdated: "2018-05-21",
                code: "11110",
                source: "2",
                classification: "C",
                desc: "LEGISLATOR",
            },
            nationality: {
                lastupdated: "2018-06-01",
                code: "SG",
                source: "1",
                classification: "C",
                desc: "SINGAPORE CITIZEN",
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
                lastupdated: "2018-05-10",
                code: "8",
                source: "2",
                classification: "C",
                desc: "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
            },
            passportexpirydate: {
                lastupdated: "",
                source: "1",
                classification: "C",
                value: "",
            },
            divorcedate: {
                lastupdated: "",
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
                    value: 200,
                },
                source: "1",
                classification: "C",
                message: {
                    code: "2",
                    desc: "You are eligible for the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.",
                },
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
            },
            email: {
                lastupdated: "2019-04-03",
                source: "4",
                classification: "C",
                value: "gt.govandi@gmail.com",
            },
            birthcountry: {
                lastupdated: "2018-06-01",
                code: "SG",
                source: "1",
                classification: "C",
                desc: "SINGAPORE",
            },
            race: {
                lastupdated: "2018-06-01",
                code: "CN",
                source: "1",
                classification: "C",
                desc: "CHINESE",
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
            },
            marriagedate: {
                lastupdated: "1993-10-22",
                source: "1",
                classification: "C",
                value: "1988-01-01",
            },
            residentialstatus: {
                lastupdated: "2018-06-01",
                code: "C",
                source: "1",
                classification: "C",
                desc: "Citizen",
            },
            passportnumber: {
                lastupdated: "",
                source: "1",
                classification: "C",
                value: "",
            },
            marital: {
                lastupdated: "2018-05-10",
                code: "2",
                source: "1",
                classification: "C",
                desc: "MARRIED",
            },
            aliasname: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: "LEE XIU",
            },
            childrenbirthrecords: [],
            sponsoredchildrenrecords: [],
            hdbtype: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
            },
            ownerprivate: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
            },
            housingtype: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
            },
            drivinglicence: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
            },
            vehicles: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
            },
            householdincome: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
            },
        };
    },
};
const address = () => ({
    country: {
        code: "SG",
        desc: "SINGAPORE",
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
        value: "",
    },
});
const mobileno = () => ({
    areacode: {
        value: "65",
    },
    prefix: {
        value: "+",
    },
    nbr: {
        value: "83416847",
    },
});
//# sourceMappingURL=BaseProfile.js.map