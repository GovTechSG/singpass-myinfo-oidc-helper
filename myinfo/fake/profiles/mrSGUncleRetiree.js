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
 * Ownership of Private Residential Property	Yes
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	No
 * Highest Education Level	4
 * Monthly Household Income	0
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
        };
        profile.marital = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "2",
        };
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.childMiddle1, childbirthRecords_1.ChildrenRecords.childMiddle2];
        profile.ownerprivate = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: true,
        };
        profile.housingtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "121",
        };
        profile.drivinglicence = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            qdl: {
                validity: {
                    code: "V",
                },
            },
        };
        profile.edulevel = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "4",
        };
        profile.householdincome = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            high: {
                value: 0,
            },
            low: {
                value: 0,
            },
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleRetiree.js.map