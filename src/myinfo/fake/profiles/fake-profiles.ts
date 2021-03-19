import { mrSGFatherSponsoredChildrenOnly } from "./sponsored-children/mrSGFatherSponsoredChildrenOnly";
import { mrGstvUncle1a } from "./mrGSTVUncleScenario1a";
import { mrGstvUncle1a2 } from "./mrGSTVUncleScenario1a2";
import { mrGstvUncle1b } from "./mrGSTVUncleScenario1b";
import { mrGstvUncle2a } from "./mrGSTVUncleScenario2a";
import { mrGstvUncle2a2 } from "./mrGSTVUncleScenario2a2";
import { mrGstvUncle2a3 } from "./mrGSTVUncleScenario2a3";
import { mrGstvUncle2b } from "./mrGSTVUncleScenario2b";
import { mrGstvUncle3 } from "./mrGSTVUncleScenario3";
import { mrGstvUncle4 } from "./mrGSTVUncleScenario4";
import { mrMYDaddyPerfect } from "./mrMYDaddyPerfect";
import { mrMYDadJobless } from "./mrMYDadJobless";
import { mrPRDaddyOneChildAndExpiredPassport } from "./mrPRDaddyOneChildAndExpiredPassport";
import { mrPRDaddyPerfect } from "./mrPRDaddyPerfect";
import { mrPRJobless } from "./mrPRJobless";
import { mrSGDaddyChildIsOld } from "./mrSGDaddyChildIsOld";
import { mrSGDaddyChildNone } from "./mrSGDaddyChildNone";
import { mrSGDaddyLongNames } from "./mrSGDaddyLongNames";
import { mrSGDaddyManyChildren } from "./mrSGDaddyManyChildren";
import { mrSGDaddyMissingFields } from "./mrSGDaddyMissingFields";
import { mrSGDaddyMissingUneditableFields } from "./mrSGDaddyMissingUneditableFields";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { mrSGDaddyTwoDeceasedChild } from "./mrSGDaddyTwoDeceasedChild";
import { mrSGJobless } from "./mrSGJobless";
import { mrPreschoolRegister } from "./mrSGPreschoolRegister";
import { mrSGUncleMgAllOk } from "./mrSGUncleMgAllOk";
import { mrSGUncleMgCallReceive } from "./mrSGUncleMgCallReceive";
import { mrSGUncleMgNeedAddress } from "./mrSGUncleMgNeedAddress";
import { mrSGUncleMgNeedMedisave } from "./mrSGUncleMgNeedMedisave";
import { mrSGUncleMgNilStatus } from "./mrSGUncleMgNilStatus";
import { mrSGUncleNonBenefits } from "./mrSGUncleNonBenefits";
import { mrSGUncleNonMg } from "./mrSGUncleNonMg";
import { mrSGUncleMgOptOut } from "./mrSGUncleMgOptOut";
import { mrsMYMomJobless } from "./mrsMYMomJobless";
import { mrsMYMommyPerfect } from "./mrsMYMommyPerfect";
import { mrsSGMommyPerfect } from "./mrsSGMommyPerfect";
import { mrSGFatherNormalChildrenOnly } from "./sponsored-children/mrSGFatherNormalChildrenOnly";
import { msSGMotherBothChildren } from "./sponsored-children/msSGMotherBothChildren";
import { mrSGNoLocalAddress } from "./mrSGNoLocalAddress ";
import { mrPRNoLocalAddress } from "./mrPRNoLocalAddress";
import { mrJapaneseAddressBlank } from "./mrJapaneseAddressBlank";
import { mrJapaneseNoAddressObject } from "./mrJapaneseNoAddressObject";
import { mrPreschoolRegistration } from "./MrPreschoolRegistration";
import { mrsPreschoolRegistration } from "./MrsPreschoolRegistration";
import { mrAppReviewer } from "./mrAppReviewer";
import { mrSGFreshGradYoungParent } from "./mrSGFreshGradYoungParent";
import { mrsPRHdbOwnerWorkingAdult } from "./mrsPRHdbOwnerWorkingAdult";
import { mrSGUncleRetiree } from "./mrSGUncleRetiree";
import { mrSgTeenager17 } from "./mrSGTeenager17";
import { msSgTeenager17 } from "./msSGTeenager17";
import { mrSGUnclePgAllOk } from "./mrSGUnclePgAllOk";
import { mrSGUnclePgCallReceive } from "./mrSGUnclePgCallReceive";
import { mrSGUnclePgNeedAddress } from "./mrSGUnclePgNeedAddress";
import { mrSGUnclePgNeedMedisave } from "./mrSGUnclePgNeedMedisave";
import { mrSGUnclePgNilStatus } from "./mrSGUnclePgNilStatus";
import { mrSGUnclePgOptOut } from "./mrSGUnclePgOptOut";
import { mrSGUncleNonPg } from "./mrSGUncleNonPg";

/**
 * Exhaustive list of our MyInfo archetype profiles
 */
export const profiles = [
	mrSGFatherNormalChildrenOnly,
	mrSGFatherSponsoredChildrenOnly,
	msSGMotherBothChildren,
	mrSGDaddyPerfect,
	mrsSGMommyPerfect,
	mrSGNoLocalAddress,
	mrPRNoLocalAddress,
	mrJapaneseNoAddressObject,
	mrJapaneseAddressBlank,
	mrPRDaddyPerfect,
	mrsMYMommyPerfect,
	mrSGDaddyChildNone,
	mrPRDaddyOneChildAndExpiredPassport,
	mrSGDaddyChildIsOld,
	mrSGDaddyManyChildren,
	mrPreschoolRegister,
	mrSGDaddyLongNames,
	mrSGDaddyMissingFields,
	mrSGDaddyMissingUneditableFields,
	mrMYDaddyPerfect,
	mrSGUncleMgNeedAddress,
	mrSGUncleNonMg,
	mrSGUncleMgAllOk,
	mrSGUncleMgNeedMedisave,
	mrSGUncleMgCallReceive,
	mrSGUncleMgOptOut,
	mrSGUncleMgNilStatus,
	mrSGUnclePgNeedAddress,
	mrSGUncleNonPg,
	mrSGUnclePgAllOk,
	mrSGUnclePgNeedMedisave,
	mrSGUnclePgCallReceive,
	mrSGUnclePgOptOut,
	mrSGUnclePgNilStatus,
	mrSGUncleNonBenefits,
	mrGstvUncle1a,
	mrGstvUncle1a2,
	mrGstvUncle1b,
	mrGstvUncle2a,
	mrGstvUncle2a2,
	mrGstvUncle2a3,
	mrGstvUncle2b,
	mrGstvUncle3,
	mrGstvUncle4,
	mrMYDadJobless,
	mrsMYMomJobless,
	mrSGJobless,
	mrPRJobless,
	mrSGDaddyTwoDeceasedChild,
	mrPreschoolRegistration,
	mrsPreschoolRegistration,
	mrAppReviewer,
	mrSGFreshGradYoungParent,
	mrsPRHdbOwnerWorkingAdult,
	mrSGUncleRetiree,
	mrSgTeenager17,
	msSgTeenager17,
];
