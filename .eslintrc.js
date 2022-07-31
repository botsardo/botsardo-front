module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json', './jest.config.ts'],
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'require-jsdoc': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
    },
};
