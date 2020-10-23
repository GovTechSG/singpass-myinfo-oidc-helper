"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "F5316757T";
const name = fake_profile_1.ProfileArchetype.MR_JAPANESE_ADDRESS_BLANK;
exports.mrJapaneseAddressBlank = {
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
        profile.regadd = {
            "type": "",
            "unit": { "value": "" },
            "block": { "value": "" },
            "floor": { "value": "" },
            "postal": { "value": "" },
            "street": { "value": "" },
            "building": { "value": "" },
            "country": {
                "code": "",
                "desc": "",
            },
            "classification": "C",
            "source": "3",
            "lastupdated": "2018-05-10",
        };
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
        };
        profile.marital = {
            "lastupdated": "2020-09-10",
            "code": "",
            "source": "2",
            "classification": "C",
            "desc": "",
        };
        profile.marriagedate = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "",
        };
        profile.occupation = {
            "lastupdated": "2018-05-21",
            "code": "11110",
            "source": "2",
            "classification": "C",
            "desc": "LEGISLATOR",
        };
        profile.dialect = {
            "lastupdated": "2020-09-10",
            "code": "",
            "source": "2",
            "classification": "C",
            "desc": "",
        };
        return profile;
    },
};
//# sourceMappingURL=mrJapaneseAddressBlank.js.map