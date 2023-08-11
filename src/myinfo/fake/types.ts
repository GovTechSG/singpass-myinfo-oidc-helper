import { MyInfoComponents, MyInfoCountryPlaceCode, MyInfoDrivingLicenceValidityCode, MyInfoHDBTypeCode, MyInfoHousingTypeCode, MyInfoLifeStatusCode, MyInfoMaritalStatusCode, MyInfoMerdekaGenerationMessageCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode, MyInfoVehicleStatus } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";

export enum GVS {
	true = "true",
	false = "false",
}

export enum OverrideMode {
	partial = "partial",
	full = "full",
	appendToExisting = "append",
}

export interface ChildrenBirthRecord {
	birthcertno: string;
	name?: string;
	dob?: string;
	tob?: string;
	sex?: MyInfoSexCode;
	lifestatus?: MyInfoLifeStatusCode;
}

export interface CpfContributionHistory {
	date: string;
	amount: number;
	month: string;
	employer: string;
}

export interface CpfBalance {
	ma: number;
	oa: number;
	sa: number;
	ra: number;
}

export interface NoaBasic {
	amount: number;
	yearofassessment: string;
}

export interface MockParams {
	archetype: ProfileArchetype;
	userdisplayname?: string;
	race?: MyInfoRaceCode;
	marital?: MyInfoMaritalStatusCode;
	marriagedate?: string;
	divorcedate?: string;
	marriagecertno?: string;
	countryofmarriage?: MyInfoCountryPlaceCode;
	childrenbirthrecords?: ChildrenBirthRecord[];
	childrenoverridemode?: OverrideMode;
	residentialstatus?: MyInfoResidentialCode;
	occupationfreeform?: string;
	dob?: string;
	gstvyear?: string;
	gvs?: GVS;
	merdekageneligible?: boolean;
	merdekagenquantum?: number;
	merdekagenmessagecode?: MyInfoMerdekaGenerationMessageCode;
	hdbtype?: MyInfoHDBTypeCode;
	housingtype?: MyInfoHousingTypeCode;
	drivingqdlvalidity?: MyInfoDrivingLicenceValidityCode;
	vehiclestatus?: MyInfoVehicleStatus;
	employment?: string;
}
export interface MockFinanceParams {
	cpfcontributionhistoryoverridemode?: OverrideMode;
	cpfcontributions?: CpfContributionHistory[];
	cpfbalances?: CpfBalance;
	noabasic?: NoaBasic;
}

export type MockParamsPerson = MockParams & MockFinanceParams;

export type NoaBasicExtension = MyInfoComponents.Schemas.NOABasic & MyInfoComponents.Schemas.DataFieldProperties;
export type CpfBalanceExtension = MyInfoComponents.Schemas.Cpfbalances & MyInfoComponents.Schemas.DataFieldProperties;
