"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrPRJobless = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S2599302J";
const name = fake_profile_1.ProfileArchetype.MR_PR_JOBLESS;
exports.mrPRJobless = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.nationality.code = domain_1.MyInfoNationalityCitizenshipCode.ANDORRAN;
        profile.residentialstatus.code = domain_1.MyInfoResidentialCode.PR;
        profile.residentialstatus.desc = domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.PR);
        return profile;
    },
};
//# sourceMappingURL=mrPRJobless.js.map