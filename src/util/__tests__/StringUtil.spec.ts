import { isBase64Valid, replaceLineBreaks } from "../StringUtil";


describe("replaceLineBreaks", () => {
	it("should replace double-blackslash-n with linebreaks", () => {
		expect(replaceLineBreaks("line1\\nline2\\nline3")).toEqual("line1\nline2\nline3");
	});
});

describe("isBase64Valid", () => {
	it("should return true for base64 valid strings", () => {
		expect(isBase64Valid("dGhlIGZvcmNlIGlzIHN0cm9uZyB3aXRoIHRoaXMgb25l")).toEqual(true);
		expect(isBase64Valid(
			"eyJyZWNpcGllbnRzIjpbeyJlbmNyeXB0ZWRfa2V5IjoiSnBSeEQyNWMzdExXNVFmSFhPU1VtN" +
			"mhSUERoQXQtbzNLQnlBSlFGMU83MmE3STI2MGh6Q2d3In1dLCJwcm90ZWN0ZWQiOiJleUpoYk" +
			"djaU9pSkJNalUyUzFjaUxDSnJhV1FpT2lJNFptUm5TbWhLTFRsdVRHVnhhbFpUYTJGemFVODJ" +
			"kVE5OUXpobGRraFhWMVJ6Vm5Fell6bHhUbGhOSWl3aVpXNWpJam9pUVRFeU9FTkNReTFJVXpJ" +
			"MU5pSjkiLCJpdiI6ImlicFVfM2hoUnpEbFBib2U3NThsaFEiLCJjaXBoZXJ0ZXh0IjoiYTRCV" +
			"FRsM2kyNENTSktxX1pvb2hfTlppYUlwNk1DZHJvc25LRUppRi13Ymg5cmFjeFJnM212Szl4X0" +
			"JSVS0zQk5KSFU1ZG9zY0NvTE5aQnZnOVFrZWlBcFZtcEk2Z09paGdCb1R6UDIwMU0iLCJ0YWc" +
			"iOiJHSDFkVWpfZzIweGwxdVEtUXBaQnl3In0",
		)).toEqual(true);
	});

	it("should return false for base64 invalid strings", () => {
		expect(isBase64Valid("dGhlIGZvcmNlIGlzIH\nN0cm9uZyB3aXRoIHRoaXMgb25l")).toEqual(false);
		expect(isBase64Valid("dGhlIGZvcmNlIGlzIH\"N0cm9uZyB3aXRoIHRoaXMgb25l")).toEqual(false);
		expect(isBase64Valid(
			"eyJyZWNpcGllbnRzIjpbeyJlbmNyeXB0ZWRfa2V5IjoiSnBSeEQyNWMzdExXNVFmSFhPU1VtN" +
			"mhSUERoQXQtbzNLQnlBSlFGMU83MmE3STI2MGh6Q2d3In1dLCJwcm90ZWN0ZWQiOiJleUpoYk" +
			"djaU9pSkJNalUyUzFjaUxDSnJhV1FpT2lJNFptUm5TbWhLTFRsdVRHVnhhbFpUYTJGemFVODJ" +
			"kVE5OUXpobGRraFhWMVJ6Vm5Fell6bHhUbGhOSWl3aVpXNWpJam9pUVRFeU9FTkNReTFJVXpJ;",
		)).toEqual(false);
	});
});
