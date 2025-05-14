import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

const config: Linter.Config[] = [
  eslint.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: 'readonly',
        process: 'writable',
        console: 'writable',
        __dirname: 'readonly'
      }
    },
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      '@typescript-eslint': tseslint as any,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'error',
      'no-empty': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];

export default config; 