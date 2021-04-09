# Singpass MyInfo OIDC helper

Use this module to build client applications that can:

- Authenticate users via the Singpass OIDC provider
- Retrieve user's MyInfo data via the MyInfo Person Basic API

---

## Installation
`npm i @govtechsg/singpass-myinfo-oidc-helper`

---

## MyInfo

---

### MyInfoHelper

Helper to get a V3 MyInfo person. Because our project only requires the person basic object, we have only written `getPersonCommon` method. Contributions for `getPerson` are welcomed.

`import { MyInfo } from "singpass-myinfo-oidc-helper"`

MyInfo.Helper

- `constructor`

| Param                   | Type     | Description                                                                                                                                                              |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| attributes              | string[] | Array of user attributes to retrieve from MyInfo. For full list of attributes, see [here](https://public.cloud.myinfo.gov.sg/myinfo/tuo/myinfo-tuo-specs.html)           |
| clientID                | string   | Your app's client ID when you onboarded with MyInfo                                                                                                                      |
| personBasicURL          | string   | The full URL to the MyInfo person basic endpoint. Exposed for lib user to choose between staging, prod, and any mock server                                              |
| singpassEserviceID      | string   | Your app's ID when you onboarded Singpass. Used by MyInfo to check if the NRIC you are trying to retrieve MyInfo data for has recently logged into your app via Singpass |
| keyToDecryptJWE         | string   | Your private key to decrypt MyInfo's JWE payload. The public key has been given to MyInfo during onboarding, for them to encrypt the JWE containing Person Data          |
| certToVerifyJWS         | string   | The public cert from MyInfo as MyInfo payloads are both encrypted with JWE, and signed with JWS                                                                          |
| privateKeyToSignRequest | string   | Used for signing the request to MyInfo server. Needs to be an encrypted PKCS8 private key                                                                                |
| privateKeyPassword      | string   | the password that you used to encrypt privateKeyToSignRequest                                                                                                            |

- `getPersonCommon(uinfin: string) => MyInfoComponents.Schemas.PersonCommon` - get Person Data in the shape of `MyInfoComponents.Schemas.PersonCommon`

---

### MyInfoRequest

Usually not needed, for making any other custom requests to MyInfo not covered in our MyInfo helper.

- `constructor`

| Param                   | Type   | Description                                                                               |
| ----------------------- | ------ | ----------------------------------------------------------------------------------------- |
| appId                   | string | Your app's client ID when you onboarded with MyInfo                                       |
| privateKeyToSignRequest | string | Used for signing the request to MyInfo server. Needs to be an encrypted PKCS8 private key |
| privateKeyPassword      | string | the password that you used to encrypt privateKeyToSignRequest                             |

- `get(uri: string, params?: { [key: string]: any })` - make get request to the defined myinfo gov endpoint

    - `params` refer to the query params for the get request

---

### Fake

MyInfo.Fake.FakeMyInfoHelper

Use `getPersonCommon` to get a fake MyInfo person

- `constructor`

| Param      | Type      | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| attributes | string[]? | List of MyInfo attributes that this helper will return |


```ts
getPersonCommon({
	archetype: ProfileArchetype;
	userdisplayname?: string;
	marital?: MyinfoMaritialStatusCode;
	marriagedate?: string;
	divorcedate?: string;
	marriagecertno?: string;
	countryofmarriage?: MyinfoCountryCode;
	childrenbirthrecords?: ChildrenBirthRecord[];
	childrenoverridemode?: ChildrenOverrideMode;
	residentialstatus?: MyinfoResidentialCode;
	occupation?: MyinfoOccupationCode;
	occupationfreeform?: string;
	dob?: string;
	gstvyear?: number;
	gvs?: GVS;
	merdekageneligible?: boolean;
	merdekagenquantum?: number;
	merdekagenmessagecode?: MyinfoMerdekaGenerationMessageCode;
	hdbtype?: MyinfoHDBTypeCode;
	housingtype?: MyinfoHousingTypeCode;
	drivingqdlvalidity?: MyinfoDrivingLicenceValidityCode;
	vehiclestatus?: MyinfoVehicleStatus;
}) => MyInfoComponents.Schemas.PersonCommon
```

- get a fake person data.

- enum MyInfo.Fake.ProfileArchetype
suitably named profile archetypes to generate different types of fake MyInfo person

---

## Singpass

Helper for integrating with Singpass OIDC

`import { Singpass } from "singpass-myinfo-oidc-helper"`

Singpass.OidcHelper

- `constructor`

| Param            | Type   | Description                                                                                                |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| authorizationUrl | string | The URL for Singpass /authorize endpoint                                                                   |
| logoutUrl        | string | The URL for Singpass /logout endpoint                                                                      |
| tokenUrl         | string | The URL for Singpass /token endpoint                                                                       |
| clientID         | string | Your app's ID when you onboarded Singpass.                                                                 |
| clientSecret     | string | The client secret. To be sent together with client ID to token endpoint                                    |
| redirectUri      | string | the redirect URL for Singpass to redirect to after user login. Must be whitelisted by SP during onboarding |
| jweDecryptKey    | string | Private key for decrypting the JWT that wraps the token                                                    |
| jwsVerifyKey     | string | Public key for verifying the JWT that wraps the token                                                      |

### Login

- `constructAuthorizationUrl = (state: string, nonce?: string) => string` - constructs the authorization url with the necessary params, including the:

- state (later returned in redirectUri)
- nonce (later returned inside the JWT from token endpoint)

- `getTokens (authCode: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>` - get back the tokens from SP token endpoint. Outputs TokenResponse, which is the input for getIdTokenPayload
- `refreshTokens (refreshToken: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>` - get fresh tokens from SP token endpoint. Outputs TokenResponse, which is the input for getIdTokenPayload
- `getIdTokenPayload(tokens: TokenResponse) => Promise<TokenPayload>` - decrypt and verify the JWT. Outputs TokenPayload, which is the input for extractNricAndUuidFromPayload
- `extractNricAndUuidFromPayload(payload: TokenPayload) => { nric: string, uuid: string }` - finally, get the nric and WOG (Whole-of-government) UUID of the user from the ID Token TokenPayload

#### Logout Singpass SSO session

- `logoutOfSession(sessionId: string) => Promise<SessionLogoutResult>`- Log user out of Singpass session, using a valid session id (that is retrieved from Singpass domain cookie)

---

## Updating Myinfo domains

- Myinfo domains including `MyinfoComponents` and various enums are auto generated via `npm run generate-myinfo-typings '<swagger file>'`
- Swagger file needs to be downloaded from https://api.singpass.gov.sg/developers
- The script will also fetch and generate enums from https://api.singpass.gov.sg/assets/api-lib/myinfo/downloads/myinfo-api-code-tables.xlsx

### Folder / file structure of `src/myinfo/domain`
|Path|What is does|
|----|------------|
|custom/enums|Custom defined enums in json|
|custom/person-common|Additional swagger definitions to go into the `PersonCommon` object|
|generated|Auto generated enums from `generate-myinfo-typings` script, do not add files here!|

### Help! The swagger file is missing `<insert data item name>`!
- Myinfo REST API does not publish every data item
- You will need to manually add its OpenAPI specification it in `custom/person-common` then run `npm run generate-myinfo-typings '<swagger file>'`
- An interface will be created and the corresponding data item will be added to the `PersonCommon` object

### Help! `myinfo-api-code-tables.xlsx` is missing `<insert code name>`!
- `myinfo-api-code-tables.xlsx` lists general codes only
- More detailed lists can be found at https://www.singstat.gov.sg/standards/standards-and-classifications
- If the missing code list can be found in SingStat, update `generate-myinfo-typings` script to import accordingly
- Otherwise
	1. Manually add the enum definition (json) to `custom/enums` folder
		- *Hint: Refer to existing files for format*
	2. Run `npm run generate-myinfo-typings '<swagger file>'`

### Help! `myinfo-api-code-tables.xlsx's <insert code name>` does not match the swagger definition!
- Follow the solution above to add enum definition manually
- That enum will overwrite the auto generated enum
