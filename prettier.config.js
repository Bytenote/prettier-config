/**
 * @type {import('prettier').Config}
 * @see https://prettier.io/docs/en/configuration.html
 */
const config = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'consistent',
    jsxSingleQuote: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        'prettier-plugin-jsdoc',
        'prettier-plugin-tailwindcss', // MUST come last
    ].map(require.resolve),
    importOrder: [
        '^react$',
        '<BUILTIN_MODULES>',
        '<THIRD_PARTY_MODULES>',
        '^[@~]/.*$',
        '^[.]',
        '^(?!.*[.]css$)[./].*$',
        '[.]css$',
    ],
    jsdocCommentLineStrategy: 'multiline',
    jsdocSeparateReturnsFromParam: true,
};

module.exports = config;
