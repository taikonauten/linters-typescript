module.exports = {

  rules: {
    '@typescript-eslint/brace-style': [2, '1tbs', {'allowSingleLine': true}],
    '@typescript-eslint/comma-spacing': [2, {'before': false, 'after': true}],
    '@typescript-eslint/func-call-spacing': [2, 'never'],
    '@typescript-eslint/indent': [2, 2, {'SwitchCase': 1}],
    '@typescript-eslint/keyword-spacing': [2],
    '@typescript-eslint/no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    '@typescript-eslint/quotes': [2, 'single'],
    '@typescript-eslint/semi': [2, 'always']
  }
};
