"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsICAMommyScenario3 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9005005B";
const name = fake_profile_1.ProfileArchetype.MRS_ICA_PR_MOMMY_SPOUSE_SCENARIO_3;
exports.mrsICAMommyScenario3 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.FEMALE);
        profile.race = {
            lastupdated: "2022-02-25",
            code: types_1.MyInfoRaceCode.INDIAN,
            desc: types_1.MyInfoRaceCode.fn.toEnumDesc(types_1.MyInfoRaceCode.INDIAN),
            source: "1",
            classification: "C",
        };
        profile.dob = {
            lastupdated: "2022-02-25",
            source: "1",
            classification: "C",
            value: "1990-01-03",
        };
        profile.residentialstatus = {
            lastupdated: "2018-06-01",
            code: types_1.MyInfoResidentialCode.PR,
            desc: types_1.MyInfoResidentialCode.fn.toEnumDesc(types_1.MyInfoResidentialCode.PR),
            source: "1",
            classification: "C",
        };
        profile.nationality.code = types_1.MyInfoNationalityCitizenshipCode.MALAYSIAN;
        profile.marriagecertno = {
            lastupdated: "2022-02-25",
            source: "1",
            classification: "C",
            value: "M45678",
        };
        profile.marriagedate = {
            lastupdated: "2020-09-10",
            source: "2",
            classification: "C",
            value: "2020-09-10",
        };
        profile.countryofmarriage = {
            lastupdated: "2022-02-25",
            code: types_1.MyInfoCountryPlaceCode.SINGAPORE,
            desc: types_1.MyInfoCountryPlaceCode.fn.toEnumDesc(types_1.MyInfoCountryPlaceCode.SINGAPORE),
            source: "1",
            classification: "C",
        };
        profile.marital = {
            lastupdated: "2022-02-25",
            code: types_1.MyInfoMaritalStatusCode.MARRIED,
            desc: types_1.MyInfoMaritalStatusCode.fn.toEnumDesc(types_1.MyInfoMaritalStatusCode.MARRIED),
            source: "1",
            classification: "C",
        };
        return profile;
    },
};
//# sourceMappingURL=mrICAMommyScenario3.js.map