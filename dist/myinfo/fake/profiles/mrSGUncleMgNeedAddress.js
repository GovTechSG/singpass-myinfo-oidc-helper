"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUncleMgNeedAddress = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_MG_NEED_ADDR_UPDATE;
exports.mrSGUncleMgNeedAddress = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.merdekagen.message.code = domain_1.MyInfoMerdekaGenerationMessageCode.NEED_ADDRESS_UPDATE;
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
//# sourceMappingURL=mrSGUncleMgNeedAddress.js.map