"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpResident6 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S7465038D";
const name = fake_profile_1.ProfileArchetype.MR_MP_RESIDENT_6;
exports.mrMpResident6 = {
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
            value: "1974-10-17",
        };
        profile.regadd.unit.value = "122";
        profile.regadd.floor.value = "07";
        profile.regadd.block.value = "808A";
        profile.regadd.street.value = "CHAI CHEE ROAD";
        profile.regadd.postal.value = "461808";
        return profile;
    },
};
//# sourceMappingURL=mrMpResident6.js.map