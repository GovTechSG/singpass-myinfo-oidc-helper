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
            "unavailable": false,
        };
        profile.nationality = {
            "code": domain_1.MyInfoNationalityCode.JAPANESE,
            "desc": domain_1.MyInfoNationalityCode.fn.toEnumDesc(domain_1.MyInfoNationalityCode.JAPANESE),
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
            "unavailable": false,
        };
        profile.birthcountry = {
            "code": domain_1.MyInfoCountryCode.JAPAN,
            "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.JAPAN),
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
            "unavailable": false,
        };
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
            "unavailable": false,
        };
        profile.regadd = undefined;
        profile.marital = {
            "lastupdated": "2020-09-10",
            "code": null,
            "source": "2",
            "classification": "C",
            "desc": null,
            "unavailable": false,
        };
        profile.marriagedate = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "",
            "unavailable": false,
        };
        profile.occupation = {
            "lastupdated": "2018-05-21",
            "code": domain_1.MyInfoOccupationCode.LEGISLATOR,
            "source": "2",
            "classification": "C",
            "desc": domain_1.MyInfoOccupationCode.fn.toEnumDesc(domain_1.MyInfoOccupationCode.LEGISLATOR),
            "unavailable": false,
        };
        profile.dialect = {
            "lastupdated": "2020-09-10",
            "code": "",
            "source": "2",
            "classification": "C",
            "desc": "",
            "unavailable": false,
        };
        profile.occupation.desc = domain_1.MyInfoOccupationCode.OTHER_SPECIALIST_MEDICAL_PRACTITIONERS_MEDICAL_EG_ENDOCRINOLOGIST_GERIATRICIAN_HAEMATOLOGIST_INFECTIOUS_DISEASES_PHYSICIAN_NEUROLOGIST_NUCLEAR_MEDICINE_PHYSICIAN_REHABILITATION_PHYSICIAN_RENAL_PHYSICIAN_RHEUMATOLOGIST;
        return profile;
    },
};
//# sourceMappingURL=mrJapaneseNoAddressObject.js.map