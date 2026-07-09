/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2026-07-06
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================

export declare namespace MyInfoComponentsV4 {
	export namespace Schemas {
		/**
		 * example:
		 * {
		 *   "classification": "C",
		 *   "source": "1",
		 *   "lastupdated": "2019-03-26"
		 * }
		 */
		export interface Meta {
			/**
			 * Data classification of data field. Default 'C' - Confidential.
			 * example:
			 * C
			 */
			classification: string;
			/**
			 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
			 * example:
			 * 2019-03-26
			 */
			lastupdated: string; // date
			/**
			 * Source of data.
			 *
			 * - '1': Government-verified
			 * - '2': User provided
			 * - '3': Not Applicable (applies only to Person data, not Entity data)
			 * - '4': Verified by SingPass
			 * example:
			 * 1
			 */
			source: "1" | "2" | "3" | "4";
		}
		/**
		 * Person instance's details
		 */
		export interface Person {
			/**
			 * Academic qualifications achieved.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "certificates": [
			 *     {
			 *       "name": {
			 *         "value": "nus.opencert"
			 *       },
			 *       "content": {
			 *         "value": "base64-string"
			 *       },
			 *       "opencertificate": {
			 *         "id": {
			 *           "value": "100000000343840"
			 *         },
			 *         "primary": {
			 *           "value": true
			 *         }
			 *       },
			 *       "opencertificateindicator": {
			 *         "value": true
			 *       }
			 *     }
			 *   ],
			 *   "transcripts": [
			 *     {
			 *       "name": {
			 *         "value": "SINGAPORE-CAMBRIDGE GENERAL CERTIFICATE OF EDUCATION ORDINARY LEVEL"
			 *       },
			 *       "yearattained": {
			 *         "value": "2018"
			 *       },
			 *       "results": [
			 *         {
			 *           "subject": {
			 *             "value": "English Language"
			 *           },
			 *           "level": {
			 *             "value": "Ordinary"
			 *           },
			 *           "grade": {
			 *             "value": "A"
			 *           },
			 *           "subsubject": {
			 *             "value": "SPECIAL PAPER"
			 *           },
			 *           "subgrade": {
			 *             "value": "One"
			 *           }
			 *         }
			 *       ],
			 *       "explanatorynotes": {
			 *         "value": "https://public.cloud.myinfo.gov.sg/myinfo/spm/seab-explanatory-notes/SEAB_Cert_A.html"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			academicqualifications?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Electronic certificates uploaded.
				 * example:
				 * {
				 *   "name": {
				 *     "value": "nus.opencert"
				 *   },
				 *   "content": {
				 *     "value": "base64-string"
				 *   },
				 *   "opencertificate": {
				 *     "id": {
				 *       "value": 100000000343840
				 *     },
				 *     "primary": {
				 *       "value": true
				 *     }
				 *   },
				 *   "opencertificateindicator": {
				 *     "value": true
				 *   }
				 * }
				 */
				certificates?:
					| {
							/**
							 * File content of the electronic certificate, Base64 encoded.
							 */
							content?: {
								value?: string;
							};
							/**
							 * File name of the electronic certificate.
							 */
							name?: {
								value?: string;
							};
							/**
							 * Open Certificate Information.
							 *
							 * Note: The test environment for OpenCert is at https://dev.opencerts.io/
							 * while production is at https://opencerts.io/
							 */
							opencertificate?: {
								id?: {
									value?: string;
								};
								primary?: {
									value?: boolean;
								};
							};
							/**
							 * Indicate whether this file is open certificate.
							 */
							opencertificateindicator?: {
								value?: boolean;
							};
					  }[]
					| null;
				/**
				 * Transcript of qualification.
				 */
				transcripts?:
					| {
							/**
							 * Explanatory Notes. For an example, see https://public.cloud.myinfo.gov.sg/myinfo/spm/seab-explanatory-notes/SEAB_Cert_A.html
							 * example:
							 * https://public.cloud.myinfo.gov.sg/myinfo/spm/seab-explanatory-notes/SEAB_Cert_A.html
							 */
							explanatorynotes?: {
								value?: string;
							};
							/**
							 * Qualification's Name.
							 */
							name?: {
								value?: string;
							};
							/**
							 * Array of results for the qualification.
							 */
							results?: {
								/**
								 * Grade attained.
								 */
								grade?: {
									value?: string;
								};
								/**
								 * Level of subject taken.
								 */
								level?: {
									value?: string;
								};
								/**
								 * Optional grade attained for subSubject.
								 */
								subgrade?: {
									value?: string;
								};
								/**
								 * Subject taken.
								 */
								subject?: {
									value?: string;
								};
								/**
								 * Optional Sub Subject taken.
								 */
								subsubject?: {
									value?: string;
								};
							}[];
							/**
							 * Year this qualification was attained. See "date-fullyear" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 * example:
							 * 2019
							 */
							yearattained?: {
								value?: string; // [0-9]{4}
							};
					  }[]
					| null;
			};
			/**
			 * Alias name of the Person
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TRICIA TAN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			aliasname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * TRICIA TAN XIAO HUI
				 */
				value?: string;
			};
			/**
			 * Country/Place of Birth of Person.
			 *
			 * Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SINGAPORE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			birthcountry?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * SG
				 *
				 */
				code?: string; // ^(?:[A-Za-z]{2})?$
				/**
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
			};
			/**
			 * Community Health Assist Scheme (CHAS) card details - Card Type, Date of Issue, Date of Expiry
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "cardtype": {
			 *     "code": "C",
			 *     "desc": "Green"
			 *   },
			 *   "indicator": {
			 *     "code": "C",
			 *     "desc": "Green"
			 *   },
			 *   "expirydate": {
			 *     "value": "2020-06-15"
			 *   },
			 *   "issuedate": {
			 *     "value": "2020-06-15"
			 *   },
			 *   "lastupdated": "2019-03-26",
			 *   "name": {
			 *     "value": "TAN XIAO HUI"
			 *   },
			 *   "classification": "C",
			 *   "source": "1"
			 * }
			 */
			chas?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * CHAS Card Type.
				 */
				cardtype?: {
					code?: "A" | "B" | "C" | "NA";
					desc?: string;
				};
				/**
				 * CHAS Expiry Date. Value of data field in YYYY-MM-DD format.
				 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				expirydate?: {
					value?: string; // date
				};
				/**
				 * CHAS Indicator.
				 */
				indicator?: {
					code?: "PGA" | "PGB" | "PGC" | "MGA" | "MGB" | "MGC" | "PG" | "MG" | "A" | "B" | "C" | "NA";
					desc?: string;
				};
				/**
				 * CHAS Issue Date. Value of data field in YYYY-MM-DD format.
				 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				issuedate?: {
					value?: string; // date
				};
				/**
				 * Full Name of the Person.
				 */
				name?: {
					value?: string;
				};
			};
			/**
			 * This refers to only local registered birth records (based on ICA’s electronic Birth Certificate Records from 1985 onwards).
			 * This includes adoption of locally registered child.
			 * For child below 21, the child’s Birth Cert No, Name, Sex, Race, Dialect, Date of Birth and Time of Birth will be shown.
			 * For child above 21, only the child’s Birth Cert Number will be shown.
			 */
			childrenbirthrecords?: any;
			/**
			 * Country/Place of the latest marriage.
			 * Note: This field must be made editable on your digital service form even though
			 * source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SINGAPORE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			countryofmarriage?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The 2-character country code.
				 * example:
				 * SG
				 */
				code?: string;
				/**
				 * The full name of the country.
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
			};
			/**
			 * Dialect of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SWISS GERMAN",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			dialect?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * SG
				 */
				code?: string; // ^(?:[A-Za-z]{2})?$
				/**
				 * example:
				 * SWISS GERMAN
				 */
				desc?: string;
			};
			/**
			 * Last Divorce Date of Person.
			 * Note: This field must be made editable on your digital service form even though
			 * source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2018-01-01",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			divorcedate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				value?: string; // date
			};
			/**
			 * Date of Birth of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "1958-05-17",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			dob?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field. Format can be one of the below (with reference to https://datatracker.ietf.org/doc/html/rfc3339#section-5.6):
				 *
				 * - full-date (YYYY-MM-DD)
				 * - date-fullyear "-" date-month (YYYY-MM)
				 * - date-fullyear (YYYY)
				 * example:
				 * 1958-05-17
				 * 1958-05
				 * 1958
				 */
				value: string; // date
			};
			/**
			 * Driving Licence details of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "comstatus": {
			 *     "code": "Y",
			 *     "desc": "ELIGIBLE"
			 *   },
			 *   "totaldemeritpoints": {
			 *     "value": 0
			 *   },
			 *   "suspension": {
			 *     "startdate": {
			 *       "value": "1900-01-01"
			 *     },
			 *     "enddate": {
			 *       "value": "1900-01-01"
			 *     }
			 *   },
			 *   "disqualification": {
			 *     "startdate": {
			 *       "value": "1900-01-01"
			 *     },
			 *     "enddate": {
			 *       "value": "1900-01-01"
			 *     }
			 *   },
			 *   "revocation": {
			 *     "startdate": {
			 *       "value": "1900-01-01"
			 *     },
			 *     "enddate": {
			 *       "value": "1900-01-01"
			 *     }
			 *   },
			 *   "pdl": {
			 *     "validity": {
			 *       "code": "V",
			 *       "desc": "VALID"
			 *     },
			 *     "expirydate": {
			 *       "value": "2020-06-15"
			 *     },
			 *     "classes": [
			 *       {
			 *         "class": {
			 *           "value": "2A"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "3A"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4P"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4AP"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "5P"
			 *         }
			 *       }
			 *     ]
			 *   },
			 *   "qdl": {
			 *     "validity": {
			 *       "code": "V",
			 *       "desc": "VALID"
			 *     },
			 *     "expirydate": {
			 *       "value": "2020-06-15"
			 *     },
			 *     "classes": [
			 *       {
			 *         "class": {
			 *           "value": "2A"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "3A"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4P"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4AP"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "5P"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       }
			 *     ]
			 *   },
			 *   "photocardserialno": {
			 *     "value": "115616"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			drivinglicence?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Status of Certificate of Merit. Possible values:
				 *
				 * - 'Y': ELIGIBLE
				 * - 'N': NOT ELIGIBLE
				 * - '': No data yet
				 */
				comstatus?: {
					code?: "Y" | "N" | "";
					desc?: "ELIGIBLE" | "NOT ELIGIBLE" | "";
				};
				/**
				 * Disqualification date
				 */
				disqualification?: {
					/**
					 * End date
					 */
					enddate?: {
						value?: string; // date
					};
					/**
					 * Start date
					 */
					startdate?: {
						value?: string; // date
					};
				};
				/**
				 * Provisional Driving Licence (PDL)
				 */
				pdl?: {
					/**
					 * Licence Classes. Includes Issue Date(e.g. 2B, 2018-01-01)
					 */
					classes?:
						| {
								class?: {
									value?: string;
								};
								issuedate?: {
									value?: string; // date
								};
						  }[]
						| null;
					/**
					 * Licence Expiry Date
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Validity of QDL. Possible values:
					 *
					 * - 'V': VALID
					 * - 'E': EXPIRED
					 * - 'I': INVALID
					 * - 'N': NOT HOLDING
					 * - '': No data yet
					 */
					validity?: {
						code?: string;
						desc?: string;
					};
				};
				/**
				 * Serial Number of the Photo Card
				 */
				photocardserialno?: {
					value?: string;
				};
				/**
				 * Qualified Driving Licence (QDL)
				 */
				qdl?: {
					/**
					 * Licence Classes. Includes Issue Date(e.g. 2B, 2018-01-01)
					 */
					classes?:
						| {
								class?: {
									value?: string;
								};
								issuedate?: {
									value?: string; // date
								};
						  }[]
						| null;
					/**
					 * Licence Expiry Date
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Validity of QDL. Possible values:
					 *
					 * - 'V': VALID
					 * - 'E': EXPIRED
					 * - 'I': INVALID
					 * - 'N': NOT HOLDING
					 * - '': No data yet
					 */
					validity?: {
						code?: string;
						desc?: string;
					};
				};
				/**
				 * Revocation date
				 */
				revocation?: {
					/**
					 * End date
					 */
					enddate?: {
						value?: string; // date
					};
					/**
					 * Start date
					 */
					startdate?: {
						value?: string; // date
					};
				};
				/**
				 * Suspension date
				 */
				suspension?: {
					/**
					 * End date
					 */
					enddate?: {
						value?: string; // date
					};
					/**
					 * Start date
					 */
					startdate?: {
						value?: string; // date
					};
				};
				/**
				 * Total Demerit Points
				 */
				totaldemeritpoints?: {
					value?: number;
				};
			};
			/**
			 * Email Address of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "test@gmail.com",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			email?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Name of Employer.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "ALPHA",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			employment?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Employment Sector of a FIN holder.
			 *
			 * Note: Only applies to a foreigner with a valid work pass.
			 *
			 * Some examples of possible values are:
			 * - MANUFACTURING
			 * - CONSTRUCTION
			 * - RECLAMATION
			 * - SERVICE
			 * - GRI-TECHNOLOGY
			 * - LANDSCAPING
			 * - INCINERATOR PLANT
			 * - MARINE SHIPYSHIPYARD
			 * - PROCESS
			 * - HARBOURCRAFT
			 * - DOMESTIC
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "MANUFACTURING",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			employmentsector?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Han Yu Pin Yin Alias name of the Person.
			 *
			 * Presentation Logic - If there is a value to hanyupinyinaliasname (i.e. not empty),
			 * then hanyupinyinaliasname should be displayed in a new line below aliasname,
			 * and prefixed with the '@' symbol i.e. "@hanyupinyinaliasname".
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TRICIA CHEN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hanyupinyinaliasname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Han Yu Pin Yin name of the Person.
			 *
			 * Presentation Logic - If there is a value to hanyupinyinname (i.e. not empty),
			 * then hanyupinyinname should be displayed in a new line below name, and
			 * formatted with round brackets i.e. "(hanyupinyinname)"
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "CHEN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hanyupinyinname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * HDB Ownership details.
			 * example:
			 * {
			 *   "noofowners": {
			 *     "value": 2
			 *   },
			 *   "address": {
			 *     "type": "SG",
			 *     "block": {
			 *       "value": "548"
			 *     },
			 *     "building": {
			 *       "value": ""
			 *     },
			 *     "floor": {
			 *       "value": "09"
			 *     },
			 *     "unit": {
			 *       "value": "128"
			 *     },
			 *     "street": {
			 *       "value": "BEDOK NORTH AVENUE 1"
			 *     },
			 *     "postal": {
			 *       "value": "460548"
			 *     },
			 *     "country": {
			 *       "code": "SG",
			 *       "desc": "SINGAPORE"
			 *     }
			 *   },
			 *   "hdbtype": {
			 *     "code": "112",
			 *     "desc": "2-ROOM FLAT (HDB)"
			 *   },
			 *   "leasecommencementdate": {
			 *     "value": "2008-06-13"
			 *   },
			 *   "termoflease": {
			 *     "value": 99
			 *   },
			 *   "dateofpurchase": {
			 *     "value": "2008-06-13"
			 *   },
			 *   "dateofownershiptransfer": {
			 *     "value": "2018-06-13"
			 *   },
			 *   "loangranted": {
			 *     "value": 310000.01
			 *   },
			 *   "originalloanrepayment": {
			 *     "value": 25
			 *   },
			 *   "balanceloanrepayment": {
			 *     "years": {
			 *       "value": 2
			 *     },
			 *     "months": {
			 *       "value": 6
			 *     }
			 *   },
			 *   "outstandingloanbalance": {
			 *     "value": 50000.01
			 *   },
			 *   "monthlyloaninstalment": {
			 *     "value": 1000.01
			 *   },
			 *   "outstandinginstalment": {
			 *     "value": 1000.01
			 *   },
			 *   "purchaseprice": {
			 *     "value": 1000.01
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hdbownership?:
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * SG
						 * Address details (Singapore Format).
						 */
						address?: {
							/**
							 * Block/House of Address.
							 */
							block?: {
								value?: string;
							};
							/**
							 * Building of Address.
							 */
							building?: {
								value?: string;
							};
							/**
							 * Country/Place of Address. For AddressSG this will always be 'SG'.
							 */
							country?: {
								code?: string;
								desc?: string;
							};
							/**
							 * Floor of Address.
							 */
							floor?: {
								value?: string;
							};
							/**
							 * Postal Code of Address.
							 */
							postal?: {
								value?: string;
							};
							/**
							 * Street of Address.
							 */
							street?: {
								value?: string;
							};
							/**
							 * Type of Address (SG or UNFORMATTED for non SG).
							 */
							type?: "SG";
							/**
							 * Unit of Address.
							 */
							unit?: {
								value?: string;
							};
						};
						balanceloanrepayment?: {
							months?: {
								value?: number; // int64
							};
							years?: {
								value?: number; // int64
							};
						};
						dateofownershiptransfer?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						dateofpurchase?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						/**
						 * HDB Ownership details.
						 */
						hdbtype?: {
							code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
							desc?:
								| "1-ROOM FLAT (HDB)"
								| "2-ROOM FLAT (HDB)"
								| "3-ROOM FLAT (HDB)"
								| "4-ROOM FLAT (HDB)"
								| "5-ROOM FLAT (HDB)"
								| "EXECUTIVE FLAT (HDB)"
								| "STUDIO APARTMENT (HDB)";
						};
						leasecommencementdate?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						loangranted?: {
							value?: number; // double
						};
						monthlyloaninstalment?: {
							value?: number; // double
						};
						noofowners?: {
							value?: number; // int64
						};
						originalloanrepayment?: {
							value?: number; // int64
						};
						outstandinginstalment?: {
							value?: number; // double
						};
						outstandingloanbalance?: {
							value?: number; // double
						};
						purchaseprice?: {
							value?: number; // double
						};
						termoflease?: {
							value?: number; // int64
						};
				  }[]
				| null;
			/**
			 * Flat Type of the HDB flat.
			 * Note 1: that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat,
			 * Executive Condominium and Shophouse.
			 * Note 2: If housingtype is available, this value will be blank.
			 * Note 3: If housingtype & hdbtype are unavailable, make this field user editable.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "112",
			 *   "desc": "2-ROOM FLAT (HDB)",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hdbtype?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * 112
				 */
				code?: "111" | "112" | "113" | "114" | "115" | "116" | "118" | "";
				/**
				 * example:
				 * 2-ROOM FLAT (HDB)
				 */
				desc?:
					| "1-ROOM FLAT (HDB)"
					| "2-ROOM FLAT (HDB)"
					| "3-ROOM FLAT (HDB)"
					| "4-ROOM FLAT (HDB)"
					| "5-ROOM FLAT (HDB)"
					| "EXECUTIVE FLAT (HDB)"
					| "STUDIO APARTMENT (HDB)"
					| "";
			};
			/**
			 * Housing Type of Person (non-HDB only).
			 * Note 1: If hdbtype is available, this value will be blank.
			 * Note 2: If housingtype & hdbtype are unavailable, make this field user editable.
			 * Refer to hdbtype for detailed HDB type.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "123",
			 *   "desc": "TERRACE HOUSE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			housingtype?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * 123
				 */
				code?: "121" | "122" | "123" | "131" | "132" | "139" | "";
				/**
				 * example:
				 * TERRACE HOUSE
				 */
				desc?:
					| "DETACHED HOUSE"
					| "SEMI-DETACHED HOUSE"
					| "TERRACE HOUSE"
					| "CONDOMINIUM"
					| "EXECUTIVE CONDOMINIUM"
					| "APARTMENT"
					| "";
			};
			/**
			 * LTA vocational licence.
			 * example:
			 * {
			 *   "tdvl": {
			 *     "licencename": {
			 *       "value": "TAXI DRIVER'S VOCATIONAL LICENCE (TDVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "pdvl": {
			 *     "licencename": {
			 *       "value": "PRIVATE HIRE CAR DRIVER'S VOCATIONAL LICENCE (PDVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "bdvl": {
			 *     "licencename": {
			 *       "value": "BUS DRIVER'S VOCATIONAL LICENCE (BDVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "bavl": {
			 *     "licencename": {
			 *       "value": "BUS ATTENDANT VOCATIONAL LICENCE (BAVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "odvl": {
			 *     "licencename": {
			 *       "value": "OMNIBUS DRIVER'S VOCATIONAL LICENCE"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   }
			 * }
			 */
			ltavocationallicences?: {
				/**
				 * LTAVocationalLicence
				 * Bus Attendant's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "TAXI DRIVER'S VOCATIONAL LICENCE (TDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				bavl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Bus driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "BUS DRIVER'S VOCATIONAL LICENCE (BDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				bdvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Omnibus driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "OMNIBUS DRIVER'S VOCATIONAL LICENCE"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				odvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Private Hire Car driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "PRIVATE HIRE CAR DRIVER'S VOCATIONAL LICENCE (PDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				pdvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Taxi driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "TAXI DRIVER'S VOCATIONAL LICENCE (TDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				tdvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
			};
			/**
			 * Marital Status of Person.
			 * Note: This field must be made editable on your digital service form even though source
			 * is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "2",
			 *   "desc": "MARRIED",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marital?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The code for the marital status.
				 *
				 * - '1': SINGLE
				 * - '2': MARRIED
				 * - '3': WIDOWED
				 * - '5': DIVORCED
				 * - '': No data yet
				 * example:
				 * 2
				 */
				code?: "1" | "2" | "3" | "5" | "";
				/**
				 * The full description of the marital status.
				 * example:
				 * MARRIED
				 */
				desc?: "SINGLE" | "MARRIED" | "WIDOWED" | "DIVORCED" | "";
			};
			/**
			 * Certificate number of the latest marriage.
			 * Note: This field must be made editable on your digital service form even though
			 * source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "123456789012345",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marriagecertno?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 * example:
				 * 123456789012345
				 */
				value?: string;
			};
			/**
			 * Latest Marriage Date of Person.
			 * Note: This field must be made editable on your digital service form even
			 * though source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2007-01-01",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marriagedate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 * example:
				 * 2007-01-01
				 */
				value?: string; // date
			};
			/**
			 * Married name of the Person.
			 *
			 * Presentation Logic - If there is a value to marriedname (i.e. not empty),
			 * then marriedname should be displayed in a new line below hanyupinyinaliasname.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TAN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marriedname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * TAN XIAO HUI
				 */
				value?: string;
			};
			/**
			 * Mobile Number of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "prefix": {
			 *     "value": "+"
			 *   },
			 *   "areacode": {
			 *     "value": "65"
			 *   },
			 *   "nbr": {
			 *     "value": "66132665"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			mobileno?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				areacode?: {
					/**
					 * Area Code of Phone Number. Default to '65'.
					 */
					value?: string;
				};
				nbr?: {
					/**
					 * Phone Number.
					 */
					value?: string;
				};
				prefix?: {
					/**
					 * Prefix of Phone Number. Defaults to '+'.
					 */
					value?: string;
				};
			};
			/**
			 * Full Name of the Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TAN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			name?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value: string;
			};
			/**
			 * Nationality/Citizenship of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SINGAPORE CITIZEN",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			nationality?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * SG
				 */
				code: string; // ^[A-Z]{2}$
				/**
				 * example:
				 * SINGAPORE CITIZEN
				 */
				desc: string;
			};
			/**
			 * Occupation of Person.
			 * For SC/PR holders, blank will be returned.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "Software Engineer",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			occupation?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Free text.
				 */
				value?: string;
			};
			/**
			 * Ownership of Private Property Status of Person (based on IRAS information).
			 * Can be true, false, or null (if data is not available).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": false,
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			ownerprivate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 */
				value?: boolean;
			};
			/**
			 * Masked Singapore issued identification number of the Person.
			 * Only the last 3 digit and ending alphabet will be in clear.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "*****111D",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			partialuinfin?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Pass expiry of a foreigner.
			 * Note: Only applies to a foreigner with a valid pass.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2022-12-31",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passexpirydate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				value?: string; // date
			};
			/**
			 * Passport Expiry Date of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2020-01-01",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passportexpirydate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				value?: string; // date
			};
			/**
			 * Passport Number of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "E35463874W",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passportnumber?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Pass status of a FIN holder.
			 * Note: Only applies to a foreigner with a valid pass.
			 * Note: Currently this field is set as empty string for SG/PR and meta source set to '3'
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "Live",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passstatus?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 */
				value?: "Live" | "Approved" | "";
			};
			/**
			 * Pass type of a FIN holder.
			 * Note: Only applies to a foreigner with a valid pass.
			 * Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "RPass",
			 *   "desc": "Work Permit",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passtype?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 * example:
				 * RPass
				 */
				code?: string;
				/**
				 * example:
				 * Work Permit
				 */
				desc?: string;
			};
			/**
			 * Race of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "CN",
			 *   "desc": "CHINESE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			race?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * CN
				 */
				code: string; // ^[A-Z]{2}$
				/**
				 * example:
				 * CHINESE
				 */
				desc: string;
			};
			/**
			 * Registered Address of Person (including FIN holders).
			 *
			 * Note:
			 * - Address can be either a Singapore address (type: 'SG'), non Singapore address (type: 'UNFORMATTED') or empty type address ('')
			 * - May be unavailable for some FIN holders.
			 * example:
			 * {
			 *   "type": "SG",
			 *   "block": {
			 *     "value": "548"
			 *   },
			 *   "building": {
			 *     "value": ""
			 *   },
			 *   "floor": {
			 *     "value": "09"
			 *   },
			 *   "unit": {
			 *     "value": "128"
			 *   },
			 *   "street": {
			 *     "value": "BEDOK NORTH AVENUE 1"
			 *   },
			 *   "postal": {
			 *     "value": "460548"
			 *   },
			 *   "country": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			regadd?: /**
			 * Registered Address of Person (including FIN holders).
			 *
			 * Note:
			 * - Address can be either a Singapore address (type: 'SG'), non Singapore address (type: 'UNFORMATTED') or empty type address ('')
			 * - May be unavailable for some FIN holders.
			 * example:
			 * {
			 *   "type": "SG",
			 *   "block": {
			 *     "value": "548"
			 *   },
			 *   "building": {
			 *     "value": ""
			 *   },
			 *   "floor": {
			 *     "value": "09"
			 *   },
			 *   "unit": {
			 *     "value": "128"
			 *   },
			 *   "street": {
			 *     "value": "BEDOK NORTH AVENUE 1"
			 *   },
			 *   "postal": {
			 *     "value": "460548"
			 *   },
			 *   "country": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Block/House of Address.
						 */
						block?: {
							value?: string;
						};
						/**
						 * Building of Address.
						 */
						building?: {
							value?: string;
						};
						/**
						 * Country/Place of Address. For AddressSG this will always be 'SG'.
						 */
						country?: {
							code?: string;
							desc?: string;
						};
						/**
						 * Floor of Address.
						 */
						floor?: {
							value?: string;
						};
						/**
						 * Postal Code of Address.
						 */
						postal?: {
							value?: string;
						};
						/**
						 * Street of Address.
						 */
						street?: {
							value?: string;
						};
						/**
						 * Type of Address (SG or UNFORMATTED for non SG).
						 */
						type?: "SG";
						/**
						 * Unit of Address.
						 */
						unit?: {
							value?: string;
						};
				  }
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Unregistered Foreign address line 1
						 */
						line1?: {
							value?: string;
						};
						/**
						 * Unregistered Foreign address line 2
						 */
						line2?: {
							value?: string;
						};
						/**
						 * Type of Address (SG or UNFORMATTED for non SG).
						 */
						type?: "UNFORMATTED";
				  };
			/**
			 * Residential Status of Person. Applicable to Singapore Citizens and Permanent Residents.
			 * Note: This data item is not applicable for FIN holders i.e. source will be '3'.
			 * In such cases, the code and desc properties will be blank or empty string ('').
			 *
			 * Possible values:
			 * - A - ALIEN
			 * - C - CITIZEN
			 * - P - PR
			 * - U - UNKNOWN
			 * - N - NOT APPLICABLE
			 * - < BLANK > - (for FIN holders only)
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "C",
			 *   "desc": "Citizen",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			residentialstatus?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * C
				 */
				code?: "A" | "C" | "P" | "U" | "N" | ""; // ^[A-Za-z]{0,1}$
				/**
				 * example:
				 * Citizen
				 */
				desc?: "ALIEN" | "CITIZEN" | "PR" | "UNKNOWN" | "NOT APPLICABLE" | "";
			};
			/**
			 * Secondary Race of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "EU",
			 *   "desc": "EURASIAN",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			secondaryrace?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * EU
				 */
				code?: string; // ^(?:[A-Za-z]{2})?$
				/**
				 * example:
				 * EURASIAN
				 */
				desc?: string;
			};
			/**
			 * Sex of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "F",
			 *   "desc": "FEMALE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			sex?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The 1-character code for the sex.
				 *
				 * - 'F': FEMALE
				 * - 'M': MALE
				 * - 'U': UNKNOWN
				 * example:
				 * F
				 */
				code: "F" | "M" | "U";
				/**
				 * The full description of the sex.
				 * example:
				 * FEMALE
				 */
				desc: "FEMALE" | "MALE" | "UNKNOWN";
			};
			/**
			 * Details of children sponsored to be SC/PR/LTVP.
			 *
			 * For child below 21, the child's NRIC/FIN, Name, Sex, Race, Secondary Race, Dialect,
			 * Date of Birth, Country/Place of Birth, Residential Status and SC/PR/LTVP grant date will be shown.
			 *
			 * For child above 21, only the child's last known NRIC/FIN will be shown.
			 * example:
			 * {
			 *   "nric": {
			 *     "value": "S5562882C"
			 *   },
			 *   "name": {
			 *     "value": "Jo Tan Pei Ni"
			 *   },
			 *   "hanyupinyinname": {
			 *     "value": "Cheng Pei Ni"
			 *   },
			 *   "aliasname": {
			 *     "value": ""
			 *   },
			 *   "hanyupinyinaliasname": {
			 *     "value": ""
			 *   },
			 *   "marriedname": {
			 *     "value": ""
			 *   },
			 *   "sex": {
			 *     "code": "F",
			 *     "desc": "FEMALE"
			 *   },
			 *   "race": {
			 *     "code": "CN",
			 *     "desc": "CHINESE"
			 *   },
			 *   "secondaryrace": {
			 *     "code": "",
			 *     "desc": ""
			 *   },
			 *   "dialect": {
			 *     "code": "HK",
			 *     "desc": "HOKKIEN"
			 *   },
			 *   "dob": {
			 *     "value": "2011-09-10"
			 *   },
			 *   "birthcountry": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE"
			 *   },
			 *   "lifestatus": {
			 *     "code": "A",
			 *     "desc": "ALIVE"
			 *   },
			 *   "residentialstatus": {
			 *     "code": "C",
			 *     "desc": "Citizen"
			 *   },
			 *   "nationality": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE CITIZEN"
			 *   },
			 *   "scprgrantdate": {
			 *     "value": "2015-06-13"
			 *   },
			 *   "vaccinationrequirements": [
			 *     {
			 *       "requirement": {
			 *         "code": "1M3D",
			 *         "desc": "MINIMUM VACCINATION REQUIREMENT FOR PRESCHOOL"
			 *       },
			 *       "fulfilled": {
			 *         "value": true
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			sponsoredchildrenrecords?:
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Alias name of child.
						 */
						aliasname?: {
							value?: string;
						};
						/**
						 * Country/Place of Birth of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						birthcountry?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Dialect of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						dialect?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Date of Birth of child.
						 */
						dob?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						/**
						 * Han Yu Pin Yin Alias name of child.
						 */
						hanyupinyinaliasname?: {
							value?: string;
						};
						/**
						 * Han Yu Pin Yin name of child.
						 */
						hanyupinyinname?: {
							value?: string;
						};
						/**
						 * Life Status of child.
						 */
						lifestatus?: {
							code?: "A" | "D" | "";
							desc?: "ALIVE" | "DECEASED" | "";
						};
						/**
						 * Married name of child.
						 */
						marriedname?: {
							value?: string;
						};
						/**
						 * Full Name of child.
						 */
						name?: {
							value?: string;
						};
						/**
						 * Nationality/Citizenship of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						nationality?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * NRIC/FIN of child.
						 */
						nric?: {
							value?: string;
						};
						/**
						 * Race of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						race?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Date granted Singapore Citizenship, Permanent Resident or Long-term Visit Pass.
						 */
						scprgrantdate?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						/**
						 * Secondary Race of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						secondaryrace?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Sex of child.
						 */
						sex?: {
							/**
							 * The 1-character code for the sex.
							 *
							 * - 'F': FEMALE
							 * - 'M': MALE
							 * - 'U': UNKNOWN
							 * - '': No data yet
							 */
							code?: "F" | "M" | "U" | "";
							/**
							 * The full description of the sex.
							 */
							desc?: "FEMALE" | "MALE" | "UNKNOWN" | "";
						};
						vaccinationrequirements?: {
							fulfilled?: {
								value?: boolean;
							};
							/**
							 * Vaccination Requirement.
							 * Refer to the Code reference tables in the Support section for list of possible values.
							 */
							requirement?: {
								code?: string;
								desc?: string;
							};
						}[];
				  }[]
				| null;
			/**
			 * Singapore issued identification number of the Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "S1111111D",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			uinfin?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value: string; // \b[STFGM]\d{7}[A-Z]\b
			};
			/**
			 * Vehicle information of the Person.
			 * example:
			 * {
			 *   "vehicleno": {
			 *     "value": "SDF1235A"
			 *   },
			 *   "type": {
			 *     "value": "PASSENGER MOTOR CAR"
			 *   },
			 *   "iulabelno": {
			 *     "value": ""
			 *   },
			 *   "make": {
			 *     "value": "TOYOTA"
			 *   },
			 *   "model": {
			 *     "value": "COROLLA ALTIS"
			 *   },
			 *   "chassisno": {
			 *     "value": "ZC11S1735800"
			 *   },
			 *   "engineno": {
			 *     "value": "M13A1837453"
			 *   },
			 *   "motorno": {
			 *     "value": ""
			 *   },
			 *   "yearofmanufacture": {
			 *     "value": "2010"
			 *   },
			 *   "firstregistrationdate": {
			 *     "value": "2010-06-06"
			 *   },
			 *   "originalregistrationdate": {
			 *     "value": "2010-06-06"
			 *   },
			 *   "coecategory": {
			 *     "value": "A - CAR UP TO 1600CC & 97KW (130BHP)"
			 *   },
			 *   "coeexpirydate": {
			 *     "value": "2020-06-05"
			 *   },
			 *   "roadtaxexpirydate": {
			 *     "value": "2020-06-05"
			 *   },
			 *   "quotapremium": {
			 *     "value": 14000.01
			 *   },
			 *   "openmarketvalue": {
			 *     "value": 25000.01
			 *   },
			 *   "co2emission": {
			 *     "value": 146.01
			 *   },
			 *   "status": {
			 *     "code": "1",
			 *     "desc": "LIVE"
			 *   },
			 *   "primarycolour": {
			 *     "value": "BLACK"
			 *   },
			 *   "secondarycolour": {
			 *     "value": "WHITE"
			 *   },
			 *   "attachment1": {
			 *     "value": "DISABLED"
			 *   },
			 *   "attachment2": {
			 *     "value": "WITH SUN ROOF"
			 *   },
			 *   "attachment3": {
			 *     "value": "SIDE CURTAIN"
			 *   },
			 *   "scheme": {
			 *     "value": "REVISED OFF-PEAK CAR"
			 *   },
			 *   "thcemission": {
			 *     "value": 1.011001
			 *   },
			 *   "coemission": {
			 *     "value": 1.100001
			 *   },
			 *   "noxemission": {
			 *     "value": 0.011001
			 *   },
			 *   "pmemission": {
			 *     "value": 0.007
			 *   },
			 *   "enginecapacity": {
			 *     "value": 1600
			 *   },
			 *   "powerrate": {
			 *     "value": 1.41
			 *   },
			 *   "effectiveownership": {
			 *     "value": "2010-08-31T20:12:12+08:00"
			 *   },
			 *   "propellant": {
			 *     "value": "Compressed Natural Gas"
			 *   },
			 *   "maximumunladenweight": {
			 *     "value": 1500
			 *   },
			 *   "maximumladenweight": {
			 *     "value": 1795
			 *   },
			 *   "minimumparfbenefit": {
			 *     "value": 8770.01
			 *   },
			 *   "nooftransfers": {
			 *     "value": 2
			 *   },
			 *   "vpc": {
			 *     "value": "1234567890"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			vehicles?:
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Vehicle Attachment 1 (e.g. DISABLED).
						 */
						attachment1?: {
							value?: string;
						};
						/**
						 * Vehicle Attachment 2 (e.g. WITH SUN ROOF).
						 */
						attachment2?: {
							value?: string;
						};
						/**
						 * Vehicle Attachment 3 (e.g. SIDE CURTAIN).
						 */
						attachment3?: {
							value?: string;
						};
						/**
						 * Vehicle Chassis Number.
						 */
						chassisno?: {
							value?: string;
						};
						/**
						 * CO2 emission rate.
						 */
						co2emission?: {
							value?: number; // double
						};
						/**
						 * Vehicle Certificate of Entitlement (COE) bid category.
						 */
						coecategory?: {
							value?: string;
						};
						/**
						 * Vehicle Certificate of Entitlement (COE) expiry date.
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						coeexpirydate?: {
							value?: string; // date
						};
						/**
						 * Carbon Monoxide emission rate.
						 */
						coemission?: {
							value?: number; // double
						};
						/**
						 * Effective Date/Time of Ownership.
						 * See "date-time" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						effectiveownership?: {
							value?: string; // date-time
						}; // date-time
						/**
						 * Engine Capacity in cubic centimeter (cc).
						 */
						enginecapacity?: {
							value?: number; // int64
						};
						/**
						 * Vehicle Engine Number.
						 */
						engineno?: {
							value?: string;
						};
						/**
						 * Date when vehicle is registered with LTA.
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						firstregistrationdate?: {
							value?: string; // date
						};
						/**
						 * In-Vehicle Unit (IU) number of the device fitted in Singapore-registered vehicles for
						 * Electronic Road Pricing (ERP) gantries and Electronic Parking System (EPS) car parks.
						 */
						iulabelno?: {
							value?: string;
						};
						/**
						 * Vehicle Make such as 'TOYOTA', 'HONDA', 'AUDI'.
						 */
						make?: {
							value?: string;
						};
						/**
						 * Maximum Laden Weight in kilograms (kg).
						 */
						maximumladenweight?: {
							value?: number; // int64
						};
						/**
						 * Maximum Unladen Weight in kilograms (kg).
						 */
						maximumunladenweight?: {
							value?: number; // int64
						};
						/**
						 * Minimum PARF Benefit in Singapore dollars (SGD).
						 */
						minimumparfbenefit?: {
							value?: number; // double
						};
						/**
						 * Vehicle Model such as 'COROLLA ALTIS CLASSIC 1.6 CVT', 'HRV 1.5 DX CVT'.
						 */
						model?: {
							value?: string;
						};
						/**
						 * Vehicle Motor Number.
						 */
						motorno?: {
							value?: string;
						};
						/**
						 * Number of Transfer.
						 */
						nooftransfers?: {
							value?: number; // int64
						};
						/**
						 * Nitrogen Oxide (NOx) emission rate.
						 */
						noxemission?: {
							value?: number; // double
						};
						/**
						 * Open Market Value is the value of manufacturer invoice price, freight and
						 * insurance in Singapore dollars (SGD).
						 */
						openmarketvalue?: {
							value?: number; // double
						};
						/**
						 * Date when vehicle is first registered in the country of origin.
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						originalregistrationdate?: {
							value?: string; // date
						};
						/**
						 * Particulates (PM - Atmospheric Particulate Matter) emission rate.
						 */
						pmemission?: {
							value?: number; // double
						};
						/**
						 * Power Rate.
						 * Applicable to Electric and Hybrid vehicles powered by electric motors. Unit is Kilowatt.
						 */
						powerrate?: {
							value?: number; // double
						};
						/**
						 * Vehicle Primary Colour (e.g. BLACK).
						 */
						primarycolour?: {
							value?: string;
						};
						/**
						 * Propellant (e.g. Compressed Natural Gas, Diesel, Diesel-CNG, Diesel-Electric,
						 * Diesel-Electric (Plug-In), Electric, Gas, Liquefied Petroleum Gas (LPG),
						 * Petrol, Petrol-CNG, Petrol-Electric, Petrol-Electric (Plug-In), Petrol-LPG.
						 */
						propellant?: {
							value?: string;
						};
						/**
						 * Actual Quota Premium (QP) amount payable for the COE upon registration, conversion or COE
						 * revalidation in Singapore dollars (SGD). For renewal of COE, the value will contain
						 * actual PQP paid.
						 */
						quotapremium?: {
							value?: number; // double
						};
						/**
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						roadtaxexpirydate?: {
							value?: string; // date
						};
						/**
						 * Vehicle Scheme (e.g. REVISED OFF-PEAK CAR).
						 */
						scheme?: {
							value?: string;
						};
						/**
						 * Vehicle Secondary Colour (e.g. WHITE).
						 */
						secondarycolour?: {
							value?: string;
						};
						/**
						 * Status of the Vehicle.
						 */
						status?: {
							code?: "1" | "2";
							desc?: "LIVE" | "DE-REGISTERED";
						};
						/**
						 * Total Hydro Carbon (THC) emission rate.
						 */
						thcemission?: {
							value?: number; // double
						};
						/**
						 * Type of Vehicles such as 'MOTOR CAR', 'STATION /WAGON/JEEP/LAND ROVER'.
						 */
						type?: {
							value?: string;
						};
						/**
						 * Vehicle Registration Number displayed on the vehicle number plates.
						 */
						vehicleno?: {
							value?: string;
						};
						/**
						 * Vehicle Parking Certificate. Applicable for Heavy Vehicles.
						 */
						vpc?: {
							value?: string;
						};
						/**
						 * Manufacturing year.
						 */
						yearofmanufacture?: {
							value?: string;
						};
				  }[]
				| null;
			/**
			 * Merdekagen details.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "eligibility": {
			 *     "value": true
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			merdekagen?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Eligibility.
				 */
				eligibility?: {
					value?: boolean;
				};
			};
			/**
			 * Pioneergen details.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "eligibility": {
			 *     "value": true
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			pioneergen?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Eligibility.
				 */
				eligibility?: {
					value?: boolean;
				};
			};
			/**
			 * CPF Balances of Person in SGD.
			 */
			cpfbalances?: {
				/**
				 * Amount Balance in CPF-MA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 11470.71,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				ma?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-MA balance.
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-OA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 1581.48,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				oa?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-OA balance.
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-RA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 0.01,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				ra?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-RA balance.
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-SA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 21967.09,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				sa?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-SA balance.
					 */
					value?: number; // double
				};
			};
			/**
			 * Employer CPF Contributions of Person in SGD. Does not include any non-employer contributions. Maximum past 15 months' of contributions.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "history": [
			 *     {
			 *       "date": {
			 *         "value": "2016-12-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-11"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2016-12-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2016-12-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-01-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-01-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-01-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-02-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-02-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-02-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-03-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-03-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-03-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-04-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-04-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-04-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-05-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-05-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-05-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-06-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-06-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-06-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-07-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-07-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-07-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-08-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-08-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-08-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-09-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-09-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-09-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-10-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-10-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-10-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-11-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-11-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-11-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-12-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-12-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-12-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2018-01-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2018-01-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2018-01-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			cpfcontributions?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				history?: {
					/**
					 * Amount of contribution in SGD.
					 */
					amount?: {
						value?: number; // double
					};
					/**
					 * Date of Contribution Paid. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
					 */
					date?: {
						value?: string; // date
					};
					/**
					 * Employer who paid the Contribution.
					 */
					employer?: {
						value?: string;
					};
					/**
					 * Month for which CPF Contribution was paid. Format: YYYY-MM
					 */
					month?: {
						value?: string;
					};
				}[];
			};
			/**
			 * Employers who paid CPF Contributions. Maximum up to past 14 months.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "history": [
			 *     {
			 *       "month": {
			 *         "value": "2016-11"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			cpfemployers?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				history?: {
					/**
					 * Employer who paid the Contribution.
					 */
					employer?: {
						value?: string;
					};
					/**
					 * Month for which CPF Contribution was paid. Format: YYYY-MM
					 */
					month?: {
						value?: string; // ^\d{4}-\d{2}$
					};
				}[];
			};
			/**
			 * CPF Housing Withdrawal information.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "withdrawaldetails": [
			 *     {
			 *       "address": {
			 *         "type": "SG",
			 *         "block": {
			 *           "value": "548"
			 *         },
			 *         "building": {
			 *           "value": ""
			 *         },
			 *         "floor": {
			 *           "value": "09"
			 *         },
			 *         "unit": {
			 *           "value": "128"
			 *         },
			 *         "street": {
			 *           "value": "BEDOK NORTH AVENUE 1"
			 *         },
			 *         "postal": {
			 *           "value": "460548"
			 *         },
			 *         "country": {
			 *           "code": "SG",
			 *           "desc": "SINGAPORE"
			 *         }
			 *       },
			 *       "accruedinterestamt": {
			 *         "value": 1581.48
			 *       },
			 *       "monthlyinstalmentamt": {
			 *         "value": 1196.09
			 *       },
			 *       "principalwithdrawalamt": {
			 *         "value": 2897.01
			 *       },
			 *       "totalamountofcpfallowedforproperty": {
			 *         "value": 10000.01
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			cpfhousingwithdrawal?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				withdrawaldetails?: {
					/**
					 * Accrued interest amount.
					 */
					accruedinterestamt?: {
						value?: number; // double
					};
					/**
					 * Registered Address of Person (including FIN holders).
					 *
					 * Note:
					 * - Address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'UNFORMATTED').
					 * - May be unavailable for some FIN holders.
					 */
					address?: /**
					 * Registered Address of Person (including FIN holders).
					 *
					 * Note:
					 * - Address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'UNFORMATTED').
					 * - May be unavailable for some FIN holders.
					 */
					| {
								/**
								 * Block/House of Address.
								 */
								block?: {
									value?: string;
								};
								/**
								 * Building of Address.
								 */
								building?: {
									value?: string;
								};
								/**
								 * Country/Place of Address. For AddressSG this will always be 'SG'.
								 */
								country?: {
									code?: string;
									desc?: string;
								};
								/**
								 * Floor of Address.
								 */
								floor?: {
									value?: string;
								};
								/**
								 * Postal Code of Address.
								 */
								postal?: {
									value?: string;
								};
								/**
								 * Street of Address.
								 */
								street?: {
									value?: string;
								};
								/**
								 * Type of Address (SG or UNFORMATTED for non SG).
								 */
								type?: "SG";
								/**
								 * Unit of Address.
								 */
								unit?: {
									value?: string;
								};
						  }
						| {
								/**
								 * Unregistered Foreign address line 1
								 */
								line1?: {
									value?: string;
								};
								/**
								 * Unregistered Foreign address line 2
								 */
								line2?: {
									value?: string;
								};
								/**
								 * Type of Address (SG or UNFORMATTED for non SG).
								 */
								type?: "UNFORMATTED";
						  };
					/**
					 * Monthly instalment amount.
					 */
					monthlyinstalmentamt?: {
						value?: number; // double
					};
					/**
					 * Principal withdrawal amount.
					 */
					principalwithdrawalamt?: {
						value?: number; // double
					};
					/**
					 * Total amount of CPF allowed for the property.
					 */
					totalamountofcpfallowedforproperty?: {
						value?: number; // double
					};
				}[];
			};
			/**
			 * CPF Investment Scheme.
			 */
			cpfinvestmentscheme?: {
				/**
				 * Account Details.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "agentbankcode": {
				 *     "value": "OCBC"
				 *   },
				 *   "invbankacctno": {
				 *     "value": "098-26644-4"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				account?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Agent Bank Code.
					 * example:
					 * {
					 *   "value": "OCBC"
					 * }
					 */
					agentbankcode?: {
						value?: string;
					};
					/**
					 * Account Number.
					 * example:
					 * {
					 *   "value": "098-26644-4"
					 * }
					 */
					invbankacctno?: {
						value?: string;
					};
				};
				/**
				 * Self-Awareness Questionnaire (SAQ) Participation Status.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "code": "X",
				 *   "desc": "Participated",
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				saqparticipationstatus?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Possible values:
					 * - 'Y': Participated
					 * - 'X': Existing CPFIS participant
					 * - 'N': Did not participate
					 * example:
					 * X
					 */
					code?: "Y" | "X" | "N";
					/**
					 * example:
					 * Participated
					 */
					desc?: string;
				};
				/**
				 * Number of Discounted Singtel Shares.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 1360,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				sdsnetshareholdingqty?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * example:
					 * 1360
					 */
					value?: number;
				};
			};
			/**
			 * Detailed breakdown of the latest Notice of Assessment (NOA) within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "amount": {
			 *     "value": 100000.01
			 *   },
			 *   "yearofassessment": {
			 *     "value": "2018"
			 *   },
			 *   "employment": {
			 *     "value": 100000.01
			 *   },
			 *   "trade": {
			 *     "value": 0
			 *   },
			 *   "rent": {
			 *     "value": 0
			 *   },
			 *   "interest": {
			 *     "value": 0
			 *   },
			 *   "taxclearance": {
			 *     "value": "N"
			 *   },
			 *   "category": {
			 *     "value": "ORIGINAL"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			noa?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Total Assessable Income from the latest NOA.
				 */
				amount?: {
					value?: number; // double
				};
				/**
				 * Type of 'Notice of Assessment' (NOA).
				 */
				category?: {
					value?: "ADDITIONAL" | "AMENDED" | "ORIGINAL" | "REPAYMENT";
				};
				/**
				 * Assessable Income from employment for the latest NOA.
				 */
				employment?: {
					value?: number; // double
				};
				/**
				 * Assessable Income from interest for the latest NOA.
				 */
				interest?: {
					value?: number; // double
				};
				/**
				 * Assessable Income from rent for the latest NOA.
				 */
				rent?: {
					value?: number; // double
				};
				/**
				 * Tax Clearance indicator.
				 */
				taxclearance?: {
					value?: "Y" | "N";
				};
				/**
				 * Assessable Income from trade for the latest NOA.
				 */
				trade?: {
					value?: number; // double
				};
				/**
				 * The year of assessment (YYYY) for the latest NOA.
				 */
				yearofassessment?: {
					value?: string; // [0-9]{4}
				};
			};
			/**
			 * Summary of latest Notice of Assessment within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "amount": {
			 *     "value": 100000.01
			 *   },
			 *   "yearofassessment": {
			 *     "value": "2018"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			"noa-basic"?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The assessable income amount from the latest Notice of Assessment.
				 */
				amount?: {
					value?: number; // double
				};
				/**
				 * The year of assessment (YYYY) for the latest Notice of Assessment.
				 */
				yearofassessment?: {
					value?: string; // [0-9]{4}
				};
			};
			/**
			 * Detailed breakdown of latest 2 Notice of Assessments within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "noas": [
			 *     {
			 *       "amount": {
			 *         "value": 100000.01
			 *       },
			 *       "yearofassessment": {
			 *         "value": "2018"
			 *       },
			 *       "employment": {
			 *         "value": 100000.01
			 *       },
			 *       "trade": {
			 *         "value": 0
			 *       },
			 *       "rent": {
			 *         "value": 0
			 *       },
			 *       "interest": {
			 *         "value": 0
			 *       },
			 *       "taxclearance": {
			 *         "value": "N"
			 *       },
			 *       "category": {
			 *         "value": "ORIGINAL"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			noahistory?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				noas?: {
					/**
					 * Total Assessable Income for this historical NOA.
					 */
					amount?: {
						value?: number; // double
					};
					/**
					 * Type of 'Notice of Assessment' (NOA) for this historical NOA.
					 */
					category?: {
						value?: "ADDITIONAL" | "AMENDED" | "ORIGINAL" | "REPAYMENT";
					};
					/**
					 * Assessable Income from employment for this historical NOA.
					 */
					employment?: {
						value?: number; // double
					};
					/**
					 * Assessable Income from interest for this historical NOA.
					 */
					interest?: {
						value?: number; // double
					};
					/**
					 * Assessable Income from rent for this historical NOA.
					 */
					rent?: {
						value?: number; // double
					};
					/**
					 * Tax Clearance indicator for this historical NOA.
					 */
					taxclearance?: {
						value?: "Y" | "N";
					};
					/**
					 * Assessable Income from trade for this historical NOA.
					 */
					trade?: {
						value?: number; // double
					};
					/**
					 * The year of assessment (YYYY) for this historical NOA.
					 */
					yearofassessment?: {
						value?: string; // [0-9]{4}
					};
				}[];
			};
			/**
			 * Summary of latest 2 Notice of Assessments within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "noas": [
			 *     {
			 *       "amount": {
			 *         "value": 100000.01
			 *       },
			 *       "yearofassessment": {
			 *         "value": "2018"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			"noahistory-basic"?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				noas?: {
					/**
					 * Assessable Income for this historical NOA.
					 */
					amount?: {
						value?: number; // double
					};
					/**
					 * The year of assessment (YYYY) for this historical NOA.
					 */
					yearofassessment?: {
						value?: string; // [0-9]{4}
					};
				}[];
			};
		}
		/**
		 * Person common data items
		 */
		export interface PersonCommon {
			/**
			 * Academic qualifications achieved.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "certificates": [
			 *     {
			 *       "name": {
			 *         "value": "nus.opencert"
			 *       },
			 *       "content": {
			 *         "value": "base64-string"
			 *       },
			 *       "opencertificate": {
			 *         "id": {
			 *           "value": "100000000343840"
			 *         },
			 *         "primary": {
			 *           "value": true
			 *         }
			 *       },
			 *       "opencertificateindicator": {
			 *         "value": true
			 *       }
			 *     }
			 *   ],
			 *   "transcripts": [
			 *     {
			 *       "name": {
			 *         "value": "SINGAPORE-CAMBRIDGE GENERAL CERTIFICATE OF EDUCATION ORDINARY LEVEL"
			 *       },
			 *       "yearattained": {
			 *         "value": "2018"
			 *       },
			 *       "results": [
			 *         {
			 *           "subject": {
			 *             "value": "English Language"
			 *           },
			 *           "level": {
			 *             "value": "Ordinary"
			 *           },
			 *           "grade": {
			 *             "value": "A"
			 *           },
			 *           "subsubject": {
			 *             "value": "SPECIAL PAPER"
			 *           },
			 *           "subgrade": {
			 *             "value": "One"
			 *           }
			 *         }
			 *       ],
			 *       "explanatorynotes": {
			 *         "value": "https://public.cloud.myinfo.gov.sg/myinfo/spm/seab-explanatory-notes/SEAB_Cert_A.html"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			academicqualifications?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Electronic certificates uploaded.
				 * example:
				 * {
				 *   "name": {
				 *     "value": "nus.opencert"
				 *   },
				 *   "content": {
				 *     "value": "base64-string"
				 *   },
				 *   "opencertificate": {
				 *     "id": {
				 *       "value": 100000000343840
				 *     },
				 *     "primary": {
				 *       "value": true
				 *     }
				 *   },
				 *   "opencertificateindicator": {
				 *     "value": true
				 *   }
				 * }
				 */
				certificates?:
					| {
							/**
							 * File content of the electronic certificate, Base64 encoded.
							 */
							content?: {
								value?: string;
							};
							/**
							 * File name of the electronic certificate.
							 */
							name?: {
								value?: string;
							};
							/**
							 * Open Certificate Information.
							 *
							 * Note: The test environment for OpenCert is at https://dev.opencerts.io/
							 * while production is at https://opencerts.io/
							 */
							opencertificate?: {
								id?: {
									value?: string;
								};
								primary?: {
									value?: boolean;
								};
							};
							/**
							 * Indicate whether this file is open certificate.
							 */
							opencertificateindicator?: {
								value?: boolean;
							};
					  }[]
					| null;
				/**
				 * Transcript of qualification.
				 */
				transcripts?:
					| {
							/**
							 * Explanatory Notes. For an example, see https://public.cloud.myinfo.gov.sg/myinfo/spm/seab-explanatory-notes/SEAB_Cert_A.html
							 * example:
							 * https://public.cloud.myinfo.gov.sg/myinfo/spm/seab-explanatory-notes/SEAB_Cert_A.html
							 */
							explanatorynotes?: {
								value?: string;
							};
							/**
							 * Qualification's Name.
							 */
							name?: {
								value?: string;
							};
							/**
							 * Array of results for the qualification.
							 */
							results?: {
								/**
								 * Grade attained.
								 */
								grade?: {
									value?: string;
								};
								/**
								 * Level of subject taken.
								 */
								level?: {
									value?: string;
								};
								/**
								 * Optional grade attained for subSubject.
								 */
								subgrade?: {
									value?: string;
								};
								/**
								 * Subject taken.
								 */
								subject?: {
									value?: string;
								};
								/**
								 * Optional Sub Subject taken.
								 */
								subsubject?: {
									value?: string;
								};
							}[];
							/**
							 * Year this qualification was attained. See "date-fullyear" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 * example:
							 * 2019
							 */
							yearattained?: {
								value?: string; // [0-9]{4}
							};
					  }[]
					| null;
			};
			/**
			 * Alias name of the Person
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TRICIA TAN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			aliasname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * TRICIA TAN XIAO HUI
				 */
				value?: string;
			};
			/**
			 * Country/Place of Birth of Person.
			 *
			 * Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SINGAPORE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			birthcountry?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * SG
				 *
				 */
				code?: string; // ^(?:[A-Za-z]{2})?$
				/**
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
			};
			/**
			 * Community Health Assist Scheme (CHAS) card details - Card Type, Date of Issue, Date of Expiry
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "cardtype": {
			 *     "code": "C",
			 *     "desc": "Green"
			 *   },
			 *   "indicator": {
			 *     "code": "C",
			 *     "desc": "Green"
			 *   },
			 *   "expirydate": {
			 *     "value": "2020-06-15"
			 *   },
			 *   "issuedate": {
			 *     "value": "2020-06-15"
			 *   },
			 *   "lastupdated": "2019-03-26",
			 *   "name": {
			 *     "value": "TAN XIAO HUI"
			 *   },
			 *   "classification": "C",
			 *   "source": "1"
			 * }
			 */
			chas?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * CHAS Card Type.
				 */
				cardtype?: {
					code?: "A" | "B" | "C" | "NA";
					desc?: string;
				};
				/**
				 * CHAS Expiry Date. Value of data field in YYYY-MM-DD format.
				 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				expirydate?: {
					value?: string; // date
				};
				/**
				 * CHAS Indicator.
				 */
				indicator?: {
					code?: "PGA" | "PGB" | "PGC" | "MGA" | "MGB" | "MGC" | "PG" | "MG" | "A" | "B" | "C" | "NA";
					desc?: string;
				};
				/**
				 * CHAS Issue Date. Value of data field in YYYY-MM-DD format.
				 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				issuedate?: {
					value?: string; // date
				};
				/**
				 * Full Name of the Person.
				 */
				name?: {
					value?: string;
				};
			};
			/**
			 * This refers to only local registered birth records (based on ICA’s electronic Birth Certificate Records from 1985 onwards).
			 * This includes adoption of locally registered child.
			 * For child below 21, the child’s Birth Cert No, Name, Sex, Race, Dialect, Date of Birth and Time of Birth will be shown.
			 * For child above 21, only the child’s Birth Cert Number will be shown.
			 */
			childrenbirthrecords?: any;
			/**
			 * Country/Place of the latest marriage.
			 * Note: This field must be made editable on your digital service form even though
			 * source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SINGAPORE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			countryofmarriage?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The 2-character country code.
				 * example:
				 * SG
				 */
				code?: string;
				/**
				 * The full name of the country.
				 * example:
				 * SINGAPORE
				 */
				desc?: string;
			};
			/**
			 * Dialect of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SWISS GERMAN",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			dialect?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * SG
				 */
				code?: string; // ^(?:[A-Za-z]{2})?$
				/**
				 * example:
				 * SWISS GERMAN
				 */
				desc?: string;
			};
			/**
			 * Last Divorce Date of Person.
			 * Note: This field must be made editable on your digital service form even though
			 * source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2018-01-01",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			divorcedate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				value?: string; // date
			};
			/**
			 * Date of Birth of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "1958-05-17",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			dob?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field. Format can be one of the below (with reference to https://datatracker.ietf.org/doc/html/rfc3339#section-5.6):
				 *
				 * - full-date (YYYY-MM-DD)
				 * - date-fullyear "-" date-month (YYYY-MM)
				 * - date-fullyear (YYYY)
				 * example:
				 * 1958-05-17
				 * 1958-05
				 * 1958
				 */
				value: string; // date
			};
			/**
			 * Driving Licence details of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "comstatus": {
			 *     "code": "Y",
			 *     "desc": "ELIGIBLE"
			 *   },
			 *   "totaldemeritpoints": {
			 *     "value": 0
			 *   },
			 *   "suspension": {
			 *     "startdate": {
			 *       "value": "1900-01-01"
			 *     },
			 *     "enddate": {
			 *       "value": "1900-01-01"
			 *     }
			 *   },
			 *   "disqualification": {
			 *     "startdate": {
			 *       "value": "1900-01-01"
			 *     },
			 *     "enddate": {
			 *       "value": "1900-01-01"
			 *     }
			 *   },
			 *   "revocation": {
			 *     "startdate": {
			 *       "value": "1900-01-01"
			 *     },
			 *     "enddate": {
			 *       "value": "1900-01-01"
			 *     }
			 *   },
			 *   "pdl": {
			 *     "validity": {
			 *       "code": "V",
			 *       "desc": "VALID"
			 *     },
			 *     "expirydate": {
			 *       "value": "2020-06-15"
			 *     },
			 *     "classes": [
			 *       {
			 *         "class": {
			 *           "value": "2A"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "3A"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4P"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4AP"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "5P"
			 *         }
			 *       }
			 *     ]
			 *   },
			 *   "qdl": {
			 *     "validity": {
			 *       "code": "V",
			 *       "desc": "VALID"
			 *     },
			 *     "expirydate": {
			 *       "value": "2020-06-15"
			 *     },
			 *     "classes": [
			 *       {
			 *         "class": {
			 *           "value": "2A"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "3A"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4P"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "4AP"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       },
			 *       {
			 *         "class": {
			 *           "value": "5P"
			 *         },
			 *         "issuedate": {
			 *           "value": "2018-06-06"
			 *         }
			 *       }
			 *     ]
			 *   },
			 *   "photocardserialno": {
			 *     "value": "115616"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			drivinglicence?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Status of Certificate of Merit. Possible values:
				 *
				 * - 'Y': ELIGIBLE
				 * - 'N': NOT ELIGIBLE
				 * - '': No data yet
				 */
				comstatus?: {
					code?: "Y" | "N" | "";
					desc?: "ELIGIBLE" | "NOT ELIGIBLE" | "";
				};
				/**
				 * Disqualification date
				 */
				disqualification?: {
					/**
					 * End date
					 */
					enddate?: {
						value?: string; // date
					};
					/**
					 * Start date
					 */
					startdate?: {
						value?: string; // date
					};
				};
				/**
				 * Provisional Driving Licence (PDL)
				 */
				pdl?: {
					/**
					 * Licence Classes. Includes Issue Date(e.g. 2B, 2018-01-01)
					 */
					classes?:
						| {
								class?: {
									value?: string;
								};
								issuedate?: {
									value?: string; // date
								};
						  }[]
						| null;
					/**
					 * Licence Expiry Date
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Validity of QDL. Possible values:
					 *
					 * - 'V': VALID
					 * - 'E': EXPIRED
					 * - 'I': INVALID
					 * - 'N': NOT HOLDING
					 * - '': No data yet
					 */
					validity?: {
						code?: string;
						desc?: string;
					};
				};
				/**
				 * Serial Number of the Photo Card
				 */
				photocardserialno?: {
					value?: string;
				};
				/**
				 * Qualified Driving Licence (QDL)
				 */
				qdl?: {
					/**
					 * Licence Classes. Includes Issue Date(e.g. 2B, 2018-01-01)
					 */
					classes?:
						| {
								class?: {
									value?: string;
								};
								issuedate?: {
									value?: string; // date
								};
						  }[]
						| null;
					/**
					 * Licence Expiry Date
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Validity of QDL. Possible values:
					 *
					 * - 'V': VALID
					 * - 'E': EXPIRED
					 * - 'I': INVALID
					 * - 'N': NOT HOLDING
					 * - '': No data yet
					 */
					validity?: {
						code?: string;
						desc?: string;
					};
				};
				/**
				 * Revocation date
				 */
				revocation?: {
					/**
					 * End date
					 */
					enddate?: {
						value?: string; // date
					};
					/**
					 * Start date
					 */
					startdate?: {
						value?: string; // date
					};
				};
				/**
				 * Suspension date
				 */
				suspension?: {
					/**
					 * End date
					 */
					enddate?: {
						value?: string; // date
					};
					/**
					 * Start date
					 */
					startdate?: {
						value?: string; // date
					};
				};
				/**
				 * Total Demerit Points
				 */
				totaldemeritpoints?: {
					value?: number;
				};
			};
			/**
			 * Email Address of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "test@gmail.com",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			email?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Name of Employer.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "ALPHA",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			employment?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Employment Sector of a FIN holder.
			 *
			 * Note: Only applies to a foreigner with a valid work pass.
			 *
			 * Some examples of possible values are:
			 * - MANUFACTURING
			 * - CONSTRUCTION
			 * - RECLAMATION
			 * - SERVICE
			 * - GRI-TECHNOLOGY
			 * - LANDSCAPING
			 * - INCINERATOR PLANT
			 * - MARINE SHIPYSHIPYARD
			 * - PROCESS
			 * - HARBOURCRAFT
			 * - DOMESTIC
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "MANUFACTURING",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			employmentsector?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Han Yu Pin Yin Alias name of the Person.
			 *
			 * Presentation Logic - If there is a value to hanyupinyinaliasname (i.e. not empty),
			 * then hanyupinyinaliasname should be displayed in a new line below aliasname,
			 * and prefixed with the '@' symbol i.e. "@hanyupinyinaliasname".
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TRICIA CHEN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hanyupinyinaliasname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Han Yu Pin Yin name of the Person.
			 *
			 * Presentation Logic - If there is a value to hanyupinyinname (i.e. not empty),
			 * then hanyupinyinname should be displayed in a new line below name, and
			 * formatted with round brackets i.e. "(hanyupinyinname)"
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "CHEN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hanyupinyinname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * HDB Ownership details.
			 * example:
			 * {
			 *   "noofowners": {
			 *     "value": 2
			 *   },
			 *   "address": {
			 *     "type": "SG",
			 *     "block": {
			 *       "value": "548"
			 *     },
			 *     "building": {
			 *       "value": ""
			 *     },
			 *     "floor": {
			 *       "value": "09"
			 *     },
			 *     "unit": {
			 *       "value": "128"
			 *     },
			 *     "street": {
			 *       "value": "BEDOK NORTH AVENUE 1"
			 *     },
			 *     "postal": {
			 *       "value": "460548"
			 *     },
			 *     "country": {
			 *       "code": "SG",
			 *       "desc": "SINGAPORE"
			 *     }
			 *   },
			 *   "hdbtype": {
			 *     "code": "112",
			 *     "desc": "2-ROOM FLAT (HDB)"
			 *   },
			 *   "leasecommencementdate": {
			 *     "value": "2008-06-13"
			 *   },
			 *   "termoflease": {
			 *     "value": 99
			 *   },
			 *   "dateofpurchase": {
			 *     "value": "2008-06-13"
			 *   },
			 *   "dateofownershiptransfer": {
			 *     "value": "2018-06-13"
			 *   },
			 *   "loangranted": {
			 *     "value": 310000.01
			 *   },
			 *   "originalloanrepayment": {
			 *     "value": 25
			 *   },
			 *   "balanceloanrepayment": {
			 *     "years": {
			 *       "value": 2
			 *     },
			 *     "months": {
			 *       "value": 6
			 *     }
			 *   },
			 *   "outstandingloanbalance": {
			 *     "value": 50000.01
			 *   },
			 *   "monthlyloaninstalment": {
			 *     "value": 1000.01
			 *   },
			 *   "outstandinginstalment": {
			 *     "value": 1000.01
			 *   },
			 *   "purchaseprice": {
			 *     "value": 1000.01
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hdbownership?:
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * SG
						 * Address details (Singapore Format).
						 */
						address?: {
							/**
							 * Block/House of Address.
							 */
							block?: {
								value?: string;
							};
							/**
							 * Building of Address.
							 */
							building?: {
								value?: string;
							};
							/**
							 * Country/Place of Address. For AddressSG this will always be 'SG'.
							 */
							country?: {
								code?: string;
								desc?: string;
							};
							/**
							 * Floor of Address.
							 */
							floor?: {
								value?: string;
							};
							/**
							 * Postal Code of Address.
							 */
							postal?: {
								value?: string;
							};
							/**
							 * Street of Address.
							 */
							street?: {
								value?: string;
							};
							/**
							 * Type of Address (SG or UNFORMATTED for non SG).
							 */
							type?: "SG";
							/**
							 * Unit of Address.
							 */
							unit?: {
								value?: string;
							};
						};
						balanceloanrepayment?: {
							months?: {
								value?: number; // int64
							};
							years?: {
								value?: number; // int64
							};
						};
						dateofownershiptransfer?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						dateofpurchase?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						/**
						 * HDB Ownership details.
						 */
						hdbtype?: {
							code?: "111" | "112" | "113" | "114" | "115" | "116" | "118";
							desc?:
								| "1-ROOM FLAT (HDB)"
								| "2-ROOM FLAT (HDB)"
								| "3-ROOM FLAT (HDB)"
								| "4-ROOM FLAT (HDB)"
								| "5-ROOM FLAT (HDB)"
								| "EXECUTIVE FLAT (HDB)"
								| "STUDIO APARTMENT (HDB)";
						};
						leasecommencementdate?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						loangranted?: {
							value?: number; // double
						};
						monthlyloaninstalment?: {
							value?: number; // double
						};
						noofowners?: {
							value?: number; // int64
						};
						originalloanrepayment?: {
							value?: number; // int64
						};
						outstandinginstalment?: {
							value?: number; // double
						};
						outstandingloanbalance?: {
							value?: number; // double
						};
						purchaseprice?: {
							value?: number; // double
						};
						termoflease?: {
							value?: number; // int64
						};
				  }[]
				| null;
			/**
			 * Flat Type of the HDB flat.
			 * Note 1: that this excludes Rental Flats, Pre-War SIT flat, PSA flat, HUDC flat,
			 * Executive Condominium and Shophouse.
			 * Note 2: If housingtype is available, this value will be blank.
			 * Note 3: If housingtype & hdbtype are unavailable, make this field user editable.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "112",
			 *   "desc": "2-ROOM FLAT (HDB)",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			hdbtype?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * 112
				 */
				code?: "111" | "112" | "113" | "114" | "115" | "116" | "118" | "";
				/**
				 * example:
				 * 2-ROOM FLAT (HDB)
				 */
				desc?:
					| "1-ROOM FLAT (HDB)"
					| "2-ROOM FLAT (HDB)"
					| "3-ROOM FLAT (HDB)"
					| "4-ROOM FLAT (HDB)"
					| "5-ROOM FLAT (HDB)"
					| "EXECUTIVE FLAT (HDB)"
					| "STUDIO APARTMENT (HDB)"
					| "";
			};
			/**
			 * Housing Type of Person (non-HDB only).
			 * Note 1: If hdbtype is available, this value will be blank.
			 * Note 2: If housingtype & hdbtype are unavailable, make this field user editable.
			 * Refer to hdbtype for detailed HDB type.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "123",
			 *   "desc": "TERRACE HOUSE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			housingtype?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * 123
				 */
				code?: "121" | "122" | "123" | "131" | "132" | "139" | "";
				/**
				 * example:
				 * TERRACE HOUSE
				 */
				desc?:
					| "DETACHED HOUSE"
					| "SEMI-DETACHED HOUSE"
					| "TERRACE HOUSE"
					| "CONDOMINIUM"
					| "EXECUTIVE CONDOMINIUM"
					| "APARTMENT"
					| "";
			};
			/**
			 * LTA vocational licence.
			 * example:
			 * {
			 *   "tdvl": {
			 *     "licencename": {
			 *       "value": "TAXI DRIVER'S VOCATIONAL LICENCE (TDVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "pdvl": {
			 *     "licencename": {
			 *       "value": "PRIVATE HIRE CAR DRIVER'S VOCATIONAL LICENCE (PDVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "bdvl": {
			 *     "licencename": {
			 *       "value": "BUS DRIVER'S VOCATIONAL LICENCE (BDVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "bavl": {
			 *     "licencename": {
			 *       "value": "BUS ATTENDANT VOCATIONAL LICENCE (BAVL)"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   },
			 *   "odvl": {
			 *     "licencename": {
			 *       "value": "OMNIBUS DRIVER'S VOCATIONAL LICENCE"
			 *     },
			 *     "vocationallicencenumber": {
			 *       "value": "E00000001"
			 *     },
			 *     "expirydate": {
			 *       "value": "2025-03-30"
			 *     },
			 *     "status": {
			 *       "code": "ACT",
			 *       "desc": "ACTIVE"
			 *     },
			 *     "classification": "C",
			 *     "source": "1",
			 *     "lastupdated": "2019-03-26"
			 *   }
			 * }
			 */
			ltavocationallicences?: {
				/**
				 * LTAVocationalLicence
				 * Bus Attendant's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "TAXI DRIVER'S VOCATIONAL LICENCE (TDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				bavl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Bus driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "BUS DRIVER'S VOCATIONAL LICENCE (BDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				bdvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Omnibus driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "OMNIBUS DRIVER'S VOCATIONAL LICENCE"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				odvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Private Hire Car driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "PRIVATE HIRE CAR DRIVER'S VOCATIONAL LICENCE (PDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				pdvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
				/**
				 * LTAVocationalLicence
				 * Taxi driver's vocational licence.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "licencename": {
				 *     "value": "TAXI DRIVER'S VOCATIONAL LICENCE (TDVL)"
				 *   },
				 *   "vocationallicencenumber": {
				 *     "value": "E00000001"
				 *   },
				 *   "expirydate": {
				 *     "value": "2025-03-30"
				 *   },
				 *   "status": {
				 *     "code": "ACT",
				 *     "desc": "ACTIVE"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				tdvl?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Expiry date of the LTA Vocational Licence.
					 */
					expirydate?: {
						value?: string; // date
					};
					/**
					 * Licence Name of LTA Vocational Licence.
					 */
					licencename?: {
						value?: string;
					};
					/**
					 * Status of the LTA Vocational Licence.
					 */
					status?: {
						code?: "ACT" | "ACTIVE";
						desc?: string;
					};
					/**
					 * Unique Vocational Licence Number for the licence holder.
					 */
					vocationallicencenumber?: {
						value?: string;
					};
				};
			};
			/**
			 * Marital Status of Person.
			 * Note: This field must be made editable on your digital service form even though source
			 * is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "2",
			 *   "desc": "MARRIED",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marital?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The code for the marital status.
				 *
				 * - '1': SINGLE
				 * - '2': MARRIED
				 * - '3': WIDOWED
				 * - '5': DIVORCED
				 * - '': No data yet
				 * example:
				 * 2
				 */
				code?: "1" | "2" | "3" | "5" | "";
				/**
				 * The full description of the marital status.
				 * example:
				 * MARRIED
				 */
				desc?: "SINGLE" | "MARRIED" | "WIDOWED" | "DIVORCED" | "";
			};
			/**
			 * Certificate number of the latest marriage.
			 * Note: This field must be made editable on your digital service form even though
			 * source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "123456789012345",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marriagecertno?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 * example:
				 * 123456789012345
				 */
				value?: string;
			};
			/**
			 * Latest Marriage Date of Person.
			 * Note: This field must be made editable on your digital service form even
			 * though source is '1' (Government Verified).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2007-01-01",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marriagedate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 * example:
				 * 2007-01-01
				 */
				value?: string; // date
			};
			/**
			 * Married name of the Person.
			 *
			 * Presentation Logic - If there is a value to marriedname (i.e. not empty),
			 * then marriedname should be displayed in a new line below hanyupinyinaliasname.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TAN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			marriedname?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * TAN XIAO HUI
				 */
				value?: string;
			};
			/**
			 * Mobile Number of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "prefix": {
			 *     "value": "+"
			 *   },
			 *   "areacode": {
			 *     "value": "65"
			 *   },
			 *   "nbr": {
			 *     "value": "66132665"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			mobileno?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				areacode?: {
					/**
					 * Area Code of Phone Number. Default to '65'.
					 */
					value?: string;
				};
				nbr?: {
					/**
					 * Phone Number.
					 */
					value?: string;
				};
				prefix?: {
					/**
					 * Prefix of Phone Number. Defaults to '+'.
					 */
					value?: string;
				};
			};
			/**
			 * Full Name of the Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "TAN XIAO HUI",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			name?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value: string;
			};
			/**
			 * Nationality/Citizenship of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "SG",
			 *   "desc": "SINGAPORE CITIZEN",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			nationality?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * SG
				 */
				code: string; // ^[A-Z]{2}$
				/**
				 * example:
				 * SINGAPORE CITIZEN
				 */
				desc: string;
			};
			/**
			 * Occupation of Person.
			 * For SC/PR holders, blank will be returned.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "Software Engineer",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			occupation?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Free text.
				 */
				value?: string;
			};
			/**
			 * Ownership of Private Property Status of Person (based on IRAS information).
			 * Can be true, false, or null (if data is not available).
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": false,
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			ownerprivate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 */
				value?: boolean;
			};
			/**
			 * Masked Singapore issued identification number of the Person.
			 * Only the last 3 digit and ending alphabet will be in clear.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "*****111D",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			partialuinfin?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Pass expiry of a foreigner.
			 * Note: Only applies to a foreigner with a valid pass.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2022-12-31",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passexpirydate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				value?: string; // date
			};
			/**
			 * Passport Expiry Date of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "2020-01-01",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passportexpirydate?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
				 */
				value?: string; // date
			};
			/**
			 * Passport Number of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "E35463874W",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passportnumber?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value?: string;
			};
			/**
			 * Pass status of a FIN holder.
			 * Note: Only applies to a foreigner with a valid pass.
			 * Note: Currently this field is set as empty string for SG/PR and meta source set to '3'
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "Live",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passstatus?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 */
				value?: "Live" | "Approved" | "";
			};
			/**
			 * Pass type of a FIN holder.
			 * Note: Only applies to a foreigner with a valid pass.
			 * Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "RPass",
			 *   "desc": "Work Permit",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			passtype?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Value of data field.
				 * example:
				 * RPass
				 */
				code?: string;
				/**
				 * example:
				 * Work Permit
				 */
				desc?: string;
			};
			/**
			 * Race of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "CN",
			 *   "desc": "CHINESE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			race?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * CN
				 */
				code: string; // ^[A-Z]{2}$
				/**
				 * example:
				 * CHINESE
				 */
				desc: string;
			};
			/**
			 * Registered Address of Person (including FIN holders).
			 *
			 * Note:
			 * - Address can be either a Singapore address (type: 'SG'), non Singapore address (type: 'UNFORMATTED') or empty type address ('')
			 * - May be unavailable for some FIN holders.
			 * example:
			 * {
			 *   "type": "SG",
			 *   "block": {
			 *     "value": "548"
			 *   },
			 *   "building": {
			 *     "value": ""
			 *   },
			 *   "floor": {
			 *     "value": "09"
			 *   },
			 *   "unit": {
			 *     "value": "128"
			 *   },
			 *   "street": {
			 *     "value": "BEDOK NORTH AVENUE 1"
			 *   },
			 *   "postal": {
			 *     "value": "460548"
			 *   },
			 *   "country": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			regadd?: /**
			 * Registered Address of Person (including FIN holders).
			 *
			 * Note:
			 * - Address can be either a Singapore address (type: 'SG'), non Singapore address (type: 'UNFORMATTED') or empty type address ('')
			 * - May be unavailable for some FIN holders.
			 * example:
			 * {
			 *   "type": "SG",
			 *   "block": {
			 *     "value": "548"
			 *   },
			 *   "building": {
			 *     "value": ""
			 *   },
			 *   "floor": {
			 *     "value": "09"
			 *   },
			 *   "unit": {
			 *     "value": "128"
			 *   },
			 *   "street": {
			 *     "value": "BEDOK NORTH AVENUE 1"
			 *   },
			 *   "postal": {
			 *     "value": "460548"
			 *   },
			 *   "country": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Block/House of Address.
						 */
						block?: {
							value?: string;
						};
						/**
						 * Building of Address.
						 */
						building?: {
							value?: string;
						};
						/**
						 * Country/Place of Address. For AddressSG this will always be 'SG'.
						 */
						country?: {
							code?: string;
							desc?: string;
						};
						/**
						 * Floor of Address.
						 */
						floor?: {
							value?: string;
						};
						/**
						 * Postal Code of Address.
						 */
						postal?: {
							value?: string;
						};
						/**
						 * Street of Address.
						 */
						street?: {
							value?: string;
						};
						/**
						 * Type of Address (SG or UNFORMATTED for non SG).
						 */
						type?: "SG";
						/**
						 * Unit of Address.
						 */
						unit?: {
							value?: string;
						};
				  }
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Unregistered Foreign address line 1
						 */
						line1?: {
							value?: string;
						};
						/**
						 * Unregistered Foreign address line 2
						 */
						line2?: {
							value?: string;
						};
						/**
						 * Type of Address (SG or UNFORMATTED for non SG).
						 */
						type?: "UNFORMATTED";
				  };
			/**
			 * Residential Status of Person. Applicable to Singapore Citizens and Permanent Residents.
			 * Note: This data item is not applicable for FIN holders i.e. source will be '3'.
			 * In such cases, the code and desc properties will be blank or empty string ('').
			 *
			 * Possible values:
			 * - A - ALIEN
			 * - C - CITIZEN
			 * - P - PR
			 * - U - UNKNOWN
			 * - N - NOT APPLICABLE
			 * - < BLANK > - (for FIN holders only)
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "C",
			 *   "desc": "Citizen",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			residentialstatus?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * C
				 */
				code?: "A" | "C" | "P" | "U" | "N" | ""; // ^[A-Za-z]{0,1}$
				/**
				 * example:
				 * Citizen
				 */
				desc?: "ALIEN" | "CITIZEN" | "PR" | "UNKNOWN" | "NOT APPLICABLE" | "";
			};
			/**
			 * Secondary Race of Person.
			 *
			 *   Refer to the Code reference tables in the Support section for list of possible values.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "EU",
			 *   "desc": "EURASIAN",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			secondaryrace?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * example:
				 * EU
				 */
				code?: string; // ^(?:[A-Za-z]{2})?$
				/**
				 * example:
				 * EURASIAN
				 */
				desc?: string;
			};
			/**
			 * Sex of Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "code": "F",
			 *   "desc": "FEMALE",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			sex?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The 1-character code for the sex.
				 *
				 * - 'F': FEMALE
				 * - 'M': MALE
				 * - 'U': UNKNOWN
				 * example:
				 * F
				 */
				code: "F" | "M" | "U";
				/**
				 * The full description of the sex.
				 * example:
				 * FEMALE
				 */
				desc: "FEMALE" | "MALE" | "UNKNOWN";
			};
			/**
			 * Details of children sponsored to be SC/PR/LTVP.
			 *
			 * For child below 21, the child's NRIC/FIN, Name, Sex, Race, Secondary Race, Dialect,
			 * Date of Birth, Country/Place of Birth, Residential Status and SC/PR/LTVP grant date will be shown.
			 *
			 * For child above 21, only the child's last known NRIC/FIN will be shown.
			 * example:
			 * {
			 *   "nric": {
			 *     "value": "S5562882C"
			 *   },
			 *   "name": {
			 *     "value": "Jo Tan Pei Ni"
			 *   },
			 *   "hanyupinyinname": {
			 *     "value": "Cheng Pei Ni"
			 *   },
			 *   "aliasname": {
			 *     "value": ""
			 *   },
			 *   "hanyupinyinaliasname": {
			 *     "value": ""
			 *   },
			 *   "marriedname": {
			 *     "value": ""
			 *   },
			 *   "sex": {
			 *     "code": "F",
			 *     "desc": "FEMALE"
			 *   },
			 *   "race": {
			 *     "code": "CN",
			 *     "desc": "CHINESE"
			 *   },
			 *   "secondaryrace": {
			 *     "code": "",
			 *     "desc": ""
			 *   },
			 *   "dialect": {
			 *     "code": "HK",
			 *     "desc": "HOKKIEN"
			 *   },
			 *   "dob": {
			 *     "value": "2011-09-10"
			 *   },
			 *   "birthcountry": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE"
			 *   },
			 *   "lifestatus": {
			 *     "code": "A",
			 *     "desc": "ALIVE"
			 *   },
			 *   "residentialstatus": {
			 *     "code": "C",
			 *     "desc": "Citizen"
			 *   },
			 *   "nationality": {
			 *     "code": "SG",
			 *     "desc": "SINGAPORE CITIZEN"
			 *   },
			 *   "scprgrantdate": {
			 *     "value": "2015-06-13"
			 *   },
			 *   "vaccinationrequirements": [
			 *     {
			 *       "requirement": {
			 *         "code": "1M3D",
			 *         "desc": "MINIMUM VACCINATION REQUIREMENT FOR PRESCHOOL"
			 *       },
			 *       "fulfilled": {
			 *         "value": true
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			sponsoredchildrenrecords?:
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Alias name of child.
						 */
						aliasname?: {
							value?: string;
						};
						/**
						 * Country/Place of Birth of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						birthcountry?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Dialect of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						dialect?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Date of Birth of child.
						 */
						dob?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						/**
						 * Han Yu Pin Yin Alias name of child.
						 */
						hanyupinyinaliasname?: {
							value?: string;
						};
						/**
						 * Han Yu Pin Yin name of child.
						 */
						hanyupinyinname?: {
							value?: string;
						};
						/**
						 * Life Status of child.
						 */
						lifestatus?: {
							code?: "A" | "D" | "";
							desc?: "ALIVE" | "DECEASED" | "";
						};
						/**
						 * Married name of child.
						 */
						marriedname?: {
							value?: string;
						};
						/**
						 * Full Name of child.
						 */
						name?: {
							value?: string;
						};
						/**
						 * Nationality/Citizenship of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						nationality?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * NRIC/FIN of child.
						 */
						nric?: {
							value?: string;
						};
						/**
						 * Race of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						race?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Date granted Singapore Citizenship, Permanent Resident or Long-term Visit Pass.
						 */
						scprgrantdate?: {
							/**
							 * Value of data field in YYYY-MM-DD format. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
							 */
							value?: string; // date
						};
						/**
						 * Secondary Race of child.
						 * Refer to the Code reference tables in the Support section for list of possible values.
						 */
						secondaryrace?: {
							code?: string; // ^(?:[A-Za-z]{2})?$
							desc?: string;
						};
						/**
						 * Sex of child.
						 */
						sex?: {
							/**
							 * The 1-character code for the sex.
							 *
							 * - 'F': FEMALE
							 * - 'M': MALE
							 * - 'U': UNKNOWN
							 * - '': No data yet
							 */
							code?: "F" | "M" | "U" | "";
							/**
							 * The full description of the sex.
							 */
							desc?: "FEMALE" | "MALE" | "UNKNOWN" | "";
						};
						vaccinationrequirements?: {
							fulfilled?: {
								value?: boolean;
							};
							/**
							 * Vaccination Requirement.
							 * Refer to the Code reference tables in the Support section for list of possible values.
							 */
							requirement?: {
								code?: string;
								desc?: string;
							};
						}[];
				  }[]
				| null;
			/**
			 * Singapore issued identification number of the Person.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "value": "S1111111D",
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			uinfin?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				value: string; // \b[STFGM]\d{7}[A-Z]\b
			};
			/**
			 * Vehicle information of the Person.
			 * example:
			 * {
			 *   "vehicleno": {
			 *     "value": "SDF1235A"
			 *   },
			 *   "type": {
			 *     "value": "PASSENGER MOTOR CAR"
			 *   },
			 *   "iulabelno": {
			 *     "value": ""
			 *   },
			 *   "make": {
			 *     "value": "TOYOTA"
			 *   },
			 *   "model": {
			 *     "value": "COROLLA ALTIS"
			 *   },
			 *   "chassisno": {
			 *     "value": "ZC11S1735800"
			 *   },
			 *   "engineno": {
			 *     "value": "M13A1837453"
			 *   },
			 *   "motorno": {
			 *     "value": ""
			 *   },
			 *   "yearofmanufacture": {
			 *     "value": "2010"
			 *   },
			 *   "firstregistrationdate": {
			 *     "value": "2010-06-06"
			 *   },
			 *   "originalregistrationdate": {
			 *     "value": "2010-06-06"
			 *   },
			 *   "coecategory": {
			 *     "value": "A - CAR UP TO 1600CC & 97KW (130BHP)"
			 *   },
			 *   "coeexpirydate": {
			 *     "value": "2020-06-05"
			 *   },
			 *   "roadtaxexpirydate": {
			 *     "value": "2020-06-05"
			 *   },
			 *   "quotapremium": {
			 *     "value": 14000.01
			 *   },
			 *   "openmarketvalue": {
			 *     "value": 25000.01
			 *   },
			 *   "co2emission": {
			 *     "value": 146.01
			 *   },
			 *   "status": {
			 *     "code": "1",
			 *     "desc": "LIVE"
			 *   },
			 *   "primarycolour": {
			 *     "value": "BLACK"
			 *   },
			 *   "secondarycolour": {
			 *     "value": "WHITE"
			 *   },
			 *   "attachment1": {
			 *     "value": "DISABLED"
			 *   },
			 *   "attachment2": {
			 *     "value": "WITH SUN ROOF"
			 *   },
			 *   "attachment3": {
			 *     "value": "SIDE CURTAIN"
			 *   },
			 *   "scheme": {
			 *     "value": "REVISED OFF-PEAK CAR"
			 *   },
			 *   "thcemission": {
			 *     "value": 1.011001
			 *   },
			 *   "coemission": {
			 *     "value": 1.100001
			 *   },
			 *   "noxemission": {
			 *     "value": 0.011001
			 *   },
			 *   "pmemission": {
			 *     "value": 0.007
			 *   },
			 *   "enginecapacity": {
			 *     "value": 1600
			 *   },
			 *   "powerrate": {
			 *     "value": 1.41
			 *   },
			 *   "effectiveownership": {
			 *     "value": "2010-08-31T20:12:12+08:00"
			 *   },
			 *   "propellant": {
			 *     "value": "Compressed Natural Gas"
			 *   },
			 *   "maximumunladenweight": {
			 *     "value": 1500
			 *   },
			 *   "maximumladenweight": {
			 *     "value": 1795
			 *   },
			 *   "minimumparfbenefit": {
			 *     "value": 8770.01
			 *   },
			 *   "nooftransfers": {
			 *     "value": 2
			 *   },
			 *   "vpc": {
			 *     "value": "1234567890"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			vehicles?:
				| {
						/**
						 * Data classification of data field. Default 'C' - Confidential.
						 * example:
						 * C
						 */
						classification: string;
						/**
						 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
						 * example:
						 * 2019-03-26
						 */
						lastupdated: string; // date
						/**
						 * Source of data.
						 *
						 * - '1': Government-verified
						 * - '2': User provided
						 * - '3': Not Applicable (applies only to Person data, not Entity data)
						 * - '4': Verified by SingPass
						 * example:
						 * 1
						 */
						source: "1" | "2" | "3" | "4";
						/**
						 * Optional flag to indicate if data is unavailable from data source.
						 *
						 * NOTE:
						 *
						 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
						 *
						 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
						 *
						 * - If data is available from the data source, this property will not be present.
						 */
						unavailable?: boolean;
						/**
						 * Vehicle Attachment 1 (e.g. DISABLED).
						 */
						attachment1?: {
							value?: string;
						};
						/**
						 * Vehicle Attachment 2 (e.g. WITH SUN ROOF).
						 */
						attachment2?: {
							value?: string;
						};
						/**
						 * Vehicle Attachment 3 (e.g. SIDE CURTAIN).
						 */
						attachment3?: {
							value?: string;
						};
						/**
						 * Vehicle Chassis Number.
						 */
						chassisno?: {
							value?: string;
						};
						/**
						 * CO2 emission rate.
						 */
						co2emission?: {
							value?: number; // double
						};
						/**
						 * Vehicle Certificate of Entitlement (COE) bid category.
						 */
						coecategory?: {
							value?: string;
						};
						/**
						 * Vehicle Certificate of Entitlement (COE) expiry date.
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						coeexpirydate?: {
							value?: string; // date
						};
						/**
						 * Carbon Monoxide emission rate.
						 */
						coemission?: {
							value?: number; // double
						};
						/**
						 * Effective Date/Time of Ownership.
						 * See "date-time" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						effectiveownership?: {
							value?: string; // date-time
						}; // date-time
						/**
						 * Engine Capacity in cubic centimeter (cc).
						 */
						enginecapacity?: {
							value?: number; // int64
						};
						/**
						 * Vehicle Engine Number.
						 */
						engineno?: {
							value?: string;
						};
						/**
						 * Date when vehicle is registered with LTA.
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						firstregistrationdate?: {
							value?: string; // date
						};
						/**
						 * In-Vehicle Unit (IU) number of the device fitted in Singapore-registered vehicles for
						 * Electronic Road Pricing (ERP) gantries and Electronic Parking System (EPS) car parks.
						 */
						iulabelno?: {
							value?: string;
						};
						/**
						 * Vehicle Make such as 'TOYOTA', 'HONDA', 'AUDI'.
						 */
						make?: {
							value?: string;
						};
						/**
						 * Maximum Laden Weight in kilograms (kg).
						 */
						maximumladenweight?: {
							value?: number; // int64
						};
						/**
						 * Maximum Unladen Weight in kilograms (kg).
						 */
						maximumunladenweight?: {
							value?: number; // int64
						};
						/**
						 * Minimum PARF Benefit in Singapore dollars (SGD).
						 */
						minimumparfbenefit?: {
							value?: number; // double
						};
						/**
						 * Vehicle Model such as 'COROLLA ALTIS CLASSIC 1.6 CVT', 'HRV 1.5 DX CVT'.
						 */
						model?: {
							value?: string;
						};
						/**
						 * Vehicle Motor Number.
						 */
						motorno?: {
							value?: string;
						};
						/**
						 * Number of Transfer.
						 */
						nooftransfers?: {
							value?: number; // int64
						};
						/**
						 * Nitrogen Oxide (NOx) emission rate.
						 */
						noxemission?: {
							value?: number; // double
						};
						/**
						 * Open Market Value is the value of manufacturer invoice price, freight and
						 * insurance in Singapore dollars (SGD).
						 */
						openmarketvalue?: {
							value?: number; // double
						};
						/**
						 * Date when vehicle is first registered in the country of origin.
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						originalregistrationdate?: {
							value?: string; // date
						};
						/**
						 * Particulates (PM - Atmospheric Particulate Matter) emission rate.
						 */
						pmemission?: {
							value?: number; // double
						};
						/**
						 * Power Rate.
						 * Applicable to Electric and Hybrid vehicles powered by electric motors. Unit is Kilowatt.
						 */
						powerrate?: {
							value?: number; // double
						};
						/**
						 * Vehicle Primary Colour (e.g. BLACK).
						 */
						primarycolour?: {
							value?: string;
						};
						/**
						 * Propellant (e.g. Compressed Natural Gas, Diesel, Diesel-CNG, Diesel-Electric,
						 * Diesel-Electric (Plug-In), Electric, Gas, Liquefied Petroleum Gas (LPG),
						 * Petrol, Petrol-CNG, Petrol-Electric, Petrol-Electric (Plug-In), Petrol-LPG.
						 */
						propellant?: {
							value?: string;
						};
						/**
						 * Actual Quota Premium (QP) amount payable for the COE upon registration, conversion or COE
						 * revalidation in Singapore dollars (SGD). For renewal of COE, the value will contain
						 * actual PQP paid.
						 */
						quotapremium?: {
							value?: number; // double
						};
						/**
						 * See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
						 */
						roadtaxexpirydate?: {
							value?: string; // date
						};
						/**
						 * Vehicle Scheme (e.g. REVISED OFF-PEAK CAR).
						 */
						scheme?: {
							value?: string;
						};
						/**
						 * Vehicle Secondary Colour (e.g. WHITE).
						 */
						secondarycolour?: {
							value?: string;
						};
						/**
						 * Status of the Vehicle.
						 */
						status?: {
							code?: "1" | "2";
							desc?: "LIVE" | "DE-REGISTERED";
						};
						/**
						 * Total Hydro Carbon (THC) emission rate.
						 */
						thcemission?: {
							value?: number; // double
						};
						/**
						 * Type of Vehicles such as 'MOTOR CAR', 'STATION /WAGON/JEEP/LAND ROVER'.
						 */
						type?: {
							value?: string;
						};
						/**
						 * Vehicle Registration Number displayed on the vehicle number plates.
						 */
						vehicleno?: {
							value?: string;
						};
						/**
						 * Vehicle Parking Certificate. Applicable for Heavy Vehicles.
						 */
						vpc?: {
							value?: string;
						};
						/**
						 * Manufacturing year.
						 */
						yearofmanufacture?: {
							value?: string;
						};
				  }[]
				| null;
		}
		/**
		 * Person community/commercial data items
		 */
		export interface PersonCommunityCommercial {
			/**
			 * Merdekagen details.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "eligibility": {
			 *     "value": true
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			merdekagen?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Eligibility.
				 */
				eligibility?: {
					value?: boolean;
				};
			};
			/**
			 * Pioneergen details.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "eligibility": {
			 *     "value": true
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			pioneergen?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Eligibility.
				 */
				eligibility?: {
					value?: boolean;
				};
			};
		}
		/**
		 * Person financial data items
		 */
		export interface PersonFinancial {
			/**
			 * CPF Balances of Person in SGD.
			 */
			cpfbalances?: {
				/**
				 * Amount Balance in CPF-MA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 11470.71,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				ma?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-MA balance.
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-OA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 1581.48,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				oa?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-OA balance.
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-RA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 0.01,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				ra?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-RA balance.
					 */
					value?: number; // double
				};
				/**
				 * Amount Balance in CPF-SA.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 21967.09,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				sa?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Value of CPF-SA balance.
					 */
					value?: number; // double
				};
			};
			/**
			 * Employer CPF Contributions of Person in SGD. Does not include any non-employer contributions. Maximum past 15 months' of contributions.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "history": [
			 *     {
			 *       "date": {
			 *         "value": "2016-12-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-11"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2016-12-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2016-12-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-01-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-01-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-01-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-02-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-02-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-02-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-03-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-03-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-03-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-04-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-04-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-04-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-05-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-05-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-05-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-06-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-06-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-06-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-07-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-07-12"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-07-21"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-08-01"
			 *       },
			 *       "amount": {
			 *         "value": 500
			 *       },
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-08-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-08-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-09-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-09-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-09-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-10-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-10-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-10-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-11-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-11-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-11-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-12-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-12-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2017-12-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2018-01-01"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2018-01-12"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "date": {
			 *         "value": "2018-01-21"
			 *       },
			 *       "amount": {
			 *         "value": 750
			 *       },
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			cpfcontributions?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				history?: {
					/**
					 * Amount of contribution in SGD.
					 */
					amount?: {
						value?: number; // double
					};
					/**
					 * Date of Contribution Paid. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
					 */
					date?: {
						value?: string; // date
					};
					/**
					 * Employer who paid the Contribution.
					 */
					employer?: {
						value?: string;
					};
					/**
					 * Month for which CPF Contribution was paid. Format: YYYY-MM
					 */
					month?: {
						value?: string;
					};
				}[];
			};
			/**
			 * Employers who paid CPF Contributions. Maximum up to past 14 months.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "history": [
			 *     {
			 *       "month": {
			 *         "value": "2016-11"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2016-12"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-01"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-02"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-03"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-04"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-05"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-06"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-07"
			 *       },
			 *       "employer": {
			 *         "value": "Crystal Horse Invest Pte Ltd"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-08"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-09"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-10"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-11"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2017-12"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     },
			 *     {
			 *       "month": {
			 *         "value": "2018-01"
			 *       },
			 *       "employer": {
			 *         "value": "Delta Marine Consultants PL"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			cpfemployers?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				history?: {
					/**
					 * Employer who paid the Contribution.
					 */
					employer?: {
						value?: string;
					};
					/**
					 * Month for which CPF Contribution was paid. Format: YYYY-MM
					 */
					month?: {
						value?: string; // ^\d{4}-\d{2}$
					};
				}[];
			};
			/**
			 * CPF Housing Withdrawal information.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "withdrawaldetails": [
			 *     {
			 *       "address": {
			 *         "type": "SG",
			 *         "block": {
			 *           "value": "548"
			 *         },
			 *         "building": {
			 *           "value": ""
			 *         },
			 *         "floor": {
			 *           "value": "09"
			 *         },
			 *         "unit": {
			 *           "value": "128"
			 *         },
			 *         "street": {
			 *           "value": "BEDOK NORTH AVENUE 1"
			 *         },
			 *         "postal": {
			 *           "value": "460548"
			 *         },
			 *         "country": {
			 *           "code": "SG",
			 *           "desc": "SINGAPORE"
			 *         }
			 *       },
			 *       "accruedinterestamt": {
			 *         "value": 1581.48
			 *       },
			 *       "monthlyinstalmentamt": {
			 *         "value": 1196.09
			 *       },
			 *       "principalwithdrawalamt": {
			 *         "value": 2897.01
			 *       },
			 *       "totalamountofcpfallowedforproperty": {
			 *         "value": 10000.01
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			cpfhousingwithdrawal?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				withdrawaldetails?: {
					/**
					 * Accrued interest amount.
					 */
					accruedinterestamt?: {
						value?: number; // double
					};
					/**
					 * Registered Address of Person (including FIN holders).
					 *
					 * Note:
					 * - Address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'UNFORMATTED').
					 * - May be unavailable for some FIN holders.
					 */
					address?: /**
					 * Registered Address of Person (including FIN holders).
					 *
					 * Note:
					 * - Address can be either a Singapore address (type: 'SG') or non Singapore address (type: 'UNFORMATTED').
					 * - May be unavailable for some FIN holders.
					 */
					| {
								/**
								 * Block/House of Address.
								 */
								block?: {
									value?: string;
								};
								/**
								 * Building of Address.
								 */
								building?: {
									value?: string;
								};
								/**
								 * Country/Place of Address. For AddressSG this will always be 'SG'.
								 */
								country?: {
									code?: string;
									desc?: string;
								};
								/**
								 * Floor of Address.
								 */
								floor?: {
									value?: string;
								};
								/**
								 * Postal Code of Address.
								 */
								postal?: {
									value?: string;
								};
								/**
								 * Street of Address.
								 */
								street?: {
									value?: string;
								};
								/**
								 * Type of Address (SG or UNFORMATTED for non SG).
								 */
								type?: "SG";
								/**
								 * Unit of Address.
								 */
								unit?: {
									value?: string;
								};
						  }
						| {
								/**
								 * Unregistered Foreign address line 1
								 */
								line1?: {
									value?: string;
								};
								/**
								 * Unregistered Foreign address line 2
								 */
								line2?: {
									value?: string;
								};
								/**
								 * Type of Address (SG or UNFORMATTED for non SG).
								 */
								type?: "UNFORMATTED";
						  };
					/**
					 * Monthly instalment amount.
					 */
					monthlyinstalmentamt?: {
						value?: number; // double
					};
					/**
					 * Principal withdrawal amount.
					 */
					principalwithdrawalamt?: {
						value?: number; // double
					};
					/**
					 * Total amount of CPF allowed for the property.
					 */
					totalamountofcpfallowedforproperty?: {
						value?: number; // double
					};
				}[];
			};
			/**
			 * CPF Investment Scheme.
			 */
			cpfinvestmentscheme?: {
				/**
				 * Account Details.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "agentbankcode": {
				 *     "value": "OCBC"
				 *   },
				 *   "invbankacctno": {
				 *     "value": "098-26644-4"
				 *   },
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				account?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Agent Bank Code.
					 * example:
					 * {
					 *   "value": "OCBC"
					 * }
					 */
					agentbankcode?: {
						value?: string;
					};
					/**
					 * Account Number.
					 * example:
					 * {
					 *   "value": "098-26644-4"
					 * }
					 */
					invbankacctno?: {
						value?: string;
					};
				};
				/**
				 * Self-Awareness Questionnaire (SAQ) Participation Status.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "code": "X",
				 *   "desc": "Participated",
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				saqparticipationstatus?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * Possible values:
					 * - 'Y': Participated
					 * - 'X': Existing CPFIS participant
					 * - 'N': Did not participate
					 * example:
					 * X
					 */
					code?: "Y" | "X" | "N";
					/**
					 * example:
					 * Participated
					 */
					desc?: string;
				};
				/**
				 * Number of Discounted Singtel Shares.
				 * example:
				 * {
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 * {
				 *   "value": 1360,
				 *   "classification": "C",
				 *   "source": "1",
				 *   "lastupdated": "2019-03-26"
				 * }
				 */
				sdsnetshareholdingqty?: {
					/**
					 * Data classification of data field. Default 'C' - Confidential.
					 * example:
					 * C
					 */
					classification: string;
					/**
					 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
					 * example:
					 * 2019-03-26
					 */
					lastupdated: string; // date
					/**
					 * Source of data.
					 *
					 * - '1': Government-verified
					 * - '2': User provided
					 * - '3': Not Applicable (applies only to Person data, not Entity data)
					 * - '4': Verified by SingPass
					 * example:
					 * 1
					 */
					source: "1" | "2" | "3" | "4";
					/**
					 * Optional flag to indicate if data is unavailable from data source.
					 *
					 * NOTE:
					 *
					 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
					 *
					 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
					 *
					 * - If data is available from the data source, this property will not be present.
					 */
					unavailable?: boolean;
					/**
					 * example:
					 * 1360
					 */
					value?: number;
				};
			};
			/**
			 * Detailed breakdown of the latest Notice of Assessment (NOA) within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "amount": {
			 *     "value": 100000.01
			 *   },
			 *   "yearofassessment": {
			 *     "value": "2018"
			 *   },
			 *   "employment": {
			 *     "value": 100000.01
			 *   },
			 *   "trade": {
			 *     "value": 0
			 *   },
			 *   "rent": {
			 *     "value": 0
			 *   },
			 *   "interest": {
			 *     "value": 0
			 *   },
			 *   "taxclearance": {
			 *     "value": "N"
			 *   },
			 *   "category": {
			 *     "value": "ORIGINAL"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			noa?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * Total Assessable Income from the latest NOA.
				 */
				amount?: {
					value?: number; // double
				};
				/**
				 * Type of 'Notice of Assessment' (NOA).
				 */
				category?: {
					value?: "ADDITIONAL" | "AMENDED" | "ORIGINAL" | "REPAYMENT";
				};
				/**
				 * Assessable Income from employment for the latest NOA.
				 */
				employment?: {
					value?: number; // double
				};
				/**
				 * Assessable Income from interest for the latest NOA.
				 */
				interest?: {
					value?: number; // double
				};
				/**
				 * Assessable Income from rent for the latest NOA.
				 */
				rent?: {
					value?: number; // double
				};
				/**
				 * Tax Clearance indicator.
				 */
				taxclearance?: {
					value?: "Y" | "N";
				};
				/**
				 * Assessable Income from trade for the latest NOA.
				 */
				trade?: {
					value?: number; // double
				};
				/**
				 * The year of assessment (YYYY) for the latest NOA.
				 */
				yearofassessment?: {
					value?: string; // [0-9]{4}
				};
			};
			/**
			 * Summary of latest Notice of Assessment within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "amount": {
			 *     "value": 100000.01
			 *   },
			 *   "yearofassessment": {
			 *     "value": "2018"
			 *   },
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			"noa-basic"?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				/**
				 * The assessable income amount from the latest Notice of Assessment.
				 */
				amount?: {
					value?: number; // double
				};
				/**
				 * The year of assessment (YYYY) for the latest Notice of Assessment.
				 */
				yearofassessment?: {
					value?: string; // [0-9]{4}
				};
			};
			/**
			 * Detailed breakdown of latest 2 Notice of Assessments within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "noas": [
			 *     {
			 *       "amount": {
			 *         "value": 100000.01
			 *       },
			 *       "yearofassessment": {
			 *         "value": "2018"
			 *       },
			 *       "employment": {
			 *         "value": 100000.01
			 *       },
			 *       "trade": {
			 *         "value": 0
			 *       },
			 *       "rent": {
			 *         "value": 0
			 *       },
			 *       "interest": {
			 *         "value": 0
			 *       },
			 *       "taxclearance": {
			 *         "value": "N"
			 *       },
			 *       "category": {
			 *         "value": "ORIGINAL"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			noahistory?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				noas?: {
					/**
					 * Total Assessable Income for this historical NOA.
					 */
					amount?: {
						value?: number; // double
					};
					/**
					 * Type of 'Notice of Assessment' (NOA) for this historical NOA.
					 */
					category?: {
						value?: "ADDITIONAL" | "AMENDED" | "ORIGINAL" | "REPAYMENT";
					};
					/**
					 * Assessable Income from employment for this historical NOA.
					 */
					employment?: {
						value?: number; // double
					};
					/**
					 * Assessable Income from interest for this historical NOA.
					 */
					interest?: {
						value?: number; // double
					};
					/**
					 * Assessable Income from rent for this historical NOA.
					 */
					rent?: {
						value?: number; // double
					};
					/**
					 * Tax Clearance indicator for this historical NOA.
					 */
					taxclearance?: {
						value?: "Y" | "N";
					};
					/**
					 * Assessable Income from trade for this historical NOA.
					 */
					trade?: {
						value?: number; // double
					};
					/**
					 * The year of assessment (YYYY) for this historical NOA.
					 */
					yearofassessment?: {
						value?: string; // [0-9]{4}
					};
				}[];
			};
			/**
			 * Summary of latest 2 Notice of Assessments within the past three years.
			 * example:
			 * {
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 * {
			 *   "noas": [
			 *     {
			 *       "amount": {
			 *         "value": 100000.01
			 *       },
			 *       "yearofassessment": {
			 *         "value": "2018"
			 *       }
			 *     }
			 *   ],
			 *   "classification": "C",
			 *   "source": "1",
			 *   "lastupdated": "2019-03-26"
			 * }
			 */
			"noahistory-basic"?: {
				/**
				 * Data classification of data field. Default 'C' - Confidential.
				 * example:
				 * C
				 */
				classification: string;
				/**
				 * Last updated date of data field. See "full-date" in https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
				 * example:
				 * 2019-03-26
				 */
				lastupdated: string; // date
				/**
				 * Source of data.
				 *
				 * - '1': Government-verified
				 * - '2': User provided
				 * - '3': Not Applicable (applies only to Person data, not Entity data)
				 * - '4': Verified by SingPass
				 * example:
				 * 1
				 */
				source: "1" | "2" | "3" | "4";
				/**
				 * Optional flag to indicate if data is unavailable from data source.
				 *
				 * NOTE:
				 *
				 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
				 *
				 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
				 *
				 * - If data is available from the data source, this property will not be present.
				 */
				unavailable?: boolean;
				noas?: {
					/**
					 * Assessable Income for this historical NOA.
					 */
					amount?: {
						value?: number; // double
					};
					/**
					 * The year of assessment (YYYY) for this historical NOA.
					 */
					yearofassessment?: {
						value?: string; // [0-9]{4}
					};
				}[];
			};
		}
		export interface UnavailableFlag {
			/**
			 * Optional flag to indicate if data is unavailable from data source.
			 *
			 * NOTE:
			 *
			 * - This optional property will be only present with value true if there is no data available from the data source; i.e. record not found.
			 *
			 * - When this flag is true, no other data attributes will be present (other than classification, source, and lastupdated).
			 *
			 * - If data is available from the data source, this property will not be present.
			 */
			unavailable?: boolean;
		}
	}
}
