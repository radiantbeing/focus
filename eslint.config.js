import jseslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["client/dist/", "server/dist/"]),

  {
    extends: [
      jseslint.configs.recommended,
      perfectionist.configs["recommended-natural"],
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked
    ],
    files: ["client/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  },

  {
    extends: [
      jseslint.configs.recommended,
      perfectionist.configs["recommended-natural"],
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked
    ],
    files: ["shared/**/*.ts", "server/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  },

  prettierConfig
]);
