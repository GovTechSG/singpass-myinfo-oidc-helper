"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsICAMommyScenario2 = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const domain_1 = require("../../domain");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9005003F";
const name = fake_profile_1.ProfileArchetype.MRS_ICA_SG_MOMMY_MAIN_SCENARIO_2;
exports.mrsICAMommyScenario2 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
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
                "value": "1990-01-02",
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
        profile.marriagecertno = {
            "lastupdated": "2022-02-25",
            "source": "1",
            "classification": "C",
            "value": "M23456",
            "unavailable": false,
        };
        profile.marriagedate = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "2020-09-10",
            "unavailable": false,
        };
        profile.countryofmarriage = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoCountryCode.SINGAPORE,
            "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        };
        profile.marital = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoMaritialStatusCode.MARRIED,
            "desc": domain_1.MyInfoMaritialStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritialStatusCode.MARRIED),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        };
        return profile;
    }
};
//# sourceMappingURL=mrICAMommyScenario2.js.map