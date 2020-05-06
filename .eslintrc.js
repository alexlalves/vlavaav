module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'class-methods-use-this': 'off',
    'arrow-parens': ['error', 'as-needed'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.(js|jsx|ts|tsx)',
        '**/tests/**/*.spec.(js|jsx|ts|tsx)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};
