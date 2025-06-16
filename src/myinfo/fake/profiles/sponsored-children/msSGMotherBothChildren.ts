import * as _ from "lodash";
import { MyInfoComponentsV4, MyInfoSexCode } from "src/types";
import { FakeProfile, ProfileArchetype } from "../fake-profile";
import { BaseProfile } from "./BaseProfile";
import { Childrenbirthrecords } from "./normalChildren";
import { SponsoredChildrenRecords } from "./sponsoredChildBirthRecords";

const id = "S9116045E";
const name = ProfileArchetype.MS_SG_MOTHER_HAVING_BOTH_CHILDREN;

export const msSGMotherBothChildren: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);
		profile.sex.unavailable = false;

		profile.childrenbirthrecords = _.values(Childrenbirthrecords);
		profile.sponsoredchildrenrecords = _.values(SponsoredChildrenRecords);

		profile.cpfbalances = {
			ma: { lastupdated: "2016-12-01", classification: "C", source: "1", unavailable: true },
			sa: { lastupdated: "2016-12-01", classification: "C", source: "1", unavailable: true },
			oa: { lastupdated: "2016-12-01", classification: "C", source: "1", unavailable: true },
		};

		return profile;
	},
};
