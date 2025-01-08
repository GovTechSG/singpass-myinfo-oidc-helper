"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgNeedAddress = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_NEED_ADDR_UPDATE;
exports.mrSGUnclePgNeedAddress = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUnclePgAllOk_1.mrSGUnclePgAllOk.generate(profileName);
        profile.pioneergen.message.code = domain_1.MyInfoPioneerGenerationMessageCode.CALL_TO_RECEIVE;
        profile.pioneergen.message.desc = domain_1.MyInfoPioneerGenerationMessageCode.fn.toEnumDesc(domain_1.MyInfoPioneerGenerationMessageCode.CALL_TO_RECEIVE);
        return profile;
    },
};
//# sourceMappingURL=mrSGUnclePgNeedAddress.js.map