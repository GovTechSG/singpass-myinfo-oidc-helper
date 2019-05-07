/**
 * Generated from OpenAPI specs: https://public.cloud.myinfo.gov.sg/myinfo/tuo/myinfo-tuo-specs.html
 * Converted into typings with: https://www.npmjs.com/package/dtsgenerator

 */
declare namespace Components {
	namespace Schemas {
		/**
		 * Address details (Singapore Format)
		 */
		export interface AddressSG {
			/**
			 * Type of Address (SG or Unformatted for non SG)
			 */
			type?: "SG";
			/**
			 * Block of Address
			 */
			block?: {
				/**
				 * example:
				 * 548
				 */
				value?: string;
			};
			/**
			 * Building of Address
			 */
			building?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Floor of Address
			 */
			floor?: {
				/**
				 * example:
				 * 09
				 */
				value?: string;
			};
			/**
			 * Unit of Address
			 */
			unit?: {
				/**
				 * example:
				 * 128
				 */
				value?: string;
			};
			/**
			 * Street of Address
			 */
			street?: {
				/**
				 * example:
				 * BEDOK NORTH AVENUE 1
				 */
				value?: string;
			};
			/**
			 * Postal Code of Address
			 */
			postal?: {
				/**
				 * example:
				 * 460548
				 */
				value?: string;
			};
			/**
			 * Country of Address. For AddressSG this will always be "SG".
			 */
			country?: {
				code?: string;
				desc?: string;
			};
		}
		/**
		 * Address details (Non-Singapore Format)
		 */
		export interface AddressUnformatted {
			/**
			 * Type of Address (SG or Unformatted for non SG)
			 */
			type?: "Unformatted";
			/**
			 * Unregistered Foreign address line 1
			 */
			line1?: {
				/**
				 * example:
				 * 4578 SMITHFIELD AVENUE
				 */
				value?: string;
			};
			/**
			 * Unregistered Foreign address line 2
			 */
			line2?: {
				/**
				 * example:
				 * HARTFORD CT 06120
				 */
				value?: string;
			};
		}
		/**
		 * Alias
		 * Alias name of the Person.
		 *
		 * *Presentation Logic - If there is a value to `aliasname` (i.e. not empty), then `aliasname` should be displayed in a new line below `hanyupinyinname`, and prefixed with the ''@'' symbol i.e. "@`aliasname`".'*
		 */
		export interface Aliasname {
			/**
			 * value of the field.
			 * example:
			 * TRICIA TAN XIAO HUI
			 */
			value?: string;
		}
		/**
		 * Authentication Token Response JSON
		 */
		export interface AuthTokenResponse {
			/**
			 * Type of token (Bearer)
			 */
			token_type?: string;
			/**
			 * Id token of the person who logged in. This is in the form of  JWT (JSON web token).
			 *
			 * **Note:** This is not used.
			 */
			id_token?: string;
			/**
			 * JWTAccessToken
			 * Access token to be used in the subsequent 'person' endpoint call. This is in the form of  JWT (JSON web token). Include this in your header as 'Bearer' when invoking the 'person' API. This JWT complies to the standard 'JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants' (https://tools.ietf.org/html/rfc7523).
			 *
			 * **Note:** This token is returned in the form of a compact serialized string. Decode and verify the signature before use.
			 */
			access_token?: {
				/**
				 * Name of Token. This will be 'access_token'.
				 */
				tokenName?: string;
				/**
				 * (subject) This is the 'uinfin' of the user who logged in.
				 */
				sub?: string;
				/**
				 * Scopes allowed. This is the list attributes user consented to share.
				 */
				scope?: string[];
				/**
				 * (not before) - the time before which the token MUST NOT be accepted for processing
				 */
				nbf?: string;
				/**
				 * (issuer) Issuer of the JWT.
				 */
				iss?: string;
				/**
				 * The remaining lifetime of the access token.
				 */
				expires_in?: string;
				/**
				 * (issued at) Time which JWT was issued at.
				 */
				iat?: string;
				/**
				 * (expiration time) time which JWT will expire
				 */
				exp?: string;
				/**
				 * Realm for OAuth process. Default "/myinfo"
				 */
				realm?: string;
				/**
				 * Audience for JWT. Default "myinfo".
				 */
				aud?: string;
				/**
				 * (JWT ID) unique identifier for the JWT token.
				 */
				jti?: string;
				/**
				 * type of token, which is "Bearer".
				 */
				token_type?: string;
				/**
				 * Internal system id for auth grant. Not used.
				 */
				authGrantId?: string;
				/**
				 * Internal Id for audit tracking. not used.
				 */
				auditTrackingId?: string;
			};
		}
		/**
		 * BillAdd
		 * Billing Address of Person
		 *
		 * **Note:**
		 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
		 * - check the `type` discriminator property to differentiate between the two address formats
		 *
		 */
		export interface Billadd {
		}
		/**
		 * BirthCountry
		 * Country of Birth of Person.
		 *
		 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
		 */
		export interface Birthcountry {
			/**
			 *
			 * example:
			 * SG
			 */
			code?: string; // [a-zA-Z]{2}
			/**
			 *
			 * example:
			 * SINGAPORE
			 */
			desc?: string;
		}
		/**
		 * example:
		 * [object Object]
		 */
		export interface Childrenbirthrecords {
			/**
			 * Birth certificate number of child.
			 */
			birthcertno?: {
				/**
				 * example:
				 * S5562882C
				 */
				value?: string;
			};
			/**
			 * Full Name of child
			 */
			name?: {
				/**
				 * example:
				 * Jo Tan Pei Ni
				 */
				value?: string;
			};
			/**
			 * Han Yu Pin Yin name of child.
			 *
			 * *Presentation Logic - If there is a value to `hanyupinyinname` (i.e. not empty), then `hanyupinyinname` should be displayed in a new line below `name`, and formatted with round brackets i.e. \"(`hanyupinyinname`)\".*
			 */
			hanyupinyinname?: {
				/**
				 * example:
				 * Cheng Pei Ni
				 */
				value?: string;
			};
			/**
			 * Alias name of child.
			 *
			 * *Presentation Logic - If there is a value to `aliasname` (i.e. not empty), then `aliasname` should be displayed in a new line below `hanyupinyinname`, and prefixed with the ''@'' symbol i.e. \"@`aliasname`\".*
			 */
			aliasname?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Han Yu Pin Yin Alias name of child.
			 *
			 * *Presentation Logic - If there is a value to `hanyupinyinaliasname` (i.e. not empty), then `hanyupinyinaliasname` should be displayed in a new line below `aliasname`, and prefixed with the ''@'' symbol i.e. \"@`hanyupinyinaliasname`\".*
			 */
			hanyupinyinaliasname?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Married name of child.
			 *
			 * *Presentation Logic - If there is a value to `marriedname` (i.e. not empty), then `marriedname` should be displayed in a new line below `hanyupinyinaliasname`.*
			 */
			marriedname?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Sex of child. Possible values:
			 *
			 * * 'F' - Female
			 * * 'M' - Male
			 * * 'U' - Unknown
			 */
			sex?: {
				/**
				 * example:
				 * F
				 */
				code?: "F" | "M" | "U";
				/**
				 * example:
				 * Female
				 */
				desc?: "Female" | "Male" | "Unknown";
			};
			/**
			 * Race of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 *
			 */
			race?: {
				/**
				 * example:
				 * CN
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * CHINESE
				 */
				desc?: string;
			};
			/**
			 * Secondary Race of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 */
			secondaryrace?: {
				/**
				 * example:
				 *
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 *
				 */
				desc?: string;
			};
			/**
			 * Dialect of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 */
			dialect?: {
				/**
				 * example:
				 * HK
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * HOKKIEN
				 */
				desc?: string;
			};
			/**
			 * Life Status of child. Possible values:
			 *
			 * * A - ALIVE
			 * * D - DECEASED
			 */
			lifestatus?: {
				/**
				 * example:
				 * A
				 */
				code?: "A" | "D";
				/**
				 * example:
				 * DECEASED
				 */
				desc?: "ALIVE" | "DECEASED";
			};
			/**
			 * Date of Birth of child.
			 *
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			dob?: {
				/**
				 * example:
				 * 2011-09-10
				 */
				value?: string; // date
			};
			/**
			 * Time of Birth of child.
			 *
			 * Format: HHMM
			 */
			tob?: {
				/**
				 * example:
				 * 0901
				 */
				value?: string;
			};
			/**
			 * Data classification of data field. Default 'C' - Confidential.
			 */
			classification: "C";
			/**
			 * Source of data.
			 *
			 * * '1' - Government-verified
			 * * '2' - User provided
			 * * '3' - Field is Not Applicable to Person
			 * * '4' - Verified by SingPass
			 *
			 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
			 */
			source: "1" | "2" | "3" | "4";
			/**
			 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			lastupdated: string; // date
			/**
			 * Optional flag to indicate if data is unavalable from data source.
			 *
			 * **NOTE:**
			 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
			 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
			 *   - If data is available from the data source, this property will not be present.
			 *
			 */
			unavailable?: boolean;
		}
		/**
		 * CountryOfMarriage
		 * Country of the latest marriage.
		 *
		 *
		 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
		 */
		export interface Countryofmarriage {
			/**
			 * example:
			 * SG
			 */
			code?: string;
			/**
			 * example:
			 * SINGAPORE
			 */
			desc?: string;
		}
		/**
		 * CPFBalances
		 * CPF Balances of Person in SGD.
		 *
		 * 'ra' will not appear in the results if user does not have a Retirement Account.
		 */
		export interface Cpfbalances {
			/**
			 * Amount Balance in CPF-MA
			 */
			ma?: {
				/**
				 * example:
				 * 11470.71
				 */
				value?: number; // double
			};
			/**
			 * Amount Balance in CPF-OA
			 */
			oa?: {
				/**
				 * example:
				 * 1581.48
				 */
				value?: number; // double
			};
			/**
			 * Amount Balance in CPF-SA
			 */
			sa?: {
				/**
				 * example:
				 * 21967.09
				 */
				value?: number; // double
			};
			/**
			 * Amount Balance in CPF-RA
			 */
			ra?: {
				/**
				 * example:
				 * 0.01
				 */
				value?: number; // double
			};
		}
		/**
		 * CPFContributions
		 * Employer CPF Contributions of Person in SGD. Does not include any non-employer contributions.
		 * Maximum past 14 months' of contributions.
		 *
		 */
		export interface Cpfcontributions {
			/**
			 * example:
			 * [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
			 */
			history?: Array<{
				/**
				 * Employer who paid the Contribution.
				 */
				employer?: {
					/**
					 * example:
					 * Crystal Horse Invest Pte Ltd
					 */
					value?: string;
				};
				/**
				 * Date of Contribution Paid. See "full-date" in http://xml2rfc.ietf.org/public/rfc/htm
				 */
				date?: {
					/**
					 * example:
					 * 2017-03-01
					 */
					value?: string; // date
				};
				/**
				 * Month for which CPF Contribution was paid. Format: YYYY-MM
				 */
				month?: {
					/**
					 * example:
					 * 2017-02
					 */
					value?: string;
				};
				/**
				 * Amount of contribution in SGD
				 */
				amount?: {
					/**
					 * example:
					 * 500
					 */
					value?: number; // double
				};
			}>;
		}
		/**
		 * example:
		 * [object Object]
		 */
		export interface DataFieldProperties {
			/**
			 * Data classification of data field. Default 'C' - Confidential.
			 */
			classification: "C";
			/**
			 * Source of data.
			 *
			 * * '1' - Government-verified
			 * * '2' - User provided
			 * * '3' - Field is Not Applicable to Person
			 * * '4' - Verified by SingPass
			 *
			 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
			 */
			source: "1" | "2" | "3" | "4";
			/**
			 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			lastupdated: string; // date
			/**
			 * Optional flag to indicate if data is unavalable from data source.
			 *
			 * **NOTE:**
			 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
			 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
			 *   - If data is available from the data source, this property will not be present.
			 *
			 */
			unavailable?: boolean;
		}
		/**
		 * Address details (Singapore Format)
		 * example:
		 * [object Object]
		 */
		export interface DataitemAddressSg {
			/**
			 * Type of Address (SG or Unformatted for non SG)
			 */
			type?: "SG";
			/**
			 * Block of Address
			 */
			block?: {
				/**
				 * example:
				 * 548
				 */
				value?: string;
			};
			/**
			 * Building of Address
			 */
			building?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Floor of Address
			 */
			floor?: {
				/**
				 * example:
				 * 09
				 */
				value?: string;
			};
			/**
			 * Unit of Address
			 */
			unit?: {
				/**
				 * example:
				 * 128
				 */
				value?: string;
			};
			/**
			 * Street of Address
			 */
			street?: {
				/**
				 * example:
				 * BEDOK NORTH AVENUE 1
				 */
				value?: string;
			};
			/**
			 * Postal Code of Address
			 */
			postal?: {
				/**
				 * example:
				 * 460548
				 */
				value?: string;
			};
			/**
			 * Country of Address. For AddressSG this will always be "SG".
			 */
			country?: {
				code?: string;
				desc?: string;
			};
			/**
			 * Data classification of data field. Default 'C' - Confidential.
			 */
			classification: "C";
			/**
			 * Source of data.
			 *
			 * * '1' - Government-verified
			 * * '2' - User provided
			 * * '3' - Field is Not Applicable to Person
			 * * '4' - Verified by SingPass
			 *
			 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
			 */
			source: "1" | "2" | "3" | "4";
			/**
			 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			lastupdated: string; // date
			/**
			 * Optional flag to indicate if data is unavalable from data source.
			 *
			 * **NOTE:**
			 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
			 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
			 *   - If data is available from the data source, this property will not be present.
			 *
			 */
			unavailable?: boolean;
		}
		/**
		 * Address details (Non-Singapore Format)
		 * example:
		 * [object Object]
		 */
		export interface DataitemAddressUnformatted {
			/**
			 * Type of Address (SG or Unformatted for non SG)
			 */
			type?: "Unformatted";
			/**
			 * Unregistered Foreign address line 1
			 */
			line1?: {
				/**
				 * example:
				 * 4578 SMITHFIELD AVENUE
				 */
				value?: string;
			};
			/**
			 * Unregistered Foreign address line 2
			 */
			line2?: {
				/**
				 * example:
				 * HARTFORD CT 06120
				 */
				value?: string;
			};
			/**
			 * Data classification of data field. Default 'C' - Confidential.
			 */
			classification: "C";
			/**
			 * Source of data.
			 *
			 * * '1' - Government-verified
			 * * '2' - User provided
			 * * '3' - Field is Not Applicable to Person
			 * * '4' - Verified by SingPass
			 *
			 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
			 */
			source: "1" | "2" | "3" | "4";
			/**
			 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			lastupdated: string; // date
			/**
			 * Optional flag to indicate if data is unavalable from data source.
			 *
			 * **NOTE:**
			 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
			 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
			 *   - If data is available from the data source, this property will not be present.
			 *
			 */
			unavailable?: boolean;
		}
		/**
		 * Dialect
		 * Dialect of Person.
		 *
		 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
		 */
		export interface Dialect {
			/**
			 *
			 * example:
			 * SG
			 */
			code?: string; // [a-zA-Z]{2}
			/**
			 *
			 * example:
			 * SWISS GERMAN
			 */
			desc?: string;
		}
		/**
		 * DivorceDate
		 * Last Divorce Date of Person.
		 *
		 *
		 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
		 *
		 */
		export interface Divorcedate {
			/**
			 * Value of data field.
			 *
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 * example:
			 *
			 */
			value?: string; // date
		}
		/**
		 * DOB
		 * Date of Birth of Person.
		 */
		export interface Dob {
			/**
			 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 * example:
			 * 1958-05-17
			 */
			value?: string; // date
		}
		/**
		 * Driving Licence details of Person.
		 *
		 */
		export interface Drivinglicence {
			/**
			 * Status of Certificate of Merit. Possible values:
			 *
			 * * Y - Eligible
			 * * N - Not Eligible
			 */
			comstatus?: {
				/**
				 * example:
				 * Y
				 */
				code?: "Y" | "N";
				/**
				 *
				 * example:
				 * Eligible
				 */
				desc?: "Eligible" | "Not Eligible";
			};
			/**
			 * Total Demerit Points
			 */
			totaldemeritpoints?: {
				/**
				 * example:
				 * 0
				 */
				value?: number;
			};
			/**
			 *
			 */
			suspension?: {
				/**
				 * Suspension Start Date
				 */
				startdate?: {
					/**
					 * example:
					 *
					 */
					value?: string; // date
				};
				/**
				 * Suspension End Date
				 */
				enddate?: {
					/**
					 * example:
					 *
					 */
					value?: string; // date
				};
			};
			/**
			 *
			 */
			disqualification?: {
				/**
				 * Disqualification Start Date
				 */
				startdate?: {
					/**
					 * example:
					 *
					 */
					value?: string; // date
				};
				/**
				 * Disqualification End Date
				 */
				enddate?: {
					/**
					 * example:
					 *
					 */
					value?: string; // date
				};
			};
			/**
			 *
			 */
			revocation?: {
				/**
				 * Revocation Start Date
				 */
				startdate?: {
					/**
					 * example:
					 *
					 */
					value?: string; // date
				};
				/**
				 * Revocation End Date
				 */
				enddate?: {
					/**
					 * example:
					 *
					 */
					value?: string; // date
				};
			};
			/**
			 * Provisional Driving Licence (PDL)
			 */
			pdl?: {
				/**
				 * Validity of PDL. Possible values:
				 *
				 * * V - Valid
				 * * E - Expired
				 * * I - Invalid
				 * * N - Not Holding PDL
				 */
				validity?: {
					/**
					 * example:
					 * V
					 */
					code?: "V" | "E" | "I" | "N";
					/**
					 *
					 * example:
					 * Valid
					 */
					desc?: "Valid" | "Expired" | "Invalid" | "Not Holding PDL";
				};
				/**
				 * PDL Expiry Date
				 */
				expirydate?: {
					/**
					 * example:
					 * 2020-06-15
					 */
					value?: string; // date
				};
				/**
				 * PDL Classes
				 * example:
				 * [object Object],[object Object]
				 */
				classes?: Array<{
					class?: {
						value?: string;
					};
				}>;
			};
			/**
			 * Qualified Driving Licence (QDL)
			 */
			qdl?: {
				/**
				 * Validity of QDL. Possible values:
				 *
				 * * V - Valid
				 * * E - Expired
				 * * I - Invalid
				 * * N - Not Holding QDL
				 */
				validity?: {
					/**
					 * example:
					 * V
					 */
					code?: "V" | "E" | "I" | "N";
					/**
					 *
					 * example:
					 * validation
					 */
					desc?: "Valid" | "Expired" | "Invalid" | "Not Holding QDL";
				};
				/**
				 * QDL Expiry Date
				 */
				expirydate?: {
					/**
					 * example:
					 * 2020-06-15
					 */
					value?: string; // date
				};
				/**
				 * QDL Classes. Includes Issue Date (e.g. 2B, 2018-01-01)
				 * example:
				 * [object Object],[object Object]
				 */
				classes?: Array<{
					class?: {
						value?: string;
					};
					issuedate?: {
						value?: string; // date
					};
				}>;
			};
			/**
			 * Serial Number of the Photo Card
			 */
			photocardserialno?: {
				/**
				 * example:
				 * 115616
				 */
				value?: string;
			};
		}
		/**
		 * EduLevel
		 * Highest Education Level of Person.
		 *
		 * * '0' - NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY
		 * * '1' - PRIMARY
		 * * '2' - LOWER SECONDARY
		 * * '3' - SECONDARY
		 * * '4' - POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION
		 * * '5' - POLYTECHNIC DIPLOMA
		 * * '6' - PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA
		 * * '7' - BACHELOR'S OR EQUIVALENT
		 * * '8' - POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)
		 * * '9' - MASTER'S AND DOCTORATE OR EQUIVALENT
		 * * 'N' - MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)
		 */
		export interface Edulevel {
			/**
			 * example:
			 * 7
			 */
			code?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "N";
			/**
			 * example:
			 * BACHELOR'S OR EQUIVALENT
			 */
			desc?: "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY" | "PRIMARY" | "LOWER SECONDARY" | "SECONDARY" | "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION" | "POLYTECHNIC DIPLOMA" | "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA" | "BACHELOR'S OR EQUIVALENT" | "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)" | "MASTER'S AND DOCTORATE OR EQUIVALENT" | "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)";
		}
		/**
		 * Email
		 * Email Address of Person.
		 */
		export interface Email {
			/**
			 * Value of data field.
			 * example:
			 * test@gmail.com
			 */
			value?: string;
		}
		/**
		 * Employment
		 * Name of Employer.
		 */
		export interface Employment {
			/**
			 * example:
			 * ALPHA
			 */
			value?: string;
		}
		/**
		 * EmploymentSector
		 * Employment Sector of a FIN holder.
		 *
		 * **Note:** Only applies to a foreigner with a valid work pass.
		 *
		 * * Construction
		 * * Manufacturing
		 * * Marine Shipyard
		 * * Process
		 * * Services
		 */
		export interface Employmentsector {
			/**
			 * example:
			 * Manufacturing
			 */
			value?: "Construction" | "Manufacturing" | "Marine Shipyard" | "Process" | "Services";
		}
		export interface Error {
			code?: number;
			message?: string;
		}
		/**
		 * GradYear
		 * Year of Graduation of Person. Format: YYYY
		 */
		export interface Gradyear {
			/**
			 * example:
			 * 2006
			 */
			value?: string; // [0-9]{4}
		}
		/**
		 * HDBOwnership
		 * HDB Ownership details
		 *
		 * **TODO: is this tied to the registered address or the person (UINFIN) or both?**
		 *
		 */
		export interface HDBOwnership {
			/**
			 * Number of Owners. Note that this does not include executors, administrators or trustees.
			 */
			noofowners?: {
				/**
				 * example:
				 * 2
				 */
				value?: number;
			};
			/**
			 * Address details (Singapore Format)
			 */
			address?: {
				/**
				 * Type of Address (SG or Unformatted for non SG)
				 */
				type?: "SG" | "Unformatted";
				/**
				 * Block of Address
				 */
				block?: {
					/**
					 * example:
					 * 548
					 */
					value?: string;
				};
				/**
				 * Building of Address
				 */
				building?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Floor of Address
				 */
				floor?: {
					/**
					 * example:
					 * 09
					 */
					value?: string;
				};
				/**
				 * Unit of Address
				 */
				unit?: {
					/**
					 * example:
					 * 128
					 */
					value?: string;
				};
				/**
				 * Street of Address
				 */
				street?: {
					/**
					 * example:
					 * BEDOK NORTH AVENUE 1
					 */
					value?: string;
				};
				/**
				 * Postal Code of Address
				 */
				postal?: {
					/**
					 * example:
					 * 460548
					 */
					value?: string;
				};
				/**
				 * Country of Address. For AddressSG this will always be "SG".
				 */
				country?: {
					code?: string;
					desc?: string;
				};
			};
			/**
			 * HDBType
			 * Flat Type of the HDB flat.
			 *
			 * **Note:** that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat, Executive Condominium and Shophouse.
			 *
			 * * '111' - 1-ROOM FLAT (HDB)
			 * * '112' - 2-ROOM FLAT (HDB)
			 * * '113' - 3-ROOM FLAT (HDB)
			 * * '114' - 4-ROOM FLAT (HDB)
			 * * '115' - 5-ROOM FLAT (HDB)
			 * * '116' - EXECUTIVE FLAT (HDB)
			 * * '118' - STUDIO APARTMENT (HDB)
			 */
			hdbtype?: {
				/**
				 * example:
				 * 112
				 */
				code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
				/**
				 *
				 * example:
				 * 2-ROOM FLAT (HDB)
				 */
				desc?: "1-ROOM FLAT (HDB)" | "2-ROOM FLAT (HDB)" | "3-ROOM FLAT (HDB)" | "4-ROOM FLAT (HDB)" | "5-ROOM FLAT (HDB)" | "EXECUTIVE FLAT (HDB)" | "STUDIO APARTMENT (HDB)";
			};
			/**
			 * Date from which the lease period starts. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			leasecommencementdate?: {
				/**
				 * example:
				 * 2008-06-13
				 */
				value?: string; // date
			};
			/**
			 * Term of lease (in years) for the property computed from the lease commencement date.
			 */
			termoflease?: {
				/**
				 * example:
				 * 99
				 */
				value?: number;
			};
			/**
			 * Effective date of flat purchase. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			dateofpurchase?: {
				/**
				 * example:
				 * 2008-06-13
				 */
				value?: string; // date
			};
			/**
			 * Effective date of partial transfer without monetary consideration (e.g. addition, deletion or substitution of a co-owner) for an HDB sold flat.
			 *
			 * For partial transfer of flat where at least one of the current owner remains in the household, the Date of Purchase remains unchanged while the date of transfer of ownership will be updated.
			 *
			 * For outright transfer where there is a total change of all owner(s), only the Date of Purchase will be updated.
			 *
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
			 */
			dateofownershiptransfer?: {
				/**
				 * example:
				 * 2018-06-13
				 */
				value?: string; // date
			};
			/**
			 * The amount of housing loan granted to owner(s) by HDB in SGD.
			 */
			loangranted?: {
				/**
				 * example:
				 * 310000.01
				 */
				value?: number; // double
			};
			/**
			 * The number of years of loan repaymnet opted by owner(s) at the time the loan is first granted to him/her.
			 */
			originalloanrepayment?: {
				/**
				 * example:
				 * 25
				 */
				value?: number;
			};
			/**
			 * The remaining term of repayment for the loan in the format `years` + `months`.
			 */
			balanceloanrepayment?: {
				years?: {
					/**
					 * example:
					 * 2
					 */
					value?: number;
				};
				months?: {
					/**
					 * example:
					 * 6
					 */
					value?: number;
				};
			};
			/**
			 * The amount of outstanding HDB loan owed by owner(s) in SGD.
			 */
			outstandingloanbalance?: {
				/**
				 * example:
				 * 50000.01
				 */
				value?: number; // double
			};
			/**
			 * The amount of monthly instalment the owner(s) have to pay for his/her loan in SGD.
			 */
			monthlyloaninstalment?: {
				/**
				 * example:
				 * 1000.01
				 */
				value?: number; // double
			};
		}
		/**
		 * HanYuPinYinAlias
		 * Han Yu Pin Yin Alias name of the Person.
		 *
		 * *Presentation Logic - If there is a value to `hanyupinyinaliasname` (i.e. not empty), then `hanyupinyinaliasname` should be displayed in a new line below `aliasname`, and prefixed with the ''@'' symbol i.e. "@`hanyupinyinaliasname`".*
		 */
		export interface Hanyupinyinaliasname {
			/**
			 * example:
			 * TRICIA CHEN XIAO HUI
			 */
			value?: string;
		}
		/**
		 * HanYuPinYin
		 * Han Yu Pin Yin name of the Person.
		 *
		 * *Presentation Logic - If there is a value to `hanyupinyinname` (i.e. not empty), then `hanyupinyinname` should be displayed in a new line below `name`, and formatted with round brackets i.e. "(`hanyupinyinname`)"'*
		 */
		export interface Hanyupinyinname {
			/**
			 * example:
			 * CHEN XIAO HUI
			 */
			value?: string;
		}
		/**
		 * HDBOwnership
		 * HDB Ownership details
		 *
		 * **TODO: is this tied to the registered address or the person (UINFIN) or both?**
		 *
		 */
		export interface Hdbownership {
			/**
			 * Number of Owners. Note that this does not include executors, administrators or trustees.
			 */
			noofowners?: {
				/**
				 * example:
				 * 2
				 */
				value?: number;
			};
			/**
			 * Address details (Singapore Format)
			 */
			address?: {
				/**
				 * Type of Address (SG or Unformatted for non SG)
				 */
				type?: "SG" | "Unformatted";
				/**
				 * Block of Address
				 */
				block?: {
					/**
					 * example:
					 * 548
					 */
					value?: string;
				};
				/**
				 * Building of Address
				 */
				building?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Floor of Address
				 */
				floor?: {
					/**
					 * example:
					 * 09
					 */
					value?: string;
				};
				/**
				 * Unit of Address
				 */
				unit?: {
					/**
					 * example:
					 * 128
					 */
					value?: string;
				};
				/**
				 * Street of Address
				 */
				street?: {
					/**
					 * example:
					 * BEDOK NORTH AVENUE 1
					 */
					value?: string;
				};
				/**
				 * Postal Code of Address
				 */
				postal?: {
					/**
					 * example:
					 * 460548
					 */
					value?: string;
				};
				/**
				 * Country of Address. For AddressSG this will always be "SG".
				 */
				country?: {
					code?: string;
					desc?: string;
				};
			};
			/**
			 * HDBType
			 * Flat Type of the HDB flat.
			 *
			 * **Note:** that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat, Executive Condominium and Shophouse.
			 *
			 * * '111' - 1-ROOM FLAT (HDB)
			 * * '112' - 2-ROOM FLAT (HDB)
			 * * '113' - 3-ROOM FLAT (HDB)
			 * * '114' - 4-ROOM FLAT (HDB)
			 * * '115' - 5-ROOM FLAT (HDB)
			 * * '116' - EXECUTIVE FLAT (HDB)
			 * * '118' - STUDIO APARTMENT (HDB)
			 */
			hdbtype?: {
				/**
				 * example:
				 * 112
				 */
				code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
				/**
				 *
				 * example:
				 * 2-ROOM FLAT (HDB)
				 */
				desc?: "1-ROOM FLAT (HDB)" | "2-ROOM FLAT (HDB)" | "3-ROOM FLAT (HDB)" | "4-ROOM FLAT (HDB)" | "5-ROOM FLAT (HDB)" | "EXECUTIVE FLAT (HDB)" | "STUDIO APARTMENT (HDB)";
			};
			/**
			 * Date from which the lease period starts. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			leasecommencementdate?: {
				/**
				 * example:
				 * 2008-06-13
				 */
				value?: string; // date
			};
			/**
			 * Term of lease (in years) for the property computed from the lease commencement date.
			 */
			termoflease?: {
				/**
				 * example:
				 * 99
				 */
				value?: number;
			};
			/**
			 * Effective date of flat purchase. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			dateofpurchase?: {
				/**
				 * example:
				 * 2008-06-13
				 */
				value?: string; // date
			};
			/**
			 * Effective date of partial transfer without monetary consideration (e.g. addition, deletion or substitution of a co-owner) for an HDB sold flat.
			 *
			 * For partial transfer of flat where at least one of the current owner remains in the household, the Date of Purchase remains unchanged while the date of transfer of ownership will be updated.
			 *
			 * For outright transfer where there is a total change of all owner(s), only the Date of Purchase will be updated.
			 *
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
			 */
			dateofownershiptransfer?: {
				/**
				 * example:
				 * 2018-06-13
				 */
				value?: string; // date
			};
			/**
			 * The amount of housing loan granted to owner(s) by HDB in SGD.
			 */
			loangranted?: {
				/**
				 * example:
				 * 310000.01
				 */
				value?: number; // double
			};
			/**
			 * The number of years of loan repaymnet opted by owner(s) at the time the loan is first granted to him/her.
			 */
			originalloanrepayment?: {
				/**
				 * example:
				 * 25
				 */
				value?: number;
			};
			/**
			 * The remaining term of repayment for the loan in the format `years` + `months`.
			 */
			balanceloanrepayment?: {
				years?: {
					/**
					 * example:
					 * 2
					 */
					value?: number;
				};
				months?: {
					/**
					 * example:
					 * 6
					 */
					value?: number;
				};
			};
			/**
			 * The amount of outstanding HDB loan owed by owner(s) in SGD.
			 */
			outstandingloanbalance?: {
				/**
				 * example:
				 * 50000.01
				 */
				value?: number; // double
			};
			/**
			 * The amount of monthly instalment the owner(s) have to pay for his/her loan in SGD.
			 */
			monthlyloaninstalment?: {
				/**
				 * example:
				 * 1000.01
				 */
				value?: number; // double
			};
		}
		/**
		 * HDBType
		 * Flat Type of the HDB flat.
		 *
		 * **Note:** that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat, Executive Condominium and Shophouse.
		 *
		 * * '111' - 1-ROOM FLAT (HDB)
		 * * '112' - 2-ROOM FLAT (HDB)
		 * * '113' - 3-ROOM FLAT (HDB)
		 * * '114' - 4-ROOM FLAT (HDB)
		 * * '115' - 5-ROOM FLAT (HDB)
		 * * '116' - EXECUTIVE FLAT (HDB)
		 * * '118' - STUDIO APARTMENT (HDB)
		 */
		export interface Hdbtype {
			/**
			 * example:
			 * 112
			 */
			code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
			/**
			 *
			 * example:
			 * 2-ROOM FLAT (HDB)
			 */
			desc?: "1-ROOM FLAT (HDB)" | "2-ROOM FLAT (HDB)" | "3-ROOM FLAT (HDB)" | "4-ROOM FLAT (HDB)" | "5-ROOM FLAT (HDB)" | "EXECUTIVE FLAT (HDB)" | "STUDIO APARTMENT (HDB)";
		}
		/**
		 * HomeNo
		 * Home Contact Number of Person.
		 */
		export interface Homeno {
			/**
			 * Prefix of Phone Number. Defaults to '+'. If phone number is blank, prefix will be returned as blank.
			 */
			prefix?: {
				/**
				 * example:
				 * +
				 */
				value?: string;
			};
			/**
			 * Area Code of Phone Number. Default to '065'. If phone number is blank, code will be returned as blank.
			 */
			areacode?: {
				/**
				 * example:
				 * 65
				 */
				value?: string;
			};
			/**
			 * Phone Number.
			 */
			nbr?: {
				/**
				 * example:
				 * 66132665
				 */
				value?: string;
			};
		}
		/**
		 * HouseholdIncome
		 * Household Income of Person in SGD.
		 */
		export interface Householdincome {
			/**
			 * upper bound of the range of household income bracket
			 */
			high?: {
				/**
				 * example:
				 * 5999
				 */
				value?: number;
			};
			/**
			 * lower bound of the range of household income bracket
			 */
			low?: {
				/**
				 * example:
				 * 5000
				 */
				value?: number;
			};
		}
		/**
		 * HousingType
		 * Housing Type of Person (non-HDB only).
		 *
		 * **Note:** This value will be null if housing type is HDB;
		 *
		 * Refer to `hdbtype` for detailed HDB type.
		 *
		 * * '121' - DETACHED HOUSE
		 * * '122' - SEMI-DETACHED HOUSE
		 * * '123' - TERRACE HOUSE
		 * * '131' - CONDOMINIUM
		 * * '132' - EXECUTIVE CONDOMINIUM
		 * * '139' - APARTMENT
		 */
		export interface Housingtype {
			/**
			 * example:
			 * 123
			 */
			code?: "121" | "122" | "123" | "131" | "132" | "139";
			/**
			 *
			 * example:
			 * TERRACE HOUSE
			 */
			desc?: "DETACHED HOUSE" | "SEMI-DETACHED HOUSE" | "TERRACE HOUSE" | "CONDOMINIUM" | "EXECUTIVE CONDOMINIUM" | "APARTMENT";
		}
		/**
		 * JWTAccessToken
		 * Access token to be used in the subsequent 'person' endpoint call. This is in the form of  JWT (JSON web token). Include this in your header as 'Bearer' when invoking the 'person' API. This JWT complies to the standard 'JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants' (https://tools.ietf.org/html/rfc7523).
		 *
		 * **Note:** This token is returned in the form of a compact serialized string. Decode and verify the signature before use.
		 */
		export interface JWTAccessToken {
			/**
			 * Name of Token. This will be 'access_token'.
			 */
			tokenName?: string;
			/**
			 * (subject) This is the 'uinfin' of the user who logged in.
			 */
			sub?: string;
			/**
			 * Scopes allowed. This is the list attributes user consented to share.
			 */
			scope?: string[];
			/**
			 * (not before) - the time before which the token MUST NOT be accepted for processing
			 */
			nbf?: string;
			/**
			 * (issuer) Issuer of the JWT.
			 */
			iss?: string;
			/**
			 * The remaining lifetime of the access token.
			 */
			expires_in?: string;
			/**
			 * (issued at) Time which JWT was issued at.
			 */
			iat?: string;
			/**
			 * (expiration time) time which JWT will expire
			 */
			exp?: string;
			/**
			 * Realm for OAuth process. Default "/myinfo"
			 */
			realm?: string;
			/**
			 * Audience for JWT. Default "myinfo".
			 */
			aud?: string;
			/**
			 * (JWT ID) unique identifier for the JWT token.
			 */
			jti?: string;
			/**
			 * type of token, which is "Bearer".
			 */
			token_type?: string;
			/**
			 * Internal system id for auth grant. Not used.
			 */
			authGrantId?: string;
			/**
			 * Internal Id for audit tracking. not used.
			 */
			auditTrackingId?: string;
		}
		/**
		 * MailAdd
		 * Mailing Address of Person
		 *
		 * **Note:**
		 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
		 * - check the `type` discriminator property to differentiate between the two address formats
		 *
		 */
		export interface Mailadd {
		}
		/**
		 * Marital
		 * Marital Status of Person.
		 *
		 * * '1' - SINGLE
		 * * '2' - MARRIED
		 * * '3' - WIDOWED
		 * * '5' - DIVORCED
		 *
		 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
		 */
		export interface Marital {
			/**
			 * example:
			 * 2
			 */
			code?: "1" | "2" | "3" | "5";
			/**
			 * example:
			 * MARRIED
			 */
			desc?: "SINGLE" | "MARRIED" | "WIDOWED" | "DIVORCED";
		}
		/**
		 * MarriageCertNo
		 * Certificate number of the latest marriage.
		 *
		 *
		 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
		 */
		export interface Marriagecertno {
			/**
			 * Value of data field.
			 * example:
			 * 123456789012345
			 */
			value?: string;
		}
		/**
		 * MarriageDate
		 * Latest Marriage Date of Person.
		 *
		 *
		 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
		 *
		 */
		export interface Marriagedate {
			/**
			 * Value of data field.
			 *
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 * example:
			 * 2007-01-01
			 */
			value?: string; // date
		}
		/**
		 * MarriedName
		 * Married name of the Person.
		 *
		 * *Presentation Logic - If there is a value to `marriedname` (i.e. not empty), then `marriedname` should be displayed in a new line below `hanyupinyinaliasname`.*
		 */
		export interface Marriedname {
			/**
			 * value of the field, should be displayed as it is.
			 * example:
			 *
			 */
			value?: string;
		}
		/**
		 * MobileNo
		 * Mobile Number of Person.
		 */
		export interface Mobileno {
			/**
			 * Prefix of Phone Number. Defaults to '+'. If phone number is blank, prefix will be returned as blank.
			 */
			prefix?: {
				/**
				 * example:
				 * +
				 */
				value?: string;
			};
			/**
			 * Area Code of Phone Number. Default to '065'. If phone number is blank, code will be returned as blank.
			 */
			areacode?: {
				/**
				 * example:
				 * 65
				 */
				value?: string;
			};
			/**
			 * Phone Number.
			 */
			nbr?: {
				/**
				 * example:
				 * 66132665
				 */
				value?: string;
			};
		}
		export interface NOA {
			/**
			 * Assessable Income
			 */
			amount?: {
				/**
				 * example:
				 * 100000.01
				 */
				value?: number; // double
			};
			/**
			 * value of data field
			 */
			yearofassessment?: {
				/**
				 * example:
				 * 2018
				 */
				value?: string; // [0-9]{4}
			};
			/**
			 * Assessable Income from employment
			 */
			employment?: {
				/**
				 * example:
				 * 100000.01
				 */
				value?: number; // double
			};
			/**
			 * Assessable Income from trade
			 */
			trade?: {
				/**
				 * example:
				 * 0
				 */
				value?: number; // double
			};
			/**
			 * Assessable Income from rent
			 */
			rent?: {
				/**
				 * example:
				 * 0
				 */
				value?: number; // double
			};
			/**
			 * Assessable Income from interest
			 */
			interest?: {
				/**
				 * example:
				 * 0
				 */
				value?: number; // double
			};
			/**
			 * Tax Clearance indicator. This means that tax clearance has been sought by the employer for this NOA assessment. For more information, please refer to [this](https://www.iras.gov.sg/irashome/Businesses/Employers/Tax-Clearance-for-Foreign-SPR-Employees/Getting-Tax-Clearance--A-Step-by-Step-Guide/)
			 */
			taxclearance?: {
				/**
				 * example:
				 * N
				 */
				value?: "Y" | "N";
			};
			/**
			 * Type of 'Notice of Assessment' (NOA)
			 */
			category?: {
				/**
				 * example:
				 * ORIGINAL
				 */
				value?: "ADDITIONAL" | "AMENDED" | "ORIGINAL" | "REPAYMENT";
			};
		}
		export interface NOABasic {
			/**
			 * Assessable Income
			 */
			amount?: {
				/**
				 * example:
				 * 100000.01
				 */
				value?: number; // double
			};
			/**
			 * The second latest annual assessable income available from IRAS within the past 3 years.
			 */
			yearofassessment?: {
				/**
				 * example:
				 * 2018
				 */
				value?: string; // [0-9]{4}
			};
		}
		/**
		 * Name
		 * Full Name of the Person.
		 */
		export interface Name {
			/**
			 * value of the field, should be displayed as it is.
			 * example:
			 * TAN XIAO HUI
			 */
			value?: string;
		}
		/**
		 * Nationality
		 * Nationality of Person.
		 *
		 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
		 */
		export interface Nationality {
			/**
			 *
			 * example:
			 * SG
			 */
			code?: string; // [a-zA-Z]{2}
			/**
			 *
			 * example:
			 * SINGAPORE CITIZEN
			 */
			desc?: string;
		}
		/**
		 * History of Notice Of Assessment
		 * Detailed breakdown of latest 2 Notice of Assessments within the past three years.
		 */
		export interface Noahistory {
			noas?: NOA[];
		}
		/**
		 * History of Notice Of Assessment (Basic)
		 * Summary of latest 2 Notice of Assessments within the past three years.
		 */
		export interface NoahistoryBasic {
			noas?: NOABasic[];
		}
		/**
		 * Occupation
		 * Occupation of Person.
		 */
		export interface Occupation {
			/**
			 * Code of occupation based on SSOC 2015.
			 *
			 * For full list, refer to SSOC 2015 at https://www.singstat.gov.sg/standards/standards-and-classifications/ssoc.
			 *
			 * For FIN holders, blank will be returned.
			 *
			 * **Note:** Code+Desc and Value are mutually exclusive.
			 * example:
			 * 53201
			 */
			code?: string; // [0-9]{5}
			/**
			 * Description of occupation corresponding to code.
			 *
			 * **Note:** Code+Desc and Value are mutually exclusive.
			 * example:
			 * HEALTHCARE ASSISTANT
			 */
			desc?: string;
			/**
			 * Free text cccupation entered by user
			 * **Note:** Code+Desc and Value are mutually exclusive.
			 * example:
			 *
			 */
			value?: string;
		}
		/**
		 * OwnerPrivate
		 * Ownership of Private Property Status of Person (based on IRAS information).
		 *
		 * * true
		 * * false
		 * * null (data not available)
		 */
		export interface Ownerprivate {
			/**
			 * Value of data field.
			 * example:
			 * false
			 */
			value?: boolean;
		}
		/**
		 * PassExpiryDate
		 * Pass expiry of a foreigner. <br/>**Note:** Only applies to a foreigner with a valid pass.
		 */
		export interface Passexpirydate {
			/**
			 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 * example:
			 * 2022-12-31
			 */
			value?: string; // date
		}
		/**
		 * PassportExpiryDate
		 * Passport Expiry Date of Person.
		 */
		export interface Passportexpirydate {
			/**
			 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 * example:
			 * 2020-01-01
			 */
			value?: string; // date
		}
		/**
		 * PassportNumber
		 * Passport Number of Person.
		 */
		export interface Passportnumber {
			/**
			 * Value of data field.
			 * example:
			 * E35463874W
			 */
			value?: string;
		}
		/**
		 * PassStatus
		 * Pass status of a FIN holder. <br/>**Note:** Only applies to a foreigner with a valid pass.
		 * *	Live
		 * *	Approved
		 *
		 */
		export interface Passstatus {
			/**
			 * Value of data field.
			 * example:
			 * Live
			 */
			value?: "Live" | "Approved";
		}
		/**
		 * PassType
		 * Pass type of a FIN holder. <br/>**Note:** Only applies to a foreigner with a valid pass.
		 *
		 * * 'RPass' - Work Permit
		 * * 'SPass' - S Pass
		 * * 'P1Pass' - Employment Pass
		 * * 'P2Pass' - Employment Pass
		 * * 'QPass' - Employment Pass
		 * * 'PEP' - Personalised Employment Pass
		 * * 'WHP' - Work Holiday Pass
		 * * 'TEP' - Training Employment Pass
		 * * 'Entre' - EntrePass
		 * * 'DP' - Dependent Pass
		 * * 'LTVP' - Long Term Visit Pass
		 * * 'LOC' - Letter of Consent
		 * * 'MWP' - Miscellaneous Work Pass
		 */
		export interface Passtype {
			/**
			 * Value of data field.
			 * example:
			 * RPass
			 */
			code?: "RPass" | "SPass" | "P1Pass" | "P2Pass" | "QPass" | "PEP" | "WHP" | "TEP" | "Entre" | "DP" | "LTVP" | "LOC" | "MWP";
			/**
			 * example:
			 * Work Permit
			 */
			desc?: "Work Permit" | "S Pass" | "Employment Pass" | "Employment Pass" | "Employment Pass" | "Personalised Employment Pass" | "Work Holiday Pass" | "Training Employment Pass" | "EntrePass" | "Dependent Pass" | "Long Term Visit Pass" | "Letter of Consent" | "Miscellaneous Work Pass";
		}
		/**
		 * Person instance's details
		 */
		export interface Person {
			/**
			 * UINFIN
			 * Singapore issued identification number of the Person.
			 * example:
			 * [object Object]
			 */
			uinfin?: {
				/**
				 * value of the field, should be displayed as it is.
				 * example:
				 * S1111111D
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Name
			 * Full Name of the Person.
			 * example:
			 * [object Object]
			 */
			name?: {
				/**
				 * value of the field, should be displayed as it is.
				 * example:
				 * TAN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HanYuPinYin
			 * Han Yu Pin Yin name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `hanyupinyinname` (i.e. not empty), then `hanyupinyinname` should be displayed in a new line below `name`, and formatted with round brackets i.e. "(`hanyupinyinname`)"'*
			 * example:
			 * [object Object]
			 */
			hanyupinyinname?: {
				/**
				 * example:
				 * CHEN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Alias
			 * Alias name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `aliasname` (i.e. not empty), then `aliasname` should be displayed in a new line below `hanyupinyinname`, and prefixed with the ''@'' symbol i.e. "@`aliasname`".'*
			 * example:
			 * [object Object]
			 */
			aliasname?: {
				/**
				 * value of the field.
				 * example:
				 * TRICIA TAN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HanYuPinYinAlias
			 * Han Yu Pin Yin Alias name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `hanyupinyinaliasname` (i.e. not empty), then `hanyupinyinaliasname` should be displayed in a new line below `aliasname`, and prefixed with the ''@'' symbol i.e. "@`hanyupinyinaliasname`".*
			 * example:
			 * [object Object]
			 */
			hanyupinyinaliasname?: {
				/**
				 * example:
				 * TRICIA CHEN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MarriedName
			 * Married name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `marriedname` (i.e. not empty), then `marriedname` should be displayed in a new line below `hanyupinyinaliasname`.*
			 * example:
			 * [object Object]
			 */
			marriedname?: {
				/**
				 * value of the field, should be displayed as it is.
				 * example:
				 *
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Sex
			 * Sex of Person.
			 * * 'F' - Female
			 * * 'M' - Male
			 * * 'U' - Unknown
			 * example:
			 * [object Object]
			 */
			sex?: {
				/**
				 * example:
				 * F
				 */
				code?: "F" | "M" | "U";
				/**
				 *
				 * example:
				 * Female
				 */
				desc?: "Female" | "Male" | "Unknown";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Race
			 * Race of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			race?: {
				/**
				 * example:
				 * CN
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * CHINESE
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * SecondaryRace
			 * Secondary Race of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			secondaryrace?: {
				/**
				 *
				 * example:
				 * EU
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * EURASIAN
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Dialect
			 * Dialect of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			dialect?: {
				/**
				 *
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * SWISS GERMAN
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Nationality
			 * Nationality of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			nationality?: {
				/**
				 *
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * SINGAPORE CITIZEN
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * DOB
			 * Date of Birth of Person.
			 * example:
			 * [object Object]
			 */
			dob?: {
				/**
				 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 1958-05-17
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * BirthCountry
			 * Country of Birth of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			birthcountry?: {
				/**
				 *
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * ResidentialStatus
			 * Residential Status of Person. Applicable to Singapore Citizens and Permanent Residents.
			 *
			 *
			 * **Note:** This data item is not applicable for FIN holders i.e. `source` will be '3'.
			 * In such cases, the `code` and `desc` properties will be blank or empty string ("").
			 *
			 * * A - Alien
			 * * C - Citizen
			 * * P - PR
			 * * U - Unknown
			 * * N - NOT APPLICABLE
			 * * &lt; BLANK &gt; (for FIN holders only)
			 * example:
			 * [object Object]
			 */
			residentialstatus?: {
				/**
				 * example:
				 * C
				 */
				code?: "A" | "C" | "P" | "U" | "N" | ""; // [a-zA-Z]{1}
				/**
				 * example:
				 * Citizen
				 */
				desc?: "Alien" | "Citizen" | "PR" | "Unknown" | "NOT APPLICABLE" | "";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassportNumber
			 * Passport Number of Person.
			 * example:
			 * [object Object]
			 */
			passportnumber?: {
				/**
				 * Value of data field.
				 * example:
				 * E35463874W
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassportExpiryDate
			 * Passport Expiry Date of Person.
			 * example:
			 * [object Object]
			 */
			passportexpirydate?: {
				/**
				 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 2020-01-01
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * RegAdd
			 * Registered Address of Person
			 *
			 * **Note:**
			 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
			 * - check the `type` discriminator property to differentiate between the two address formats
			 *
			 */
			regadd?: DataitemAddressSg | DataitemAddressUnformatted;
			/**
			 * MailAdd
			 * Mailing Address of Person
			 *
			 * **Note:**
			 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
			 * - check the `type` discriminator property to differentiate between the two address formats
			 *
			 */
			mailadd?: DataitemAddressSg | DataitemAddressUnformatted;
			/**
			 * BillAdd
			 * Billing Address of Person
			 *
			 * **Note:**
			 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
			 * - check the `type` discriminator property to differentiate between the two address formats
			 *
			 */
			billadd?: DataitemAddressSg | DataitemAddressUnformatted;
			/**
			 * HousingType
			 * Housing Type of Person (non-HDB only).
			 *
			 * **Note:** This value will be null if housing type is HDB;
			 *
			 * Refer to `hdbtype` for detailed HDB type.
			 *
			 * * '121' - DETACHED HOUSE
			 * * '122' - SEMI-DETACHED HOUSE
			 * * '123' - TERRACE HOUSE
			 * * '131' - CONDOMINIUM
			 * * '132' - EXECUTIVE CONDOMINIUM
			 * * '139' - APARTMENT
			 * example:
			 * [object Object]
			 */
			housingtype?: {
				/**
				 * example:
				 * 123
				 */
				code?: "121" | "122" | "123" | "131" | "132" | "139";
				/**
				 *
				 * example:
				 * TERRACE HOUSE
				 */
				desc?: "DETACHED HOUSE" | "SEMI-DETACHED HOUSE" | "TERRACE HOUSE" | "CONDOMINIUM" | "EXECUTIVE CONDOMINIUM" | "APARTMENT";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HDBType
			 * Flat Type of the HDB flat.
			 *
			 * **Note:** that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat, Executive Condominium and Shophouse.
			 *
			 * * '111' - 1-ROOM FLAT (HDB)
			 * * '112' - 2-ROOM FLAT (HDB)
			 * * '113' - 3-ROOM FLAT (HDB)
			 * * '114' - 4-ROOM FLAT (HDB)
			 * * '115' - 5-ROOM FLAT (HDB)
			 * * '116' - EXECUTIVE FLAT (HDB)
			 * * '118' - STUDIO APARTMENT (HDB)
			 * example:
			 * [object Object]
			 */
			hdbtype?: {
				/**
				 * example:
				 * 112
				 */
				code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
				/**
				 *
				 * example:
				 * 2-ROOM FLAT (HDB)
				 */
				desc?: "1-ROOM FLAT (HDB)" | "2-ROOM FLAT (HDB)" | "3-ROOM FLAT (HDB)" | "4-ROOM FLAT (HDB)" | "5-ROOM FLAT (HDB)" | "EXECUTIVE FLAT (HDB)" | "STUDIO APARTMENT (HDB)";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HDBOwnership
			 * HDB Ownership details
			 *
			 */
			hdbownership?: Array<{
				/**
				 * Number of Owners. Note that this does not include executors, administrators or trustees.
				 */
				noofowners?: {
					/**
					 * example:
					 * 2
					 */
					value?: number;
				};
				/**
				 * Address details (Singapore Format)
				 */
				address?: {
					/**
					 * Type of Address (SG or Unformatted for non SG)
					 */
					type?: "SG" | "Unformatted";
					/**
					 * Block of Address
					 */
					block?: {
						/**
						 * example:
						 * 548
						 */
						value?: string;
					};
					/**
					 * Building of Address
					 */
					building?: {
						/**
						 * example:
						 *
						 */
						value?: string;
					};
					/**
					 * Floor of Address
					 */
					floor?: {
						/**
						 * example:
						 * 09
						 */
						value?: string;
					};
					/**
					 * Unit of Address
					 */
					unit?: {
						/**
						 * example:
						 * 128
						 */
						value?: string;
					};
					/**
					 * Street of Address
					 */
					street?: {
						/**
						 * example:
						 * BEDOK NORTH AVENUE 1
						 */
						value?: string;
					};
					/**
					 * Postal Code of Address
					 */
					postal?: {
						/**
						 * example:
						 * 460548
						 */
						value?: string;
					};
					/**
					 * Country of Address. For AddressSG this will always be "SG".
					 */
					country?: {
						code?: string;
						desc?: string;
					};
				};
				/**
				 * HDBType
				 * Flat Type of the HDB flat.
				 *
				 * **Note:** that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat, Executive Condominium and Shophouse.
				 *
				 * * '111' - 1-ROOM FLAT (HDB)
				 * * '112' - 2-ROOM FLAT (HDB)
				 * * '113' - 3-ROOM FLAT (HDB)
				 * * '114' - 4-ROOM FLAT (HDB)
				 * * '115' - 5-ROOM FLAT (HDB)
				 * * '116' - EXECUTIVE FLAT (HDB)
				 * * '118' - STUDIO APARTMENT (HDB)
				 */
				hdbtype?: {
					/**
					 * example:
					 * 112
					 */
					code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
					/**
					 *
					 * example:
					 * 2-ROOM FLAT (HDB)
					 */
					desc?: "1-ROOM FLAT (HDB)" | "2-ROOM FLAT (HDB)" | "3-ROOM FLAT (HDB)" | "4-ROOM FLAT (HDB)" | "5-ROOM FLAT (HDB)" | "EXECUTIVE FLAT (HDB)" | "STUDIO APARTMENT (HDB)";
				};
				/**
				 * Date from which the lease period starts. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				leasecommencementdate?: {
					/**
					 * example:
					 * 2008-06-13
					 */
					value?: string; // date
				};
				/**
				 * Term of lease (in years) for the property computed from the lease commencement date.
				 */
				termoflease?: {
					/**
					 * example:
					 * 99
					 */
					value?: number;
				};
				/**
				 * Effective date of flat purchase. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				dateofpurchase?: {
					/**
					 * example:
					 * 2008-06-13
					 */
					value?: string; // date
				};
				/**
				 * Effective date of partial transfer without monetary consideration (e.g. addition, deletion or substitution of a co-owner) for an HDB sold flat.
				 *
				 * For partial transfer of flat where at least one of the current owner remains in the household, the Date of Purchase remains unchanged while the date of transfer of ownership will be updated.
				 *
				 * For outright transfer where there is a total change of all owner(s), only the Date of Purchase will be updated.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				dateofownershiptransfer?: {
					/**
					 * example:
					 * 2018-06-13
					 */
					value?: string; // date
				};
				/**
				 * The amount of housing loan granted to owner(s) by HDB in SGD.
				 */
				loangranted?: {
					/**
					 * example:
					 * 310000.01
					 */
					value?: number; // double
				};
				/**
				 * The number of years of loan repaymnet opted by owner(s) at the time the loan is first granted to him/her.
				 */
				originalloanrepayment?: {
					/**
					 * example:
					 * 25
					 */
					value?: number;
				};
				/**
				 * The remaining term of repayment for the loan in the format `years` + `months`.
				 */
				balanceloanrepayment?: {
					years?: {
						/**
						 * example:
						 * 2
						 */
						value?: number;
					};
					months?: {
						/**
						 * example:
						 * 6
						 */
						value?: number;
					};
				};
				/**
				 * The amount of outstanding HDB loan owed by owner(s) in SGD.
				 */
				outstandingloanbalance?: {
					/**
					 * example:
					 * 50000.01
					 */
					value?: number; // double
				};
				/**
				 * The amount of monthly instalment the owner(s) have to pay for his/her loan in SGD.
				 */
				monthlyloaninstalment?: {
					/**
					 * example:
					 * 1000.01
					 */
					value?: number; // double
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			}>;
			/**
			 * OwnerPrivate
			 * Ownership of Private Property Status of Person (based on IRAS information).
			 *
			 * * true
			 * * false
			 * * null (data not available)
			 * example:
			 * [object Object]
			 */
			ownerprivate?: {
				/**
				 * Value of data field.
				 * example:
				 * false
				 */
				value?: boolean;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Email
			 * Email Address of Person.
			 * example:
			 * [object Object]
			 */
			email?: {
				/**
				 * Value of data field.
				 * example:
				 * test@gmail.com
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HomeNo
			 * Home Contact Number of Person.
			 * example:
			 * [object Object]
			 */
			homeno?: {
				/**
				 * Prefix of Phone Number. Defaults to '+'. If phone number is blank, prefix will be returned as blank.
				 */
				prefix?: {
					/**
					 * example:
					 * +
					 */
					value?: string;
				};
				/**
				 * Area Code of Phone Number. Default to '065'. If phone number is blank, code will be returned as blank.
				 */
				areacode?: {
					/**
					 * example:
					 * 65
					 */
					value?: string;
				};
				/**
				 * Phone Number.
				 */
				nbr?: {
					/**
					 * example:
					 * 66132665
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MobileNo
			 * Mobile Number of Person.
			 * example:
			 * [object Object]
			 */
			mobileno?: {
				/**
				 * Prefix of Phone Number. Defaults to '+'. If phone number is blank, prefix will be returned as blank.
				 */
				prefix?: {
					/**
					 * example:
					 * +
					 */
					value?: string;
				};
				/**
				 * Area Code of Phone Number. Default to '065'. If phone number is blank, code will be returned as blank.
				 */
				areacode?: {
					/**
					 * example:
					 * 65
					 */
					value?: string;
				};
				/**
				 * Phone Number.
				 */
				nbr?: {
					/**
					 * example:
					 * 66132665
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Marital
			 * Marital Status of Person.
			 *
			 * * '1' - SINGLE
			 * * '2' - MARRIED
			 * * '3' - WIDOWED
			 * * '5' - DIVORCED
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 * example:
			 * [object Object]
			 */
			marital?: {
				/**
				 * example:
				 * 2
				 */
				code?: "1" | "2" | "3" | "5";
				/**
				 * example:
				 * MARRIED
				 */
				desc?: "SINGLE" | "MARRIED" | "WIDOWED" | "DIVORCED";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MarriageCertNo
			 * Certificate number of the latest marriage.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 * example:
			 * [object Object]
			 */
			marriagecertno?: {
				/**
				 * Value of data field.
				 * example:
				 * 123456789012345
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * CountryOfMarriage
			 * Country of the latest marriage.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 * example:
			 * [object Object]
			 */
			countryofmarriage?: {
				/**
				 * example:
				 * SG
				 */
				code?: string;
				/**
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MarriageDate
			 * Latest Marriage Date of Person.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 *
			 * example:
			 * [object Object]
			 */
			marriagedate?: {
				/**
				 * Value of data field.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 2007-01-01
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * DivorceDate
			 * Last Divorce Date of Person.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 *
			 * example:
			 * [object Object]
			 */
			divorcedate?: {
				/**
				 * Value of data field.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 *
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * ChildrenBirthRecords
			 * This refers to only local registered birth records(based on ICA’s electronic Birth Certificate Records from 1985 onwards).
			 *
			 * This includes adoption of locally registered child.
			 *
			 * For child below 21, the child’s Birth Cert No, Name, Sex, Race, Dialect, Date of Birth and Time of Birth will be shown.
			 *
			 * For child above 21, only the child’s Birth Cert Number will be shown.
			 */
			childrenbirthrecords?: Array<{
				/**
				 * Birth certificate number of child.
				 */
				birthcertno?: {
					/**
					 * example:
					 * S5562882C
					 */
					value?: string;
				};
				/**
				 * Full Name of child
				 */
				name?: {
					/**
					 * example:
					 * Jo Tan Pei Ni
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin name of child.
				 *
				 * *Presentation Logic - If there is a value to `hanyupinyinname` (i.e. not empty), then `hanyupinyinname` should be displayed in a new line below `name`, and formatted with round brackets i.e. \"(`hanyupinyinname`)\".*
				 */
				hanyupinyinname?: {
					/**
					 * example:
					 * Cheng Pei Ni
					 */
					value?: string;
				};
				/**
				 * Alias name of child.
				 *
				 * *Presentation Logic - If there is a value to `aliasname` (i.e. not empty), then `aliasname` should be displayed in a new line below `hanyupinyinname`, and prefixed with the ''@'' symbol i.e. \"@`aliasname`\".*
				 */
				aliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin Alias name of child.
				 *
				 * *Presentation Logic - If there is a value to `hanyupinyinaliasname` (i.e. not empty), then `hanyupinyinaliasname` should be displayed in a new line below `aliasname`, and prefixed with the ''@'' symbol i.e. \"@`hanyupinyinaliasname`\".*
				 */
				hanyupinyinaliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Married name of child.
				 *
				 * *Presentation Logic - If there is a value to `marriedname` (i.e. not empty), then `marriedname` should be displayed in a new line below `hanyupinyinaliasname`.*
				 */
				marriedname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Sex of child. Possible values:
				 *
				 * * 'F' - Female
				 * * 'M' - Male
				 * * 'U' - Unknown
				 */
				sex?: {
					/**
					 * example:
					 * F
					 */
					code?: "F" | "M" | "U";
					/**
					 * example:
					 * Female
					 */
					desc?: "Female" | "Male" | "Unknown";
				};
				/**
				 * Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 *
				 */
				race?: {
					/**
					 * example:
					 * CN
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * CHINESE
					 */
					desc?: string;
				};
				/**
				 * Secondary Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				secondaryrace?: {
					/**
					 * example:
					 *
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 *
					 */
					desc?: string;
				};
				/**
				 * Dialect of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				dialect?: {
					/**
					 * example:
					 * HK
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * HOKKIEN
					 */
					desc?: string;
				};
				/**
				 * Life Status of child. Possible values:
				 *
				 * * A - ALIVE
				 * * D - DECEASED
				 */
				lifestatus?: {
					/**
					 * example:
					 * A
					 */
					code?: "A" | "D";
					/**
					 * example:
					 * DECEASED
					 */
					desc?: "ALIVE" | "DECEASED";
				};
				/**
				 * Date of Birth of child.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				dob?: {
					/**
					 * example:
					 * 2011-09-10
					 */
					value?: string; // date
				};
				/**
				 * Time of Birth of child.
				 *
				 * Format: HHMM
				 */
				tob?: {
					/**
					 * example:
					 * 0901
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			}>;
			/**
			 * SponsoredChildrenRecords
			 * Details of children sponsored to be SG/PR
			 *
			 * For child below 21, the child’s Birth Cert No, Name, Sex, Race, Dialect, Date of Birth and Time of Birth will be shown.
			 *
			 * For child above 21, only the child’s last known NRIC will be shown.
			 */
			sponsoredchildrenrecords?: Array<{
				/**
				 * NRIC of child
				 */
				nric?: {
					/**
					 * example:
					 * S5562882C
					 */
					value?: string;
				};
				/**
				 * Full Name of child
				 */
				name?: {
					/**
					 * example:
					 * Jo Tan Pei Ni
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin name of child.
				 */
				hanyupinyinname?: {
					/**
					 * example:
					 * Cheng Pei Ni
					 */
					value?: string;
				};
				/**
				 * Alias name of child.
				 */
				aliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin Alias name of child.
				 */
				hanyupinyinaliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Married name of child.
				 */
				marriedname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Sex of child. Possible values:
				 *
				 * * 'F' - Female
				 * * 'M' - Male
				 * * 'U' - Unknown
				 */
				sex?: {
					/**
					 * example:
					 * F
					 */
					code?: "F" | "M" | "U";
					/**
					 * example:
					 * Female
					 */
					desc?: "Female" | "Male" | "Unknown";
				};
				/**
				 * Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				race?: {
					/**
					 * example:
					 * CN
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * CHINESE
					 */
					desc?: string;
				};
				/**
				 * Secondary Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				secondaryrace?: {
					/**
					 * example:
					 *
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 *
					 */
					desc?: string;
				};
				/**
				 * Dialect of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				dialect?: {
					/**
					 * example:
					 * HK
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * HOKKIEN
					 */
					desc?: string;
				};
				/**
				 * Date of Birth of child.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				dob?: {
					/**
					 * example:
					 * 2011-09-10
					 */
					value?: string; // date
				};
				/**
				 * BirthCountry
				 * Country of Birth of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				birthcountry?: {
					/**
					 * example:
					 * SG
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * SINGAPORE
					 */
					desc?: string;
				};
				/**
				 * Life Status of child. Possible values:
				 *
				 * * A - ALIVE
				 * * D - DECEASED
				 */
				lifestatus?: {
					/**
					 * example:
					 * A
					 */
					code?: "A" | "D";
					/**
					 * example:
					 * DECEASED
					 */
					desc?: "ALIVE" | "DECEASED";
				};
				/**
				 * ResidentialStatus
				 * Residential Status of child. Possible values:
				 *
				 * * A - Alien
				 * * C - Citizen
				 * * P - PR
				 * * U - Unknown
				 * * N - NOT APPLICABLE
				 */
				residentialstatus?: {
					/**
					 * example:
					 * C
					 */
					code?: "A" | "C" | "P" | "U" | "N"; // [a-zA-Z]{1}
					/**
					 * example:
					 * Citizen
					 */
					desc?: "Alien" | "Citizen" | "PR" | "Unknown" | "NOT APPLICABLE";
				};
				/**
				 * Nationality of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				nationality?: {
					/**
					 * example:
					 * SG
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * SINGAPORE CITIZEN
					 */
					desc?: string;
				};
				/**
				 * Date granted Singapore Citizenship or Permanant Resident
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				scprgrantdate?: {
					/**
					 * example:
					 * 2015-06-13
					 */
					value?: string; // date
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			}>;
			/**
			 * EduLevel
			 * Highest Education Level of Person.
			 *
			 * * '0' - NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY
			 * * '1' - PRIMARY
			 * * '2' - LOWER SECONDARY
			 * * '3' - SECONDARY
			 * * '4' - POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION
			 * * '5' - POLYTECHNIC DIPLOMA
			 * * '6' - PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA
			 * * '7' - BACHELOR'S OR EQUIVALENT
			 * * '8' - POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)
			 * * '9' - MASTER'S AND DOCTORATE OR EQUIVALENT
			 * * 'N' - MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)
			 * example:
			 * [object Object]
			 */
			edulevel?: {
				/**
				 * example:
				 * 7
				 */
				code?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "N";
				/**
				 * example:
				 * BACHELOR'S OR EQUIVALENT
				 */
				desc?: "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY" | "PRIMARY" | "LOWER SECONDARY" | "SECONDARY" | "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION" | "POLYTECHNIC DIPLOMA" | "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA" | "BACHELOR'S OR EQUIVALENT" | "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)" | "MASTER'S AND DOCTORATE OR EQUIVALENT" | "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * GradYear
			 * Year of Graduation of Person. Format: YYYY
			 * example:
			 * [object Object]
			 */
			gradyear?: {
				/**
				 * example:
				 * 2006
				 */
				value?: string; // [0-9]{4}
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * SchoolName
			 * Name of School of Person.
			 * example:
			 * [object Object]
			 */
			schoolname?: {
				/**
				 * Code value of school name.
				 *
				 * **Note:** Code+desc and value are mutually exclusive.
				 * example:
				 * T07GS3011J
				 */
				code?: string;
				/**
				 * Name of school represented by 'code'
				 *
				 * **Note:** Code+desc and value are mutually exclusive.
				 * example:
				 * SIGLAP SECONDARY SCHOOL
				 */
				desc?: string;
				/**
				 * Free text value of school name.
				 *
				 * **Note:** Code+desc and value are mutually exclusive.
				 * example:
				 *
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Occupation
			 * Occupation of Person.
			 * example:
			 * [object Object]
			 */
			occupation?: {
				/**
				 * Code of occupation based on SSOC 2015.
				 *
				 * For full list, refer to SSOC 2015 at https://www.singstat.gov.sg/standards/standards-and-classifications/ssoc.
				 *
				 * For FIN holders, blank will be returned.
				 *
				 * **Note:** Code+Desc and Value are mutually exclusive.
				 * example:
				 * 53201
				 */
				code?: string; // [0-9]{5}
				/**
				 * Description of occupation corresponding to code.
				 *
				 * **Note:** Code+Desc and Value are mutually exclusive.
				 * example:
				 * HEALTHCARE ASSISTANT
				 */
				desc?: string;
				/**
				 * Free text cccupation entered by user
				 * **Note:** Code+Desc and Value are mutually exclusive.
				 * example:
				 *
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Employment
			 * Name of Employer.
			 * example:
			 * [object Object]
			 */
			employment?: {
				/**
				 * example:
				 * ALPHA
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassType
			 * Pass type of a FIN holder. <br/>**Note:** Only applies to a foreigner with a valid pass.
			 *
			 * * 'RPass' - Work Permit
			 * * 'SPass' - S Pass
			 * * 'P1Pass' - Employment Pass
			 * * 'P2Pass' - Employment Pass
			 * * 'QPass' - Employment Pass
			 * * 'PEP' - Personalised Employment Pass
			 * * 'WHP' - Work Holiday Pass
			 * * 'TEP' - Training Employment Pass
			 * * 'Entre' - EntrePass
			 * * 'DP' - Dependent Pass
			 * * 'LTVP' - Long Term Visit Pass
			 * * 'LOC' - Letter of Consent
			 * * 'MWP' - Miscellaneous Work Pass
			 * example:
			 * [object Object]
			 */
			passtype?: {
				/**
				 * Value of data field.
				 * example:
				 * RPass
				 */
				code?: "RPass" | "SPass" | "P1Pass" | "P2Pass" | "QPass" | "PEP" | "WHP" | "TEP" | "Entre" | "DP" | "LTVP" | "LOC" | "MWP";
				/**
				 * example:
				 * Work Permit
				 */
				desc?: "Work Permit" | "S Pass" | "Employment Pass" | "Employment Pass" | "Employment Pass" | "Personalised Employment Pass" | "Work Holiday Pass" | "Training Employment Pass" | "EntrePass" | "Dependent Pass" | "Long Term Visit Pass" | "Letter of Consent" | "Miscellaneous Work Pass";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassStatus
			 * Pass status of a FIN holder. <br/>**Note:** Only applies to a foreigner with a valid pass.
			 * *	Live
			 * *	Approved
			 *
			 * example:
			 * [object Object]
			 */
			passstatus?: {
				/**
				 * Value of data field.
				 * example:
				 * Live
				 */
				value?: "Live" | "Approved";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassExpiryDate
			 * Pass expiry of a foreigner. <br/>**Note:** Only applies to a foreigner with a valid pass.
			 * example:
			 * [object Object]
			 */
			passexpirydate?: {
				/**
				 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 2022-12-31
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * EmploymentSector
			 * Employment Sector of a FIN holder.
			 *
			 * **Note:** Only applies to a foreigner with a valid work pass.
			 *
			 * * Construction
			 * * Manufacturing
			 * * Marine Shipyard
			 * * Process
			 * * Services
			 * example:
			 * [object Object]
			 */
			employmentsector?: {
				/**
				 * example:
				 * Manufacturing
				 */
				value?: "Construction" | "Manufacturing" | "Marine Shipyard" | "Process" | "Services";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HouseholdIncome
			 * Household Income of Person in SGD.
			 * example:
			 * [object Object]
			 */
			householdincome?: {
				/**
				 * upper bound of the range of household income bracket
				 */
				high?: {
					/**
					 * example:
					 * 5999
					 */
					value?: number;
				};
				/**
				 * lower bound of the range of household income bracket
				 */
				low?: {
					/**
					 * example:
					 * 5000
					 */
					value?: number;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Summary of latest Notice of Assessment within the past three years.
			 * example:
			 * [object Object]
			 */
			"noa-basic"?: {
				/**
				 * Assessable Income
				 */
				amount?: {
					/**
					 * example:
					 * 100000.01
					 */
					value?: number; // double
				};
				/**
				 * The second latest annual assessable income available from IRAS within the past 3 years.
				 */
				yearofassessment?: {
					/**
					 * example:
					 * 2018
					 */
					value?: string; // [0-9]{4}
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Detailed breakdown of latest Notice of Assessment within the past three years.
			 * example:
			 * [object Object]
			 */
			noa?: {
				/**
				 * Assessable Income
				 */
				amount?: {
					/**
					 * example:
					 * 100000.01
					 */
					value?: number; // double
				};
				/**
				 * value of data field
				 */
				yearofassessment?: {
					/**
					 * example:
					 * 2018
					 */
					value?: string; // [0-9]{4}
				};
				/**
				 * Assessable Income from employment
				 */
				employment?: {
					/**
					 * example:
					 * 100000.01
					 */
					value?: number; // double
				};
				/**
				 * Assessable Income from trade
				 */
				trade?: {
					/**
					 * example:
					 * 0
					 */
					value?: number; // double
				};
				/**
				 * Assessable Income from rent
				 */
				rent?: {
					/**
					 * example:
					 * 0
					 */
					value?: number; // double
				};
				/**
				 * Assessable Income from interest
				 */
				interest?: {
					/**
					 * example:
					 * 0
					 */
					value?: number; // double
				};
				/**
				 * Tax Clearance indicator. This means that tax clearance has been sought by the employer for this NOA assessment. For more information, please refer to [this](https://www.iras.gov.sg/irashome/Businesses/Employers/Tax-Clearance-for-Foreign-SPR-Employees/Getting-Tax-Clearance--A-Step-by-Step-Guide/)
				 */
				taxclearance?: {
					/**
					 * example:
					 * N
					 */
					value?: "Y" | "N";
				};
				/**
				 * Type of 'Notice of Assessment' (NOA)
				 */
				category?: {
					/**
					 * example:
					 * ORIGINAL
					 */
					value?: "ADDITIONAL" | "AMENDED" | "ORIGINAL" | "REPAYMENT";
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * History of Notice Of Assessment (Basic)
			 * Summary of latest 2 Notice of Assessments within the past three years.
			 * example:
			 * [object Object]
			 */
			"noahistory-basic"?: {
				noas?: NOABasic[];
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * History of Notice Of Assessment
			 * Detailed breakdown of latest 2 Notice of Assessments within the past three years.
			 * example:
			 * [object Object]
			 */
			noahistory?: {
				noas?: NOA[];
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * CPFContributions
			 * Employer CPF Contributions of Person in SGD. Does not include any non-employer contributions.
			 * Maximum past 14 months' of contributions.
			 *
			 * example:
			 * [object Object]
			 */
			cpfcontributions?: {
				/**
				 * example:
				 * [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
				 */
				history?: Array<{
					/**
					 * Employer who paid the Contribution.
					 */
					employer?: {
						/**
						 * example:
						 * Crystal Horse Invest Pte Ltd
						 */
						value?: string;
					};
					/**
					 * Date of Contribution Paid. See "full-date" in http://xml2rfc.ietf.org/public/rfc/htm
					 */
					date?: {
						/**
						 * example:
						 * 2017-03-01
						 */
						value?: string; // date
					};
					/**
					 * Month for which CPF Contribution was paid. Format: YYYY-MM
					 */
					month?: {
						/**
						 * example:
						 * 2017-02
						 */
						value?: string;
					};
					/**
					 * Amount of contribution in SGD
					 */
					amount?: {
						/**
						 * example:
						 * 500
						 */
						value?: number; // double
					};
				}>;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * CPFBalances
			 * CPF Balances of Person in SGD.
			 *
			 * 'ra' will not appear in the results if user does not have a Retirement Account.
			 * example:
			 * [object Object]
			 */
			cpfbalances?: {
				/**
				 * Amount Balance in CPF-MA
				 */
				ma?: {
					/**
					 * example:
					 * 11470.71
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-OA
				 */
				oa?: {
					/**
					 * example:
					 * 1581.48
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-SA
				 */
				sa?: {
					/**
					 * example:
					 * 21967.09
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-RA
				 */
				ra?: {
					/**
					 * example:
					 * 0.01
					 */
					value?: number; // double
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Vehicles
			 * Vehicle ownership details of Person.
			 */
			vehicles?: Array<{
				/**
				 * Vehicle Registration Number displayed on the vehicle number plates
				 */
				vehicleno?: {
					/**
					 * example:
					 * SDF1235A
					 */
					value?: string;
				};
				/**
				 * Type of Vehicles such as 'MOTOR CAR', 'STATION /WAGON/JEEP/LAND ROVER'
				 */
				type?: {
					/**
					 * example:
					 * PASSENGER MOTOR CAR
					 */
					value?: string;
				};
				/**
				 * In-Vehicle Unit (IU) number of the device fitted in Singapore-registered vehicles for Electronic Road Pricing (ERP) gantries and Electronic Parking System (EPS) car parks.
				 */
				iulabelno?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Vehicle Make such as 'TOYOTA', 'HONDA', 'AUDI'
				 */
				make?: {
					/**
					 * example:
					 * TOYOTA
					 */
					value?: string;
				};
				/**
				 * Vehicle Model such as 'COROLLA ALTIS CLASSIC 1.6 CVT', 'HRV 1.5 DX CVT'
				 */
				model?: {
					/**
					 * example:
					 * COROLLA ALTIS
					 */
					value?: string;
				};
				/**
				 * Vehicle Chassis Number
				 */
				chassisno?: {
					/**
					 * example:
					 * ZC11S1735800
					 */
					value?: string;
				};
				/**
				 * Vehicle Engine Number
				 */
				engineno?: {
					/**
					 * example:
					 * M13A1837453
					 */
					value?: string;
				};
				/**
				 * Vehicle Motor Number
				 */
				motorno?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Manufacturing year
				 */
				yearofmanufacture?: {
					/**
					 * example:
					 * 2010
					 */
					value?: string;
				};
				/**
				 * Date when vehicle is registered with LTA. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				firstregistrationdate?: {
					/**
					 * example:
					 * 2010-06-06
					 */
					value?: string; // date
				};
				/**
				 * Date when vehicle is first registered in the country of origin. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				originalregistrationdate?: {
					/**
					 * example:
					 * 2010-06-06
					 */
					value?: string; // date
				};
				/**
				 * Vehicle Certificate of Entitlement (COE) bid category
				 */
				coecategory?: {
					/**
					 * example:
					 * A - CAR UP TO 1600CC & 97KW (130BHP)
					 */
					value?: string;
				};
				/**
				 * Vehicle Certificate of Entitlement (COE) expiry date. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				coeexpirydate?: {
					/**
					 * example:
					 * 2020-06-05
					 */
					value?: string; // date
				};
				/**
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				roadtaxexpirydate?: {
					/**
					 * example:
					 * 2020-06-05
					 */
					value?: string; // date
				};
				/**
				 * Actual Quota Premium (QP) amount payable for the COE upon registration, conversion or COE revalidation in Singapore dollars (SGD). For renewal of COE, the value will contain actual PQP paid.
				 */
				quotapremium?: {
					/**
					 * example:
					 * 14000.01
					 */
					value?: number; // double
				};
				/**
				 * Open Market Value is the value of manufacturer invoice price, freight and insurance in Singapore dollars (SGD).
				 */
				openmarketvalue?: {
					/**
					 * example:
					 * 25000.01
					 */
					value?: number; // double
				};
				/**
				 * CO2 emission rate
				 */
				co2emission?: {
					/**
					 * example:
					 * 146.01
					 */
					value?: number; // double
				};
				/**
				 * Status of the Vehicle.
				 *
				 * * 1 - LIVE
				 * * 2 - DE-REGISTERED
				 */
				status?: {
					/**
					 * example:
					 * 1
					 */
					code?: "1" | "2";
					/**
					 * example:
					 * LIVE
					 */
					desc?: "LIVE" | "DE-REGISTERED";
				};
				/**
				 * Vehicle Primary Colour (e.g. BLACK)
				 */
				primarycolour?: {
					/**
					 * example:
					 * BLACK
					 */
					value?: string;
				};
				/**
				 * Vehicle Primary Colour (e.g. WHITE)
				 */
				secondarycolour?: {
					/**
					 * example:
					 * WHITE
					 */
					value?: string;
				};
				/**
				 * Vehicle Attachment 1 (e.g. DISABLED)
				 */
				attachment1?: {
					/**
					 * example:
					 * DISABLED
					 */
					value?: string;
				};
				/**
				 * Vehicle Attachment 2 (e.g. WITH SUN ROOF)
				 */
				attachment2?: {
					/**
					 * example:
					 * WITH SUN ROOF
					 */
					value?: string;
				};
				/**
				 * Vehicle Attachment 3 (e.g. SIDE CURTAIN)
				 */
				attachment3?: {
					/**
					 * example:
					 * SIDE CURTAIN
					 */
					value?: string;
				};
				/**
				 * Vehicle Scheme (e.g. REVISED OFF-PEAK CAR)
				 */
				scheme?: {
					/**
					 * example:
					 * REVISED OFF-PEAK CAR
					 */
					value?: string;
				};
				/**
				 * Total Hydro Carbon (THC) emission rate
				 */
				thcemission?: {
					/**
					 * example:
					 * 1.011001
					 */
					value?: number; // double
				};
				/**
				 * Carbon Monoxide emission rate
				 */
				coemission?: {
					/**
					 * example:
					 * 1.100001
					 */
					value?: number; // double
				};
				/**
				 * Nitrogen Oxide (NOx) emission rate.
				 */
				noxemission?: {
					/**
					 * example:
					 * 0.011001
					 */
					value?: number; // double
				};
				/**
				 * Particulates (PM - Atmospheric Particulate Matter) emission rate.
				 */
				pmemission?: {
					/**
					 * example:
					 * 0.007
					 */
					value?: number; // double
				};
				/**
				 * Engine Capacity in cubic centimeter (cc)
				 */
				enginecapacity?: {
					/**
					 * example:
					 * 1600
					 */
					value?: number;
				};
				/**
				 * Power Rate. Applicable to Electric and Hybrid vehicles powered by electric motors. Unit is Kilowatt.
				 */
				powerrate?: {
					/**
					 * example:
					 * 1.41
					 */
					value?: number; // double
				};
				/**
				 * Effective Date/Time of Ownership. See "date-time" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				effectiveownership?: {
					/**
					 * example:
					 * 2010-08-31T20:12:12+08:00
					 */
					value?: string; // date-time
				};
				/**
				 * Propellant (e.g. Compressed Natural Gas, Diesel, Diesel-CNG, Diesel-Electric, Diesel-Electric (Plug-In), Electric, Gas, Liquefied Petroleum Gas (LPG), Petrol, Petrol-CNG, Petrol-Electric, Petrol-Electric (Plug-In), Petrol-LPG
				 */
				propellant?: {
					/**
					 * example:
					 * Compressed Natural Gas
					 */
					value?: string;
				};
				/**
				 * Maximum Unladen Weight in kilograms (kg)
				 */
				maximumunladenweight?: {
					/**
					 * example:
					 * 1500
					 */
					value?: number;
				};
				/**
				 * Maximum Laden Weight in kilograms (kg)
				 */
				maximumladenweight?: {
					/**
					 * example:
					 * 1795
					 */
					value?: number;
				};
				/**
				 * Minimum PARF Benefit in Singapore dollars (SGD).
				 */
				minimumparfbenefit?: {
					/**
					 * example:
					 * 8770.01
					 */
					value?: number; // double
				};
				/**
				 * Number of Transfer
				 */
				nooftransfers?: {
					/**
					 * example:
					 * 2
					 */
					value?: number;
				};
				/**
				 * Vehicle Parking Certificate. Applicable for Heavy Vehicles.
				 */
				vpc?: {
					/**
					 * example:
					 * 1234567890
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			}>;
			/**
			 * Driving Licence details of Person.
			 *
			 * example:
			 * [object Object]
			 */
			drivinglicence?: {
				/**
				 * Status of Certificate of Merit. Possible values:
				 *
				 * * Y - Eligible
				 * * N - Not Eligible
				 */
				comstatus?: {
					/**
					 * example:
					 * Y
					 */
					code?: "Y" | "N";
					/**
					 *
					 * example:
					 * Eligible
					 */
					desc?: "Eligible" | "Not Eligible";
				};
				/**
				 * Total Demerit Points
				 */
				totaldemeritpoints?: {
					/**
					 * example:
					 * 0
					 */
					value?: number;
				};
				/**
				 *
				 */
				suspension?: {
					/**
					 * Suspension Start Date
					 */
					startdate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
					/**
					 * Suspension End Date
					 */
					enddate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
				};
				/**
				 *
				 */
				disqualification?: {
					/**
					 * Disqualification Start Date
					 */
					startdate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
					/**
					 * Disqualification End Date
					 */
					enddate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
				};
				/**
				 *
				 */
				revocation?: {
					/**
					 * Revocation Start Date
					 */
					startdate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
					/**
					 * Revocation End Date
					 */
					enddate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
				};
				/**
				 * Provisional Driving Licence (PDL)
				 */
				pdl?: {
					/**
					 * Validity of PDL. Possible values:
					 *
					 * * V - Valid
					 * * E - Expired
					 * * I - Invalid
					 * * N - Not Holding PDL
					 */
					validity?: {
						/**
						 * example:
						 * V
						 */
						code?: "V" | "E" | "I" | "N";
						/**
						 *
						 * example:
						 * Valid
						 */
						desc?: "Valid" | "Expired" | "Invalid" | "Not Holding PDL";
					};
					/**
					 * PDL Expiry Date
					 */
					expirydate?: {
						/**
						 * example:
						 * 2020-06-15
						 */
						value?: string; // date
					};
					/**
					 * PDL Classes
					 * example:
					 * [object Object],[object Object]
					 */
					classes?: Array<{
						class?: {
							value?: string;
						};
					}>;
				};
				/**
				 * Qualified Driving Licence (QDL)
				 */
				qdl?: {
					/**
					 * Validity of QDL. Possible values:
					 *
					 * * V - Valid
					 * * E - Expired
					 * * I - Invalid
					 * * N - Not Holding QDL
					 */
					validity?: {
						/**
						 * example:
						 * V
						 */
						code?: "V" | "E" | "I" | "N";
						/**
						 *
						 * example:
						 * validation
						 */
						desc?: "Valid" | "Expired" | "Invalid" | "Not Holding QDL";
					};
					/**
					 * QDL Expiry Date
					 */
					expirydate?: {
						/**
						 * example:
						 * 2020-06-15
						 */
						value?: string; // date
					};
					/**
					 * QDL Classes. Includes Issue Date (e.g. 2B, 2018-01-01)
					 * example:
					 * [object Object],[object Object]
					 */
					classes?: Array<{
						class?: {
							value?: string;
						};
						issuedate?: {
							value?: string; // date
						};
					}>;
				};
				/**
				 * Serial Number of the Photo Card
				 */
				photocardserialno?: {
					/**
					 * example:
					 * 115616
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
		}
		/**
		 * Person instance's details (Basic Profile)
		 */
		export interface PersonBasic {
			/**
			 * UINFIN
			 * Singapore issued identification number of the Person.
			 * example:
			 * [object Object]
			 */
			uinfin?: {
				/**
				 * value of the field, should be displayed as it is.
				 * example:
				 * S1111111D
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Name
			 * Full Name of the Person.
			 * example:
			 * [object Object]
			 */
			name?: {
				/**
				 * value of the field, should be displayed as it is.
				 * example:
				 * TAN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HanYuPinYin
			 * Han Yu Pin Yin name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `hanyupinyinname` (i.e. not empty), then `hanyupinyinname` should be displayed in a new line below `name`, and formatted with round brackets i.e. "(`hanyupinyinname`)"'*
			 * example:
			 * [object Object]
			 */
			hanyupinyinname?: {
				/**
				 * example:
				 * CHEN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Alias
			 * Alias name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `aliasname` (i.e. not empty), then `aliasname` should be displayed in a new line below `hanyupinyinname`, and prefixed with the ''@'' symbol i.e. "@`aliasname`".'*
			 * example:
			 * [object Object]
			 */
			aliasname?: {
				/**
				 * value of the field.
				 * example:
				 * TRICIA TAN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HanYuPinYinAlias
			 * Han Yu Pin Yin Alias name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `hanyupinyinaliasname` (i.e. not empty), then `hanyupinyinaliasname` should be displayed in a new line below `aliasname`, and prefixed with the ''@'' symbol i.e. "@`hanyupinyinaliasname`".*
			 * example:
			 * [object Object]
			 */
			hanyupinyinaliasname?: {
				/**
				 * example:
				 * TRICIA CHEN XIAO HUI
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MarriedName
			 * Married name of the Person.
			 *
			 * *Presentation Logic - If there is a value to `marriedname` (i.e. not empty), then `marriedname` should be displayed in a new line below `hanyupinyinaliasname`.*
			 * example:
			 * [object Object]
			 */
			marriedname?: {
				/**
				 * value of the field, should be displayed as it is.
				 * example:
				 *
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Sex
			 * Sex of Person.
			 * * 'F' - Female
			 * * 'M' - Male
			 * * 'U' - Unknown
			 * example:
			 * [object Object]
			 */
			sex?: {
				/**
				 * example:
				 * F
				 */
				code?: "F" | "M" | "U";
				/**
				 *
				 * example:
				 * Female
				 */
				desc?: "Female" | "Male" | "Unknown";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Race
			 * Race of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			race?: {
				/**
				 * example:
				 * CN
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * CHINESE
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * SecondaryRace
			 * Secondary Race of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			secondaryrace?: {
				/**
				 *
				 * example:
				 * EU
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * EURASIAN
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Dialect
			 * Dialect of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			dialect?: {
				/**
				 *
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * SWISS GERMAN
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Nationality
			 * Nationality of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			nationality?: {
				/**
				 *
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * SINGAPORE CITIZEN
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * DOB
			 * Date of Birth of Person.
			 * example:
			 * [object Object]
			 */
			dob?: {
				/**
				 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 1958-05-17
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * BirthCountry
			 * Country of Birth of Person.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 * example:
			 * [object Object]
			 */
			birthcountry?: {
				/**
				 *
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 *
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * ResidentialStatus
			 * Residential Status of Person. Applicable to Singapore Citizens and Permanent Residents.
			 *
			 *
			 * **Note:** This data item is not applicable for FIN holders i.e. `source` will be '3'.
			 * In such cases, the `code` and `desc` properties will be blank or empty string ("").
			 *
			 * * A - Alien
			 * * C - Citizen
			 * * P - PR
			 * * U - Unknown
			 * * N - NOT APPLICABLE
			 * * &lt; BLANK &gt; (for FIN holders only)
			 * example:
			 * [object Object]
			 */
			residentialstatus?: {
				/**
				 * example:
				 * C
				 */
				code?: "A" | "C" | "P" | "U" | "N" | ""; // [a-zA-Z]{1}
				/**
				 * example:
				 * Citizen
				 */
				desc?: "Alien" | "Citizen" | "PR" | "Unknown" | "NOT APPLICABLE" | "";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassportNumber
			 * Passport Number of Person.
			 * example:
			 * [object Object]
			 */
			passportnumber?: {
				/**
				 * Value of data field.
				 * example:
				 * E35463874W
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassportExpiryDate
			 * Passport Expiry Date of Person.
			 * example:
			 * [object Object]
			 */
			passportexpirydate?: {
				/**
				 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 2020-01-01
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * RegAdd
			 * Registered Address of Person
			 *
			 * **Note:**
			 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
			 * - check the `type` discriminator property to differentiate between the two address formats
			 *
			 * example:
			 * [object Object]
			 */
			regadd?: DataitemAddressSg | DataitemAddressUnformatted;
			/**
			 * MailAdd
			 * Mailing Address of Person
			 *
			 * **Note:**
			 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
			 * - check the `type` discriminator property to differentiate between the two address formats
			 *
			 * example:
			 * [object Object]
			 */
			mailadd?: DataitemAddressSg | DataitemAddressUnformatted;
			/**
			 * BillAdd
			 * Billing Address of Person
			 *
			 * **Note:**
			 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
			 * - check the `type` discriminator property to differentiate between the two address formats
			 *
			 * example:
			 * [object Object]
			 */
			billadd?: DataitemAddressSg | DataitemAddressUnformatted;
			/**
			 * HousingType
			 * Housing Type of Person (non-HDB only).
			 *
			 * **Note:** This value will be null if housing type is HDB;
			 *
			 * Refer to `hdbtype` for detailed HDB type.
			 *
			 * * '121' - DETACHED HOUSE
			 * * '122' - SEMI-DETACHED HOUSE
			 * * '123' - TERRACE HOUSE
			 * * '131' - CONDOMINIUM
			 * * '132' - EXECUTIVE CONDOMINIUM
			 * * '139' - APARTMENT
			 * example:
			 * [object Object]
			 */
			housingtype?: {
				/**
				 * example:
				 * 123
				 */
				code?: "121" | "122" | "123" | "131" | "132" | "139";
				/**
				 *
				 * example:
				 * TERRACE HOUSE
				 */
				desc?: "DETACHED HOUSE" | "SEMI-DETACHED HOUSE" | "TERRACE HOUSE" | "CONDOMINIUM" | "EXECUTIVE CONDOMINIUM" | "APARTMENT";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HDBType
			 * Flat Type of the HDB flat.
			 *
			 * **Note:** that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat, Executive Condominium and Shophouse.
			 *
			 * * '111' - 1-ROOM FLAT (HDB)
			 * * '112' - 2-ROOM FLAT (HDB)
			 * * '113' - 3-ROOM FLAT (HDB)
			 * * '114' - 4-ROOM FLAT (HDB)
			 * * '115' - 5-ROOM FLAT (HDB)
			 * * '116' - EXECUTIVE FLAT (HDB)
			 * * '118' - STUDIO APARTMENT (HDB)
			 * example:
			 * [object Object]
			 */
			hdbtype?: {
				/**
				 * example:
				 * 112
				 */
				code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
				/**
				 *
				 * example:
				 * 2-ROOM FLAT (HDB)
				 */
				desc?: "1-ROOM FLAT (HDB)" | "2-ROOM FLAT (HDB)" | "3-ROOM FLAT (HDB)" | "4-ROOM FLAT (HDB)" | "5-ROOM FLAT (HDB)" | "EXECUTIVE FLAT (HDB)" | "STUDIO APARTMENT (HDB)";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HDBOwnership
			 * HDB Ownership details
			 *
			 */
			hdbownership?: {
				list?: Array<{
					/**
					 * Number of Owners. Note that this does not include executors, administrators or trustees.
					 */
					noofowners?: {
						/**
						 * example:
						 * 2
						 */
						value?: number;
					};
					/**
					 * Address details (Singapore Format)
					 */
					address?: {
						/**
						 * Type of Address (SG or Unformatted for non SG)
						 */
						type?: "SG" | "Unformatted";
						/**
						 * Block of Address
						 */
						block?: {
							/**
							 * example:
							 * 548
							 */
							value?: string;
						};
						/**
						 * Building of Address
						 */
						building?: {
							/**
							 * example:
							 *
							 */
							value?: string;
						};
						/**
						 * Floor of Address
						 */
						floor?: {
							/**
							 * example:
							 * 09
							 */
							value?: string;
						};
						/**
						 * Unit of Address
						 */
						unit?: {
							/**
							 * example:
							 * 128
							 */
							value?: string;
						};
						/**
						 * Street of Address
						 */
						street?: {
							/**
							 * example:
							 * BEDOK NORTH AVENUE 1
							 */
							value?: string;
						};
						/**
						 * Postal Code of Address
						 */
						postal?: {
							/**
							 * example:
							 * 460548
							 */
							value?: string;
						};
						/**
						 * Country of Address. For AddressSG this will always be "SG".
						 */
						country?: {
							code?: string;
							desc?: string;
						};
					};
					/**
					 * HDBType
					 * Flat Type of the HDB flat.
					 *
					 * **Note:** that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat, Executive Condominium and Shophouse.
					 *
					 * * '111' - 1-ROOM FLAT (HDB)
					 * * '112' - 2-ROOM FLAT (HDB)
					 * * '113' - 3-ROOM FLAT (HDB)
					 * * '114' - 4-ROOM FLAT (HDB)
					 * * '115' - 5-ROOM FLAT (HDB)
					 * * '116' - EXECUTIVE FLAT (HDB)
					 * * '118' - STUDIO APARTMENT (HDB)
					 */
					hdbtype?: {
						/**
						 * example:
						 * 112
						 */
						code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
						/**
						 *
						 * example:
						 * 2-ROOM FLAT (HDB)
						 */
						desc?: "1-ROOM FLAT (HDB)" | "2-ROOM FLAT (HDB)" | "3-ROOM FLAT (HDB)" | "4-ROOM FLAT (HDB)" | "5-ROOM FLAT (HDB)" | "EXECUTIVE FLAT (HDB)" | "STUDIO APARTMENT (HDB)";
					};
					/**
					 * Date from which the lease period starts. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
					 */
					leasecommencementdate?: {
						/**
						 * example:
						 * 2008-06-13
						 */
						value?: string; // date
					};
					/**
					 * Term of lease (in years) for the property computed from the lease commencement date.
					 */
					termoflease?: {
						/**
						 * example:
						 * 99
						 */
						value?: number;
					};
					/**
					 * Effective date of flat purchase. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
					 */
					dateofpurchase?: {
						/**
						 * example:
						 * 2008-06-13
						 */
						value?: string; // date
					};
					/**
					 * Effective date of partial transfer without monetary consideration (e.g. addition, deletion or substitution of a co-owner) for an HDB sold flat.
					 *
					 * For partial transfer of flat where at least one of the current owner remains in the household, the Date of Purchase remains unchanged while the date of transfer of ownership will be updated.
					 *
					 * For outright transfer where there is a total change of all owner(s), only the Date of Purchase will be updated.
					 *
					 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
					 */
					dateofownershiptransfer?: {
						/**
						 * example:
						 * 2018-06-13
						 */
						value?: string; // date
					};
					/**
					 * The amount of housing loan granted to owner(s) by HDB in SGD.
					 */
					loangranted?: {
						/**
						 * example:
						 * 310000.01
						 */
						value?: number; // double
					};
					/**
					 * The number of years of loan repaymnet opted by owner(s) at the time the loan is first granted to him/her.
					 */
					originalloanrepayment?: {
						/**
						 * example:
						 * 25
						 */
						value?: number;
					};
					/**
					 * The remaining term of repayment for the loan in the format `years` + `months`.
					 */
					balanceloanrepayment?: {
						years?: {
							/**
							 * example:
							 * 2
							 */
							value?: number;
						};
						months?: {
							/**
							 * example:
							 * 6
							 */
							value?: number;
						};
					};
					/**
					 * The amount of outstanding HDB loan owed by owner(s) in SGD.
					 */
					outstandingloanbalance?: {
						/**
						 * example:
						 * 50000.01
						 */
						value?: number; // double
					};
					/**
					 * The amount of monthly instalment the owner(s) have to pay for his/her loan in SGD.
					 */
					monthlyloaninstalment?: {
						/**
						 * example:
						 * 1000.01
						 */
						value?: number; // double
					};
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 */
					classification: "C";
					/**
					 * Source of data.
					 *
					 * * '1' - Government-verified
					 * * '2' - User provided
					 * * '3' - Field is Not Applicable to Person
					 * * '4' - Verified by SingPass
					 *
					 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
					 */
					lastupdated: string; // date
					/**
					 * Optional flag to indicate if data is unavalable from data source.
					 *
					 * **NOTE:**
					 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
					 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
					 *   - If data is available from the data source, this property will not be present.
					 *
					 */
					unavailable?: boolean;
				}>;
			};
			/**
			 * OwnerPrivate
			 * Ownership of Private Property Status of Person (based on IRAS information).
			 *
			 * * true
			 * * false
			 * * null (data not available)
			 * example:
			 * [object Object]
			 */
			ownerprivate?: {
				/**
				 * Value of data field.
				 * example:
				 * false
				 */
				value?: boolean;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Email
			 * Email Address of Person.
			 * example:
			 * [object Object]
			 */
			email?: {
				/**
				 * Value of data field.
				 * example:
				 * test@gmail.com
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HomeNo
			 * Home Contact Number of Person.
			 * example:
			 * [object Object]
			 */
			homeno?: {
				/**
				 * Prefix of Phone Number. Defaults to '+'. If phone number is blank, prefix will be returned as blank.
				 */
				prefix?: {
					/**
					 * example:
					 * +
					 */
					value?: string;
				};
				/**
				 * Area Code of Phone Number. Default to '065'. If phone number is blank, code will be returned as blank.
				 */
				areacode?: {
					/**
					 * example:
					 * 65
					 */
					value?: string;
				};
				/**
				 * Phone Number.
				 */
				nbr?: {
					/**
					 * example:
					 * 66132665
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MobileNo
			 * Mobile Number of Person.
			 * example:
			 * [object Object]
			 */
			mobileno?: {
				/**
				 * Prefix of Phone Number. Defaults to '+'. If phone number is blank, prefix will be returned as blank.
				 */
				prefix?: {
					/**
					 * example:
					 * +
					 */
					value?: string;
				};
				/**
				 * Area Code of Phone Number. Default to '065'. If phone number is blank, code will be returned as blank.
				 */
				areacode?: {
					/**
					 * example:
					 * 65
					 */
					value?: string;
				};
				/**
				 * Phone Number.
				 */
				nbr?: {
					/**
					 * example:
					 * 66132665
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Marital
			 * Marital Status of Person.
			 *
			 * * '1' - SINGLE
			 * * '2' - MARRIED
			 * * '3' - WIDOWED
			 * * '5' - DIVORCED
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 * example:
			 * [object Object]
			 */
			marital?: {
				/**
				 * example:
				 * 2
				 */
				code?: "1" | "2" | "3" | "5";
				/**
				 * example:
				 * MARRIED
				 */
				desc?: "SINGLE" | "MARRIED" | "WIDOWED" | "DIVORCED";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MarriageCertNo
			 * Certificate number of the latest marriage.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 * example:
			 * [object Object]
			 */
			marriagecertno?: {
				/**
				 * Value of data field.
				 * example:
				 * 123456789012345
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * CountryOfMarriage
			 * Country of the latest marriage.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 * example:
			 * [object Object]
			 */
			countryofmarriage?: {
				/**
				 * example:
				 * SG
				 */
				code?: string;
				/**
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * MarriageDate
			 * Latest Marriage Date of Person.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 *
			 * example:
			 * [object Object]
			 */
			marriagedate?: {
				/**
				 * Value of data field.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 2007-01-01
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * DivorceDate
			 * Last Divorce Date of Person.
			 *
			 *
			 * **Note:** This field must be made **editable** on your digital service form even though `source` is '1' (Government Verified).
			 *
			 * example:
			 * [object Object]
			 */
			divorcedate?: {
				/**
				 * Value of data field.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 *
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * example:
			 * [object Object]
			 */
			childrenbirthrecords?: Array<{
				/**
				 * Birth certificate number of child.
				 */
				birthcertno?: {
					/**
					 * example:
					 * S5562882C
					 */
					value?: string;
				};
				/**
				 * Full Name of child
				 */
				name?: {
					/**
					 * example:
					 * Jo Tan Pei Ni
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin name of child.
				 *
				 * *Presentation Logic - If there is a value to `hanyupinyinname` (i.e. not empty), then `hanyupinyinname` should be displayed in a new line below `name`, and formatted with round brackets i.e. \"(`hanyupinyinname`)\".*
				 */
				hanyupinyinname?: {
					/**
					 * example:
					 * Cheng Pei Ni
					 */
					value?: string;
				};
				/**
				 * Alias name of child.
				 *
				 * *Presentation Logic - If there is a value to `aliasname` (i.e. not empty), then `aliasname` should be displayed in a new line below `hanyupinyinname`, and prefixed with the ''@'' symbol i.e. \"@`aliasname`\".*
				 */
				aliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin Alias name of child.
				 *
				 * *Presentation Logic - If there is a value to `hanyupinyinaliasname` (i.e. not empty), then `hanyupinyinaliasname` should be displayed in a new line below `aliasname`, and prefixed with the ''@'' symbol i.e. \"@`hanyupinyinaliasname`\".*
				 */
				hanyupinyinaliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Married name of child.
				 *
				 * *Presentation Logic - If there is a value to `marriedname` (i.e. not empty), then `marriedname` should be displayed in a new line below `hanyupinyinaliasname`.*
				 */
				marriedname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Sex of child. Possible values:
				 *
				 * * 'F' - Female
				 * * 'M' - Male
				 * * 'U' - Unknown
				 */
				sex?: {
					/**
					 * example:
					 * F
					 */
					code?: "F" | "M" | "U";
					/**
					 * example:
					 * Female
					 */
					desc?: "Female" | "Male" | "Unknown";
				};
				/**
				 * Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 *
				 */
				race?: {
					/**
					 * example:
					 * CN
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * CHINESE
					 */
					desc?: string;
				};
				/**
				 * Secondary Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				secondaryrace?: {
					/**
					 * example:
					 *
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 *
					 */
					desc?: string;
				};
				/**
				 * Dialect of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				dialect?: {
					/**
					 * example:
					 * HK
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * HOKKIEN
					 */
					desc?: string;
				};
				/**
				 * Life Status of child. Possible values:
				 *
				 * * A - ALIVE
				 * * D - DECEASED
				 */
				lifestatus?: {
					/**
					 * example:
					 * A
					 */
					code?: "A" | "D";
					/**
					 * example:
					 * DECEASED
					 */
					desc?: "ALIVE" | "DECEASED";
				};
				/**
				 * Date of Birth of child.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				dob?: {
					/**
					 * example:
					 * 2011-09-10
					 */
					value?: string; // date
				};
				/**
				 * Time of Birth of child.
				 *
				 * Format: HHMM
				 */
				tob?: {
					/**
					 * example:
					 * 0901
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			}>;
			/**
			 * example:
			 * [object Object]
			 */
			sponsoredchildrenrecords?: {
				/**
				 * NRIC of child
				 */
				nric?: {
					/**
					 * example:
					 * S5562882C
					 */
					value?: string;
				};
				/**
				 * Full Name of child
				 */
				name?: {
					/**
					 * example:
					 * Jo Tan Pei Ni
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin name of child.
				 */
				hanyupinyinname?: {
					/**
					 * example:
					 * Cheng Pei Ni
					 */
					value?: string;
				};
				/**
				 * Alias name of child.
				 */
				aliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Han Yu Pin Yin Alias name of child.
				 */
				hanyupinyinaliasname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Married name of child.
				 */
				marriedname?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Sex of child. Possible values:
				 *
				 * * 'F' - Female
				 * * 'M' - Male
				 * * 'U' - Unknown
				 */
				sex?: {
					/**
					 * example:
					 * F
					 */
					code?: "F" | "M" | "U";
					/**
					 * example:
					 * Female
					 */
					desc?: "Female" | "Male" | "Unknown";
				};
				/**
				 * Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				race?: {
					/**
					 * example:
					 * CN
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * CHINESE
					 */
					desc?: string;
				};
				/**
				 * Secondary Race of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				secondaryrace?: {
					/**
					 * example:
					 *
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 *
					 */
					desc?: string;
				};
				/**
				 * Dialect of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				dialect?: {
					/**
					 * example:
					 * HK
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * HOKKIEN
					 */
					desc?: string;
				};
				/**
				 * Date of Birth of child.
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				dob?: {
					/**
					 * example:
					 * 2011-09-10
					 */
					value?: string; // date
				};
				/**
				 * BirthCountry
				 * Country of Birth of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				birthcountry?: {
					/**
					 * example:
					 * SG
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * SINGAPORE
					 */
					desc?: string;
				};
				/**
				 * Life Status of child. Possible values:
				 *
				 * * A - ALIVE
				 * * D - DECEASED
				 */
				lifestatus?: {
					/**
					 * example:
					 * A
					 */
					code?: "A" | "D";
					/**
					 * example:
					 * DECEASED
					 */
					desc?: "ALIVE" | "DECEASED";
				};
				/**
				 * ResidentialStatus
				 * Residential Status of child. Possible values:
				 *
				 * * A - Alien
				 * * C - Citizen
				 * * P - PR
				 * * U - Unknown
				 * * N - NOT APPLICABLE
				 */
				residentialstatus?: {
					/**
					 * example:
					 * C
					 */
					code?: "A" | "C" | "P" | "U" | "N"; // [a-zA-Z]{1}
					/**
					 * example:
					 * Citizen
					 */
					desc?: "Alien" | "Citizen" | "PR" | "Unknown" | "NOT APPLICABLE";
				};
				/**
				 * Nationality of child.
				 *
				 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
				 */
				nationality?: {
					/**
					 * example:
					 * SG
					 */
					code?: string; // [a-zA-Z]{2}
					/**
					 * example:
					 * SINGAPORE CITIZEN
					 */
					desc?: string;
				};
				/**
				 * Date granted Singapore Citizenship or Permanant Resident
				 *
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				scprgrantdate?: {
					/**
					 * example:
					 * 2015-06-13
					 */
					value?: string; // date
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * EduLevel
			 * Highest Education Level of Person.
			 *
			 * * '0' - NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY
			 * * '1' - PRIMARY
			 * * '2' - LOWER SECONDARY
			 * * '3' - SECONDARY
			 * * '4' - POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION
			 * * '5' - POLYTECHNIC DIPLOMA
			 * * '6' - PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA
			 * * '7' - BACHELOR'S OR EQUIVALENT
			 * * '8' - POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)
			 * * '9' - MASTER'S AND DOCTORATE OR EQUIVALENT
			 * * 'N' - MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)
			 * example:
			 * [object Object]
			 */
			edulevel?: {
				/**
				 * example:
				 * 7
				 */
				code?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "N";
				/**
				 * example:
				 * BACHELOR'S OR EQUIVALENT
				 */
				desc?: "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY" | "PRIMARY" | "LOWER SECONDARY" | "SECONDARY" | "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION" | "POLYTECHNIC DIPLOMA" | "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA" | "BACHELOR'S OR EQUIVALENT" | "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)" | "MASTER'S AND DOCTORATE OR EQUIVALENT" | "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * GradYear
			 * Year of Graduation of Person. Format: YYYY
			 * example:
			 * [object Object]
			 */
			gradyear?: {
				/**
				 * example:
				 * 2006
				 */
				value?: string; // [0-9]{4}
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * SchoolName
			 * Name of School of Person.
			 * example:
			 * [object Object]
			 */
			schoolname?: {
				/**
				 * Code value of school name.
				 *
				 * **Note:** Code+desc and value are mutually exclusive.
				 * example:
				 * T07GS3011J
				 */
				code?: string;
				/**
				 * Name of school represented by 'code'
				 *
				 * **Note:** Code+desc and value are mutually exclusive.
				 * example:
				 * SIGLAP SECONDARY SCHOOL
				 */
				desc?: string;
				/**
				 * Free text value of school name.
				 *
				 * **Note:** Code+desc and value are mutually exclusive.
				 * example:
				 *
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Occupation
			 * Occupation of Person.
			 * example:
			 * [object Object]
			 */
			occupation?: {
				/**
				 * Code of occupation based on SSOC 2015.
				 *
				 * For full list, refer to SSOC 2015 at https://www.singstat.gov.sg/standards/standards-and-classifications/ssoc.
				 *
				 * For FIN holders, blank will be returned.
				 *
				 * **Note:** Code+Desc and Value are mutually exclusive.
				 * example:
				 * 53201
				 */
				code?: string; // [0-9]{5}
				/**
				 * Description of occupation corresponding to code.
				 *
				 * **Note:** Code+Desc and Value are mutually exclusive.
				 * example:
				 * HEALTHCARE ASSISTANT
				 */
				desc?: string;
				/**
				 * Free text cccupation entered by user
				 * **Note:** Code+Desc and Value are mutually exclusive.
				 * example:
				 *
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Employment
			 * Name of Employer.
			 * example:
			 * [object Object]
			 */
			employment?: {
				/**
				 * example:
				 * ALPHA
				 */
				value?: string;
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassType
			 * Pass type of a FIN holder. <br/>**Note:** Only applies to a foreigner with a valid pass.
			 *
			 * * 'RPass' - Work Permit
			 * * 'SPass' - S Pass
			 * * 'P1Pass' - Employment Pass
			 * * 'P2Pass' - Employment Pass
			 * * 'QPass' - Employment Pass
			 * * 'PEP' - Personalised Employment Pass
			 * * 'WHP' - Work Holiday Pass
			 * * 'TEP' - Training Employment Pass
			 * * 'Entre' - EntrePass
			 * * 'DP' - Dependent Pass
			 * * 'LTVP' - Long Term Visit Pass
			 * * 'LOC' - Letter of Consent
			 * * 'MWP' - Miscellaneous Work Pass
			 * example:
			 * [object Object]
			 */
			passtype?: {
				/**
				 * Value of data field.
				 * example:
				 * RPass
				 */
				code?: "RPass" | "SPass" | "P1Pass" | "P2Pass" | "QPass" | "PEP" | "WHP" | "TEP" | "Entre" | "DP" | "LTVP" | "LOC" | "MWP";
				/**
				 * example:
				 * Work Permit
				 */
				desc?: "Work Permit" | "S Pass" | "Employment Pass" | "Employment Pass" | "Employment Pass" | "Personalised Employment Pass" | "Work Holiday Pass" | "Training Employment Pass" | "EntrePass" | "Dependent Pass" | "Long Term Visit Pass" | "Letter of Consent" | "Miscellaneous Work Pass";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassStatus
			 * Pass status of a FIN holder. <br/>**Note:** Only applies to a foreigner with a valid pass.
			 * *	Live
			 * *	Approved
			 *
			 * example:
			 * [object Object]
			 */
			passstatus?: {
				/**
				 * Value of data field.
				 * example:
				 * Live
				 */
				value?: "Live" | "Approved";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * PassExpiryDate
			 * Pass expiry of a foreigner. <br/>**Note:** Only applies to a foreigner with a valid pass.
			 * example:
			 * [object Object]
			 */
			passexpirydate?: {
				/**
				 * Value of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 * example:
				 * 2022-12-31
				 */
				value?: string; // date
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * EmploymentSector
			 * Employment Sector of a FIN holder.
			 *
			 * **Note:** Only applies to a foreigner with a valid work pass.
			 *
			 * * Construction
			 * * Manufacturing
			 * * Marine Shipyard
			 * * Process
			 * * Services
			 * example:
			 * [object Object]
			 */
			employmentsector?: {
				/**
				 * example:
				 * Manufacturing
				 */
				value?: "Construction" | "Manufacturing" | "Marine Shipyard" | "Process" | "Services";
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * HouseholdIncome
			 * Household Income of Person in SGD.
			 * example:
			 * [object Object]
			 */
			householdincome?: {
				/**
				 * upper bound of the range of household income bracket
				 */
				high?: {
					/**
					 * example:
					 * 5999
					 */
					value?: number;
				};
				/**
				 * lower bound of the range of household income bracket
				 */
				low?: {
					/**
					 * example:
					 * 5000
					 */
					value?: number;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * example:
			 * [object Object]
			 */
			vehicles?: {
				/**
				 * Vehicle Registration Number displayed on the vehicle number plates
				 */
				vehicleno?: {
					/**
					 * example:
					 * SDF1235A
					 */
					value?: string;
				};
				/**
				 * Type of Vehicles such as 'MOTOR CAR', 'STATION /WAGON/JEEP/LAND ROVER'
				 */
				type?: {
					/**
					 * example:
					 * PASSENGER MOTOR CAR
					 */
					value?: string;
				};
				/**
				 * In-Vehicle Unit (IU) number of the device fitted in Singapore-registered vehicles for Electronic Road Pricing (ERP) gantries and Electronic Parking System (EPS) car parks.
				 */
				iulabelno?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Vehicle Make such as 'TOYOTA', 'HONDA', 'AUDI'
				 */
				make?: {
					/**
					 * example:
					 * TOYOTA
					 */
					value?: string;
				};
				/**
				 * Vehicle Model such as 'COROLLA ALTIS CLASSIC 1.6 CVT', 'HRV 1.5 DX CVT'
				 */
				model?: {
					/**
					 * example:
					 * COROLLA ALTIS
					 */
					value?: string;
				};
				/**
				 * Vehicle Chassis Number
				 */
				chassisno?: {
					/**
					 * example:
					 * ZC11S1735800
					 */
					value?: string;
				};
				/**
				 * Vehicle Engine Number
				 */
				engineno?: {
					/**
					 * example:
					 * M13A1837453
					 */
					value?: string;
				};
				/**
				 * Vehicle Motor Number
				 */
				motorno?: {
					/**
					 * example:
					 *
					 */
					value?: string;
				};
				/**
				 * Manufacturing year
				 */
				yearofmanufacture?: {
					/**
					 * example:
					 * 2010
					 */
					value?: string;
				};
				/**
				 * Date when vehicle is registered with LTA. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				firstregistrationdate?: {
					/**
					 * example:
					 * 2010-06-06
					 */
					value?: string; // date
				};
				/**
				 * Date when vehicle is first registered in the country of origin. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				originalregistrationdate?: {
					/**
					 * example:
					 * 2010-06-06
					 */
					value?: string; // date
				};
				/**
				 * Vehicle Certificate of Entitlement (COE) bid category
				 */
				coecategory?: {
					/**
					 * example:
					 * A - CAR UP TO 1600CC & 97KW (130BHP)
					 */
					value?: string;
				};
				/**
				 * Vehicle Certificate of Entitlement (COE) expiry date. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				coeexpirydate?: {
					/**
					 * example:
					 * 2020-06-05
					 */
					value?: string; // date
				};
				/**
				 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				roadtaxexpirydate?: {
					/**
					 * example:
					 * 2020-06-05
					 */
					value?: string; // date
				};
				/**
				 * Actual Quota Premium (QP) amount payable for the COE upon registration, conversion or COE revalidation in Singapore dollars (SGD). For renewal of COE, the value will contain actual PQP paid.
				 */
				quotapremium?: {
					/**
					 * example:
					 * 14000.01
					 */
					value?: number; // double
				};
				/**
				 * Open Market Value is the value of manufacturer invoice price, freight and insurance in Singapore dollars (SGD).
				 */
				openmarketvalue?: {
					/**
					 * example:
					 * 25000.01
					 */
					value?: number; // double
				};
				/**
				 * CO2 emission rate
				 */
				co2emission?: {
					/**
					 * example:
					 * 146.01
					 */
					value?: number; // double
				};
				/**
				 * Status of the Vehicle.
				 *
				 * * 1 - LIVE
				 * * 2 - DE-REGISTERED
				 */
				status?: {
					/**
					 * example:
					 * 1
					 */
					code?: "1" | "2";
					/**
					 * example:
					 * LIVE
					 */
					desc?: "LIVE" | "DE-REGISTERED";
				};
				/**
				 * Vehicle Primary Colour (e.g. BLACK)
				 */
				primarycolour?: {
					/**
					 * example:
					 * BLACK
					 */
					value?: string;
				};
				/**
				 * Vehicle Primary Colour (e.g. WHITE)
				 */
				secondarycolour?: {
					/**
					 * example:
					 * WHITE
					 */
					value?: string;
				};
				/**
				 * Vehicle Attachment 1 (e.g. DISABLED)
				 */
				attachment1?: {
					/**
					 * example:
					 * DISABLED
					 */
					value?: string;
				};
				/**
				 * Vehicle Attachment 2 (e.g. WITH SUN ROOF)
				 */
				attachment2?: {
					/**
					 * example:
					 * WITH SUN ROOF
					 */
					value?: string;
				};
				/**
				 * Vehicle Attachment 3 (e.g. SIDE CURTAIN)
				 */
				attachment3?: {
					/**
					 * example:
					 * SIDE CURTAIN
					 */
					value?: string;
				};
				/**
				 * Vehicle Scheme (e.g. REVISED OFF-PEAK CAR)
				 */
				scheme?: {
					/**
					 * example:
					 * REVISED OFF-PEAK CAR
					 */
					value?: string;
				};
				/**
				 * Total Hydro Carbon (THC) emission rate
				 */
				thcemission?: {
					/**
					 * example:
					 * 1.011001
					 */
					value?: number; // double
				};
				/**
				 * Carbon Monoxide emission rate
				 */
				coemission?: {
					/**
					 * example:
					 * 1.100001
					 */
					value?: number; // double
				};
				/**
				 * Nitrogen Oxide (NOx) emission rate.
				 */
				noxemission?: {
					/**
					 * example:
					 * 0.011001
					 */
					value?: number; // double
				};
				/**
				 * Particulates (PM - Atmospheric Particulate Matter) emission rate.
				 */
				pmemission?: {
					/**
					 * example:
					 * 0.007
					 */
					value?: number; // double
				};
				/**
				 * Engine Capacity in cubic centimeter (cc)
				 */
				enginecapacity?: {
					/**
					 * example:
					 * 1600
					 */
					value?: number;
				};
				/**
				 * Power Rate. Applicable to Electric and Hybrid vehicles powered by electric motors. Unit is Kilowatt.
				 */
				powerrate?: {
					/**
					 * example:
					 * 1.41
					 */
					value?: number; // double
				};
				/**
				 * Effective Date/Time of Ownership. See "date-time" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
				 */
				effectiveownership?: {
					/**
					 * example:
					 * 2010-08-31T20:12:12+08:00
					 */
					value?: string; // date-time
				};
				/**
				 * Propellant (e.g. Compressed Natural Gas, Diesel, Diesel-CNG, Diesel-Electric, Diesel-Electric (Plug-In), Electric, Gas, Liquefied Petroleum Gas (LPG), Petrol, Petrol-CNG, Petrol-Electric, Petrol-Electric (Plug-In), Petrol-LPG
				 */
				propellant?: {
					/**
					 * example:
					 * Compressed Natural Gas
					 */
					value?: string;
				};
				/**
				 * Maximum Unladen Weight in kilograms (kg)
				 */
				maximumunladenweight?: {
					/**
					 * example:
					 * 1500
					 */
					value?: number;
				};
				/**
				 * Maximum Laden Weight in kilograms (kg)
				 */
				maximumladenweight?: {
					/**
					 * example:
					 * 1795
					 */
					value?: number;
				};
				/**
				 * Minimum PARF Benefit in Singapore dollars (SGD).
				 */
				minimumparfbenefit?: {
					/**
					 * example:
					 * 8770.01
					 */
					value?: number; // double
				};
				/**
				 * Number of Transfer
				 */
				nooftransfers?: {
					/**
					 * example:
					 * 2
					 */
					value?: number;
				};
				/**
				 * Vehicle Parking Certificate. Applicable for Heavy Vehicles.
				 */
				vpc?: {
					/**
					 * example:
					 * 1234567890
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
			/**
			 * Driving Licence details of Person.
			 *
			 * example:
			 * [object Object]
			 */
			drivinglicence?: {
				/**
				 * Status of Certificate of Merit. Possible values:
				 *
				 * * Y - Eligible
				 * * N - Not Eligible
				 */
				comstatus?: {
					/**
					 * example:
					 * Y
					 */
					code?: "Y" | "N";
					/**
					 *
					 * example:
					 * Eligible
					 */
					desc?: "Eligible" | "Not Eligible";
				};
				/**
				 * Total Demerit Points
				 */
				totaldemeritpoints?: {
					/**
					 * example:
					 * 0
					 */
					value?: number;
				};
				/**
				 *
				 */
				suspension?: {
					/**
					 * Suspension Start Date
					 */
					startdate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
					/**
					 * Suspension End Date
					 */
					enddate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
				};
				/**
				 *
				 */
				disqualification?: {
					/**
					 * Disqualification Start Date
					 */
					startdate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
					/**
					 * Disqualification End Date
					 */
					enddate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
				};
				/**
				 *
				 */
				revocation?: {
					/**
					 * Revocation Start Date
					 */
					startdate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
					/**
					 * Revocation End Date
					 */
					enddate?: {
						/**
						 * example:
						 *
						 */
						value?: string; // date
					};
				};
				/**
				 * Provisional Driving Licence (PDL)
				 */
				pdl?: {
					/**
					 * Validity of PDL. Possible values:
					 *
					 * * V - Valid
					 * * E - Expired
					 * * I - Invalid
					 * * N - Not Holding PDL
					 */
					validity?: {
						/**
						 * example:
						 * V
						 */
						code?: "V" | "E" | "I" | "N";
						/**
						 *
						 * example:
						 * Valid
						 */
						desc?: "Valid" | "Expired" | "Invalid" | "Not Holding PDL";
					};
					/**
					 * PDL Expiry Date
					 */
					expirydate?: {
						/**
						 * example:
						 * 2020-06-15
						 */
						value?: string; // date
					};
					/**
					 * PDL Classes
					 * example:
					 * [object Object],[object Object]
					 */
					classes?: Array<{
						class?: {
							value?: string;
						};
					}>;
				};
				/**
				 * Qualified Driving Licence (QDL)
				 */
				qdl?: {
					/**
					 * Validity of QDL. Possible values:
					 *
					 * * V - Valid
					 * * E - Expired
					 * * I - Invalid
					 * * N - Not Holding QDL
					 */
					validity?: {
						/**
						 * example:
						 * V
						 */
						code?: "V" | "E" | "I" | "N";
						/**
						 *
						 * example:
						 * validation
						 */
						desc?: "Valid" | "Expired" | "Invalid" | "Not Holding QDL";
					};
					/**
					 * QDL Expiry Date
					 */
					expirydate?: {
						/**
						 * example:
						 * 2020-06-15
						 */
						value?: string; // date
					};
					/**
					 * QDL Classes. Includes Issue Date (e.g. 2B, 2018-01-01)
					 * example:
					 * [object Object],[object Object]
					 */
					classes?: Array<{
						class?: {
							value?: string;
						};
						issuedate?: {
							value?: string; // date
						};
					}>;
				};
				/**
				 * Serial Number of the Photo Card
				 */
				photocardserialno?: {
					/**
					 * example:
					 * 115616
					 */
					value?: string;
				};
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 */
				classification: "C";
				/**
				 * Source of data.
				 *
				 * * '1' - Government-verified
				 * * '2' - User provided
				 * * '3' - Field is Not Applicable to Person
				 * * '4' - Verified by SingPass
				 *
				 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
				 */
				lastupdated: string; // date
				/**
				 * Optional flag to indicate if data is unavalable from data source.
				 *
				 * **NOTE:**
				 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
				 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
				 *   - If data is available from the data source, this property will not be present.
				 *
				 */
				unavailable?: boolean;
			};
		}
		export interface PhoneNumLocal {
			/**
			 * Prefix of Phone Number. Defaults to '+'. If phone number is blank, prefix will be returned as blank.
			 */
			prefix?: {
				/**
				 * example:
				 * +
				 */
				value?: string;
			};
			/**
			 * Area Code of Phone Number. Default to '065'. If phone number is blank, code will be returned as blank.
			 */
			areacode?: {
				/**
				 * example:
				 * 65
				 */
				value?: string;
			};
			/**
			 * Phone Number.
			 */
			nbr?: {
				/**
				 * example:
				 * 66132665
				 */
				value?: string;
			};
		}
		/**
		 * Race
		 * Race of Person.
		 *
		 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
		 */
		export interface Race {
			/**
			 * example:
			 * CN
			 */
			code?: string; // [a-zA-Z]{2}
			/**
			 * example:
			 * CHINESE
			 */
			desc?: string;
		}
		/**
		 * RegAdd
		 * Registered Address of Person
		 *
		 * **Note:**
		 * - address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'Unformatted')
		 * - check the `type` discriminator property to differentiate between the two address formats
		 *
		 */
		export interface Regadd {
		}
		/**
		 * ResidentialStatus
		 * Residential Status of Person. Applicable to Singapore Citizens and Permanent Residents.
		 *
		 *
		 * **Note:** This data item is not applicable for FIN holders i.e. `source` will be '3'.
		 * In such cases, the `code` and `desc` properties will be blank or empty string ("").
		 *
		 * * A - Alien
		 * * C - Citizen
		 * * P - PR
		 * * U - Unknown
		 * * N - NOT APPLICABLE
		 * * &lt; BLANK &gt; (for FIN holders only)
		 */
		export interface Residentialstatus {
			/**
			 * example:
			 * C
			 */
			code?: "A" | "C" | "P" | "U" | "N" | ""; // [a-zA-Z]{1}
			/**
			 * example:
			 * Citizen
			 */
			desc?: "Alien" | "Citizen" | "PR" | "Unknown" | "NOT APPLICABLE" | "";
		}
		/**
		 * SchoolName
		 * Name of School of Person.
		 */
		export interface Schoolname {
			/**
			 * Code value of school name.
			 *
			 * **Note:** Code+desc and value are mutually exclusive.
			 * example:
			 * T07GS3011J
			 */
			code?: string;
			/**
			 * Name of school represented by 'code'
			 *
			 * **Note:** Code+desc and value are mutually exclusive.
			 * example:
			 * SIGLAP SECONDARY SCHOOL
			 */
			desc?: string;
			/**
			 * Free text value of school name.
			 *
			 * **Note:** Code+desc and value are mutually exclusive.
			 * example:
			 *
			 */
			value?: string;
		}
		/**
		 * SecondaryRace
		 * Secondary Race of Person.
		 *
		 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
		 */
		export interface Secondaryrace {
			/**
			 *
			 * example:
			 * EU
			 */
			code?: string; // [a-zA-Z]{2}
			/**
			 *
			 * example:
			 * EURASIAN
			 */
			desc?: string;
		}
		/**
		 * Sex
		 * Sex of Person.
		 * * 'F' - Female
		 * * 'M' - Male
		 * * 'U' - Unknown
		 */
		export interface Sex {
			/**
			 * example:
			 * F
			 */
			code?: "F" | "M" | "U";
			/**
			 *
			 * example:
			 * Female
			 */
			desc?: "Female" | "Male" | "Unknown";
		}
		/**
		 * example:
		 * [object Object]
		 */
		export interface Sponsoredchildrenrecords {
			/**
			 * NRIC of child
			 */
			nric?: {
				/**
				 * example:
				 * S5562882C
				 */
				value?: string;
			};
			/**
			 * Full Name of child
			 */
			name?: {
				/**
				 * example:
				 * Jo Tan Pei Ni
				 */
				value?: string;
			};
			/**
			 * Han Yu Pin Yin name of child.
			 */
			hanyupinyinname?: {
				/**
				 * example:
				 * Cheng Pei Ni
				 */
				value?: string;
			};
			/**
			 * Alias name of child.
			 */
			aliasname?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Han Yu Pin Yin Alias name of child.
			 */
			hanyupinyinaliasname?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Married name of child.
			 */
			marriedname?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Sex of child. Possible values:
			 *
			 * * 'F' - Female
			 * * 'M' - Male
			 * * 'U' - Unknown
			 */
			sex?: {
				/**
				 * example:
				 * F
				 */
				code?: "F" | "M" | "U";
				/**
				 * example:
				 * Female
				 */
				desc?: "Female" | "Male" | "Unknown";
			};
			/**
			 * Race of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 */
			race?: {
				/**
				 * example:
				 * CN
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * CHINESE
				 */
				desc?: string;
			};
			/**
			 * Secondary Race of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 */
			secondaryrace?: {
				/**
				 * example:
				 *
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 *
				 */
				desc?: string;
			};
			/**
			 * Dialect of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 */
			dialect?: {
				/**
				 * example:
				 * HK
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * HOKKIEN
				 */
				desc?: string;
			};
			/**
			 * Date of Birth of child.
			 *
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			dob?: {
				/**
				 * example:
				 * 2011-09-10
				 */
				value?: string; // date
			};
			/**
			 * BirthCountry
			 * Country of Birth of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 */
			birthcountry?: {
				/**
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
			};
			/**
			 * Life Status of child. Possible values:
			 *
			 * * A - ALIVE
			 * * D - DECEASED
			 */
			lifestatus?: {
				/**
				 * example:
				 * A
				 */
				code?: "A" | "D";
				/**
				 * example:
				 * DECEASED
				 */
				desc?: "ALIVE" | "DECEASED";
			};
			/**
			 * ResidentialStatus
			 * Residential Status of child. Possible values:
			 *
			 * * A - Alien
			 * * C - Citizen
			 * * P - PR
			 * * U - Unknown
			 * * N - NOT APPLICABLE
			 */
			residentialstatus?: {
				/**
				 * example:
				 * C
				 */
				code?: "A" | "C" | "P" | "U" | "N"; // [a-zA-Z]{1}
				/**
				 * example:
				 * Citizen
				 */
				desc?: "Alien" | "Citizen" | "PR" | "Unknown" | "NOT APPLICABLE";
			};
			/**
			 * Nationality of child.
			 *
			 * Refer to the [Code reference tables](#section/Support) in the Support section for list of possible values.
			 */
			nationality?: {
				/**
				 * example:
				 * SG
				 */
				code?: string; // [a-zA-Z]{2}
				/**
				 * example:
				 * SINGAPORE CITIZEN
				 */
				desc?: string;
			};
			/**
			 * Date granted Singapore Citizenship or Permanant Resident
			 *
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			scprgrantdate?: {
				/**
				 * example:
				 * 2015-06-13
				 */
				value?: string; // date
			};
			/**
			 * Data classification of data field. Default 'C' - Confidential.
			 */
			classification: "C";
			/**
			 * Source of data.
			 *
			 * * '1' - Government-verified
			 * * '2' - User provided
			 * * '3' - Field is Not Applicable to Person
			 * * '4' - Verified by SingPass
			 *
			 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
			 */
			source: "1" | "2" | "3" | "4";
			/**
			 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			lastupdated: string; // date
			/**
			 * Optional flag to indicate if data is unavalable from data source.
			 *
			 * **NOTE:**
			 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
			 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
			 *   - If data is available from the data source, this property will not be present.
			 *
			 */
			unavailable?: boolean;
		}
		export interface TokenError {
			message?: string;
			code?: string;
		}
		/**
		 * UINFIN
		 * Singapore issued identification number of the Person.
		 */
		export interface Uinfin {
			/**
			 * value of the field, should be displayed as it is.
			 * example:
			 * S1111111D
			 */
			value?: string;
		}
		/**
		 * example:
		 * [object Object]
		 */
		export interface Vehicles {
			/**
			 * Vehicle Registration Number displayed on the vehicle number plates
			 */
			vehicleno?: {
				/**
				 * example:
				 * SDF1235A
				 */
				value?: string;
			};
			/**
			 * Type of Vehicles such as 'MOTOR CAR', 'STATION /WAGON/JEEP/LAND ROVER'
			 */
			type?: {
				/**
				 * example:
				 * PASSENGER MOTOR CAR
				 */
				value?: string;
			};
			/**
			 * In-Vehicle Unit (IU) number of the device fitted in Singapore-registered vehicles for Electronic Road Pricing (ERP) gantries and Electronic Parking System (EPS) car parks.
			 */
			iulabelno?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Vehicle Make such as 'TOYOTA', 'HONDA', 'AUDI'
			 */
			make?: {
				/**
				 * example:
				 * TOYOTA
				 */
				value?: string;
			};
			/**
			 * Vehicle Model such as 'COROLLA ALTIS CLASSIC 1.6 CVT', 'HRV 1.5 DX CVT'
			 */
			model?: {
				/**
				 * example:
				 * COROLLA ALTIS
				 */
				value?: string;
			};
			/**
			 * Vehicle Chassis Number
			 */
			chassisno?: {
				/**
				 * example:
				 * ZC11S1735800
				 */
				value?: string;
			};
			/**
			 * Vehicle Engine Number
			 */
			engineno?: {
				/**
				 * example:
				 * M13A1837453
				 */
				value?: string;
			};
			/**
			 * Vehicle Motor Number
			 */
			motorno?: {
				/**
				 * example:
				 *
				 */
				value?: string;
			};
			/**
			 * Manufacturing year
			 */
			yearofmanufacture?: {
				/**
				 * example:
				 * 2010
				 */
				value?: string;
			};
			/**
			 * Date when vehicle is registered with LTA. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
			 */
			firstregistrationdate?: {
				/**
				 * example:
				 * 2010-06-06
				 */
				value?: string; // date
			};
			/**
			 * Date when vehicle is first registered in the country of origin. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
			 */
			originalregistrationdate?: {
				/**
				 * example:
				 * 2010-06-06
				 */
				value?: string; // date
			};
			/**
			 * Vehicle Certificate of Entitlement (COE) bid category
			 */
			coecategory?: {
				/**
				 * example:
				 * A - CAR UP TO 1600CC & 97KW (130BHP)
				 */
				value?: string;
			};
			/**
			 * Vehicle Certificate of Entitlement (COE) expiry date. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
			 */
			coeexpirydate?: {
				/**
				 * example:
				 * 2020-06-05
				 */
				value?: string; // date
			};
			/**
			 * See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
			 */
			roadtaxexpirydate?: {
				/**
				 * example:
				 * 2020-06-05
				 */
				value?: string; // date
			};
			/**
			 * Actual Quota Premium (QP) amount payable for the COE upon registration, conversion or COE revalidation in Singapore dollars (SGD). For renewal of COE, the value will contain actual PQP paid.
			 */
			quotapremium?: {
				/**
				 * example:
				 * 14000.01
				 */
				value?: number; // double
			};
			/**
			 * Open Market Value is the value of manufacturer invoice price, freight and insurance in Singapore dollars (SGD).
			 */
			openmarketvalue?: {
				/**
				 * example:
				 * 25000.01
				 */
				value?: number; // double
			};
			/**
			 * CO2 emission rate
			 */
			co2emission?: {
				/**
				 * example:
				 * 146.01
				 */
				value?: number; // double
			};
			/**
			 * Status of the Vehicle.
			 *
			 * * 1 - LIVE
			 * * 2 - DE-REGISTERED
			 */
			status?: {
				/**
				 * example:
				 * 1
				 */
				code?: "1" | "2";
				/**
				 * example:
				 * LIVE
				 */
				desc?: "LIVE" | "DE-REGISTERED";
			};
			/**
			 * Vehicle Primary Colour (e.g. BLACK)
			 */
			primarycolour?: {
				/**
				 * example:
				 * BLACK
				 */
				value?: string;
			};
			/**
			 * Vehicle Primary Colour (e.g. WHITE)
			 */
			secondarycolour?: {
				/**
				 * example:
				 * WHITE
				 */
				value?: string;
			};
			/**
			 * Vehicle Attachment 1 (e.g. DISABLED)
			 */
			attachment1?: {
				/**
				 * example:
				 * DISABLED
				 */
				value?: string;
			};
			/**
			 * Vehicle Attachment 2 (e.g. WITH SUN ROOF)
			 */
			attachment2?: {
				/**
				 * example:
				 * WITH SUN ROOF
				 */
				value?: string;
			};
			/**
			 * Vehicle Attachment 3 (e.g. SIDE CURTAIN)
			 */
			attachment3?: {
				/**
				 * example:
				 * SIDE CURTAIN
				 */
				value?: string;
			};
			/**
			 * Vehicle Scheme (e.g. REVISED OFF-PEAK CAR)
			 */
			scheme?: {
				/**
				 * example:
				 * REVISED OFF-PEAK CAR
				 */
				value?: string;
			};
			/**
			 * Total Hydro Carbon (THC) emission rate
			 */
			thcemission?: {
				/**
				 * example:
				 * 1.011001
				 */
				value?: number; // double
			};
			/**
			 * Carbon Monoxide emission rate
			 */
			coemission?: {
				/**
				 * example:
				 * 1.100001
				 */
				value?: number; // double
			};
			/**
			 * Nitrogen Oxide (NOx) emission rate.
			 */
			noxemission?: {
				/**
				 * example:
				 * 0.011001
				 */
				value?: number; // double
			};
			/**
			 * Particulates (PM - Atmospheric Particulate Matter) emission rate.
			 */
			pmemission?: {
				/**
				 * example:
				 * 0.007
				 */
				value?: number; // double
			};
			/**
			 * Engine Capacity in cubic centimeter (cc)
			 */
			enginecapacity?: {
				/**
				 * example:
				 * 1600
				 */
				value?: number;
			};
			/**
			 * Power Rate. Applicable to Electric and Hybrid vehicles powered by electric motors. Unit is Kilowatt.
			 */
			powerrate?: {
				/**
				 * example:
				 * 1.41
				 */
				value?: number; // double
			};
			/**
			 * Effective Date/Time of Ownership. See "date-time" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14'
			 */
			effectiveownership?: {
				/**
				 * example:
				 * 2010-08-31T20:12:12+08:00
				 */
				value?: string; // date-time
			};
			/**
			 * Propellant (e.g. Compressed Natural Gas, Diesel, Diesel-CNG, Diesel-Electric, Diesel-Electric (Plug-In), Electric, Gas, Liquefied Petroleum Gas (LPG), Petrol, Petrol-CNG, Petrol-Electric, Petrol-Electric (Plug-In), Petrol-LPG
			 */
			propellant?: {
				/**
				 * example:
				 * Compressed Natural Gas
				 */
				value?: string;
			};
			/**
			 * Maximum Unladen Weight in kilograms (kg)
			 */
			maximumunladenweight?: {
				/**
				 * example:
				 * 1500
				 */
				value?: number;
			};
			/**
			 * Maximum Laden Weight in kilograms (kg)
			 */
			maximumladenweight?: {
				/**
				 * example:
				 * 1795
				 */
				value?: number;
			};
			/**
			 * Minimum PARF Benefit in Singapore dollars (SGD).
			 */
			minimumparfbenefit?: {
				/**
				 * example:
				 * 8770.01
				 */
				value?: number; // double
			};
			/**
			 * Number of Transfer
			 */
			nooftransfers?: {
				/**
				 * example:
				 * 2
				 */
				value?: number;
			};
			/**
			 * Vehicle Parking Certificate. Applicable for Heavy Vehicles.
			 */
			vpc?: {
				/**
				 * example:
				 * 1234567890
				 */
				value?: string;
			};
			/**
			 * Data classification of data field. Default 'C' - Confidential.
			 */
			classification: "C";
			/**
			 * Source of data.
			 *
			 * * '1' - Government-verified
			 * * '2' - User provided
			 * * '3' - Field is Not Applicable to Person
			 * * '4' - Verified by SingPass
			 *
			 * **Note:** All Government-verified fields must be **non-editable** on your digital service form (some exceptions apply - see individual field descriptions).
			 */
			source: "1" | "2" | "3" | "4";
			/**
			 * Last updated date of data field. See "full-date" in http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14
			 */
			lastupdated: string; // date
			/**
			 * Optional flag to indicate if data is unavalable from data source.
			 *
			 * **NOTE:**
			 *   - This optional property will be only present with value `true` if there is no data available from the data source; i.e. record not found.
			 *   - When this flag is `true`, no other data attributes will be present (other than `classification`, `source`, and `lastupdated`).
			 *   - If data is available from the data source, this property will not be present.
			 *
			 */
			unavailable?: boolean;
		}
	}
}
declare namespace Paths {
	namespace Getauthorise {
		namespace Parameters {
			/**
			 * example:
			 * name,hanyupinyinname
			 */
			export type Attributes = string[];
			export type Authmode = "SINGPASS" | "MOBILEID";
			/**
			 * example:
			 * STG-180099999K-TEST01
			 */
			export type ClientId = string;
			export type Purpose = string;
			export type RedirectUri = string;
			export type ResponseType = string;
			export type SpEsvcid = string;
			export type State = string;
		}
		export interface QueryParameters {
			authmode?: Parameters.Authmode;
			purpose: Parameters.Purpose;
			response_type?: Parameters.ResponseType;
			attributes: Parameters.Attributes;
			state: Parameters.State;
			redirect_uri: Parameters.RedirectUri;
			client_id: Parameters.ClientId;
			sp_esvcid: Parameters.SpEsvcid;
		}
	}
	namespace Getperson {
		export interface HeaderParameters {
			Authorization: Parameters.Authorization;
		}
		namespace Parameters {
			/**
			 * example:
			 * name,hanyupinyinname
			 */
			export type Attributes = string[];
			export type Authorization = string;
			/**
			 * example:
			 * STG-180099999K-TEST01
			 */
			export type ClientId = string;
			export type TxnNo = string;
			/**
			 * example:
			 * S9203266C
			 */
			export type Uinfin = string;
		}
		export interface PathParameters {
			uinfin: Parameters.Uinfin;
		}
		export interface QueryParameters {
			txn_no?: Parameters.TxnNo;
			attributes: Parameters.Attributes;
			client_id: Parameters.ClientId;
		}
		namespace Responses {
			export type $200 = Components.Schemas.Person;
			export type $401 = Components.Schemas.Error;
			export type $403 = Components.Schemas.Error;
			export type $404 = Components.Schemas.Error;
		}
	}
	namespace Getpersonbasic {
		export interface HeaderParameters {
			Authorization: Parameters.Authorization;
		}
		namespace Parameters {
			/**
			 * example:
			 * name,hanyupinyinname
			 */
			export type Attributes = string[];
			export type Authorization = string;
			export type SpEsvcid = string;
			export type TxnNo = string;
			/**
			 * example:
			 * S9203266C
			 */
			export type Uinfin = string;
		}
		export interface PathParameters {
			uinfin: Parameters.Uinfin;
		}
		export interface QueryParameters {
			sp_esvcid: Parameters.SpEsvcid;
			txn_no?: Parameters.TxnNo;
			attributes?: Parameters.Attributes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.PersonBasic;
			export type $401 = Components.Schemas.Error;
			export type $403 = Components.Schemas.Error;
			export type $404 = Components.Schemas.Error;
			export type $428 = Components.Schemas.Error;
			export type Default = Components.Schemas.Error;
		}
	}
	namespace Getpersonsample {
		namespace Parameters {
			/**
			 * example:
			 * name,hanyupinyinname
			 */
			export type Attributes = string[];
			/**
			 * example:
			 * S9203266C
			 */
			export type Uinfin = string;
		}
		export interface PathParameters {
			uinfin: Parameters.Uinfin;
		}
		export interface QueryParameters {
			attributes?: Parameters.Attributes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.Person;
		}
	}
	namespace Gettoken {
		export interface HeaderParameters {
			Authorization: Parameters.Authorization;
		}
		namespace Parameters {
			export type Authorization = string;
		}
		namespace Responses {
			export type $200 = Components.Schemas.AuthTokenResponse;
			export type $400 = Components.Schemas.TokenError;
			export type $401 = Components.Schemas.TokenError;
		}
	}
}

export { Components, Paths };
