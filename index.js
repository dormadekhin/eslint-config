module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: [
    'babel',
    'eslint-comments',
    'no-use-extend-native',
    'prettier',
    'promise',
    'unicorn',
  ],
  rules: {
    complexity: [2, 11],
    'max-depth': [2, 4],
    'max-nested-callbacks': [2, 3],
    'max-params': [2, 3],
    'max-statements-per-line': [2, {max: 1}],
    'max-statements': [2, 15],
    'no-compare-neg-zero': 2,
    'no-implicit-coercion': [2, {boolean: false, number: true, string: true}],
    'no-magic-numbers': [
      2,
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    // https://github.com/babel/eslint-plugin-babel
    'babel/array-bracket-spacing': 0,
    'babel/arrow-parens': 0,
    'babel/flow-object-type': 0,
    'babel/func-params-comma-dangle': 0,
    'babel/generator-star-spacing': 0,
    'babel/new-cap': 0,
    'babel/no-await-in-loop': 0,
    'babel/no-invalid-this': 2,
    'babel/object-curly-spacing': 0,
    'babel/object-shorthand': 0,
    'babel/semi': 0,
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': 2,
    'eslint-comments/no-duplicate-disable': 2,
    'eslint-comments/no-unlimited-disable': 2,
    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/no-unused-enable': 2,
    'eslint-comments/no-use': [
      2,
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
        ],
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-anonymous-default-export': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 0,
    // https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
    'no-use-extend-native/no-use-extend-native': 2,
    // https://github.com/not-an-aardvark/eslint-plugin-prettier
    'prettier/prettier': [
      2,
      {
        useTabs: false,
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        parser: 'babylon',
        semi: true,
      },
    ],
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/always-return': 2,
    'promise/avoid-new': 0,
    'promise/catch-or-return': 2,
    'promise/no-callback-in-promise': 2,
    'promise/no-native': 0,
    'promise/no-nesting': 2,
    'promise/no-promise-in-callback': 2,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 2,
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/catch-error-name': 0,
    'unicorn/custom-error-definition': 0,
    'unicorn/escape-case': 2,
    'unicorn/explicit-length-check': 2,
    'unicorn/filename-case': 0,
    'unicorn/no-abusive-eslint-disable': 0, // in favor of `eslint-comments/no-unlimited-disable`
    'unicorn/no-array-instanceof': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-process-exit': 2,
    'unicorn/number-literal-case': 0, // conflicts with prettier
    'unicorn/prefer-starts-ends-with': 2,
    'unicorn/prefer-type-error': 0,
    'unicorn/throw-new-error': 2,
  },
};
