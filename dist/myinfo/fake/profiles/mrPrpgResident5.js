"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrPrpgResident5 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "T0881871H";
const name = fake_profile_1.ProfileArchetype.MR_PRPG_RESIDENT_5;
exports.mrPrpgResident5 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.MALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "2008-01-01",
        };
        profile.regadd.unit.value = "19";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "101";
        profile.regadd.street.value = "PASIR RIS STREET 12";
        profile.regadd.postal.value = "510101";
        return profile;
    },
};
//# sourceMappingURL=mrPrpgResident5.js.map