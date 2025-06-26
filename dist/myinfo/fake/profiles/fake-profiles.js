"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profiles = void 0;
const mrAppReviewer_1 = require("./mrAppReviewer");
const mrCckResident1_1 = require("./mrCckResident1");
const mrCckResident3_1 = require("./mrCckResident3");
const mrCckResident4_1 = require("./mrCckResident4");
const mrCckResident6_1 = require("./mrCckResident6");
const mrHbpResident2_1 = require("./mrHbpResident2");
const mrHbpResident5_1 = require("./mrHbpResident5");
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
const mrJapaneseAddressBlank_1 = require("./mrJapaneseAddressBlank");
const mrJapaneseNoAddressObject_1 = require("./mrJapaneseNoAddressObject");
const mrMpResident1_1 = require("./mrMpResident1");
const mrMpResident3_1 = require("./mrMpResident3");
const mrMpResident4_1 = require("./mrMpResident4");
const mrMpResident6_1 = require("./mrMpResident6");
const mrMYDaddyPerfect_1 = require("./mrMYDaddyPerfect");
const mrMYDadJobless_1 = require("./mrMYDadJobless");
const mrNsResident2_1 = require("./mrNsResident2");
const mrNsResident3_1 = require("./mrNsResident3");
const mrNsResident5_1 = require("./mrNsResident5");
const mrPRDaddyOneChildAndExpiredPassport_1 = require("./mrPRDaddyOneChildAndExpiredPassport");
const mrPRDaddyPerfect_1 = require("./mrPRDaddyPerfect");
const MrPreschoolRegistration_1 = require("./MrPreschoolRegistration");
const mrPRJobless_1 = require("./mrPRJobless");
const mrPRNoLocalAddress_1 = require("./mrPRNoLocalAddress");
const mrPrpgResident3_1 = require("./mrPrpgResident3");
const mrPrpgResident4_1 = require("./mrPrpgResident4");
const mrPrpgResident5_1 = require("./mrPrpgResident5");
const mrPrpgResident6_1 = require("./mrPrpgResident6");
const mrSGDaddyChildIsOld_1 = require("./mrSGDaddyChildIsOld");
const mrSGDaddyChildNone_1 = require("./mrSGDaddyChildNone");
const mrSGDaddyLongNames_1 = require("./mrSGDaddyLongNames");
const mrSGDaddyManyChildren_1 = require("./mrSGDaddyManyChildren");
const mrSGDaddyMissingFields_1 = require("./mrSGDaddyMissingFields");
const mrSGDaddyMissingUneditableFields_1 = require("./mrSGDaddyMissingUneditableFields");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const mrSGDaddyTwoDeceasedChild_1 = require("./mrSGDaddyTwoDeceasedChild");
const mrSGFreshGradYoungParent_1 = require("./mrSGFreshGradYoungParent");
const mrSGFromBedok_1 = require("./mrSGFromBedok");
const mrSGJobless_1 = require("./mrSGJobless");
const mrSGLandedAddress_1 = require("./mrSGLandedAddress");
const mrSGNoAddress_1 = require("./mrSGNoAddress");
const mrSGNoLocalAddress_1 = require("./mrSGNoLocalAddress ");
const mrSGPreschoolRegister_1 = require("./mrSGPreschoolRegister");
const mrSGTeenager17_1 = require("./mrSGTeenager17");
const mrSGUncleMgAllOk_1 = require("./mrSGUncleMgAllOk");
const mrSGUncleMgCallReceive_1 = require("./mrSGUncleMgCallReceive");
const mrSGUncleMgNeedAddress_1 = require("./mrSGUncleMgNeedAddress");
const mrSGUncleMgNeedMedisave_1 = require("./mrSGUncleMgNeedMedisave");
const mrSGUncleMgNilStatus_1 = require("./mrSGUncleMgNilStatus");
const mrSGUncleMgOptOut_1 = require("./mrSGUncleMgOptOut");
const mrSGUncleNonBenefits_1 = require("./mrSGUncleNonBenefits");
const mrSGUncleNonMg_1 = require("./mrSGUncleNonMg");
const mrSGUncleNonPg_1 = require("./mrSGUncleNonPg");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const mrSGUnclePgCallReceive_1 = require("./mrSGUnclePgCallReceive");
const mrSGUnclePgNeedAddress_1 = require("./mrSGUnclePgNeedAddress");
const mrSGUnclePgNeedMedisave_1 = require("./mrSGUnclePgNeedMedisave");
const mrSGUnclePgNilStatus_1 = require("./mrSGUnclePgNilStatus");
const mrSGUnclePgOptOut_1 = require("./mrSGUnclePgOptOut");
const mrSGUncleRetiree_1 = require("./mrSGUncleRetiree");
const mrsMYMomJobless_1 = require("./mrsMYMomJobless");
const mrsMYMommyPerfect_1 = require("./mrsMYMommyPerfect");
const MrsPreschoolRegistration_1 = require("./MrsPreschoolRegistration");
const mrsPRHdbOwnerWorkingAdult_1 = require("./mrsPRHdbOwnerWorkingAdult");
const mrsSGMommyPerfect_1 = require("./mrsSGMommyPerfect");
const msCckResident2_1 = require("./msCckResident2");
const msCckResident5_1 = require("./msCckResident5");
const msHbpResident1_1 = require("./msHbpResident1");
const msHbpResident3_1 = require("./msHbpResident3");
const msHbpResident4_1 = require("./msHbpResident4");
const msHbpResident6_1 = require("./msHbpResident6");
const msMpResident2_1 = require("./msMpResident2");
const msMpResident5_1 = require("./msMpResident5");
const msNsResident1_1 = require("./msNsResident1");
const msNsResident4_1 = require("./msNsResident4");
const msNsResident6_1 = require("./msNsResident6");
const msPrpgResident1_1 = require("./msPrpgResident1");
const msPrpgResident2_1 = require("./msPrpgResident2");
const msSGTeenager17_1 = require("./msSGTeenager17");
const mrSGFatherNormalChildrenOnly_1 = require("./sponsored-children/mrSGFatherNormalChildrenOnly");
const mrSGFatherSponsoredChildrenOnly_1 = require("./sponsored-children/mrSGFatherSponsoredChildrenOnly");
const msSGMotherBothChildren_1 = require("./sponsored-children/msSGMotherBothChildren");
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
    mrSGLandedAddress_1.mrSGLandedAddress,
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
    mrICAMommyScenario8_1.mrsICAMommyScenario8,
    mrCckResident1_1.mrCckResident1,
    msCckResident2_1.msCckResident2,
    mrCckResident3_1.mrCckResident3,
    mrCckResident4_1.mrCckResident4,
    msCckResident5_1.msCckResident5,
    mrCckResident6_1.mrCckResident6,
    msHbpResident1_1.msHbpResident1,
    mrHbpResident2_1.mrHbpResident2,
    msHbpResident3_1.msHbpResident3,
    msHbpResident4_1.msHbpResident4,
    mrHbpResident5_1.mrHbpResident5,
    msHbpResident6_1.msHbpResident6,
    mrMpResident1_1.mrMpResident1,
    msMpResident2_1.msMpResident2,
    mrMpResident3_1.mrMpResident3,
    mrMpResident4_1.mrMpResident4,
    msMpResident5_1.msMpResident5,
    mrMpResident6_1.mrMpResident6,
    msNsResident1_1.msNsResident1,
    mrNsResident2_1.mrNsResident2,
    mrNsResident3_1.mrNsResident3,
    msNsResident4_1.msNsResident4,
    mrNsResident5_1.mrNsResident5,
    msNsResident6_1.msNsResident6,
    msPrpgResident1_1.msPrpgResident1,
    msPrpgResident2_1.msPrpgResident2,
    mrPrpgResident3_1.mrPrpgResident3,
    mrPrpgResident4_1.mrPrpgResident4,
    mrPrpgResident5_1.mrPrpgResident5,
    mrPrpgResident6_1.mrPrpgResident6,
];
//# sourceMappingURL=fake-profiles.js.map