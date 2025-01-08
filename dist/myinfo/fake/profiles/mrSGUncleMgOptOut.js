"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUncleMgOptOut = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_MG_OPT_OUT;
exports.mrSGUncleMgOptOut = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.merdekagen.message.code = domain_1.MyInfoMerdekaGenerationMessageCode.OPT_OUT;
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
//# sourceMappingURL=mrSGUncleMgOptOut.js.map