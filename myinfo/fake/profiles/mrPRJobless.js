"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrPRJobless = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const map_1 = require("../../domain/map");
const id = "S2599302J";
const name = fake_profile_1.ProfileArchetype.MR_PR_JOBLESS;
exports.mrPRJobless = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.nationality.code = "AD";
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = map_1.residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        return profile;
    },
};
//# sourceMappingURL=mrPRJobless.js.map