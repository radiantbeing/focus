import jseslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
    globalIgnores(["server/dist/"]),

    jseslint.configs.recommended,

    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,

    perfectionist.configs["recommended-natural"],

    prettierConfig,

    {
        languageOptions: {
            ecmaVersion: 2023,
            globals: globals.node,
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["eslint.config.js"]
                },
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-use-before-define": "error",
            "no-use-before-define": "off"
        }
    }
]);
