"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGDaddyLongNames = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MR_SG_DADDY_LONG_NAMES;
exports.mrSGDaddyLongNames = {
    id,
    name,
    generate: (profileName) => {
        const longName = "Princess Aura Nurr Ermily Amara Auliya Bidadari S/O (Nawal), El@Björk' María-Jose!";
        profileName = _.isEmpty(profileName) ? longName : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = _.values(childbirthRecords_1.ChildrenRecords);
        profile.childrenbirthrecords[0].name.value = longName + " JR";
        return profile;
    },
};
//# sourceMappingURL=mrSGDaddyLongNames.js.map