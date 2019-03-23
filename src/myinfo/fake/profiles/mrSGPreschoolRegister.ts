import * as _ from "lodash";
import * as moment from "moment";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildBirthRecord } from "../../domain";


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

const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

// the children here have birthcertno related to the preschool interest registration mock
const c1 = {
	birthcertno: "T1639540J",
	name: "Child w level not offered",
	dob: formatDateToString(moment().subtract(2, "years")),
} as ChildBirthRecord;

const c2 = {
	birthcertno: "T1717003H",
	name: "Child w ineligible",
	dob: formatDateToString(moment().subtract(2, "years")),
} as ChildBirthRecord;

const c3 = {
	birthcertno: "T1728256A",
	name: "Child w registered",
	dob: formatDateToString(moment().subtract(3, "years")),
} as ChildBirthRecord;

const c4 = {
	birthcertno: "T1766863Z",
	name: "Child w nothing",
	dob: formatDateToString(moment().subtract(4, "years")),
} as ChildBirthRecord;

const c5 = {
	birthcertno: "T1783246D",
	name: "Child2 w level not offered ",
	dob: formatDateToString(moment().subtract(5, "years")),
} as ChildBirthRecord;

const c6 = {
	birthcertno: "T1790160A",
	name: "Child2 w ineligible",
	dob: formatDateToString(moment().subtract(6, "years")),
} as ChildBirthRecord;

export const ChildrenRecords = {
	c1, c2, c3, c4, c5, c6,
};
