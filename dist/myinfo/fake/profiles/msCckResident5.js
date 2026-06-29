"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msCckResident5 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "T0742993I";
const name = fake_profile_1.ProfileArchetype.MS_CCK_RESIDENT_5;
exports.msCckResident5 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "2007-12-31",
        };
        profile.regadd.unit.value = "1041";
        profile.regadd.floor.value = "08";
        profile.regadd.block.value = "438B";
        profile.regadd.street.value = "BUKIT BATOK WEST AVENUE 8";
        profile.regadd.postal.value = "652438";
        return profile;
    },
};
//# sourceMappingURL=msCckResident5.js.map