module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    'no-debugger': 'off',
    'prefer-template': 'error',
    'prettier/prettier': 'warn',
    'vue/attributes-order': ['warn', { alphabetical: true }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false, ignores: [] }],
    'vue/html-self-closing': ['error', { html: { void: 'any', normal: 'any', component: 'always' }, svg: 'always', math: 'always' }],
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }],
  },
}
