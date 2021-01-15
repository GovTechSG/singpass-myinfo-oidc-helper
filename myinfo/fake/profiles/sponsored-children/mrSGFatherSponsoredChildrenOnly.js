"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGFatherSponsoredChildrenOnly = void 0;
const _ = require("lodash");
const fake_profile_1 = require("../fake-profile");
const BaseProfile_1 = require("./BaseProfile");
const sponsoredChildBirthRecords_1 = require("./sponsoredChildBirthRecords");
const id = "S9116045E";
const name = fake_profile_1.ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED;
exports.mrSGFatherSponsoredChildrenOnly = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sponsoredchildrenrecords = _.values(sponsoredChildBirthRecords_1.SponsoredChildrenRecords);
        return profile;
    },
};
//# sourceMappingURL=mrSGFatherSponsoredChildrenOnly.js.map