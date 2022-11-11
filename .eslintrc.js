module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    indent: [2, 2],
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'react-hooks/exhaustive-deps': 'error',
    quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/indent': [2, 2],
    'react/jsx-props-no-spreading': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/require-default-props': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-promise-executor-return': 'warn',
    'no-underscore-dangle': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-dupe-keys': 'warn',
  },
  globals: {
    __IS__DEV__: true,
  },
};
