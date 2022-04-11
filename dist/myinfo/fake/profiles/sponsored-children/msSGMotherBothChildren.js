"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msSGMotherBothChildren = void 0;
const _ = require("lodash");
const domain_1 = require("../../../domain");
const fake_profile_1 = require("../fake-profile");
const BaseProfile_1 = require("./BaseProfile");
const normalChildren_1 = require("./normalChildren");
const sponsoredChildBirthRecords_1 = require("./sponsoredChildBirthRecords");
const id = "S9116045E";
const name = fake_profile_1.ProfileArchetype.MS_SG_MOTHER_HAVING_BOTH_CHILDREN;
exports.msSGMotherBothChildren = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.sex.unavailable = false;
        profile.childrenbirthrecords = _.values(normalChildren_1.Childrenbirthrecords);
        profile.sponsoredchildrenrecords = _.values(sponsoredChildBirthRecords_1.SponsoredChildrenRecords);
        profile.cpfbalances = {
            lastupdated: "2016-12-01",
            classification: "C",
            source: "1",
            unavailable: true
        };
        return profile;
    },
};
//# sourceMappingURL=msSGMotherBothChildren.js.map