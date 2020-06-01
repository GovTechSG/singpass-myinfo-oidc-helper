"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "F2734981K";
const name = fake_profile_1.ProfileArchetype.MR_JAPANESE_NO_ADDRESS_OBJECT;
exports.mrJapaneseNoAddressObject = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.residentialstatus = {
            "code": "",
            "desc": "",
            "source": "3",
            "classification": "C",
            "lastupdated": "",
        };
        profile.nationality = {
            "code": "JP",
            "desc": "JAPANESE",
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.birthcountry = {
            "code": "JP",
            "desc": "JAPAN",
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
        };
        profile.regadd = undefined;
        return profile;
    },
};
//# sourceMappingURL=mrJapaneseNoAddressObject.js.map