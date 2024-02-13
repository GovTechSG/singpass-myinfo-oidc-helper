import { redactUinfin } from "../RedactorUtil";

describe("Redactor", () => {
	describe("redactUinfin", () => {
		it("should redact an nric", () => {
			const input = "S1234567Z";
			const expectedOutput = "S***4567Z";
			expect(redactUinfin(input)).toEqual(expectedOutput);
		});

		it("should redact an nric even if the case is different", () => {
			const input = "s1234567z";
			const expectedOutput = "s***4567z";
			expect(redactUinfin(input)).toEqual(expectedOutput);
		});

		it("should not redact a non-nric", () => {
			const input = "Z1234567Z";
			expect(redactUinfin(input)).toEqual(input);
		});

		it("should redact a string with an nric", () => {
			const input = "https://abc/S1234567Z/123";
			const expectedOutput = "https://abc/S***4567Z/123";
			expect(redactUinfin(input)).toEqual(expectedOutput);
		});

		it("should not redact a string without an nric", () => {
			const input = "https://abc/S1234567/123";
			expect(redactUinfin(input)).toEqual(input);
		});

		it("should redact all instances of nrics in the string", () => {
			const input = "https://abc/S1234567Z?uinfin=S1234567Z";
			const expectedOutput = "https://abc/S***4567Z?uinfin=S***4567Z";
			expect(redactUinfin(input)).toEqual(expectedOutput);
		});

		it("should return a nil object as is", () => {
			const input = null;
			expect(redactUinfin(input)).toEqual(input);
		});

		it("should return a non-string as is", () => {
			const input: any = 123;
			expect(redactUinfin(input)).toEqual(input);
		});
	});
});
