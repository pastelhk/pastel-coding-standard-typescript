import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
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

export default [...compat.extends(
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "airbnb-typescript",
    "@pasteltech/eslint-config-base",
), {
    plugins: {
        react,
        "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },

    rules: {
        "react/destructuring-assignment": ["error", "always", {
            ignoreClassFields: true,
        }],

        "react/jsx-props-no-spreading": ["warn"],
        "react/prop-types": "off",
        "react/self-closing-comp": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/display-name": "error",

        "no-restricted-syntax": ["error", {
            selector: "MemberExpression[property.name='at']",
            message: ".at is not available in older version of browsers. Use bracket notation instead",
        }],

        "import/no-internal-modules": ["error", {
            allow: ["@mui/**", "react-dom/*"],
        }],
    },
}];