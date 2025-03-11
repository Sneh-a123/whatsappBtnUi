import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    boxShadow: {
      'custom': '0 2px 0 rgba(0, 0, 0, 0.043)'
    },
    boxShadow: {
      'custom-2': '0 0 16px rgba(0, 0, 0, 0.08)',
    },
    boxShadow: {
      'custom-3': '0 0 8px rgba(0, 0, 0, .12)',
    },
    fontFamily: {
      'sf-pro': ['"SF Pro Text"', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
