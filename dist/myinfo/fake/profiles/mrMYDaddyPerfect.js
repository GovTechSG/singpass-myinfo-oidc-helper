"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMYDaddyPerfect = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const domain_1 = require("../../domain");
const id = "F5994458N";
const name = fake_profile_1.ProfileArchetype.MR_MY_DADDY_PERFECT;
exports.mrMYDaddyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.MALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE);
        profile.nationality.code = domain_1.MyInfoNationalityCitizenshipCode.MALAYSIAN;
        profile.birthcountry.code = domain_1.MyInfoCountryPlaceCode.MALAYSIA;
        profile.residentialstatus.code = "";
        profile.residentialstatus.desc = "";
        profile.marital = {
            "lastupdated": "2020-09-10",
            "code": null,
            "source": "2",
            "classification": "C",
            "desc": null,
        };
        profile.marriagedate = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "",
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
//# sourceMappingURL=mrMYDaddyPerfect.js.map