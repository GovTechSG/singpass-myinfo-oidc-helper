"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGNoLocalAddress = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S4875477E";
const name = fake_profile_1.ProfileArchetype.MR_SG_NO_LOCAL_ADDRESS;
exports.mrSGNoLocalAddress = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.regadd = {
            "type": "UNFORMATTED",
            "line1": { "value": "96 GUILD STREET" },
            "line2": { "value": "LONDON SE16 1BE" },
            "classification": "C",
            "source": "1",
            "lastupdated": "2018-05-10",
        };
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGNoLocalAddress%20.js.map