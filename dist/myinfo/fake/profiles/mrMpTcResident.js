"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpTcResident = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9353807B";
const name = fake_profile_1.ProfileArchetype.MR_MPTC_RESIDENT;
exports.mrMpTcResident = {
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
            value: "1993-11-24",
        };
        profile.regadd.unit.value = "3007";
        profile.regadd.floor.value = "06";
        profile.regadd.block.value = "22";
        profile.regadd.street.value = "EUNOS CRESCENT";
        profile.regadd.postal.value = "400022";
        return profile;
    },
};
//# sourceMappingURL=mrMpTcResident.js.map