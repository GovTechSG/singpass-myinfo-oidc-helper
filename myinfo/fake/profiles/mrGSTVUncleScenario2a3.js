"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S1234567D";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_GST_SCENARIO_2A3;
exports.mrGstvUncle2a3 = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 200;
        profile.gstvoucher.gstspecial.value = undefined;
        return profile;
    },
};
//# sourceMappingURL=mrGSTVUncleScenario2a3.js.map