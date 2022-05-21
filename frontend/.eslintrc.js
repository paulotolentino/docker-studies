module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false, 
    parser: "@babel/eslint-parser",
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {extensions: ['.js', '.jsx']}
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': 'off',
  },
};
