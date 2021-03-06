module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    '@vue'
  ],
  'globals': {
    '$': true,
    'jQuery': true,
    'VERSION': true,
    'COMMITHASH': true,
    'BRANCH': true
  }
}
