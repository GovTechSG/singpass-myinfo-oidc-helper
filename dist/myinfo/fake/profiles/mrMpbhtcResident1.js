"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpbhtcResident1 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S7422226I";
const name = fake_profile_1.ProfileArchetype.MR_MPBHTC_RESIDENT_1;
exports.mrMpbhtcResident1 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-08-01",
            source: "1",
            classification: "C",
            value: "1949-01-11",
        };
        profile.regadd.unit.value = "144";
        profile.regadd.floor.value = "07";
        profile.regadd.block.value = "178B";
        profile.regadd.street.value = "HOUGANG STREET 12";
        profile.regadd.postal.value = "532178";
        return profile;
    },
};
//# sourceMappingURL=mrMpbhtcResident1.js.map