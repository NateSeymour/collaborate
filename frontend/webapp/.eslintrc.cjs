module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
    ],
    'overrides': [
        {
            'env': {
                'node': true,
            },
            'files': ['.eslintrc.{js,cjs}'],
            'parserOptions': {
                'sourceType': 'script',
            },
        },
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'vue',
        'import',
    ],
    'rules': {
        // Style
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'import/extensions': ['error', 'always'],

        // Vue
        'vue/multi-word-component-names': 'off',

        // Typescript
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
