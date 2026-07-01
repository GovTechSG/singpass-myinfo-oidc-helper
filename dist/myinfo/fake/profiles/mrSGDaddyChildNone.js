"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGDaddyChildNone = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MR_SG_DADDY_CHILD_NONE;
exports.mrSGDaddyChildNone = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = [];
        return profile;
    },
};
//# sourceMappingURL=mrSGDaddyChildNone.js.map