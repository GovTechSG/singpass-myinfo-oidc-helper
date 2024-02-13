export const unavailableField: UnavailableField = {
	lastupdated: "2018-05-10",
	source: "1",
	classification: "C",
	unavailable: true,
};

interface UnavailableField {
	classification: "C";
	source: "1" | "2" | "3" | "4";
	lastupdated: string; // date
	unavailable: boolean;
}

export enum aliasName {
	LEE_XIU = "LEE XIU",
	JASCKSON_LIM_YONG_XIANG = "JASCKSON LIM YONG XIANG",
}
