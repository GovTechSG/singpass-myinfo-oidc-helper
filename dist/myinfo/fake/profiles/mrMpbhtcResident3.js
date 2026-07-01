"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpbhtcResident3 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8254423B";
const name = fake_profile_1.ProfileArchetype.MR_MPBHTC_RESIDENT_3;
exports.mrMpbhtcResident3 = {
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
            value: "1988-08-08",
        };
        profile.regadd.unit.value = "415";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "9";
        profile.regadd.street.value = "HAIG ROAD";
        profile.regadd.postal.value = "430009";
        return profile;
    },
};
//# sourceMappingURL=mrMpbhtcResident3.js.map