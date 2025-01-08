"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrGstvUncle1b = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S1234567D";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_GST_SCENARIO_1B;
exports.mrGstvUncle1b = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = true;
        profile.gstvoucher.gstregular.value = 0;
        profile.gstvoucher.gstmedisave.value = 0;
        profile.gstvoucher.gstspecial.value = 0;
        profile.merdekagen.eligibility.value = true;
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 61}-01-01`,
        };
        return profile;
    },
};
//# sourceMappingURL=mrGSTVUncleScenario1b.js.map