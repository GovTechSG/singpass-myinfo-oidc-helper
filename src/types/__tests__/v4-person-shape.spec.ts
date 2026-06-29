import { MyInfoComponentsV4 } from "src/types/v4/myinfo-domain";

describe("MyInfoComponentsV4.Schemas.Person shape", () => {
	it("exposes the 11 fields added per the ticket (compile-time assertion)", () => {
		const person = {} as MyInfoComponentsV4.Schemas.Person;
		// Each line fails `tsc` if the property is missing or renamed.
		const fields = [
			person.uuid,
			person.silversupport,
			person.gstvoucher,
			person.billadd,
			person.homeno,
			person.mailadd,
			person.edulevel,
			person.gradyear,
			person.schoolname,
			person.householdincome,
			person.vocationallicences,
		];
		expect(fields).toHaveLength(11);
	});

	it("retains chas (kept with justification — defined in the v4 schema)", () => {
		const person = {} as MyInfoComponentsV4.Schemas.Person;
		const chas = person.chas;
		expect(chas).toBeUndefined();
	});
});
