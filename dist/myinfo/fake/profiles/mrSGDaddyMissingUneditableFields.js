"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGDaddyMissingUneditableFields = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const common_1 = require("./common");
const id = "S8974352D";
const name = fake_profile_1.ProfileArchetype.MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS;
exports.mrSGDaddyMissingUneditableFields = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        // Uneditable field
        profile.nationality = common_1.unavailableField;
        profile.dob = common_1.unavailableField;
        profile.regadd = common_1.unavailableField;
        profile.sex = common_1.unavailableField;
        return profile;
    },
};
//# sourceMappingURL=mrSGDaddyMissingUneditableFields.js.map