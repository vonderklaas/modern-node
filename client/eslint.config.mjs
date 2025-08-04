import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Not needed when using TypeScript
      "react/display-name": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc" }
        }
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "jsx-a11y/anchor-is-valid": "warn"
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  }
];

export default eslintConfig;
