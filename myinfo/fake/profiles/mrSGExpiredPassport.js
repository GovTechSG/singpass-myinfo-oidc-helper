"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGExpiredPassport = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_EXPIRED_PASSPORT;
exports.mrSGExpiredPassport = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.passportnumber = {
            "lastupdated": "",
            "source": "1",
            "classification": "C",
            "value": "L3280034",
        },
            profile.passportexpirydate = {
                "lastupdated": "",
                "source": "1",
                "classification": "C",
                "value": "2011-09-10",
            };
        return profile;
    },
};
//# sourceMappingURL=mrSGExpiredPassport.js.map