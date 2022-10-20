module.exports = {
    parser        : '@typescript-eslint/parser',
    parserOptions : {
        sourceType   : 'module',
        ecmaVersion  : 12,
        ecmaFeatures : {
            jsx: true,
        }
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports', 'simple-import-sort', 'align-import', 'align-assignments'
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    root : true,
    env  : {
        node    : true,
        es2021  : true,
        browser : true,
    },
    ignorePatterns : ['test/*', 'src/migrations/*', 'node_modules', 'dist'],
    rules          : {
        '@typescript-eslint/interface-name-prefix'         : 'off',
        '@typescript-eslint/explicit-function-return-type' : 'off',
        '@typescript-eslint/no-explicit-any'               : 'off',
        'unused-imports/no-unused-imports'                 : 'warn',
        'global-require'                                   : ['warn'],
        'no-multi-spaces'                                  : ['off', { exceptions: { ImportDeclaration: true } }],
        'comma-style'                                      : ['warn', 'last', {
            exceptions: {
                ArrayExpression         : false,
                ArrayPattern            : false,
                ArrowFunctionExpression : false,
                CallExpression          : false,
                FunctionDeclaration     : false,
                FunctionExpression      : false,
                ImportDeclaration       : false,
                ObjectExpression        : false,
                ObjectPattern           : false,
                VariableDeclaration     : false,
                NewExpression           : false,
            }
        }],
        'func-call-spacing'        : ['warn', 'never'],
        'function-paren-newline'   : ['warn', 'multiline-arguments'],
        'implicit-arrow-linebreak' : ['warn', 'beside'],
        indent                     : ['warn', 4, {
            SwitchCase          : 1,
            VariableDeclarator  : 1,
            outerIIFEBody       : 1,
            // MemberExpression: null,
            FunctionDeclaration : {
                parameters : 'first',
                body       : 1
            },
            FunctionExpression: {
                parameters : 'first',
                body       : 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression        : 1,
            ObjectExpression       : 1,
            ImportDeclaration      : 1,
            flatTernaryExpressions : false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes           : ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments         : false
        }],
        'object-curly-spacing'                : ['warn', 'always'],
        'align-assignments/align-assignments' : [2, { requiresOnly: false }],
        'simple-import-sort/imports'          : 'warn',
        'multiline-ternary'                   : ['warn', 'always'],
        'class-methods-use-this'              : ['warn', {
            exceptMethods: [],
        }],
        'operator-linebreak'              : ['warn', 'before', { overrides: { '=': 'none' } }],
        'padding-line-between-statements' : 'off',
        'prefer-object-spread'            : 'warn',
        'prefer-const'                    : 'off',
        quotes                            : ['warn', 'single', { avoidEscape: true }],
        'quote-props'                     : ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        'semi-spacing'                    : ['warn', { before: false, after: true }],
        'sort-keys'                       : ['off', 'asc', { caseSensitive: false, natural: true }],
        'semi-style'                      : ['warn', 'last'],
        'sort-vars'                       : 'off',
        'space-before-function-paren'     : ['warn', {
            anonymous  : 'always',
            named      : 'never',
            asyncArrow : 'always'
        }],
        /*        'space-in-brackets': ['warn', 'always', {
        singleValue      : true,
        objectsInArrays  : false,
        arraysInArrays   : true,
        arraysInObjects  : true,
        objectsInObjects : false,
        propertyName     : false
    }],*/
        'object-curly-newline': ['warn', {
            ObjectExpression  : { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern     : { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration : { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration : { minProperties: 4, multiline: true, consistent: true },
        }],
        'dot-location'         : ['warn', 'property'],
        'max-classes-per-file' : ['warn', 1],
        'no-empty-function'    : ['warn', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ]
        }],
        'no-lone-blocks'   : 'warn',
        'no-magic-numbers' : ['off', {
            ignore             : [],
            ignoreArrayIndexes : true,
            enforceConst       : true,
            detectObjects      : false,
        }],
        'no-return-assign' : ['warn', 'always'],
        'key-spacing'      : ['warn', {
            beforeColon : false, afterColon  : true, align       : {
                beforeColon : true,
                afterColon  : true,
                on          : 'colon'
            }
        }],
        'keyword-spacing': ['warn', {
            before    : true,
            after     : true,
            overrides : {
                return : { after: true },
                throw  : { after: true },
                case   : { after: true }
            }
        }],
        'max-len': ['warn', 100, 2, {
            ignoreUrls             : true,
            ignoreComments         : false,
            ignoreRegExpLiterals   : true,
            ignoreStrings          : true,
            ignoreTemplateLiterals : true,
        }],
        'newline-per-chained-call' : ['warn', { ignoreChainWithDepth: 4 }],
        'no-mixed-spaces-and-tabs' : 'warn',
        'no-restricted-syntax'     : [
            'warn',
            {
                selector : 'ForInStatement',
                message  : 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector : 'ForOfStatement',
                message  : 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
            {
                selector : 'LabeledStatement',
                message  : 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector : 'WithStatement',
                message  : '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-tabs'                    : 'warn',
        'no-unneeded-ternary'        : ['warn', { defaultAssignment: false }],
        'no-useless-catch'           : 'warn',
        'no-useless-return'          : 'warn',
        'no-useless-concat'          : 'warn',
        'callback-return'            : 'off',
        'handle-callback-err'        : 'off',
        'no-path-concat'             : 'warn',
        'array-element-newline'      : ['off', { multiline: true, minItems: 3 }],
        'array-bracket-newline'      : ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }
        'block-spacing'              : ['warn', 'always'],
        'brace-style'                : ['warn', '1tbs', { allowSingleLine: true }],
        camelcase                    : ['warn', { properties: 'never', ignoreDestructuring: false }],
        'align-import/align-import'  : 'warn',
        'simple-import-sort/exports' : 'warn',
        'no-multiple-empty-lines'    : [
            'warn',
            {
                max    : 1,
                maxEOF : 1,
                maxBOF : 0,
            },
        ],
    }
};