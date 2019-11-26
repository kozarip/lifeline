module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "@typescript-eslint"
    ],
  "rules": {
    "cyclomatic-complexity": [true, 10],
    "import-name": false,
    "no-implicit-dependencies": false,
    "no-submodule-imports": false,
    "no-console": false,
    "quotemark": [
      true,
      "single",
      "avoid-escape",
      "avoid-template",
      "jsx-double"
    ],
    "indent": [true, "spaces", 2],
    "one-line": false,
    "trailing-comma": [
      true,
      {
        "multiline": {
          "objects": "always",
          "arrays": "always",
          "functions": "never",
          "typeLiterals": "ignore"
        },
        "esSpecCompliant": true
      }
    ],
    "prefer-array-literal": [
      true,
      { "allow-type-parameters": true }
    ],
    "prefer-const": true,
    "no-var-keyword": true,
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-pascal-case",
      "require-const-for-all-caps"
    ],
    "object-literal-shorthand": false,
    "object-shorthand-properties-first": false,
    "object-literal-key-quotes": [true, "as-needed"],
    "object-literal-sort-keys": false,

    "prefer-template": true,
    "no-eval": true,
    "space-before-function-paren": [
      true,
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
        "method": "never",
        "constructor": "never"
      }
    ],
    "align": false,
    "no-duplicate-imports": true,
    "ordered-imports": false,
    "triple-equals": [true, "allow-null-check"],
    "curly": [true, "ignore-same-line"],

    "comment-format": [true, "check-space"],
    "linebreak-style": [true, "LF"],

    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-preblock",
      "check-separator",
      "check-type",
      "check-typecast"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "eofline": true,
    "no-trailing-whitespace": true,
    "no-consecutive-blank-lines": true,
    "semicolon": [
      true,
      "always",
      "ignore-bound-class-methods"
    ],
    "no-increment-decrement": false,
    "max-line-length": {
      "options": [120]
    },
    "brace-style": [
      true,
      "stroustrup",
      { "allowSingleLine": false }
    ],
    "no-collapsible-if": true,
    "no-unnecessary-else": true,

    "jsx-no-multiline-js": false,
    "jsx-wrap-multiline": false,
    "jsx-boolean-value": false,

    "member-ordering": false,
  }
};
