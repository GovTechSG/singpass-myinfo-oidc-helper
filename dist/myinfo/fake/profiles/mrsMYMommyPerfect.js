"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsMYMommyPerfect = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const common_1 = require("../profiles/common");
const domain_1 = require("../../domain");
const id = "F5994458N";
const name = fake_profile_1.ProfileArchetype.MRS_MY_MOMMY_PERFECT;
exports.mrsMYMommyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.aliasname = {
            lastupdated: "2021-03-19",
            source: "1",
            classification: "C",
            value: common_1.aliasName.LEE_XIU,
        };
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.nationality.code = domain_1.MyInfoNationalityCode.MALAYSIAN;
        profile.birthcountry.code = domain_1.MyInfoCountryCode.MALAYSIA;
        profile.residentialstatus.code = "";
        profile.residentialstatus.desc = "";
        profile.marriagecertno = {
            "lastupdated": "2018-05-10",
            "source": "1",
            "classification": "C",
            "value": "PZDarmzK2vPZROwDbTbT7mS3b59xRABwRN9uRM2Y3qBgdQxcNi",
        },
            profile.marital = {
                "lastupdated": "2022-02-25",
                "code": domain_1.MyInfoMaritialStatusCode.MARRIED,
                "desc": domain_1.MyInfoMaritialStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritialStatusCode.MARRIED),
                "source": "1",
                "classification": "C",
            };
        profile.marriagedate = {
            "lastupdated": "1993-10-22",
            "source": "1",
            "classification": "C",
            "value": "1993-10-22",
        };
        profile.occupation = {
            "lastupdated": "2018-05-21",
            "value": domain_1.MyInfoOccupationCode.fn.toEnumDesc(domain_1.MyInfoOccupationCode.LEGISLATOR),
            "source": "2",
            "classification": "C",
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
//# sourceMappingURL=mrsMYMommyPerfect.js.map