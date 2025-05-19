import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

// ESLint configuration with TypeScript and React support
export default tseslint.config(
  // Ignore dist directory
  { ignores: ['dist'] },
  {
    // Extend recommended configurations
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // Apply to TypeScript and TSX files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      // Include browser globals
      globals: globals.browser,
    },
    // Configure React-specific plugins
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // Set up rules
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);