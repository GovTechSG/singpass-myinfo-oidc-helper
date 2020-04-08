"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const map_1 = require("../../domain/map");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MRS_SG_MOMMY_PERFECT;
exports.mrsSGMommyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = map_1.sex.map.codeToDesc[profile.sex.code];
        return profile;
    },
};
//# sourceMappingURL=mrsSGMommyPerfect.js.map