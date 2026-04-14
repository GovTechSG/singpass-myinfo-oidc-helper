"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrNsResident5 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "T0871447E";
const name = fake_profile_1.ProfileArchetype.MR_NS_RESIDENT_5;
exports.mrNsResident5 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2023-12-20",
            source: "1",
            classification: "C",
            value: "1962-11-24",
        };
        profile.regadd.unit.value = "77";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "868";
        profile.regadd.street.value = "YISHUN STREET 81";
        profile.regadd.postal.value = "760868";
        return profile;
    },
};
//# sourceMappingURL=mrNsResident5.js.map