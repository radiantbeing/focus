import { globalIgnores } from "eslint/config";
import globals from "globals";
import jseslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config([
    globalIgnores(["client/dist/"]),

    jseslint.configs.recommended,

    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,

    reactHooks.configs["recommended-latest"],
    reactRefresh.configs.vite,

    prettierConfig,

    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: globals.browser,
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
