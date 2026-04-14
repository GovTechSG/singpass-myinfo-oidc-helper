"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpResident3 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9965211Z";
const name = fake_profile_1.ProfileArchetype.MR_MP_RESIDENT_3;
exports.mrMpResident3 = {
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
            value: "1999-09-21",
        };
        profile.regadd.unit.value = "211";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "60";
        profile.regadd.street.value = "CIRCUIT ROAD";
        profile.regadd.postal.value = "370060";
        return profile;
    },
};
//# sourceMappingURL=mrMpResident3.js.map