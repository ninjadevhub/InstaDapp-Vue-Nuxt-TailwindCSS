module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/base',
    // 'plugin:nuxt/recommended', // Use this to enforce "community standards" (https://github.com/nuxt/eslint-plugin-nuxt)
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 'no-console': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
  },
}
