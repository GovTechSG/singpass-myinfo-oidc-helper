"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrICADaddyScenario2 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9005004D";
const name = fake_profile_1.ProfileArchetype.MR_ICA_PR_DADDY_SPOUSE_SCENARIO_2;
exports.mrICADaddyScenario2 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.MALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE);
        profile.race = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoRaceCode.MALAY,
            "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.MALAY),
            "source": "1",
            "classification": "C",
        };
        profile.dob = {
            "lastupdated": "2022-02-25",
            "source": "1",
            "classification": "C",
            "value": "1990-02-02",
        };
        profile.residentialstatus = {
            "lastupdated": "2018-06-01",
            "code": domain_1.MyInfoResidentialCode.PR,
            "desc": domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.PR),
            "source": "1",
            "classification": "C",
        };
        profile.nationality.code = domain_1.MyInfoNationalityCitizenshipCode.MALAYSIAN;
        profile.marriagecertno = {
            "lastupdated": "2022-02-25",
            "source": "1",
            "classification": "C",
            "value": "M23456",
        };
        profile.marriagedate = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "2020-09-10",
        };
        profile.countryofmarriage = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoCountryPlaceCode.SINGAPORE,
            "desc": domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
            "source": "1",
            "classification": "C",
        };
        profile.marital = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoMaritalStatusCode.MARRIED,
            "desc": domain_1.MyInfoMaritalStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritalStatusCode.MARRIED),
            "source": "1",
            "classification": "C",
        };
        return profile;
    }
};
//# sourceMappingURL=mrICADaddyScenario2.js.map