"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUncleNonBenefits = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_NON_BENEFITS;
exports.mrSGUncleNonBenefits = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.merdekagen.message.code = types_1.MyInfoMerdekaGenerationMessageCode.NON_MG;
        profile.merdekagen.eligibility.value = false;
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `1959-01-01`,
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleNonBenefits.js.map