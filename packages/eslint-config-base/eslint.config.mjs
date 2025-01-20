import { fixupConfigRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/dist",
        "**/node_modules",
        "**/.eslintrc.js",
        "coverage/*",
        "**/vite.config.ts",
        "**/webpack.config.js",
        "**/babel.config.js",
        "**/metro.config.js",
    ],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb-typescript/base",
    "prettier",
)), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            __DEV__: true,
            __dirname: false,
            __fbBatchedBridgeConfig: false,
            AbortController: false,
            alert: false,
            cancelAnimationFrame: false,
            cancelIdleCallback: false,
            clearImmediate: true,
            clearInterval: false,
            clearTimeout: false,
            console: false,
            document: false,
            ErrorUtils: false,
            escape: false,
            Event: false,
            EventTarget: false,
            exports: false,
            fetch: false,
            FileReader: false,
            FormData: false,
            global: false,
            Headers: false,
            Intl: false,
            Map: true,
            module: false,
            navigator: false,
            process: false,
            Promise: true,
            requestAnimationFrame: true,
            requestIdleCallback: true,
            require: false,
            Set: true,
            setImmediate: true,
            setInterval: false,
            setTimeout: false,
            queueMicrotask: true,
            URL: false,
            URLSearchParams: false,
            WebSocket: true,
            window: false,
            XMLHttpRequest: false,
        },

        parser: tsParser,
    },

    settings: {
        "import/resolver": {
            typescript: true,
            node: true,
        },
    },

    rules: {
        "no-console": "off",
        "no-nested-ternary": "error",
        "class-methods-use-this": "off",

        "no-param-reassign": ["error", {
            props: true,
            ignorePropertyModificationsFor: ["self"],
        }],

        "no-empty": ["error", {
            allowEmptyCatch: true,
        }],

        "no-await-in-loop": "error",
        "no-else-return": "error",
        "node/global-require": "off",
        "@typescript-eslint/semi": ["error", "never"],

        "@typescript-eslint/no-empty-function": ["error", {
            allow: [
                "arrowFunctions",
                "functions",
                "methods",
                "private-constructors",
                "protected-constructors",
            ],
        }],

        "@typescript-eslint/explicit-member-accessibility": "error",

        "@typescript-eslint/naming-convention": ["error", {
            selector: "default",
            format: ["camelCase"],
        }, {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
        }, {
            selector: "function",
            format: ["camelCase", "PascalCase"],
        }, {
            selector: "import",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
        }, {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
        }, {
            selector: "parameter",
            format: ["PascalCase"],

            filter: {
                regex: "(Component|Factory|Class)$",
                match: true,
            },

            leadingUnderscore: "allow",
        }, {
            selector: "property",
            format: ["camelCase", "snake_case", "PascalCase"],
            leadingUnderscore: "allow",
        }, {
            selector: "memberLike",
            modifiers: ["private"],
            format: ["camelCase"],
        }, {
            selector: "typeLike",
            format: ["PascalCase"],
        }],

        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-optional-chain": ["error"],
        "@typescript-eslint/prefer-nullish-coalescing": ["error"],

        "@typescript-eslint/no-unused-vars": ["error", {
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            ignoreRestSiblings: true,
        }],

        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "import/no-anonymous-default-export": "error",
        "import/no-internal-modules": "error",
        "import/no-self-import": "error",
        "import/namespace": "off",

        "import/no-cycle": ["error", {
            maxDepth: 3,
        }],

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: ["**/*.test.*", "**/setup-tests.ts", "**/*.spec.*"],
        }],
    },
}];