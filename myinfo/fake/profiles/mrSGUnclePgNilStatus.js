"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgNilStatus = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_NIL_STATUS;
exports.mrSGUnclePgNilStatus = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUnclePgAllOk_1.mrSGUnclePgAllOk.generate(profileName);
        profile.pioneergen.message.code = "7";
        profile.pioneergen.message.desc = "Please call 1800-2222-888 to start receiving your PG benefits.";
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