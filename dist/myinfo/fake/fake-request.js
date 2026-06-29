"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeMyInfoRequest = void 0;
class FakeMyInfoRequest {
    constructor() { }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async get(expectedResponse) {
        return expectedResponse;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async post(expectedResponse) {
        return expectedResponse;
    }
}
exports.FakeMyInfoRequest = FakeMyInfoRequest;
//# sourceMappingURL=fake-request.js.map