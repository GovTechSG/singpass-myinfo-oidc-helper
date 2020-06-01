"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("../fake-profile");
const BaseProfile_1 = require("./BaseProfile");
const normalChildren_1 = require("./normalChildren");
const sponsoredChildBirthRecords_1 = require("./sponsoredChildBirthRecords");
const id = "S9116045E";
const name = fake_profile_1.ProfileArchetype.MS_SG_MOTHER_HAVING_BOTH_CHILDREN;
exports.msSGMotherBothChildren = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = "Female";
        profile.sex.unavailable = false;
        profile.childrenbirthrecords = _.values(normalChildren_1.Childrenbirthrecords);
        profile.sponsoredchildrenrecords = _.values(sponsoredChildBirthRecords_1.SponsoredChildrenRecords);
        return profile;
    },
};
//# sourceMappingURL=msSGMotherBothChildren.js.map