<p align="center">
  <img src="https://i.imgur.com/dV1aZjJ.png" title="Taikonauten">
</p>

<h1 align="center">Taikonauten TypeScript Linter</h1>

<p>&nbsp;</p>

This package provides the TypeScript linter used at [Taikonauten](https://taikonauten.com).

## Description

[ESLint](https://eslint.org/) is a modern tool to lint JavaScript files. The `.eslintrc` file shipped with this repository contains the configuration to properly setup ESLint, while the `eslint/index.js` file contains the current ruleset used at Taikonauten. Most of the rules are default settings for ESLint and more or less a standard for writing JavaScript.

## Installation

Run the following two commands in your terminal to install the package:

```bash
npm install --save-dev @taikonauten/linters-typescript @taikonauten/linters-js eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin babel-eslint
```

Create a `.eslintrc.js` file in your project root and use the following content for it:

```javascript
module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'eslint:recommended',
    './node_modules/@taikonauten/linters-js/eslint/index.js',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        './node_modules/@taikonauten/linters-typescript/eslint/index.js',
      ],
      plugins: [
        '@typescript-eslint',
      ],
    }
  ],
};
```

This is an example config and in most cases you will need to fine tune it depending on the project.
More information on how to configure: [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## Using with your IDE or Editor

After that, make sure your editor or IDE supports the `.eslintrc` file. PhpStorm works with it right out of the box.
For Sublime Text, install the [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint) plugin.
For Atom, install the [linter-eslint](https://atom.io/packages/linter-eslint) plugin.
For VS Code, install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin.

---

Made with ♡ at Taikonauten
