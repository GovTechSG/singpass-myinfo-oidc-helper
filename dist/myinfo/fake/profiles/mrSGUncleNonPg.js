"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUncleNonPg = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_NON_PG;
exports.mrSGUncleNonPg = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.pioneergen.message.code = domain_1.MyInfoPioneerGenerationMessageCode.NON_PG;
        profile.pioneergen.message.desc = domain_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoPioneerGenerationMessageCode.NON_PG);
        profile.pioneergen.quantum.value = "0.00";
        profile.dob = {
            lastupdated: "2021-01-01",
            source: "1",
            classification: "C",
            value: "1955-01-01",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleNonPg.js.map