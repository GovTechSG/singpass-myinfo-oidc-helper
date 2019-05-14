# Singpass MyInfo OIDC helper

Use this module to build client applications that can:

- Authenticate users via the Singpass OIDC provider
- Retrieve user's MyInfo data via the MyInfo Person Basic API

---

## Installation

TODO: pending publish to npm registry

`npm i singpass-myinfo-oidc-helper`

For now, can start using the initial release of this module via the git repo branch:

`git@github.com:GovTechSG/singpass-myinfo-oidc-helper.git#1.0.0`

---

## MyInfo

---

### MyInfoHelper

Helper to get a MyInfo person

`import { MyInfo } from "singpass-myinfo-oidc-helper"`

MyInfo.Helper

- `constructor`

| Param              | Type     | Description                                                                                                                                       |
|--------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| attributes         | string[] | Array of user attributes to retrieve from MyInfo. For full list of attributes, see [here](https://www.ndi-api.gov.sg/library/trusted-data/myinfo/ |
| clientID           | string   | Your app's client ID when you onboarded with MyInfo                                                                                               |
| personBasicURL     | string   | The full URL to the MyInfo person basic endpoint. Exposed for user to choose between staging, prod, and any mock server                           |
| singpassEserviceID | string   | Your app's ID when you onboarded Singpass. Used by MyInfo to check if the NRIC you are trying to get has logged into your Singpass app recently.  |
| keyToDecryptJWE    | string   | Your private key. The public key has been given to MyInfo during onboarding, for them to encrypt the JWE containing Person Data                   |
| apexSigningURL     | string   | Used for constructing the Authorization header to Apex - what Apex calls realm. => Apex_L2_Eg realm="{realm}"                                     |
| privateKeyContent  | string   | Used for signing the Authorization header to Apex. Needs to be an encrypted PKCS8 private key                                                     |
| privateKeyPassword | string   | the password that you used to encrypt privateKeyContent                                                                                           |

- `getPersonData(uinfin: string) => MyInfoPerson` - get Person Data in the shape of MyInfoPerson

---

### MyInfoRequest

Usually not needed, for making any other custom requests to MyInfo not covered in our MyInfo helper.

- `constructor`

| Param              | Type   | Description                                                                                                                       |
|--------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| appId              | string | Your app's client ID when you onboarded with MyInfo                                                                               |
| realm              | string | Used for constructing the Authorization header to Apex. => Apex_L2_Eg realm="{realm}" In MyInfoHelper we called it apexSigningURL |
| privateKeyContent  | string | Used for signing the Authorization header to Apex. Needs to be an encrypted private key                                     |
| privateKeyPassword | string | the password that you used to encrypt privateKeyContent                                                                           |

- `get(uri: string, params?: { [key: string]: any }, bearer?: string)` - make get request to the defined myinfo gov endpoint

    - `params` refer to the query params for the get request
    - `bearer` is the bearer token for Apex

- `postForm(uri: string, formData?: { [key: string]: any }, bearer?: string)` - make post request to the defined myinfo gov endpoint

    - formData for the body
    - `bearer` the bearer token for Apex

---
### Fake

MyInfo.Fake.FakeMyInfoHelper

Use getPersonData to get a fake MyInfo person

- `constructor`

| Param      | Type      | Description                                            |
|------------|-----------|--------------------------------------------------------|
| attributes | string[]? | List of MyInfo attributes that this helper will return |

- `getPersonData({
archetype: ProfileArchetype,
marital?: string,
marriagedate?: string,
marriagecertno?: string,
countryofmarriage?: string,
occupation?: string,
occupationfreeform?: string,
dob?: string,
}) => MyInfoPerson` - get a fake person data.

- enum MyInfo.Fake.ProfileArchetype
suitably named profile archetypes to generate different types of fake MyInfo person

---

## Singpass

Helper for integrating with Singpass OIDC

`import { Singpass } from "singpass-myinfo-oidc-helper"`

Singpass.OidcHelper
- `constructor`

| Param            | Type   | Description                                                                                                |
|------------------|--------|------------------------------------------------------------------------------------------------------------|
| authorizationUrl | string | The URL for Singpass /authorize endpoint                                                                   |
| logoutUrl        | string | The URL for Singpass /logout endpoint                                                                      |
| tokenUrl         | string | The URL for Singpass /token endpoint                                                                       |
| clientID         | string | Your app's ID when you onboarded Singpass.                                                                 |
| clientSecret     | string | The client secret. To be sent together with client ID to token endpoint                                    |
| redirectUri      | string | the redirect URL for Singpass to redirect to after user login. Must be whitelisted by SP during onboarding |
| jweDecryptKey    | string | Private key for decrypting the JWT that wraps the token                                                    |
| jwsVerifyKey     | string | Public key for verifying the JWT that wraps the token                                                      |

#### Login

- `constructAuthorizationUrl = (state: string, nonce?: string) => string` - constructs the authorization url with the necessary params, including the:

	- state (later returned in redirectUri)
	- nonce (later returned inside the JWT from token endpoint)

- `getTokens (authCode: string, axiosRequestConfig?: AxiosRequestConfig) => Promise<TokenResponse>` - get back the tokens from SP token endpoint. Outputs TokenResponse, which is the input for getIdTokenPayload
- `getIdTokenPayload(tokens: TokenResponse) => Promise<TokenPayload>` - decrypt and verify the JWT. Outputs TokenPayload, which is the input for extractNricAndUuidFromPayload
- `extractNricAndUuidFromPayload(payload: TokenPayload) => { nric: string, uuid: string }` - finally, get the nric and WOG (Whole-of-government) UUID of the user from the ID Token TokenPayload

#### Logout Singpass SSO session

- `logoutOfSession(sessionId: string) => Promise<SessionLogoutResult>`- Log user out of Singpass session, using a valid session id (that is retrieved from Singpass domain cookie)
