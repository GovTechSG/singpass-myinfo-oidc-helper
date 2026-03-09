"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrAmktcResident5 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9586116D";
const name = fake_profile_1.ProfileArchetype.MR_AMKTC_RESIDENT_5;
exports.mrAmktcResident5 = {
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
            value: "1961-02-28",
        };
        profile.regadd.unit.value = "2592";
        profile.regadd.floor.value = "08";
        profile.regadd.block.value = "508";
        profile.regadd.street.value = "ANG MO KIO AVENUE 8";
        profile.regadd.postal.value = "560508";
        return profile;
    },
};
//# sourceMappingURL=mrAmktcResident5.js.map