"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUncleRetiree = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const domain_1 = require("../../domain");
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
 */
exports.mrSGUncleRetiree = {
    id,
    name,
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
            code: domain_1.MyInfoResidentialCode.CITIZEN,
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
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.childMiddle1, childbirthRecords_1.ChildrenRecords.childMiddle2];
        profile.housingtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: domain_1.MyInfoHousingTypeCode.DETACHED_HOUSE,
            desc: domain_1.MyInfoHousingTypeCode.fn.toEnumDesc(domain_1.MyInfoHousingTypeCode.DETACHED_HOUSE),
        };
        profile.hdbtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: null,
            desc: null,
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
                    code: domain_1.MyInfoDrivingLicenceValidityCode.VALID,
                    desc: domain_1.MyInfoDrivingLicenceValidityCode.fn.toEnumDesc(domain_1.MyInfoDrivingLicenceValidityCode.VALID),
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
                    code: null,
                    desc: null,
                },
                classes: [],
            },
            source: "1",
            classification: "C",
            comstatus: {
                code: domain_1.MyInfoComStatusCode.ELIGIBLE,
                desc: domain_1.MyInfoComStatusCode.fn.toEnumDesc(domain_1.MyInfoComStatusCode.ELIGIBLE),
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
            code: domain_1.MyInfoEduLevelCode.POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION,
            desc: domain_1.MyInfoEduLevelCode.fn.toEnumDesc(domain_1.MyInfoEduLevelCode.POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION),
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleRetiree.js.map