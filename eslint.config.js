import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import typescriptSortKeys from "eslint-plugin-typescript-sort-keys";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist", "build", ".next"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      prettier,
      "simple-import-sort": simpleImportSort,
      "sort-destructure-keys": sortDestructureKeys,
      "typescript-sort-keys": typescriptSortKeys,
    },
    rules: {
      "prettier/prettier": "error",

      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      "sort-destructure-keys/sort-destructure-keys": "warn",

      "typescript-sort-keys/interface": "warn",
      "typescript-sort-keys/string-enum": "warn",
    },
  },
];
