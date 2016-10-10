module.exports = {
  // ES6
  "ecmaFeatures": {
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "forOf": true,
    "generators": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true
  },

  // Rules
  "rules": {
    // Errors
    "no-cond-assign": 2,
    "no-debugger": 0,
    "no-dupe-keys": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-reserved-keys": 0,
    "no-sparse-arrays": 1,
    "no-unreachable": 1,
    "use-isnan": 2,
    "valid-typeof": 2,

    // Best practice
    "complexity": 0,
    "consistent-return": 1,
    "curly": [2, "multi-line"],
    "default-case": 2,
    "dot-notation": 0,
    "eqeqeq": 2,
    "guard-for-in": 1,
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-else-return": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-labels": 2,
    "no-loop-func": 1,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-void": 2,
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 0,
    "wrap-iife": [2, "inside"],
    "yoda": 2,

    // Strict mode
    "strict": [ 2, "global" ],

    // Variables
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 1,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    // Node
    "handle-callback-err": 2,
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-exit": 0,
    "no-sync": 0,

    // ES6
    "generator-star-spacing": [ 2, "after" ],

    // Style
    "indent": [ 2, 2 ],
    "brace-style": [ 2, "1tbs", { "allowSingleLine": true } ],
    "camelcase": 2,
    "comma-spacing": 0,
    "comma-style": 0,
    "eol-last": 0,
    "quotes": [ 2, "single" ],
    "space-unary-ops": [ 1, { "words": true, "nonwords": false } ],
    "comma-dangle": 0,
    "space-infix-ops": 0,
    // "": ,
    // "": ,
    // "": ,
    // "": ,
    // "": ,
    // "": ,
    // "": ,
    // "": ,
    // "": ,
    // "": ,

    // Doc
    "valid-jsdoc": 1
  },

  // Global vars
  "env": {
    "node": true
  },

  // Global vars
  "globals": {
  },

  // Plugins
};

