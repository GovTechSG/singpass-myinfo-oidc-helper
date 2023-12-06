"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGFromBedok = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8752571F";
const name = fake_profile_1.ProfileArchetype.MR_SG_FROM_BEDOK;
exports.mrSGFromBedok = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.regadd = {
            ...profile.regadd,
            block: { value: "634" },
            street: { value: "BEDOK STREET" },
            postal: { value: "458634" }
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
//# sourceMappingURL=mrSGFromBedok.js.map