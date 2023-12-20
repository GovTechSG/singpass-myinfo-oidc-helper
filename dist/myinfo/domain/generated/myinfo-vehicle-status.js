"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoVehicleStatus = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoVehicleStatus;
(function (MyInfoVehicleStatus) {
    MyInfoVehicleStatus["LIVE"] = "1";
    MyInfoVehicleStatus["DEREGISTERED"] = "2";
})(MyInfoVehicleStatus || (exports.MyInfoVehicleStatus = MyInfoVehicleStatus = {}));
var MyInfoVehicleStatusMapping;
(function (MyInfoVehicleStatusMapping) {
    MyInfoVehicleStatusMapping["LIVE"] = "LIVE";
    MyInfoVehicleStatusMapping["DEREGISTERED"] = "DE-REGISTERED";
})(MyInfoVehicleStatusMapping || (MyInfoVehicleStatusMapping = {}));
(function (MyInfoVehicleStatus) {
    MyInfoVehicleStatus.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoVehicleStatus),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoVehicleStatus),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoVehicleStatus),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoVehicleStatus),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoVehicleStatus, MyInfoVehicleStatusMapping),
    };
})(MyInfoVehicleStatus || (exports.MyInfoVehicleStatus = MyInfoVehicleStatus = {}));
//# sourceMappingURL=myinfo-vehicle-status.js.map