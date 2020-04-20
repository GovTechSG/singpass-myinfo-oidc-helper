import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { myInfoDomain } from "../../domain";
import { formatDateToString } from "../../../util/DateUtils";
import moment from "moment";

const id = "T2446959F";
const name = ProfileArchetype.MR_PRESCHOOL_REGISTRATION_INELIGIBLE;

const eligibleChild_IC = {
	birthcertno: { value: "T1901543I" },
	name: { value: "Ezra Lee" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const eligibleChild_N2 = {
	birthcertno: { value: "T1689953J" },
	name: { value: "Elliot Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const ineligibleChild = {
	birthcertno: { value: "T1349159Z" },
	name: { value: "Emmanuel Lee" },
	dob: { value: formatDateToString(moment().subtract(7, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const mrPreschoolRegistrationIneligible: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.childrenbirthrecords = [
			eligibleChild_IC,
			eligibleChild_N2,
			ineligibleChild,
		];

		return profile;
	},
};
