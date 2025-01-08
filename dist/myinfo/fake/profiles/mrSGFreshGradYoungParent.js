"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGFreshGradYoungParent = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const domain_1 = require("../../domain");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MR_SG_FRESH_GRAD_YOUNG_PARENT;
/**
 * ArcheType:
 * Age Range 1995-02-10
 * Residential Status	C
 * Sex	M
 * Marital Status	2
 * Local Registered Birth Records	1
 * HDB Ownership	No
 * Type of Housing for Registered Address	null
 * Driving License	No
 * Vehicle Ownership	No
 */
exports.mrSGFreshGradYoungParent = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 25}-02-10`,
        };
        profile.residentialstatus = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: domain_1.MyInfoResidentialCode.CITIZEN,
            desc: domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.CITIZEN),
        };
        profile.sex = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: domain_1.MyInfoSexCode.MALE,
            desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE),
        };
        profile.marital = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: domain_1.MyInfoMaritalStatusCode.MARRIED,
            desc: domain_1.MyInfoMaritalStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritalStatusCode.MARRIED),
        };
        profile.marriagedate = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 1}-02-10`,
        };
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.child1MonthOld];
        return profile;
    },
};
//# sourceMappingURL=mrSGFreshGradYoungParent.js.map