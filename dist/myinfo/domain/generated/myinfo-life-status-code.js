"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoLifeStatusCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoLifeStatusCode;
(function (MyInfoLifeStatusCode) {
    MyInfoLifeStatusCode["ALIVE"] = "A";
    MyInfoLifeStatusCode["DECEASED"] = "D";
})(MyInfoLifeStatusCode || (exports.MyInfoLifeStatusCode = MyInfoLifeStatusCode = {}));
var MyInfoLifeStatusCodeMapping;
(function (MyInfoLifeStatusCodeMapping) {
    MyInfoLifeStatusCodeMapping["ALIVE"] = "ALIVE";
    MyInfoLifeStatusCodeMapping["DECEASED"] = "DECEASED";
})(MyInfoLifeStatusCodeMapping || (MyInfoLifeStatusCodeMapping = {}));
(function (MyInfoLifeStatusCode) {
    MyInfoLifeStatusCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoLifeStatusCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoLifeStatusCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoLifeStatusCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoLifeStatusCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoLifeStatusCode, MyInfoLifeStatusCodeMapping),
    };
})(MyInfoLifeStatusCode || (exports.MyInfoLifeStatusCode = MyInfoLifeStatusCode = {}));
//# sourceMappingURL=myinfo-life-status-code.js.map