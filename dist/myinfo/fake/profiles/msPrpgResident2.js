"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msPrpgResident2 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "T0300210H";
const name = fake_profile_1.ProfileArchetype.MS_PRPG_RESIDENT_2;
exports.msPrpgResident2 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "2003-09-01",
        };
        profile.regadd.unit.value = "238";
        profile.regadd.floor.value = "13";
        profile.regadd.block.value = "602";
        profile.regadd.street.value = "ELIAS ROAD";
        profile.regadd.postal.value = "510602";
        return profile;
    },
};
//# sourceMappingURL=msPrpgResident2.js.map