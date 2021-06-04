"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGDaddyMissingFields = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const common_1 = require("./common");
const id = "S8779834H";
const name = fake_profile_1.ProfileArchetype.MR_SG_DADDY_MISSING_FIELDS;
exports.mrSGDaddyMissingFields = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.hanyupinyinname = common_1.unavailableField;
        profile.aliasname = common_1.unavailableField;
        profile.hanyupinyinaliasname = common_1.unavailableField;
        profile.secondaryrace = common_1.unavailableField;
        profile.residentialstatus = common_1.unavailableField;
        profile.homeno = common_1.unavailableField;
        profile.marriagecertno = common_1.unavailableField;
        profile.countryofmarriage = common_1.unavailableField;
        if (!!profile.childrenbirthrecords) {
            profile.childrenbirthrecords = profile.childrenbirthrecords.slice(0, 1);
        }
        profile.edulevel = common_1.unavailableField;
        profile.occupation = common_1.unavailableField;
        return profile;
    },
};
//# sourceMappingURL=mrSGDaddyMissingFields.js.map