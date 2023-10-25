"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profiles = void 0;
const mrSGFatherSponsoredChildrenOnly_1 = require("./sponsored-children/mrSGFatherSponsoredChildrenOnly");
const mrGSTVUncleScenario1a_1 = require("./mrGSTVUncleScenario1a");
const mrGSTVUncleScenario1a2_1 = require("./mrGSTVUncleScenario1a2");
const mrGSTVUncleScenario1b_1 = require("./mrGSTVUncleScenario1b");
const mrGSTVUncleScenario2a_1 = require("./mrGSTVUncleScenario2a");
const mrGSTVUncleScenario2a2_1 = require("./mrGSTVUncleScenario2a2");
const mrGSTVUncleScenario2a3_1 = require("./mrGSTVUncleScenario2a3");
const mrGSTVUncleScenario2b_1 = require("./mrGSTVUncleScenario2b");
const mrGSTVUncleScenario3_1 = require("./mrGSTVUncleScenario3");
const mrGSTVUncleScenario4_1 = require("./mrGSTVUncleScenario4");
const mrMYDaddyPerfect_1 = require("./mrMYDaddyPerfect");
const mrMYDadJobless_1 = require("./mrMYDadJobless");
const mrPRDaddyOneChildAndExpiredPassport_1 = require("./mrPRDaddyOneChildAndExpiredPassport");
const mrPRDaddyPerfect_1 = require("./mrPRDaddyPerfect");
const mrPRJobless_1 = require("./mrPRJobless");
const mrSGDaddyChildIsOld_1 = require("./mrSGDaddyChildIsOld");
const mrSGDaddyChildNone_1 = require("./mrSGDaddyChildNone");
const mrSGDaddyLongNames_1 = require("./mrSGDaddyLongNames");
const mrSGDaddyManyChildren_1 = require("./mrSGDaddyManyChildren");
const mrSGDaddyMissingFields_1 = require("./mrSGDaddyMissingFields");
const mrSGDaddyMissingUneditableFields_1 = require("./mrSGDaddyMissingUneditableFields");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const mrSGDaddyTwoDeceasedChild_1 = require("./mrSGDaddyTwoDeceasedChild");
const mrSGJobless_1 = require("./mrSGJobless");
const mrSGPreschoolRegister_1 = require("./mrSGPreschoolRegister");
const mrSGUncleMgAllOk_1 = require("./mrSGUncleMgAllOk");
const mrSGUncleMgCallReceive_1 = require("./mrSGUncleMgCallReceive");
const mrSGUncleMgNeedAddress_1 = require("./mrSGUncleMgNeedAddress");
const mrSGUncleMgNeedMedisave_1 = require("./mrSGUncleMgNeedMedisave");
const mrSGUncleMgNilStatus_1 = require("./mrSGUncleMgNilStatus");
const mrSGUncleNonBenefits_1 = require("./mrSGUncleNonBenefits");
const mrSGUncleNonMg_1 = require("./mrSGUncleNonMg");
const mrSGUncleMgOptOut_1 = require("./mrSGUncleMgOptOut");
const mrsMYMomJobless_1 = require("./mrsMYMomJobless");
const mrsMYMommyPerfect_1 = require("./mrsMYMommyPerfect");
const mrsSGMommyPerfect_1 = require("./mrsSGMommyPerfect");
const mrSGFatherNormalChildrenOnly_1 = require("./sponsored-children/mrSGFatherNormalChildrenOnly");
const msSGMotherBothChildren_1 = require("./sponsored-children/msSGMotherBothChildren");
const mrSGFromBedok_1 = require("./mrSGFromBedok");
const mrSGNoLocalAddress_1 = require("./mrSGNoLocalAddress ");
const mrSGNoAddress_1 = require("./mrSGNoAddress");
const mrPRNoLocalAddress_1 = require("./mrPRNoLocalAddress");
const mrJapaneseAddressBlank_1 = require("./mrJapaneseAddressBlank");
const mrJapaneseNoAddressObject_1 = require("./mrJapaneseNoAddressObject");
const MrPreschoolRegistration_1 = require("./MrPreschoolRegistration");
const MrsPreschoolRegistration_1 = require("./MrsPreschoolRegistration");
const mrAppReviewer_1 = require("./mrAppReviewer");
const mrSGFreshGradYoungParent_1 = require("./mrSGFreshGradYoungParent");
const mrsPRHdbOwnerWorkingAdult_1 = require("./mrsPRHdbOwnerWorkingAdult");
const mrSGUncleRetiree_1 = require("./mrSGUncleRetiree");
const mrSGTeenager17_1 = require("./mrSGTeenager17");
const msSGTeenager17_1 = require("./msSGTeenager17");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const mrSGUnclePgCallReceive_1 = require("./mrSGUnclePgCallReceive");
const mrSGUnclePgNeedAddress_1 = require("./mrSGUnclePgNeedAddress");
const mrSGUnclePgNeedMedisave_1 = require("./mrSGUnclePgNeedMedisave");
const mrSGUnclePgNilStatus_1 = require("./mrSGUnclePgNilStatus");
const mrSGUnclePgOptOut_1 = require("./mrSGUnclePgOptOut");
const mrSGUncleNonPg_1 = require("./mrSGUncleNonPg");
const mrICADaddyScenario1_1 = require("./mrICADaddyScenario1");
const mrICADaddyScenario2_1 = require("./mrICADaddyScenario2");
const mrICADaddyScenario3_1 = require("./mrICADaddyScenario3");
const mrICADaddyScenario4_1 = require("./mrICADaddyScenario4");
const mrICADaddyScenario5_1 = require("./mrICADaddyScenario5");
const mrICADaddyScenario7_1 = require("./mrICADaddyScenario7");
const mrICAMommyScenario1_1 = require("./mrICAMommyScenario1");
const mrICAMommyScenario2_1 = require("./mrICAMommyScenario2");
const mrICAMommyScenario3_1 = require("./mrICAMommyScenario3");
const mrICAMommyScenario4_1 = require("./mrICAMommyScenario4");
const mrICAMommyScenario5_1 = require("./mrICAMommyScenario5");
const mrICAMommyScenario6_1 = require("./mrICAMommyScenario6");
const mrICAMommyScenario8_1 = require("./mrICAMommyScenario8");
/**
 * Exhaustive list of our MyInfo archetype profiles
 * (Alphabetical order as much as possible)
 */
exports.profiles = [
    mrSGFatherNormalChildrenOnly_1.mrSGFatherNormalChildrenOnly,
    mrSGFatherSponsoredChildrenOnly_1.mrSGFatherSponsoredChildrenOnly,
    msSGMotherBothChildren_1.msSGMotherBothChildren,
    mrSGDaddyPerfect_1.mrSGDaddyPerfect,
    mrsSGMommyPerfect_1.mrsSGMommyPerfect,
    mrSGFromBedok_1.mrSGFromBedok,
    mrSGNoLocalAddress_1.mrSGNoLocalAddress,
    mrSGNoAddress_1.mrSGNoAddress,
    mrPRNoLocalAddress_1.mrPRNoLocalAddress,
    mrJapaneseNoAddressObject_1.mrJapaneseNoAddressObject,
    mrJapaneseAddressBlank_1.mrJapaneseAddressBlank,
    mrPRDaddyPerfect_1.mrPRDaddyPerfect,
    mrsMYMommyPerfect_1.mrsMYMommyPerfect,
    mrSGDaddyChildNone_1.mrSGDaddyChildNone,
    mrPRDaddyOneChildAndExpiredPassport_1.mrPRDaddyOneChildAndExpiredPassport,
    mrSGDaddyChildIsOld_1.mrSGDaddyChildIsOld,
    mrSGDaddyManyChildren_1.mrSGDaddyManyChildren,
    mrSGPreschoolRegister_1.mrPreschoolRegister,
    mrSGDaddyLongNames_1.mrSGDaddyLongNames,
    mrSGDaddyMissingFields_1.mrSGDaddyMissingFields,
    mrSGDaddyMissingUneditableFields_1.mrSGDaddyMissingUneditableFields,
    mrMYDaddyPerfect_1.mrMYDaddyPerfect,
    mrSGUncleMgNeedAddress_1.mrSGUncleMgNeedAddress,
    mrSGUncleNonMg_1.mrSGUncleNonMg,
    mrSGUncleMgAllOk_1.mrSGUncleMgAllOk,
    mrSGUncleMgNeedMedisave_1.mrSGUncleMgNeedMedisave,
    mrSGUncleMgCallReceive_1.mrSGUncleMgCallReceive,
    mrSGUncleMgOptOut_1.mrSGUncleMgOptOut,
    mrSGUncleMgNilStatus_1.mrSGUncleMgNilStatus,
    mrSGUnclePgNeedAddress_1.mrSGUnclePgNeedAddress,
    mrSGUncleNonPg_1.mrSGUncleNonPg,
    mrSGUnclePgAllOk_1.mrSGUnclePgAllOk,
    mrSGUnclePgNeedMedisave_1.mrSGUnclePgNeedMedisave,
    mrSGUnclePgCallReceive_1.mrSGUnclePgCallReceive,
    mrSGUnclePgOptOut_1.mrSGUnclePgOptOut,
    mrSGUnclePgNilStatus_1.mrSGUnclePgNilStatus,
    mrSGUncleNonBenefits_1.mrSGUncleNonBenefits,
    mrGSTVUncleScenario1a_1.mrGstvUncle1a,
    mrGSTVUncleScenario1a2_1.mrGstvUncle1a2,
    mrGSTVUncleScenario1b_1.mrGstvUncle1b,
    mrGSTVUncleScenario2a_1.mrGstvUncle2a,
    mrGSTVUncleScenario2a2_1.mrGstvUncle2a2,
    mrGSTVUncleScenario2a3_1.mrGstvUncle2a3,
    mrGSTVUncleScenario2b_1.mrGstvUncle2b,
    mrGSTVUncleScenario3_1.mrGstvUncle3,
    mrGSTVUncleScenario4_1.mrGstvUncle4,
    mrMYDadJobless_1.mrMYDadJobless,
    mrsMYMomJobless_1.mrsMYMomJobless,
    mrSGJobless_1.mrSGJobless,
    mrPRJobless_1.mrPRJobless,
    mrSGDaddyTwoDeceasedChild_1.mrSGDaddyTwoDeceasedChild,
    MrPreschoolRegistration_1.mrPreschoolRegistration,
    MrsPreschoolRegistration_1.mrsPreschoolRegistration,
    mrAppReviewer_1.mrAppReviewer,
    mrSGFreshGradYoungParent_1.mrSGFreshGradYoungParent,
    mrsPRHdbOwnerWorkingAdult_1.mrsPRHdbOwnerWorkingAdult,
    mrSGUncleRetiree_1.mrSGUncleRetiree,
    mrSGTeenager17_1.mrSgTeenager17,
    msSGTeenager17_1.msSgTeenager17,
    mrICADaddyScenario1_1.mrICADaddyScenario1,
    mrICADaddyScenario2_1.mrICADaddyScenario2,
    mrICADaddyScenario3_1.mrICADaddyScenario3,
    mrICADaddyScenario4_1.mrICADaddyScenario4,
    mrICADaddyScenario5_1.mrICADaddyScenario5,
    mrICADaddyScenario7_1.mrICADaddyScenario7,
    mrICAMommyScenario1_1.mrsICAMommyScenario1,
    mrICAMommyScenario2_1.mrsICAMommyScenario2,
    mrICAMommyScenario3_1.mrsICAMommyScenario3,
    mrICAMommyScenario4_1.mrsICAMommyScenario4,
    mrICAMommyScenario5_1.mrsICAMommyScenario5,
    mrICAMommyScenario6_1.mrsICAMommyScenario6,
    mrICAMommyScenario8_1.mrsICAMommyScenario8
];
//# sourceMappingURL=fake-profiles.js.map