"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrWaTcResident = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9484020A";
const name = fake_profile_1.ProfileArchetype.MR_WATC_RESIDENT;
exports.mrWaTcResident = {
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
            value: "1994-11-24",
        };
        profile.regadd.unit.value = "410";
        profile.regadd.floor.value = "09";
        profile.regadd.block.value = "177";
        profile.regadd.street.value = "BOON LAY DRIVE";
        profile.regadd.postal.value = "640177";
        return profile;
    },
};
//# sourceMappingURL=mrWaTCResident.js.map