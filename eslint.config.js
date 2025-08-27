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
      perfectionist.configs["recommended-natural"]
    ],
    files: ["**/*.{ts,tsx,js}"],
    languageOptions: {
      ecmaVersion: 2023,
      globals: { ...globals.browser, ...globals.node }
    }
  },

  {
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
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
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite
    ],
    files: ["**/*.tsx"]
  },

  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js"]
  },

  prettierConfig
]);
