import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // React 19 এ দরকার নাই
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Dev quality improve
      "no-unused-vars": "warn",
      "no-console": "warn",

      // Vite Fast Refresh safety
      "react-refresh/only-export-components": "warn",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // 🔥 Prettier MUST be last
  prettier,
];