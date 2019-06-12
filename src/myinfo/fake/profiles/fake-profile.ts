import { myInfoDomain } from "../../domain";

export interface FakeProfile {
	id: string;
	name: ProfileArchetype;
	generate: (profileName?: string) => myInfoDomain.Components.Schemas.PersonBasic;
}

/**
 * Used in MyInfo.Fake.Helper.getPersonData to get a archetype person
 */
export enum ProfileArchetype {
	MR_PR_DADDY_ONE_CHILD = "Mr PR Daddy with One Child",
	MR_PR_DADDY_PERFECT = "Mr PR Daddy Perfect",
	MR_SG_DADDY_CHILD_IS_OLD = "Mr SG with 1 old child",
	MR_SG_DADDY_CHILD_NONE = "Mr SG with no children",
	MR_SG_DADDY_LONG_NAMES = "Mr SG daddy with long names",
	MR_SG_DADDY_MANY_CHILDREN = "Mr SG with many children",
	MR_SG_DADDY_MISSING_FIELDS = "Mr SG Daddy Missing Fields",
	MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS = "Mr SG Daddy Missing Uneditable Fields",
	MR_SG_DADDY_PERFECT = "Mr SG Daddy Perfect",
	MR_SG_PRESCHOOL_CHILDREN = "Mr SG Preschool Children",
	MRS_MY_MOMMY_PERFECT = "Mrs MY Mommy Perfect",
	MRS_SG_MOMMY_PERFECT = "Mrs SG Mommy Perfect",
	MR_MY_DADDY_PERFECT = "Mr MY Daddy Perfect",
	MR_SG_UNCLE_NON_MG = "Mr SG Uncle Non MG",
	MR_SG_UNCLE_MG_ALL_OK = "Mr SG Uncle MG All Ok",
	MR_SG_UNCLE_MG_NEED_ADDR_UPDATE = "Mr SG Uncle MG needs address update",
	MR_SG_UNCLE_MG_NEED_MEDISAVE = "Mr SG Uncle MG need medisave",
	MR_SG_UNCLE_MG_CALL_RECEIVE = "Mr SG Uncle MG call to receive",
	MR_SG_UNCLE_OPT_OUT = "Mr SG Uncle Opt-out",
	MR_SG_UNCLE_MG_NIL_STATUS = "Mr SG Uncle MG nil status",
	MR_SG_UNCLE_NON_BENEFITS = "Mr SG Uncle Non Benefits",
	MR_SG_UNCLE_GST_SCENARIO_1A = "Mr GSTV Uncle 1a no exclusion got signup got $",
	MR_SG_UNCLE_GST_SCENARIO_1A2 = "Mr GSTV Uncle 1a2 no exclusion got signup got gst regular only",
	MR_SG_UNCLE_GST_SCENARIO_1B = "Mr GSTV Uncle 1b no exclusion got signup no $",
	MR_SG_UNCLE_GST_SCENARIO_2A = "Mr GSTV Uncle 2a no exclusion no signup got $",
	MR_SG_UNCLE_GST_SCENARIO_2A2 = "Mr GSTV Uncle 2a2 no exclusion no signup got gst bicentennial only",
	MR_SG_UNCLE_GST_SCENARIO_2A3 = "Mr GSTV Uncle 2a3 no exclusion no signup got gst regular & medisave only",
	MR_SG_UNCLE_GST_SCENARIO_2B = "Mr GSTV Uncle 2b no exclusion no signup no $",
	MR_SG_UNCLE_GST_SCENARIO_3 = "Mr GSTV Uncle 3 got exclusion got signup got $",
	MR_SG_UNCLE_GST_SCENARIO_4 = "Mr GSTV Uncle 4 got exclusion no signup got $",

}
