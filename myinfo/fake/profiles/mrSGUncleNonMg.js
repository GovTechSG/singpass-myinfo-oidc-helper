"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_NON_MG;
exports.mrSGUncleNonMg = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.merdekagen.message.code = "1";
        profile.merdekagen.eligibility.value = false;
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 61}-01-01`,
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleNonMg.js.map