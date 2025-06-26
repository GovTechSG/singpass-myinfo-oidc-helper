"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsPreschoolRegistration = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const common_1 = require("../profiles/common");
const childbirthRecords_1 = require("./childbirthRecords");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MRS_PRESCHOOL_REGISTRATION;
exports.mrsPreschoolRegistration = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.aliasname = {
            lastupdated: "2021-03-19",
            source: "1",
            classification: "C",
            value: common_1.aliasName.LEE_XIU,
        };
        profile.sex.code = types_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.FEMALE);
        profile.childrenbirthrecords = [
            childbirthRecords_1.preschoolEligibleChild_IC,
            childbirthRecords_1.preschoolEligibleChild_N2,
            childbirthRecords_1.preschoolIneligibleChild2,
        ];
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: "1985-10-06",
        };
        return profile;
    },
};
//# sourceMappingURL=MrsPreschoolRegistration.js.map