"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrPrpgResident6 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S4169135B";
const name = fake_profile_1.ProfileArchetype.MR_PRPG_RESIDENT_6;
exports.mrPrpgResident6 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "1941-02-28",
        };
        profile.regadd.unit.value = "276";
        profile.regadd.floor.value = "14";
        profile.regadd.block.value = "663A";
        profile.regadd.street.value = "PUNGGOL DRIVE";
        profile.regadd.postal.value = "821663";
        return profile;
    },
};
//# sourceMappingURL=mrPrpgResident6.js.map