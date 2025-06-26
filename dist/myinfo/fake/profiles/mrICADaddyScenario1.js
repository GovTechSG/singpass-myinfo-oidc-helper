"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrICADaddyScenario1 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9005002H";
const name = fake_profile_1.ProfileArchetype.MR_ICA_SG_DADDY_SPOUSE_SCENARIO_1;
exports.mrICADaddyScenario1 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
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
            value: "1990-02-01",
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
            value: "M12345",
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
//# sourceMappingURL=mrICADaddyScenario1.js.map