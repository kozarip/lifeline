module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
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
      "no-console": "warn",
      "complexity": [
        "error",
        10
      ],
      "curly": [
        "error",
        "all"
      ],
      "dot-location": [
        "error",
        "property"
      ],
      "no-magic-numbers": "error",
      "no-param-reassign": "error",
      "brace-style": [
        "error",
        "stroustrup",
        {
          "allowSingleLine": false
        }
      ],
      "semi": [
        "error",
        "always"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "indent": [
        "error",
        2
      ],
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "prefer-const": [
        "error",
        {
          "destructuring": "all"
        }
      ],
      "no-var": "error",
      "capitalized-comments": [
        "error",
        "never"
      ],
      "spaced-comment": [
        "error",
        "always"
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "no-duplicate-imports": "error",
      "sort-imports": [
        "error",
        {
          "ignoreCase": true
        }
      ],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": "error",
      "max-len": [
        "error",
        {
          "code": 120
        }
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-inferrable-types": "off"
    }
};
