import * as isBase64 from "is-base64";


export function replaceLineBreaks(input: string): string {
	if (!input) {
		return input;
	}

	return input.replace(/\\n/g, "\n");
}

export function isBase64Valid(test: string): boolean {
	return isBase64(test, { paddingRequired: false });
}
