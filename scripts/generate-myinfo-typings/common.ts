export interface EnumNamespace {
	enumNamespace: string;
	enumTypings: EnumTyping[];
}

export interface EnumTyping {
	enumName: string;
	enumEntries: Record<string, string>[];
}

export const FILE_HEADER = `// tslint:disable
// =============================================================================
// This file was generated with \`npm run generate-myinfo-typings\` on ${new Date().toISOString().split('T')[0]}
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
`;
