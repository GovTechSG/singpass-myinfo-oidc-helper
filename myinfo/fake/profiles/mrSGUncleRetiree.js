"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_RETIREE;
/**
 * ArcheType:
 * Age Range 1957-05-16
 * Residential Status	C
 * Sex	M
 * Marital Status	2
 * Local Registered Birth Records	2
 * HDB Ownership	No
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	No
 * Highest Education Level	4
 * Occupation None
 */
exports.mrSGUncleRetiree = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 63}-05-16`,
        };
        profile.residentialstatus = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "C",
        };
        profile.sex = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "M",
            desc: "Male",
        };
        profile.marital = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "2",
            desc: "MARRIED",
        };
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.childMiddle1, childbirthRecords_1.ChildrenRecords.childMiddle2];
        profile.housingtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "121",
            desc: "DETACHED HOUSE",
        };
        profile.hdbtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "",
            desc: "",
        };
        profile.drivinglicence = {
            revocation: {
                startdate: {
                    value: "",
                },
                enddate: {
                    value: "",
                },
            },
            totaldemeritpoints: {
                value: 0,
            },
            disqualification: {
                startdate: {
                    value: "",
                },
                enddate: {
                    value: "",
                },
            },
            qdl: {
                expirydate: {
                    value: "",
                },
                validity: {
                    code: "V",
                    desc: "Valid",
                },
                classes: [
                    {
                        class: {
                            value: "3CA",
                        },
                        issuedate: {
                            value: "2017-12-31",
                        },
                    },
                ],
            },
            lastupdated: "2020-08-26",
            pdl: {
                expirydate: {
                    value: "",
                },
                validity: {
                    code: "",
                    desc: "",
                },
                classes: [],
            },
            source: "1",
            classification: "C",
            comstatus: {
                code: "Y",
                desc: "Eligible",
            },
            photocardserialno: {
                value: "",
            },
            suspension: {
                startdate: {
                    value: "",
                },
                enddate: {
                    value: "",
                },
            },
        };
        profile.edulevel = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "4",
            desc: "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION",
        };
        profile.occupation = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            unavailable: true,
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleRetiree.js.map