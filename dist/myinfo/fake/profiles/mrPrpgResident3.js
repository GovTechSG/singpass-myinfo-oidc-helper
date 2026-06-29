"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrPrpgResident3 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8759130A";
const name = fake_profile_1.ProfileArchetype.MR_PRPG_RESIDENT_3;
exports.mrPrpgResident3 = {
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
            value: "1987-11-30",
        };
        profile.regadd.unit.value = "145";
        profile.regadd.floor.value = "18";
        profile.regadd.block.value = "224A";
        profile.regadd.street.value = "SUMANG LANE";
        profile.regadd.postal.value = "821224";
        return profile;
    },
};
//# sourceMappingURL=mrPrpgResident3.js.map