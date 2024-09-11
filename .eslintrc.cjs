module.exports = {
  root: true,
  env: { node: true, browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-duplicate-imports': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  },
  settings: {
    tailwindcss: {
      // 이렇게 하면 아래 함수에서도 작동합니다.
      callees: ['classnames', 'clsx', 'cn'],
      // 일반 변수에 사용할 수 없어서 tw라는 템플릿 함수를 만들고 사용
      // tags: ['tw'],
    },
  },
};
