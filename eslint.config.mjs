// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig({
  files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
  extends: [js.configs.recommended, tseslint.configs.recommended],
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/indent': ['error', 2],       // 2-space indentation
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
  },
});