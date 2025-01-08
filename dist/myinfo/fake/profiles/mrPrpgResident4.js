"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrPrpgResident4 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8484191I";
const name = fake_profile_1.ProfileArchetype.MR_PRPG_RESIDENT_4;
exports.mrPrpgResident4 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.MALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "1984-02-29",
        };
        profile.regadd.unit.value = "350";
        profile.regadd.floor.value = "03";
        profile.regadd.block.value = "623A";
        profile.regadd.street.value = "PUNGGOL CENTRAL";
        profile.regadd.postal.value = "821623";
        return profile;
    },
};
//# sourceMappingURL=mrPrpgResident4.js.map