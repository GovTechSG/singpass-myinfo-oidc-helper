"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const map_1 = require("../../domain/map");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MRS_PRESCHOOL_REGISTRATION;
exports.mrsPreschoolRegistration = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = map_1.sex.map.codeToDesc[profile.sex.code];
        profile.childrenbirthrecords = [
            childbirthRecords_1.preschoolEligibleChild_IC,
            childbirthRecords_1.preschoolEligibleChild_N2,
            childbirthRecords_1.preschoolIneligibleChild2,
        ];
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: "1985-10-06",
        };
        return profile;
    },
};
//# sourceMappingURL=MrsPreschoolRegistration.js.map