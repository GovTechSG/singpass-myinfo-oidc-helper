"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgOptOut = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const mrSGUncleNonPg_1 = require("./mrSGUncleNonPg");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_OPT_OUT;
exports.mrSGUnclePgOptOut = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUncleNonPg_1.mrSGUncleNonPg.generate(profileName);
        profile.pioneergen.message.code = types_1.MyInfoPioneerGenerationMessageCode.OPT_OUT;
        profile.pioneergen.message.desc = types_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(types_1.MyInfoPioneerGenerationMessageCode.OPT_OUT);
        profile.dob = {
            lastupdated: "2021-01-01",
            source: "1",
            classification: "C",
            value: "1948-01-01",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUnclePgOptOut.js.map