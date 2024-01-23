"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGNoAddress = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S4803145E";
const name = fake_profile_1.ProfileArchetype.MR_SG_NO_ADDRESS;
exports.mrSGNoAddress = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.regadd = undefined;
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGNoAddress.js.map