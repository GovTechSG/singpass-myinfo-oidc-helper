import { redactNricfin, redactNricfinInString } from "../RedactorUtil";

describe("Redactor", () => {

	describe("redactNricfin", () => {
		it("should redact an nric", () => {
			const nric = "S1234567Z";
			const expectedNric = "S***4567Z";
			expect(redactNricfin(nric)).toEqual(expectedNric);
		});

		it("should not redact a non-nric", () => {
			const nric = "Z1234567Z";

			expect(redactNricfin(nric)).toEqual(nric);
		});

		it("should return a nil object as is", () => {
			const nric = null;

			expect(redactNricfin(nric)).toEqual(nric);
		});
	});

	describe("redactNricfinInString", () => {
		it("should redact a string with an nric", () => {
			const input = "https://abc/S1234567Z/123";
			const expectedOutput = "https://abc/S***4567Z/123";

			expect(redactNricfinInString(input)).toEqual(expectedOutput);
		});

		it("should not redact a string without an nric", () => {
			const input = "https://abc/S1234567/123";

			expect(redactNricfinInString(input)).toEqual(input);
		});

		it("should return a nil object as is", () => {
			const input = null;

			expect(redactNricfinInString(input)).toEqual(input);
		});
	});
});
