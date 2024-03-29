module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'plugin:react/recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0, //to prevent the message of 'xxx' is missing in props validation
    'react/no-unescaped-entities': 'off', //to prevent the message of `'` can be escaped with`&apos;`,...
  },
};
