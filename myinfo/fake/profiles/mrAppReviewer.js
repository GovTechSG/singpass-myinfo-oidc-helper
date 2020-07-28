"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
            },
            "aliasname": {
                "value": "TEST PROFILE",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "sex": {
                "code": "M",
                "desc": "Male",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "race": {
                "code": "CN",
                "desc": "CHINESE",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "secondaryrace": {
                "code": "GM",
                "desc": "GERMAN",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "dialect": {
                "code": "HK",
                "desc": "HOKKIEN",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "nationality": {
                "code": "SG",
                "desc": "SINGAPORE CITIZEN",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "dob": {
                "value": "1989-10-06",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "birthcountry": {
                "code": "SG",
                "desc": "SINGAPORE",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "residentialstatus": {
                "code": "C",
                "desc": "Citizen",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "regadd": {
                "type": "SG",
                "block": {
                    "value": "123",
                },
                "building": {
                    "value": "",
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
                    "code": "SG",
                    "desc": "SINGAPORE",
                },
                "postal": {
                    "value": "310123",
                },
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "email": {
                "value": "gt.govandi@gmail.com",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "homeno": {
                "areacode": {
                    "value": "65",
                },
                "prefix": {
                    "value": "+",
                },
                "nbr": {
                    "value": "69876543",
                },
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
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
            },
            "marital": {
                "code": "2",
                "desc": "MARRIED",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "marriagecertno": {
                "value": "M525997",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "countryofmarriage": {
                "code": "SG",
                "desc": "SINGAPORE",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "marriagedate": {
                "value": "1993-10-22",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "edulevel": {
                "code": "8",
                "desc": "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "occupation": {
                "code": "11110",
                "desc": "LEGISLATOR",
                "source": source,
                "classification": classification,
                "lastupdated": lastupdated,
            },
            "merdekagen": {
                "eligibility": {
                    "value": true,
                },
                "quantum": {
                    "value": 100,
                },
                "message": {
                    "code": "2",
                    "desc": "You are eligible for the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.",
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
            "ownerprivate": {
                "lastupdated": "2018-06-01",
                "source": "1",
                "classification": "C",
                "value": false,
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
            },
            "vehicles": {
                "lastupdated": "2018-06-01",
                "source": "1",
                "classification": "C",
                "unavailable": true,
            },
            "householdincome": {
                "lastupdated": "2018-06-01",
                "source": "1",
                "classification": "C",
                "unavailable": true,
            },
        };
    },
};
//# sourceMappingURL=mrAppReviewer.js.map