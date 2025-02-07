# Changelogs

## x.x.x

-   Update convenience test suite to include SingPass login with PKCE

## 8.4.6

-   Add `codeVerifier` for new singpass integration

## 8.4.5

-   Add passtype to other profiles.

## 8.4.4

-   Add passtype to basicPerson.

## 8.4.3

-   Add passtype to getPersonInfo.

## 8.4.2

-   Add passtype to japanese fake profiles.

## 8.4.1

-   Update axios to v1.7.4

## 8.4.0

-   allow `decryptKey` for util function to accept JWKS strings when format is `json`
-   make use of util function for verifying payload against possible keys
-   add convenience test suite (skipped) for testing/verifying actual ndi oidc integration/configs

## 8.3.9

-   Updated helper to try all possible keys in keyset from SP/CP keys endpoint instead of assuming key position

## 8.3.8

-   Updated dependencies to fix npm audit
-   Migrated from `tslint` to `eslint` and `prettier`

## 8.3.7

-   Add optional `overrideDecryptKey` to corppass and singpass helper's `getIdTokenPayload` method
-   Add `extractJwtHeader` and `extractKidFromIdToken` method

## 8.3.4

-   Add all new profiles for book facilities UAT

## 8.3.3

-   Add new profiles for book facilities UAT

## 8.3.1

-   Add new profiles for book facilities UAT

## 8.2.0

-   **[WARNING]** Remove `vehiclestatus` as a mock param option for `getPersonInfo` in fake helper
-   Add `vehicles` as a mock param option for `getPersonInfo` in fake helper to mock multiple registered vehicles
    -   add `vehicleno`, `status` and `iulabelno` as mock param options for `vehicles`

## 8.1.0

-   Add `regadd` as mock param options for fake profile
-   Add `mrSGFromBedok`

## 7.4.0

-   Update `proxy-agent` from `5.0.0` to `6.3.0`

## 7.2.0

-   **[WARNING]** Updated deps
    -   Updated `axios` from `~0.27.2` to `~1.3.5`
-   **[WARNING]** Changed tsconfig target from `ES6` to `ES2019`

## 7.1.5

-   Update fake profile of mrsMYMommyPerfect to cater for marital status and marriage cert of 50 chars

## 7.1.2

-   take in new parameter for corppass ndi helper, to allow for proxy endpoints to be called instead of directly calling corppass endpoints

## 7.1.1

-   patch the additionalHeaders to be send along with the request

## 7.1.0

-   add additionalHeaders optional params to corppass helper
-   add overrideAuthUrl to corppass helper's constructAuthorizationUrl method

## 7.0.5

-   Update dev dependencies, no breaking changes expected

## 7.0.4

-   Add support for new Singpass domain

## 7.0.0

-   **[BREAKING]** Generate schema based on MyInfo API TUO 3.2.0
    -   Change `PersonCommon` to `PersonBasic` where basic profile return type is expected
    -   Update `MyInfoHelper.getPersonCommon()` to `MyInfoHelper.getPersonBasic()`
    -   Update mock profiles to match the latest specs
-   **[BREAKING]** Update MyInfo domain
    -   `merdekagen`, `gstvoucher`, and `silversupport` have been moved from `PersonCommon` to `PersonCommunity`
    -   `merdekagen.code` is now string instead of enum
    -   `silversupport.year` and gstvoucher.year are now string instead of number (note: still returned as number in prod)
    -   `occupation.code` and `occupation.desc` have been removed (note: still returned as empty strings in prod)
    -   `address.type` is now "UNFORMATTED" instead of "unformatted"

## 6.3.0

-   Added NDI helper

## 6.2.1

-   update app reviewer mock profile

## 6.2.0

-   Added corppass helper

## 6.1.11

-   Updated UINFIN regex to support M series users

## 6.1.10

-   Reduce brv2 archetypes name length

## 6.1.9

-   Use BaseProfile instead of MrSGDaddyPerfect to generate brv2 archetypes

## 6.1.8

-   Add missing marriage date to brv2 archetypes

## 6.1.7

-   Fix proxy profile status url

## 6.1.6

-   update BRV2 ICA UAT archetypes

## 6.1.5

-   add BRV2 ICA UAT archetypes

## 6.1.4

-   Export Util to root

## 6.1.3

-   add setLogger method to override logging behaviour

## 6.1.2

-   add overrideAuthUrl to singpass helper's constructAuthorizationUrl method

## 6.1.0

-   Updated depedencies, no breaking changes expected

## 6.0.0

-   **[BREAKING]** Removed `moment`
-   **[WARNING]** Updated npm dependencies
-   **[WARNING]** Replaced `js-joda` with `@js-joda/core`

## 5.2.8

-   add proxyProfileStatusUrl optional param to myinfo helper
-   add additionalHeaders optional params to myinfo and singpass helper

## 5.2.7

-   Reset child nric for testing

## 5.2.6

-   Fixed proxyUrl to not be constructed if not provided

## 5.2.5

-   Added 3 optional keys to MyInfoHelper: proxyTokenUrl, proxyPersonUrl, proxyPersonBasicUrl to support proxying MyInfo calls without affecting signature generation

## 5.2.4

-   Update axios to 0.24.0

## 5.2.3

-   Update axios to 0.23.0

## 5.2.2

-   merge PRs for security fixes

## 5.2.1

-   redacting sensitive values in error logs

## 5.2.0

-   Fixed logging to ensure that uinfin is never logged even for errors

## 5.1.21

-   Update occupation logic in fake helper

## 5.1.18

-   Don't add the field in transformed mockParams when value is not specified

## 5.1.17

-   Update yearofAssesment to string
-   update test cases

## 5.1.16

-   Convert all the amounts to Number, while transforming CPF/Income data from mockParams
-   Add a value for last updatedAt in finances Mock Data

## 5.1.13

-   Add fake profile of Singapore citizen without address

## 5.1.12

-   Fix cpfcontribution history bug
-   Update test cases

## 5.1.11

-   intialized cpfContributions
-   Added test cases for getPerson

## 5.1.9

-   Removed request library dependency
-   Made state param optional in myinfo-helper's getToken
-   Made all props in myinfo-helper constructor that are only required for retrieval of full person data optional
-   Fixed fake-helper typing

## 5.1.8

-   Revert back to using querystring lib to generate url query in myinfo-helper's constructAuthorizationUrl

## 5.1.7

-   Remove attributes from myinfo helper's constructor, take in attributes in separate myinfo helper functions

## 5.1.6

-   Fixed myinfo-helper's getPerson missing await and slash
-   Fixed myinfo-helper's contructAuthorizationUrl querystring encoding

## 5.1.5

-   Fixed myinfo-helper's authorization url
-   Fixed myinfo-request post

## 5.1.4

-   Added getPerson in fake-helper

## 5.1.3

-   fixing lint errors

## 5.1.2

-   Added employment in mock params for bypass login
-   Added cpf details and noa-basic for finances card

## 5.1.1

-   Add missing parameter 'grant_type' in myinfo-helper's getToken function

## 5.1.0

-   Add functionalities in myinfo-helper for retrieving full person data

## 5.0.6

-   Update japanese profile to have employer and occupation

## 5.0.4

-   **[WARNING]** Updated Myinfo model typings and renamed the namespace from `Components` to `MyInfoComponents`
-   **[WARNING]** Myinfo enum descriptions are now capitalized as per latest Myinfo swagger
-   **[WARNING]** Updated npm dependencies
-   Added `generate-myinfo-typings` script to dynamically generate typings from Myinfo swagger to keep them in sync
-   Added Myinfo enum typings (e.g. `MyInfoEdulevel`)
-   Manually add / overwrite some `PersonCommon` data properties (e.g. add `gstvoucher`, change `vehicles` to array)

## 4.2.30

-   Update dependencies

## 4.2.29

-   Update female profiles to have alias name = LEE XIU

## 4.2.28

-   Add msSGTeenager17 female

## 4.2.27

-   Update mrSGTeenager17 to be single and no child

## 4.2.24

-   Remove logs on SingpassSessionId in refreshSession in singpass-helper.

## 4.2.23

-   Update logic for refreshSession: set maxRedirects to 0 to prevent calling callback API with session id header

## 4.2.22

-   Update pioneergen and merdekagen profile generation
-   dob check to fallback to archetype dob
-   set eligibility to false for opt out archetypes
-   set MG archetypes dob year to 1959
-   clear eligibility / quantum values from PG archetypes
-   add dob to PG archetypes

## 4.2.21

-   add children in fake-helper

## 4.2.19

-   add divorcedate in fake-helper

## 4.2.18

-   minor changes in pioneergen quantum value when dob is given during login

## 4.2.17

-   Update pioneergen quantum value when dob is given during login

## 4.2.16

-   Update merdekagen and pioneergen eligibility values when dob is given during login

## 4.2.15

-   Update fake profiles quantum value

## 4.2.14

-   Change pioneergen quantum from number to string in myinfo-domain

## 4.2.13

-   Add fake profiles for Pioneergen

## 4.2.12

-   Add pioneergen property in myinfo-domain

## 4.2.11

-   Update profile to have default passportNumber and passport expiryDate

## 4.2.10

-   Add tob & sex to child

## 4.2.9

-   Add tob & sex to child

## 4.2.8

-   Revert update constructAuthorizationUrl

## 4.2.7

-   Update constructAuthorizationUrl to set redirectUri if exist

## 4.2.6

-   Restore refreshSession for singpass-helper
-   Fix vulnerability 1598
-   Upgrade jest to 26

## 4.2.5

-   Reset child nric for testing

## 4.2.4

-   Updated `request` module to fix `ajv` lib vulnerability

## 4.2.3

-   export new mock profile aged 17

## 4.2.2

-   added new mock profile aged 17

## 4.2.1

-   Add empty string for remaining marital types

## 4.2.0

-   updated node-jose to v2.0.0, only compatible with node 10 and above

## 4.1.0

-   updated mock profile to include drivinglicence
-   added default response fields for mock profile (lastupdated, source, classification)

## 4.0.0

-   **[BREAKING]** Update mock profiles to match new deprecated myinfo fields

## 3.2.22

-   remove http-status-codes lib

## 3.2.21

-   update child6YearsOld to use nric which is valid for immunisation records

## 3.2.20

-   updated filterThroughMyInfoAttributes to include vehicle array

## 3.2.19

-   updated edulevel and residentialstatus typing with empty string

## 3.2.18

-   updated person and personbasic with prod resemblance response
-   updated vehicles to array for personbasic (so that it is the same structure as person)
-   updated housingtype, hdbtype, comstatus with empty strings
-   updated base profile with updated personbasic interface
-   updated `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree`, `mrSGDaddyPerfect`, `mrAppReviewer` mock profiles
-   updated fake-helper with corrected response

## 3.2.16

-   added default lifestatus param to children mock data

## 3.2.15

-   udpated bypass to allow customise name

## 3.2.14

-   udpated bypass to allow customise alias name

## 3.2.13

-   udpated handling in fake-helper for hdb and housing params
-   updated `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree` mock profiles

## 3.2.12

-   fixed handling for new params in fake-helper
-   added `qdlValidity` in myinfo domain map

## 3.2.11

-   removed `ownerprivate` and `householdincome` from mock profiles
-   updated `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree` mock profiles
-   updated fake-helper to handle new mock params `hdbtype`, `housingtype`, `drivingqdlvalidity`, `vehiclestatus`

## 3.2.10

-   updated default values of some params in base mock profiles

## 3.2.9

-   add aliasname for MrAppReviewer profile

## 3.2.8

-   removed uinfin from MrAppReviewer profile

## 3.2.7

-   refactored `filterThroughAttributes` method in fake-helper to checked for nested paths

## 3.2.6

-   add `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree` in fake-profiles.ts

## 3.2.5

-   add `MrAppReviewer` in fake-profiles.ts

## 3.2.4

-   add `MR_APP_REVIEWER` as fake profile

## 3.2.2

-   change baseProfile merdekagen.eligibility value to false
-   add merdekagen.eligibility value of True to all uncle profiles
-   add logic to handle merdekagen.eligibility value to True if overwrite age is higher than 60

## 3.0.3

-   Changed basic person and Mr SG Daddy Perfect email addresses from "myinfotesting@gmail.com" to test email address
-   Changed the phone numbers of basic person, Mr SG Perfect, and profiles with sponsored children to the test number

## 3.0.2

-   Added dynamic dob to baseProfile to ensure profile is always age 59

## 3.0.1

-   added uneditable field sex to mrSGDaddyMissingUneditableFields mock profile

## 2.3.4

-   Updated comments regarding axios proxy-agent
-   Organized imports for index.ts

## 2.3.3

-   Update axios client to use proxy-agent (<https://github.com/axios/axios/issues/925#issuecomment-419352052>)

## 2.3.2

-   Replaced with axios-https-proxy-fix with axios (<https://github.com/axios/axios/issues/925>)

## 2.3.0

-   Sync'd configurations with mol-lib-connfig
-   Updated dependencies

## 2.2.27

-   added fake profiles for SG/PR with no local addresses
-   added fake profile for foreigner with blank address fields
-   added fake profile for foreigner with absent address object

## 2.1.0

-   Using mol-lib-config
-   Removed baseurl (doesn't play nice with declaration files)
-   Updated with myinfo v3 Person declarations
-   Added prepush scripts to ensure code quality
