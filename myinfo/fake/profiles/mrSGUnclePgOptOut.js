"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgOptOut = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGUncleNonPg_1 = require("./mrSGUncleNonPg");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_OPT_OUT;
exports.mrSGUnclePgOptOut = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUncleNonPg_1.mrSGUncleNonPg.generate(profileName);
        profile.pioneergen.message.code = "6";
        profile.pioneergen.message.desc = "We understand that you have opted out of receiving the benefits under the Pioneer Generation Package. For further enquiries, please contact 1800-2222-888.";
        return profile;
    },
};
//# sourceMappingURL=mrSGUnclePgOptOut.js.map