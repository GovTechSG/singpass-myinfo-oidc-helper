# Changelogs

## 4.2.22
- Update pioneergen and merdekagen profile generation
- dob check to fallback to archetype dob
- set eligibility to false for opt out archetypes
- set MG archetypes dob year to 1959
- clear eligibility / quantum values from PG archetypes
- add dob to PG archetypes

## 4.2.21
- add children in fake-helper

## 4.2.19
- add divorcedate in fake-helper

## 4.2.18
- minor changes in pioneergen quantum value when dob is given during login

## 4.2.17
- Update pioneergen quantum value when dob is given during login

## 4.2.16
- Update merdekagen and pioneergen eligibility values when dob is given during login

## 4.2.15
- Update fake profiles quantum value

## 4.2.14
- Change pioneergen quantum from number to string in myinfo-domain
## 4.2.13
- Add fake profiles for Pioneergen

## 4.2.12
- Add pioneergen property in myinfo-domain

## 4.2.11
- Update profile to have default passportNumber and passport expiryDate

## 4.2.10
- Add tob & sex to child

## 4.2.9
- Add tob & sex to child

## 4.2.8
- Revert update constructAuthorizationUrl

## 4.2.7
- Update constructAuthorizationUrl to set redirectUri if exist

## 4.2.6
- Restore refreshSession for singpass-helper
- Fix vulnerability 1598
- Upgrade jest to 26

## 4.2.5
- Reset child nric for testing

## 4.2.4
- Updated `request` module to fix `ajv` lib vulnerability

## 4.2.3
- export new mock profile aged 17

## 4.2.2
- added new mock profile aged 17

## 4.2.1
- Add empty string for remaining marital types

## 4.2.0

- updated node-jose to v2.0.0, only compatible with node 10 and above

## 4.1.0

- updated mock profile to include drivinglicence
- added default response fields for mock profile (lastupdated, source, classification)

## 4.0.0

- **[BREAKING]** Update mock profiles to match new deprecated myinfo fields

## 3.2.22

- remove http-status-codes lib

## 3.2.21

- update child6YearsOld to use nric which is valid for immunisation records

## 3.2.20

- updated filterThroughMyInfoAttributes to include vehicle array

## 3.2.19

- updated edulevel and residentialstatus typing with empty string

## 3.2.18

- updated person and personbasic with prod resemblance response
- updated vehicles to array for personbasic (so that it is the same structure as person)
- updated housingtype, hdbtype, comstatus with empty strings
- updated base profile with updated personbasic interface
- updated `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree`, `mrSGDaddyPerfect`, `mrAppReviewer` mock profiles
- updated fake-helper with corrected response

## 3.2.16

- added default lifestatus param to children mock data

## 3.2.15

- udpated bypass to allow customise name

## 3.2.14

- udpated bypass to allow customise alias name

## 3.2.13

- udpated handling in fake-helper for hdb and housing params
- updated `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree` mock profiles

## 3.2.12

- fixed handling for new params in fake-helper
- added `qdlValidity` in myinfo domain map

## 3.2.11

- removed `ownerprivate` and `householdincome` from mock profiles
- updated `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree` mock profiles
- updated fake-helper to handle new mock params `hdbtype`, `housingtype`, `drivingqdlvalidity`, `vehiclestatus`

## 3.2.10

- updated default values of some params in base mock profiles

## 3.2.9

- add aliasname for MrAppReviewer profile

## 3.2.8

- removed uinfin from MrAppReviewer profile

## 3.2.7

- refactored `filterThroughAttributes` method in fake-helper to checked for nested paths

## 3.2.6

- add `mrSGFreshGradYoungParent`, `mrsPRHdbOwnerWorkingAdult`, `mrSGUncleRetiree` in fake-profiles.ts

## 3.2.5

- add `MrAppReviewer` in fake-profiles.ts

## 3.2.4

- add `MR_APP_REVIEWER` as fake profile

## 3.2.2

- change baseProfile merdekagen.eligibility value to false
- add merdekagen.eligibility value of True to all uncle profiles
- add logic to handle merdekagen.eligibility value to True if overwrite age is higher than 60

## 3.0.3

- Changed basic person and Mr SG Daddy Perfect email addresses from "myinfotesting@gmail.com" to test email address
- Changed the phone numbers of basic person, Mr SG Perfect, and profiles with sponsored children to the test number

## 3.0.2

- Added dynamic dob to baseProfile to ensure profile is always age 59

## 3.0.1

- added uneditable field sex to mrSGDaddyMissingUneditableFields mock profile

## 2.3.4

- Updated comments regarding axios proxy-agent
- Organized imports for index.ts

## 2.3.3

- Update axios client to use proxy-agent (https://github.com/axios/axios/issues/925#issuecomment-419352052)

## 2.3.2

- Replaced with axios-https-proxy-fix with axios (https://github.com/axios/axios/issues/925)

## 2.3.0

- Sync'd configurations with mol-lib-connfig
- Updated dependencies

## 2.2.27

- added fake profiles for SG/PR with no local addresses
- added fake profile for foreigner with blank address fields
- added fake profile for foreigner with absent address object

## 2.1.0

- Using mol-lib-config
- Removed baseurl (doesn't play nice with declaration files)
- Updated with myinfo v3 Person declarations
- Added prepush scripts to ensure code quality
