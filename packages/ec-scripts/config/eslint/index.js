module.exports = () => ({
    extends: 'airbnb-base',
    parser: 'babel-eslint',
    env: {
        browser: true,
    },
    rules: {
        indent: ['warn', 4, { SwitchCase: 1 }],
        'arrow-parens': 'off',
        quotes: ['error', 'single'],
        'space-before-function-paren': 'off',
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore',
        }],
    },
});
