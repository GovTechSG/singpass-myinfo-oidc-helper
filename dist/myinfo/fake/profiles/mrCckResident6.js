"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrCckResident6 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S4919079D";
const name = fake_profile_1.ProfileArchetype.MR_CCK_RESIDENT_6;
exports.mrCckResident6 = {
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
            value: "1949-01-11",
        };
        profile.regadd.unit.value = "106";
        profile.regadd.floor.value = "12";
        profile.regadd.block.value = "803D";
        profile.regadd.street.value = "KEAT HONG CLOSE";
        profile.regadd.postal.value = "684803";
        return profile;
    },
};
//# sourceMappingURL=mrCckResident6.js.map