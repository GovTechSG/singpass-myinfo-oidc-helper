import * as _ from "lodash";
import * as moment from "moment";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { domain } from "../../domain";


const id = "S0350934F";
const name = ProfileArchetype.MR_SG_PRESCHOOL_CHILDREN;

export const mrPreschoolRegister: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.uinfin.value = id;

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
	birthcertno: { value: "T1639540J" },
	name: { value: "Child w level not offered" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as domain.Components.Schemas.Childrenbirthrecords;

const c2 = {
	birthcertno: { value: "T1717003H" },
	name: { value: "Child w ineligible" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as domain.Components.Schemas.Childrenbirthrecords;

const c3 = {
	birthcertno: { value: "T1728256A" },
	name: { value: "Child w registered" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as domain.Components.Schemas.Childrenbirthrecords;

const c4 = {
	birthcertno: { value: "T1766863Z" },
	name: { value: "Child w nothing" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as domain.Components.Schemas.Childrenbirthrecords;

const c5 = {
	birthcertno: { value: "T1783246D" },
	name: { value: "Child2 w level not offered " },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as domain.Components.Schemas.Childrenbirthrecords;

const c6 = {
	birthcertno: { value: "T1790160A" },
	name: { value: "Child2 w ineligible" },
	dob: { value: formatDateToString(moment().subtract(6, "years")) },
} as domain.Components.Schemas.Childrenbirthrecords;

export const ChildrenRecords = {
	c1, c2, c3, c4, c5, c6,
};
