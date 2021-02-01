"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgCallReceive = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_CALL_RECEIVE;
exports.mrSGUnclePgCallReceive = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUnclePgAllOk_1.mrSGUnclePgAllOk.generate(profileName);
        profile.pioneergen.message.code = "5";
        profile.pioneergen.message.desc = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to start receiving your Pioneer Generation benefits.";
        return profile;
    },
};
//# sourceMappingURL=mrSGUnclePgCallReceive.js.map