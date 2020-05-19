"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const map_1 = require("../../domain/map");
const id = "S3814379D";
const name = fake_profile_1.ProfileArchetype.MR_PR_NO_LOCAL_ADDRESS;
exports.mrPRNoLocalAddress = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.nationality.code = "AD";
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = map_1.residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        profile.regadd = {
            "type": "Unformatted",
            "line1": { "value": "96 Guild Street" },
            "line2": { "value": "London SE16 1BE" },
            "classification": "C",
            "source": "1",
            "lastupdated": "2018-05-10",
        };
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
        };
        return profile;
    },
};
//# sourceMappingURL=mrPRNoLocalAddress.js.map