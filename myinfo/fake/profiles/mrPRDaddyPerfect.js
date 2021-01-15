"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrPRDaddyPerfect = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const map_1 = require("../../domain/map");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "S2599302J";
const name = fake_profile_1.ProfileArchetype.MR_PR_DADDY_PERFECT;
exports.mrPRDaddyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.nationality.code = "AD";
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = map_1.residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: "1979-06-14",
        };
        profile.childrenbirthrecords = [
            childbirthRecords_1.preschoolEligibleChild2_N2,
            childbirthRecords_1.preschoolEligibleChild2_PG,
            childbirthRecords_1.preschoolEligibleChild2_K2,
            childbirthRecords_1.preschoolIneligibleChild2,
        ];
        return profile;
    },
};
//# sourceMappingURL=mrPRDaddyPerfect.js.map