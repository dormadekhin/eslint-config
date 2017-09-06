module.exports = {
  extends: ['prettier/react'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/boolean-prop-naming': 'off',
    'react/default-props-match-prop-types': 'error',
    'react/display-name': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': ['error', {forbid: ['any', 'array', 'object']}],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-handler-names': [
      'off',
      {eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on'},
    ],
    'react/jsx-key': 'error',
    // todo: disable `ignoreRefs` and`allowArrowFunctions` options
    'react/jsx-no-bind': [
      'error',
      {ignoreRefs: true, allowArrowFunctions: true, allowBind: false},
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {allowAllCaps: true, ignore: []}],
    'react/jsx-sort-prop-types': 'off', // deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-comment-textnodes': 'off', // deprecated in favor of react/jsx-no-comment-textnodes
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', {ignoreStateless: true}],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/prop-types': [
      'error',
      {ignore: [], customValidators: [], skipUndeclared: false},
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-extension': 'off', // deprecated in favor of import/extensions
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    // disabled until https://github.com/yannickcr/eslint-plugin-react/pull/685 is merged
    'react/sort-comp': [
      'off',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
};
