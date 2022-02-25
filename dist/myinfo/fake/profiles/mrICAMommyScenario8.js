"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsICAMommyScenario8 = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const domain_1 = require("../../domain");
const id = "S9005015Z";
const name = fake_profile_1.ProfileArchetype.MRS_ICA_SC_SINGLE_MOMMY_MAIN_SCENARIO_8;
exports.mrsICAMommyScenario8 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.race = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoRaceCode.CHINESE,
            "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.CHINESE),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        },
            profile.dob = {
                "lastupdated": "2022-02-25",
                "source": "1",
                "classification": "C",
                "value": "1990-01-08",
                "unavailable": false,
            };
        profile.residentialstatus = {
            "lastupdated": "2018-06-01",
            "code": domain_1.MyInfoResidentialCode.CITIZEN,
            "desc": domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.CITIZEN),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        },
            profile.nationality.code = domain_1.MyInfoNationalityCode.SINGAPORE_CITIZEN;
        return profile;
    }
};
//# sourceMappingURL=mrICAMommyScenario8.js.map