module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    // 用于关闭 ESLint 相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    "prettier",
    // 用于关闭 @typescript-eslint/eslint-plugin 插件相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
    "prettier/@typescript-eslint",
    "taro/react",
    "standard"
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "no-use-before-define": 0,
    "no-unused-vars": 0,
    "standard/no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 0
  }
}
