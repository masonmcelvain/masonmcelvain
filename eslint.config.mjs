import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import nextPlugin from "eslint-config-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierConfig from "eslint-config-prettier";

const config = [
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
      // eslint-config-next already registers the @typescript-eslint plugin and
      // TypeScript parser for these files, so we only layer on the recommended
      // rules here. Re-registering the plugin would redefine it and error.
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
         ...typescriptEslint.configs.recommended.rules,
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
      },
   },
   {
      rules: {
         ...jsxA11y.flatConfigs.recommended.rules,
         "arrow-parens": ["error", "always"],
         "arrow-spacing": [
            "error",
            {
               before: true,
               after: true,
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

export default config;
