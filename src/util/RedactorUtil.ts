export const redactNricfinInString = (input: string): string => {
	const indexOfNric = getIndexOfNricInString(input);
	if (indexOfNric !== -1) {
		const nric = input.substr(indexOfNric, 9);
		const redactedNric = redactNricfin(nric);

		return input.replace(nric, redactedNric);
	}

	return input;
};

export const redactNricfin = (nricfin: string): string => {
	if (nricfin && isValidNricfin(nricfin)) {
		const firstThreeDigits = nricfin.substring(1, 4);
		return nricfin.replace(firstThreeDigits, "***");
	}

	return nricfin;
};

const isValidNricfin = (value) => {
	const result = /[STFG]\d{7}[A-Z]/i.exec(value);
	return result;
};

const getIndexOfNricInString = (value): number => {
	const result = /[STFG]\d{7}[A-Z]/i.exec(value);
	if (!!result) {
		return result.index;
	}
	return -1;
};

