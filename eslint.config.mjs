import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import eslintPluginAstro from 'eslint-plugin-astro';
import parserAstro from 'astro-eslint-parser';
import eslintTs from '@typescript-eslint/eslint-plugin';
import { includeIgnoreFile } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePath = path.resolve(__dirname, '.gitignore');

const indentSize = 2;

export default [
  includeIgnoreFile(gitignorePath),
  {
    files: ['**/*.{ts,tsx,js,jsx,cjs,mjs}'],
    ignores: ['build/**/*', 'app/entry.server.tsx', 'app/entry.client.tsx', 'app/spec/**/*', 'submodules/**/*'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: parserTs,
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      '@stylistic': stylistic,
      import: importPlugin,
      '@typescript-eslint': eslintTs,
    },
    settings: {
      formComponents: ['Form'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
    },
    rules: {
      ...stylistic.configs['recommended'].rules,
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/indent': ['error', indentSize],
      '@stylistic/jsx-indent': ['error', indentSize],
      '@stylistic/jsx-curly-brace-presence': ['error', 'never'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
          ignoreStrings: true,
        },
      ],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
        multilineDetection: 'brackets',
      }],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/jsx-self-closing-comp': ['error'],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      'no-console': 'error',
      'object-shorthand': ['error', 'always'],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [{
            pattern: '~/**',
            group: 'internal',
          }],
        },
      ],
    },
  },
  {
    files: ['**/*.astro'],
    ignores: ['build/**/*', 'app/entry.server.tsx', 'app/entry.client.tsx', 'app/spec/**/*', 'submodules/**/*'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: parserAstro,
      globals: globals.browser,
      parserOptions: {
        parser: parserTs,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      import: importPlugin,
      '@typescript-eslint': eslintTs,
      astro: eslintPluginAstro,
    },
    rules: {
      ...stylistic.configs['recommended'].rules,
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/indent': ['error', indentSize],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
          ignoreStrings: true,
        },
      ],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
        multilineDetection: 'brackets',
      }],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/jsx-self-closing-comp': ['error'],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      'no-console': 'error',
      'object-shorthand': ['error', 'always'],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [{
            pattern: '~/**',
            group: 'internal',
          }],
        },
      ],
    },
  },
];
