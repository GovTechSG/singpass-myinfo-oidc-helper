"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const map_1 = require("../../domain/map");
const id = "S7936715Z";
const name = fake_profile_1.ProfileArchetype.MR_PR_DADDY_ONE_CHILD;
exports.mrPRDaddyOneChild = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = map_1.residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.childYoungest];
        return profile;
    },
};
//# sourceMappingURL=mrPRDaddyOneChild.js.map