import { ZonedDateTime } from "@js-joda/core";
import * as _ from "lodash";
import { MyInfoComponentsV4 } from "src/types";
import { DateUtils } from "src/util";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S0350934F";
const name = ProfileArchetype.MR_SG_PRESCHOOL_CHILDREN;

export const mrPreschoolRegister: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.childrenbirthrecords = _.values(ChildrenRecords);

		return profile;
	},
};

const formatDateToString = (date?: ZonedDateTime): string => {
	date ??= ZonedDateTime.now();
	return DateUtils.toIsoDate(date);
};

// the children here have birthcertno related to the preschool interest registration mock
const c1 = {
	birthcertno: { value: "T1639540J" },
	name: { value: "Child w level not offered" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(2)) },
} as MyInfoComponentsV4.Schemas.Childrenbirthrecords;

const c2 = {
	birthcertno: { value: "T1717003H" },
	name: { value: "Child w ineligible" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(2)) },
} as MyInfoComponentsV4.Schemas.Childrenbirthrecords;

const c3 = {
	birthcertno: { value: "T1728256A" },
	name: { value: "Child w registered" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(3)) },
} as MyInfoComponentsV4.Schemas.Childrenbirthrecords;

const c4 = {
	birthcertno: { value: "T1766863Z" },
	name: { value: "Child w nothing" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(4)) },
} as MyInfoComponentsV4.Schemas.Childrenbirthrecords;

const c5 = {
	birthcertno: { value: "T1783246D" },
	name: { value: "Child2 w level not offered " },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(5)) },
} as MyInfoComponentsV4.Schemas.Childrenbirthrecords;

const c6 = {
	birthcertno: { value: "T1790160A" },
	name: { value: "Child2 w ineligible" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(6)) },
} as MyInfoComponentsV4.Schemas.Childrenbirthrecords;

export const ChildrenRecords = {
	c1,
	c2,
	c3,
	c4,
	c5,
	c6,
};
