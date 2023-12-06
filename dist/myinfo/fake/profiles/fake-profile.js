"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileArchetype = void 0;
/**
 * Used in MyInfo.Fake.Helper.getPersonData to get a archetype person
 */
var ProfileArchetype;
(function (ProfileArchetype) {
    ProfileArchetype["MR_PRESCHOOL_REGISTRATION"] = "Mr SG Father with preschool children";
    ProfileArchetype["MRS_PRESCHOOL_REGISTRATION"] = "Mrs SG Mother with preschool children";
    // Sponsored Children profiles
    ProfileArchetype["MR_SG_FATHER_ONLY_SPONSORED"] = "Mr SG Father with only sponsored children";
    ProfileArchetype["MR_SG_FATHER_NORMAL_CHILDREN"] = "Mr SG Father with only normal children";
    ProfileArchetype["MS_SG_MOTHER_HAVING_BOTH_CHILDREN"] = "Ms SG Mother having normal and sponsored children";
    // Regular Profiles
    ProfileArchetype["MR_PR_DADDY_ONE_CHILD"] = "Mr PR Daddy with One Child and Expired Passport";
    ProfileArchetype["MR_PR_DADDY_PERFECT"] = "Mr PR Daddy Perfect";
    ProfileArchetype["MR_SG_DADDY_CHILD_IS_OLD"] = "Mr SG with 1 old child";
    ProfileArchetype["MR_SG_DADDY_CHILD_NONE"] = "Mr SG with no children";
    ProfileArchetype["MR_SG_DADDY_LONG_NAMES"] = "Mr SG daddy with long names";
    ProfileArchetype["MR_SG_DADDY_MANY_CHILDREN"] = "Mr SG with many children";
    ProfileArchetype["MR_SG_DADDY_MISSING_FIELDS"] = "Mr SG Daddy Missing Fields";
    ProfileArchetype["MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS"] = "Mr SG Daddy Missing Uneditable Fields";
    ProfileArchetype["MR_SG_DADDY_PERFECT"] = "Mr SG Daddy Perfect";
    ProfileArchetype["MR_SG_PRESCHOOL_CHILDREN"] = "Mr SG Preschool Children";
    ProfileArchetype["MRS_MY_MOMMY_PERFECT"] = "Mrs MY Mommy Perfect";
    ProfileArchetype["MRS_SG_MOMMY_PERFECT"] = "Mrs SG Mommy Perfect";
    ProfileArchetype["MR_MY_DADDY_PERFECT"] = "Mr MY Daddy Perfect";
    ProfileArchetype["MR_SG_UNCLE_NON_MG"] = "Mr SG Uncle Non MG";
    ProfileArchetype["MR_SG_UNCLE_MG_ALL_OK"] = "Mr SG Uncle MG All Ok";
    ProfileArchetype["MR_SG_UNCLE_MG_NEED_ADDR_UPDATE"] = "Mr SG Uncle MG needs address update";
    ProfileArchetype["MR_SG_UNCLE_MG_NEED_MEDISAVE"] = "Mr SG Uncle MG need medisave";
    ProfileArchetype["MR_SG_UNCLE_MG_CALL_RECEIVE"] = "Mr SG Uncle MG call to receive";
    ProfileArchetype["MR_SG_UNCLE_MG_OPT_OUT"] = "Mr SG Uncle MG Opt-out";
    ProfileArchetype["MR_SG_UNCLE_MG_NIL_STATUS"] = "Mr SG Uncle MG nil status";
    ProfileArchetype["MR_SG_UNCLE_NON_PG"] = "Mr SG Uncle Non PG";
    ProfileArchetype["MR_SG_UNCLE_PG_ALL_OK"] = "Mr SG Uncle PG All Ok";
    ProfileArchetype["MR_SG_UNCLE_PG_NEED_ADDR_UPDATE"] = "Mr SG Uncle PG needs address update";
    ProfileArchetype["MR_SG_UNCLE_PG_NEED_MEDISAVE"] = "Mr SG Uncle PG need medisave";
    ProfileArchetype["MR_SG_UNCLE_PG_CALL_RECEIVE"] = "Mr SG Uncle PG call to receive";
    ProfileArchetype["MR_SG_UNCLE_PG_OPT_OUT"] = "Mr SG Uncle PG Opt-out";
    ProfileArchetype["MR_SG_UNCLE_PG_NIL_STATUS"] = "Mr SG Uncle PG nil status";
    ProfileArchetype["MR_SG_UNCLE_NON_BENEFITS"] = "Mr SG Uncle Non Benefits";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_1A"] = "Mr GSTV Uncle 1a no exclusion got signup got $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_1A2"] = "Mr GSTV Uncle 1a2 no exclusion got signup got gst regular only";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_1B"] = "Mr GSTV Uncle 1b no exclusion got signup no $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2A"] = "Mr GSTV Uncle 2a no exclusion no signup got $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2A2"] = "Mr GSTV Uncle 2a2 no exclusion no signup got gst bicentennial only";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2A3"] = "Mr GSTV Uncle 2a3 no exclusion no signup got gst regular & medisave only";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2B"] = "Mr GSTV Uncle 2b no exclusion no signup no $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_3"] = "Mr GSTV Uncle 3 got exclusion got signup got $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_4"] = "Mr GSTV Uncle 4 got exclusion no signup got $";
    ProfileArchetype["MR_MY_DAD_JOBLESS"] = "Mr MY Dad Jobless";
    ProfileArchetype["MRS_MY_MOM_JOBLESS"] = "Mrs MY Mom Jobless";
    ProfileArchetype["MR_SG_JOBLESS"] = "Mr SG Jobless";
    ProfileArchetype["MR_SG_FROM_BEDOK"] = "Mr SG From Bedok";
    ProfileArchetype["MR_SG_NO_LOCAL_ADDRESS"] = "Mr SG No Local Address";
    ProfileArchetype["MR_SG_NO_ADDRESS"] = "Mr SG No Address";
    ProfileArchetype["MR_PR_NO_LOCAL_ADDRESS"] = "Mr PR No Local Address";
    ProfileArchetype["MR_JAPANESE_NO_ADDRESS_OBJECT"] = "Mr Japanese No Address Object";
    ProfileArchetype["MR_JAPANESE_ADDRESS_BLANK"] = "Mr Japanese Address Blank";
    ProfileArchetype["MR_PR_JOBLESS"] = "Mr PR Jobless";
    ProfileArchetype["MR_SG_DADDY_TWO_DECEASED_CHILD"] = "My SG Daddy with Two Deceased Child";
    ProfileArchetype["MR_SG_FRESH_GRAD_YOUNG_PARENT"] = "Mr SG Fresh Grad, Young Parent";
    ProfileArchetype["MRS_PR_HDB_OWNER_WORKING_ADULT_MID_CAREER_PMETS"] = "Mrs PR HDB Owner, Working adults (Mid-career PMETs)";
    ProfileArchetype["MR_SG_UNCLE_RETIREE"] = "Mr SG Uncle Retiree";
    ProfileArchetype["MR_SG_TEENAGER_17"] = "Mr SG Teenager 17";
    ProfileArchetype["MS_SG_TEENAGER_17"] = "Ms SG Teenager 17";
    // Dedicated for iOS app Reviewer
    ProfileArchetype["MR_APP_REVIEWER"] = "Mr App Reviewer";
    // For BRV2 ICA UAT
    ProfileArchetype["MR_ICA_SG_DADDY_SPOUSE_SCENARIO_1"] = "Mr SG Daddy Spouse Applicant Scenario One No Audit Required";
    ProfileArchetype["MRS_ICA_SG_MOMMY_MAIN_SCENARIO_1"] = "Mrs SG Mommy Main Applicant Scenario One No Audit Required";
    ProfileArchetype["MR_ICA_PR_DADDY_SPOUSE_SCENARIO_2"] = "Mr PR Daddy Spouse Applicant Scenario Two MAR";
    ProfileArchetype["MRS_ICA_SG_MOMMY_MAIN_SCENARIO_2"] = "Mrs SG Mommy Main Applicant Scenario Two MAR";
    ProfileArchetype["MR_ICA_SG_DADDY_MAIN_SCENARIO_3"] = "Mr SG Daddy Main Applicant Scenario Three MAR";
    ProfileArchetype["MRS_ICA_PR_MOMMY_SPOUSE_SCENARIO_3"] = "Mrs PR Mommy Spouse Applicant Scenario Three MAR";
    ProfileArchetype["MR_ICA_FP_DADDY_MAIN_SCENARIO_4"] = "Mr FP Daddy Main Applicant Scenario Four LBI";
    ProfileArchetype["MRS_ICA_PR_MOMMY_SPOUSE_SCENARIO_4"] = "Mrs PR Mommy Spouse Applicant Scenario Four LBI";
    ProfileArchetype["MR_ICA_SC_DADDY_MAIN_SCENARIO_5"] = "Mr SG Daddy Main Applicant Scenario Five MLB";
    ProfileArchetype["MRS_ICA_SC_MOMMY_SPOUSE_SCENARIO_5"] = "Mrs SG Mommy Spouse Applicant Scenario Five MLB";
    ProfileArchetype["MRS_ICA_PR_MOMMY_MAIN_SCENARIO_6"] = "Mrs PR Mommy Main Applicant Scenario Six IDE";
    ProfileArchetype["MR_ICA_SC_DADDY_MAIN_SCENARIO_7"] = "Mr SG Daddy Spouse Applicant Scenario Seven IML";
    ProfileArchetype["MRS_ICA_SC_SINGLE_MOMMY_MAIN_SCENARIO_8"] = "Mrs SG Single Mommy Main Applicant Scenario Eight";
})(ProfileArchetype || (exports.ProfileArchetype = ProfileArchetype = {}));
//# sourceMappingURL=fake-profile.js.map