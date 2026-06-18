import { MyInfoComponentsV4 } from "../types/v4/myinfo-domain";

export interface TokenResponse {
	access_token: string;
	token_type: string;
	id_token: string;
}

export interface TokenPayload {
	rt_hash: string;
	nonce?: string;
	iat: number;
	iss: string;
	at_hash: string;
	// sub contains user's NRIC and UUID: s=S1234567A,u=f19fdf4c-f57b-40b5-a8e0-6fb6eef640e3
	sub: string;
	exp: number;
	aud: string;
	amr: string[];
}

export interface UserDataPayload extends MyInfoComponentsV4.Schemas.Person {
	iat: number;
	iss: string;
	sub: string;
	aud: string;
}

// =============================================================================
// V2 (FAPI 2.0 / Singpass v5) types
// =============================================================================

// ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/4.-parsing-the-id-token#the-sub_attributes-claim
export interface SubAttributes {
	account_type?: "standard" | "foreign";
	identity_number?: string;
	identity_coi?: string;
	name?: string;
	email?: string;
	mobileno?: string;
}

// ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/4.-parsing-the-id-token#jwt-claims
export interface TokenPayloadV2 {
	sub: string; // UUID only (no longer s=NRIC,u=UUID format)
	sub_type: string;
	sub_attributes?: SubAttributes;
	act?: {
		sub: string;
		sub_attributes?: SubAttributes;
	};
	aud: string;
	iss: string;
	iat: number;
	exp: number;
	amr: string[];
	acr?: string;
	nonce?: string;
}

// ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/5.-requesting-for-userinfo#successful-response
export interface UserDataPayloadV2 {
	person_info: MyInfoComponentsV4.Schemas.Person; // person data nested under person_info wrapper (v5)
	iss: string;
	sub: string;
	aud: string;
	iat: number;
}
