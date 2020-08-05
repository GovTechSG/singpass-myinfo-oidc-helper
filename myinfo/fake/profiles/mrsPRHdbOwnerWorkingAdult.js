"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MRS_PR_HDB_OWNER_WORKING_ADULT_MID_CAREER_PMETS;
/**
 * ArcheType:
 * Age Range 1979-05-16
 * Residential Status	P
 * Sex	F
 * Marital Status	2
 * Local Registered Birth Records	3
 * HDB Ownership	Yes
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	Yes
 * Highest Education Level	7
 * Occupation 21441, SOFTWARE_DEVELOPER
 */
exports.mrsPRHdbOwnerWorkingAdult = {
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
            value: `${new Date().getFullYear() - 41}-05-16`,
        };
        profile.residentialstatus = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "P",
        };
        profile.nationality = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "MY",
        };
        profile.birthcountry = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "MY",
            desc: "MALAYSIA",
        };
        profile.sex = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "F",
        };
        profile.marital = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "2",
        };
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.child1MonthOld, childbirthRecords_1.ChildrenRecords.child6YearsOld, childbirthRecords_1.ChildrenRecords.childMiddle1];
        profile.hdbtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "112",
            desc: "2-ROOM FLAT (HDB)",
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
        profile.vehicles = {
            status: {
                code: "1",
                desc: "LIVE",
            },
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
        };
        profile.edulevel = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "7",
        };
        profile.occupation = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "25121",
            desc: "SOFTWARE_DEVELOPER",
        };
        return profile;
    },
};
//# sourceMappingURL=mrsPRHdbOwnerWorkingAdult.js.map