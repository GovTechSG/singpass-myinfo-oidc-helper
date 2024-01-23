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
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sponsoredchildrenrecords = _.values(sponsoredChildBirthRecords_1.SponsoredChildrenRecords);
        profile.cpfcontributions = {
            history: [],
            classification: "C",
            source: "1",
            lastupdated: "2019-03-26",
        };
        profile.cpfbalances = {
            ma: { value: 11470.71 },
            oa: { value: 15470.71 },
            sa: { value: 17480.71 },
            lastupdated: "2016-12-01",
            classification: "C",
            source: "1",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGFatherSponsoredChildrenOnly.js.map