import { globalIgnores } from "eslint/config";
import globals from "globals";
import jseslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default tseslint.config([
    globalIgnores(["server/dist/"]),

    jseslint.configs.recommended,

    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,

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
            "sort-imports": "error",
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": "error",
            "@typescript-eslint/explicit-function-return-type": "error"
        }
    }
]);
