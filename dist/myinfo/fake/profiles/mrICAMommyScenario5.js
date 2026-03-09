"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsICAMommyScenario5 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9005009E";
const name = fake_profile_1.ProfileArchetype.MRS_ICA_SC_MOMMY_SPOUSE_SCENARIO_5;
exports.mrsICAMommyScenario5 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.FEMALE);
        profile.race = {
            lastupdated: "2022-02-25",
            code: types_1.MyInfoRaceCode.CHINESE,
            desc: types_1.MyInfoRaceCode.fn.toEnumDesc(types_1.MyInfoRaceCode.CHINESE),
            source: "1",
            classification: "C",
        };
        profile.dob = {
            lastupdated: "2022-02-25",
            source: "1",
            classification: "C",
            value: "1990-01-05",
        };
        profile.residentialstatus = {
            lastupdated: "2018-06-01",
            code: types_1.MyInfoResidentialCode.CITIZEN,
            desc: types_1.MyInfoResidentialCode.fn.toEnumDesc(types_1.MyInfoResidentialCode.CITIZEN),
            source: "1",
            classification: "C",
        };
        profile.nationality.code = types_1.MyInfoNationalityCitizenshipCode.SINGAPORE_CITIZEN;
        profile.marriagecertno = {
            lastupdated: "2022-02-25",
            source: "1",
            classification: "C",
            value: "M67891",
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
//# sourceMappingURL=mrICAMommyScenario5.js.map