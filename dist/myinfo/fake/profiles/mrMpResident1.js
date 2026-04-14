"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpResident1 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S5395307G";
const name = fake_profile_1.ProfileArchetype.MR_MP_RESIDENT_1;
exports.mrMpResident1 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-01-22",
            source: "1",
            classification: "C",
            value: "1953-05-15",
        };
        profile.regadd.unit.value = "521";
        profile.regadd.floor.value = "12";
        profile.regadd.block.value = "320";
        profile.regadd.street.value = "UBI AVENUE 1";
        profile.regadd.postal.value = "400320";
        return profile;
    },
};
//# sourceMappingURL=mrMpResident1.js.map