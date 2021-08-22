module.exports = {
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/prop-types': 0,
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
    'react/jsx-uses-react': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-fallthrough': 'error',
    'prefer-const': 'error',
    'curly': 'error',
    'no-else-return': 'error',
    'default-param-last': 'warn',
    'import/no-unresolved': 'off',
    'no-restricted-imports': [
      'warn',
      {
        patterns: ['..*'],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  env: {
    node: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '17',
    },
  }
};
