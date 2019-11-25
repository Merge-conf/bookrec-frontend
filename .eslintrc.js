module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: [2, 'never'],
    indent: ['error', 2],
    'no-tabs': 0,
    'react/jsx-indent': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['off']
  },
  overrides: [{
    "files": [ "*.spec.js" ],
    "rules": {
      "no-unused-expressions": 0,
      "prefer-arrow-callback": 0,
      "no-undef": 0,
      "func-names": 0
    }
  }]
}
