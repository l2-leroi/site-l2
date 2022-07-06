module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'max-len': [2, { code: 160 }],
    'react/destructuring-assignment': 0,
    'react/no-danger': 0,
    'no-restricted-globals': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 2,
    'no-return-assign': 0,
    'react/require-default-props': 0,
    'prefer-destructuring': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript/no-use-before-define': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-curly-newline': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'class-methods-use-this': 0,
    'prefer-promise-reject-errors': 0,
    'react/function-component-definition': 0,

    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.ts', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],
    'no-shadow': 'off',
    'react/no-array-index-key': 'off',
    camelcase: 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-plusplus': 'off',
    eqeqeq: 'off',
    'react/function-component-definition': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
