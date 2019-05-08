export const unavailableField: UnavailableField = {
	lastupdated: "2018-05-10",
	source: "1",
	classification: "C",
	unavailable: true,
};

interface UnavailableField {
	classification: "C";
	// tslint:disable-next-line: max-union-size
	source: "1" | "2" | "3" | "4";
	lastupdated: string; // date
	unavailable: boolean;
}
