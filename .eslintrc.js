module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "tailwindcss",
    "import",
    "@typescript-eslint",
    "prettier",
  ],
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-sort-props": [
      "warn",
      { shorthandFirst: true, callbacksLast: true, multiline: "last" },
    ],
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off",
  },
  settings: {
    react: { version: "detect" },
    tailwindcss: {
      callees: ["cn", "clx", "clsx", "classnames"],
      config: "tailwind.config.js",
    },
  },
};
