import { AxiosError, AxiosResponse } from "axios";
import * as _ from "lodash";

export const redactUinfin = (input: string): string => {
	if (_.isNil(input) || !_.isString(input)) {
		return input;
	}

	return input.replace(/[stfgSTFGM]\d{7}[a-zA-Z]/gm, (value) => {
		return `${value.slice(0, 1)}***${value.slice(4)}`;
	});
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function redactError(param: any) {
	if (_.isNil(param)) {
		return param;
	}

	// Axios error
	const axiosError: AxiosError = param;
	if (!!axiosError?.isAxiosError && !!axiosError?.response) {
		const response: AxiosResponse<string> = param?.response;
		return {
			method: response.config.method,
			url: redactUinfin(response.config.url),
			status: response.status,
			data: redactUinfin(response.data),
		};
	}

	// Regular error
	if (_.isError(param)) {
		return {
			name: param.name,
			message: redactUinfin(param.message),
			stack: redactUinfin(param.stack),
		};
	}

	return param;
}
