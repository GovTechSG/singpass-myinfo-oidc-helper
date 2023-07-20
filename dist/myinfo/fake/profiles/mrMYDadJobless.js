"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMYDadJobless = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrMYDaddyPerfect_1 = require("./mrMYDaddyPerfect");
const id = "G9403340W";
const name = fake_profile_1.ProfileArchetype.MR_MY_DAD_JOBLESS;
exports.mrMYDadJobless = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrMYDaddyPerfect_1.mrMYDaddyPerfect.generate(profileName);
        profile.occupation = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "",
        };
        return profile;
    },
};
//# sourceMappingURL=mrMYDadJobless.js.map