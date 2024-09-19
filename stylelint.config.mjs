export default {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue', 'stylelint-config-recess-order'],
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'property-no-unknown': null,
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'scss/no-global-function-names': null,
    'at-rule-empty-line-before': ['always'],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'deep'] }],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
  ignoreFiles: ['dist/**/*', 'index.html'],
}
