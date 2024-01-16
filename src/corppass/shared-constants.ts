export interface TokenResponse {
	access_token: string;
	refresh_token: string;
	id_token: string;
	token_type: string;
	expires_in: number;
	scope: string;
}

export interface EntityInfo {
	CPEntID: string;
	CPEnt_TYPE: string;
	CPEnt_Status: string;
	CPNonUEN_Country: string;
	CPNonUEN_RegNo: string;
	CPNonUEN_Name: string;
}

export interface AuthInfo {
	Result_Set: {
		ESrvc_Row_Count: number;
		ESrvc_Result: {
			CPESrvcID: string;
			Auth_Result_Set: {
				Row_Count: number;
				Row: {
					CPEntID_SUB: string;
					CPRole: string;
					StartDate: string;
					EndDate: string;
					Parameter?: {
						name: string;
						value: string;
					}[];
				}[];
			};
		}[];
	};
}

export interface TPAccessInfo {
	Result_Set: {
		ESrvc_Row_Count: number,
		ESrvc_Result: {
			CPESrvcID: string,
			Auth_Set: {
				ENT_ROW_COUNT: number,
				TP_Auth: {
					CP_Clnt_ID: string,
					CP_ClntEnt_TYPE: string,
					Auth_Result_Set: {
						Row_Count: number,
						Row: {
							CP_ClntEnt_SUB: string,
							CPRole: string,
							StartDate: string,
							EndDate: string,
							Parameter?: {
								name: string,
								value: string;
							}[],
						}[],
					},
				}[],
			},
		}[],
	};
}

export interface UserInfo {
	CPAccType: string;
	CPUID_FullName: string;
	ISSPHOLDER: string;
}
