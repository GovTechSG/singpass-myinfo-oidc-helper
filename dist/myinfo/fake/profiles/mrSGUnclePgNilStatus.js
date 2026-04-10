"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgNilStatus = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_NIL_STATUS;
exports.mrSGUnclePgNilStatus = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUnclePgAllOk_1.mrSGUnclePgAllOk.generate(profileName);
        profile.pioneergen.message.code = types_1.MyInfoPioneerGenerationMessageCode.NIL_STATUS;
        profile.pioneergen.message.desc = types_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(types_1.MyInfoPioneerGenerationMessageCode.NIL_STATUS);
        profile.dob = {
            lastupdated: "2021-01-01",
            source: "1",
            classification: "C",
            value: "1948-01-01",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUnclePgNilStatus.js.map