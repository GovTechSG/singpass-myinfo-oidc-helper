"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgNeedMedisave = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_NEED_MEDISAVE;
exports.mrSGUnclePgNeedMedisave = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUnclePgAllOk_1.mrSGUnclePgAllOk.generate(profileName);
        profile.pioneergen.message.code = domain_1.MyInfoPioneerGenerationMessageCode.NEED_MEDISAVE_TOPUP;
        profile.pioneergen.message.desc = domain_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoPioneerGenerationMessageCode.NEED_MEDISAVE_TOPUP);
        return profile;
    },
};
//# sourceMappingURL=mrSGUnclePgNeedMedisave.js.map