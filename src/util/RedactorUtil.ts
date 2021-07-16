import * as _ from "lodash";

export const redactUinfin = (input: string): string => {
	if (_.isNil(input) || !_.isString(input)) {
		return input;
	}

	return input.replace(/[STFG]\d{7}[A-Z]/gi, (value) => {
		return `${value.substr(0, 1)}***${value.substr(4)}`;
	});
};
