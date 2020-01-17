# Singpass MyInfo OIDC helper

Use this module to build client applications that can:

- Authenticate users via the Singpass OIDC provider
- Retrieve user's MyInfo data via the MyInfo Person Basic API

---

## Installation

TODO: pending publish to npm registry

`npm i singpass-myinfo-oidc-helper`

For now, can start using the releases of this module via our git repo tags:

`git@github.com:GovTechSG/singpass-myinfo-oidc-helper.git#2.0.0`

---

## MyInfo

---

### MyInfoHelper

Helper to get a V3 MyInfo person. Because our project only requires the person basic object, we have only written `getPersonBasic` method. Contributions for `getPerson` are welcomed.

`import { MyInfo } from "singpass-myinfo-oidc-helper"`

MyInfo.Helper

- `constructor`

| Param                   | Type     | Description                                                                                                                                                              |
|-------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| attributes              | string[] | Array of user attributes to retrieve from MyInfo. For full list of attributes, see [here](https://public.cloud.myinfo.gov.sg/myinfo/tuo/myinfo-tuo-specs.html)           |
| clientID                | string   | Your app's client ID when you onboarded with MyInfo                                                                                                                      |
| personBasicURL          | string   | The full URL to the MyInfo person basic endpoint. Exposed for lib user to choose between staging, prod, and any mock server                                              |
| singpassEserviceID      | string   | Your app's ID when you onboarded Singpass. Used by MyInfo to check if the NRIC you are trying to retrieve MyInfo data for has recently logged into your app via Singpass |
| keyToDecryptJWE         | string   | Your private key to decrypt MyInfo's JWE payload. The public key has been given to MyInfo during onboarding, for them to encrypt the JWE containing Person Data          |
| certToVerifyJWS         | string   | The public cert from MyInfo as MyInfo payloads are both encrypted with JWE, and signed with JWS                                                                          |
| privateKeyToSignRequest | string   | Used for signing the request to MyInfo server. Needs to be an encrypted PKCS8 private key                                                                                |
| privateKeyPassword      | string   | the password that you used to encrypt privateKeyToSignRequest                                                                                                            |

- `getPersonBasic(uinfin: string) => MyInfo.PersonBasic` - get Person Data in the shape of MyInfo.PersonBasic

---

### MyInfoRequest

Usually not needed, for making any other custom requests to MyInfo not covered in our MyInfo helper.

- `constructor`

| Param                   | Type   | Description                                                                               |
|-------------------------|--------|-------------------------------------------------------------------------------------------|
| appId                   | string | Your app's client ID when you onboarded with MyInfo                                       |
| privateKeyToSignRequest | string | Used for signing the request to MyInfo server. Needs to be an encrypted PKCS8 private key |
| privateKeyPassword      | string | the password that you used to encrypt privateKeyToSignRequest                             |

- `get(uri: string, params?: { [key: string]: any })` - make get request to the defined myinfo gov endpoint

    - `params` refer to the query params for the get request

---

### Fake

MyInfo.Fake.FakeMyInfoHelper

Use getPersonBasic to get a fake MyInfo person

- `constructor`

| Param      | Type      | Description                                            |
|------------|-----------|--------------------------------------------------------|
| attributes | string[]? | List of MyInfo attributes that this helper will return |

- `getPersonBasic({
archetype: ProfileArchetype,
marital?: string,
marriagedate?: string,
marriagecertno?: string,
countryofmarriage?: string,
occupation?: string,
occupationfreeform?: string,
dob?: string,
}) => MyInfo.PersonBasic` - get a fake person data.

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
