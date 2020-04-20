import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { myInfoDomain } from "../../domain";
import { formatDateToString } from "../../../util/DateUtils";
import moment from "moment";

const id = "T2446959F";
const name = ProfileArchetype.MR_PRESCHOOL_REGISTRATION_ELIGIBLE;

const eligibleChild_PG = {
	birthcertno: { value: "T1808149G" },
	name: { value: "Ella Lee" },
	dob: { value: formatDateToString(moment().subtract(18, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const eligibleChild_N1 = {
	birthcertno: { value: "T1796910I" },
	name: { value: "Ellie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const eligibleChild_K1 = {
	birthcertno: { value: "T1503810H" },
	name: { value: "Emma Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const ineligibleChild = {
	birthcertno: { value: "T1258141B" },
	name: { value: "Emmy Lee" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const mrPreschoolRegistrationEligible: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.childrenbirthrecords = [
			eligibleChild_PG,
			eligibleChild_N1,
			eligibleChild_K1,
			ineligibleChild,
		];

		return profile;
	},
};
