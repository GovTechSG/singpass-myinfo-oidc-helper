"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUncleNonPg = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_NON_PG;
exports.mrSGUncleNonPg = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.pioneergen.message.code = "1";
        profile.pioneergen.message.desc = "We regret that you are not eligible for the Pioneer Generation Package.  For further enquiries, please contact 1800-2222-888.";
        profile.pioneergen.eligibility.value = false;
        profile.pioneergen.quantum.value = 0;
        profile.dob = {
            lastupdated: "2021-01-01",
            source: "1",
            classification: "C",
            value: "2020-01-01",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleNonPg.js.map