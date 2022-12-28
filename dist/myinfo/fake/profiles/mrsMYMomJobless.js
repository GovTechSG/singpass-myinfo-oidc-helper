"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsMYMomJobless = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrsMYMommyPerfect_1 = require("./mrsMYMommyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "G9403340W";
const name = fake_profile_1.ProfileArchetype.MRS_MY_MOM_JOBLESS;
exports.mrsMYMomJobless = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrsMYMommyPerfect_1.mrsMYMommyPerfect.generate(profileName);
        profile.occupation = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "",
        };
        profile.childrenbirthrecords = _.values(childbirthRecords_1.ChildrenRecords);
        return profile;
    },
};
//# sourceMappingURL=mrsMYMomJobless.js.map