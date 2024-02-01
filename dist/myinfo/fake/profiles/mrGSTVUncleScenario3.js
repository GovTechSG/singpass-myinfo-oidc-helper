"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrGstvUncle3 = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S1234567D";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_GST_SCENARIO_3;
exports.mrGstvUncle3 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.gstvoucher.exclusion.value = true;
        profile.gstvoucher.signup.value = true;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 200;
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
//# sourceMappingURL=mrGSTVUncleScenario3.js.map