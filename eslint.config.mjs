import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		languageOptions: {
			globals: globals.browser,
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			'simple-import-sort': simpleImportSort,
			prettier: prettier,
			'@typescript-eslint': tseslint,
			'jsx-a11y': jsxA11y,
			import: importPlugin,
			react: pluginReactConfig,
			'react-hooks': reactHooks,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'react/prop-types': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'prettier/prettier': 'error',
			'import/prefer-default-export': 'off',
			'react/jsx-filename-extension': [
				'error',
				{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
			],
			'no-var': 'error',
			'no-console': 'warn',
			'import/no-default-export': 'warn',
			'react/jsx-pascal-case': 'error',
			'react/jsx-key': 'error',
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'import/no-unresolved': 'error',
			'arrow-parens': 'error',
		},
		overrides: [
			{
				files: ['*.ts', '*.tsx'],
				rules: {
					'no-undef': 'off',
				},
			},
		],
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
];
