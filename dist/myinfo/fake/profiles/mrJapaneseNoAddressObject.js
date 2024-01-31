"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrJapaneseNoAddressObject = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "F2734981K";
const name = fake_profile_1.ProfileArchetype.MR_JAPANESE_NO_ADDRESS_OBJECT;
exports.mrJapaneseNoAddressObject = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.residentialstatus = {
            "code": "",
            "desc": "",
            "source": "3",
            "classification": "C",
            "lastupdated": "",
        };
        profile.nationality = {
            "code": domain_1.MyInfoNationalityCitizenshipCode.JAPANESE,
            "desc": domain_1.MyInfoNationalityCitizenshipCode.fn.toEnumDesc(domain_1.MyInfoNationalityCitizenshipCode.JAPANESE),
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.birthcountry = {
            "code": domain_1.MyInfoCountryPlaceCode.JAPAN,
            "desc": domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.JAPAN),
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
        };
        profile.regadd = undefined;
        profile.marital = {
            "lastupdated": "2020-09-10",
            "code": null,
            "source": "2",
            "classification": "C",
            "desc": null,
        };
        profile.marriagedate = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "",
        };
        profile.dialect = {
            "lastupdated": "2020-09-10",
            "code": "",
            "source": "2",
            "classification": "C",
            "desc": "",
        };
        return profile;
    },
};
//# sourceMappingURL=mrJapaneseNoAddressObject.js.map