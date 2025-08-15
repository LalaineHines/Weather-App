import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";

export default [
    js.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
        },
    },
];