"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrNsResident3 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S7680309I";
const name = fake_profile_1.ProfileArchetype.MR_NS_RESIDENT_3;
exports.mrNsResident3 = {
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
            value: "1976-02-12",
        };
        profile.regadd.unit.value = "229";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "131";
        profile.regadd.street.value = "YISHUN STREET 11";
        profile.regadd.postal.value = "760131";
        return profile;
    },
};
//# sourceMappingURL=mrNsResident3.js.map