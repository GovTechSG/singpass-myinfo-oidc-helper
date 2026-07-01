"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSgNoEmailNoMobileNoRegadd = void 0;
const _ = require("lodash");
const common_1 = require("./common");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9005015Z";
const name = fake_profile_1.ProfileArchetype.MR_SG_NO_EMAIL_NO_MOBILE_NO_REGADD;
exports.mrSgNoEmailNoMobileNoRegadd = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.dob = {
            lastupdated: "2022-02-25",
            source: "1",
            classification: "C",
            value: "1970-01-08",
        };
        profile.email = common_1.unavailableField;
        profile.mobileno = common_1.unavailableField;
        profile.regadd = common_1.unavailableField;
        return profile;
    },
};
//# sourceMappingURL=mrSgNoEmailNoMobileNoRegadd.js.map