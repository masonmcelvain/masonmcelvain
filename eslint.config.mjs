import js from "@eslint/js";
import nextPlugin from "eslint-config-next";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";

export default [
   js.configs.recommended,
   {
      ignores: [
         "**/node_modules/*",
         "**/.next/*",
         ".husky/*",
         "**/pnpm-lock.yaml",
         "next-env.d.ts",
      ],
   },
   ...nextPlugin,
   {
      plugins: {
         "@typescript-eslint": typescriptEslint,
      },
      languageOptions: {
         parser: tsParser,
      },
      rules: {
         ...typescriptEslint.configs.recommended.rules,
         "arrow-parens": ["error", "always"],
         "arrow-spacing": [
            "error",
            {
               before: true,
               after: true,
            },
         ],
         "@typescript-eslint/no-unused-vars": [
            "warn",
            {
               argsIgnorePattern: "^_",
               caughtErrorsIgnorePattern: "^_",
               destructuredArrayIgnorePattern: "^_",
               ignoreRestSiblings: true,
               varsIgnorePattern: "^_",
            },
         ],
         "object-curly-spacing": ["error", "always"],
         quotes: [
            "error",
            "double",
            {
               avoidEscape: true,
            },
         ],
      },
   },
   // Prettier config should be last to override other formatting rules
   prettierConfig,
];
