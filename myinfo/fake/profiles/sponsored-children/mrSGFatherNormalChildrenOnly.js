"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGFatherNormalChildrenOnly = void 0;
const _ = require("lodash");
const fake_profile_1 = require("../fake-profile");
const BaseProfile_1 = require("./BaseProfile");
const normalChildren_1 = require("./normalChildren");
const id = "S9116045E";
const name = fake_profile_1.ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN;
exports.mrSGFatherNormalChildrenOnly = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.childrenbirthrecords = _.values(normalChildren_1.Childrenbirthrecords);
        return profile;
    },
};
//# sourceMappingURL=mrSGFatherNormalChildrenOnly.js.map