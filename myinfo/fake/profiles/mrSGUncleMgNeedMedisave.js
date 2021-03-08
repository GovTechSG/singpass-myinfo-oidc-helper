"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUncleMgNeedMedisave = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_MG_NEED_MEDISAVE;
exports.mrSGUncleMgNeedMedisave = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.merdekagen.message.code = "4";
        profile.merdekagen.eligibility.value = true;
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `1959-01-01`,
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleMgNeedMedisave.js.map