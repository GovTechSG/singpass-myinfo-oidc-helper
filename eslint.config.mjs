import js from "@eslint/js";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import jsdoc from "eslint-plugin-jsdoc";
import preferArrow from "eslint-plugin-prefer-arrow";
import importX from "eslint-plugin-import-x";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
	{
		ignores: [
			"dist/**",
			"node_modules/**",
			"shared-config/**",
			"src/types/index.ts",
			"src/types/generated/**",
			"src/types/dist/**",
			"src/types/__tests__/fixtures/**",
		],
	},
	{
		files: ["**/*.ts"],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			sonarjs.configs.recommended,
			importX.flatConfigs.recommended,
			importX.flatConfigs.typescript,
		],
		languageOptions: {
			globals: {
				...globals.es6,
				...globals.node,
			},
			parserOptions: {
				project: "tsconfig.json",
			},
		},
		plugins: {
			jsdoc,
			"prefer-arrow": preferArrow,
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-shadow": ["error"],
			"arrow-body-style": "off",
			"default-case-last": "error",
			"dot-notation": "error",
			eqeqeq: ["error", "smart"],
			"id-denylist": [
				"error",
				"any",
				"Number",
				"number",
				"String",
				"string",
				"Boolean",
				"boolean",
				"Undefined",
				"undefined",
			],
			"import-x/no-cycle": "error",
			"import-x/no-unresolved": "off",
			"import-x/namespace": "off",
			"jsdoc/check-alignment": 1,
			"jsdoc/multiline-blocks": 1,
			"jsdoc/no-multi-asterisks": 1,
			"jsdoc/tag-lines": ["warn", "any", { startLines: 1 }],
			"max-len": ["warn", { code: 200 }],
			"max-lines-per-function": ["error", { max: 200, skipBlankLines: true, skipComments: true }],
			"max-params": ["error", { max: 7 }],
			"new-parens": "error",
			"no-bitwise": "error",
			"no-caller": "error",
			"no-cond-assign": "error",
			"no-console": "error",
			"no-eval": "error",
			"no-extra-parens": "off",
			"no-invalid-this": "warn",
			"no-multi-str": "warn",
			"no-multiple-empty-lines": "error",
			"no-new-wrappers": "error",
			"no-shadow": "off",
			"no-throw-literal": "error",
			"no-trailing-spaces": "error",
			"no-undef-init": "error",
			"no-unsafe-finally": "error",
			"no-var": "error",
			"object-shorthand": "error",
			"one-var": ["error", "never"],
			"prefer-arrow/prefer-arrow-functions": ["error", { allowStandaloneDeclarations: true }],
			"prefer-const": "error",
			radix: "error",
			semi: 2,
			"sonarjs/no-duplicate-string": "warn",
			"spaced-comment": ["error", "always", { markers: ["/"] }],
			"valid-typeof": "off",
		},
	},
	{
		files: ["src/migrations/record/*.ts"],
		rules: {
			"max-len": "off",
		},
	},
	{
		files: ["**/*.spec.ts"],
		rules: {
			"max-lines-per-function": "off",
			"no-console": "off",
			"sonarjs/cognitive-complexity": "off",
			"sonarjs/no-duplicate-string": "off",
			"@typescript-eslint/no-require-imports": "off",
		},
	},
	{
		files: ["src/myinfo/fake/profiles/**/*.ts"],
		rules: {
			"sonarjs/no-duplicate-string": "off",
		},
	},
	prettier,
);
