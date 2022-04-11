"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGDaddyTwoDeceasedChild = void 0;
const _ = require("lodash");
const childbirthRecords_1 = require("./childbirthRecords");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S4315482F";
const name = fake_profile_1.ProfileArchetype.MR_SG_DADDY_TWO_DECEASED_CHILD;
exports.mrSGDaddyTwoDeceasedChild = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.child2MonthsOld, childbirthRecords_1.ChildrenRecords.childDeceased1, childbirthRecords_1.ChildrenRecords.childDeceased2];
        return profile;
    },
};
//# sourceMappingURL=mrSGDaddyTwoDeceasedChild.js.map