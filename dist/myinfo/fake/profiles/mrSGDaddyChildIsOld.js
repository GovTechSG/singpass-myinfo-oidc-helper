"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGDaddyChildIsOld = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MR_SG_DADDY_CHILD_IS_OLD;
exports.mrSGDaddyChildIsOld = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.childSuperOld];
        return profile;
    },
};
//# sourceMappingURL=mrSGDaddyChildIsOld.js.map