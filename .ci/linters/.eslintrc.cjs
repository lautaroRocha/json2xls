module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    es2021: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"]
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": 1,
    "@typescript-eslint/semicolon": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/semi": "off",
    "no-throw-literal": "warn",
    curly: "warn",
    eqeqeq: "warn",
    semi: "off"
  },
  ignorePatterns: [
    "**/*.d.ts",
    "*.config.js",
    "plopfile.js",
    "*.hbs",
    "*.svg",
    "app.js",
    "*.test.tsx",
    "*.config.ts",
    "*.yml"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["prettier", "react-hooks", "jsx-a11y"],
      parserOptions: {
        ecmaversion: 2018,
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          version: "detect"
        },
        "import/resolver": {
          "babel-module": {}
        }
      },
      rules: {
        "react/react-in-jsx-scope": 0,
        "ordered-imports": 0,
        "jsx-no-lambda": 0,
        camelcase: 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-unused-vars": [ 1 , { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "property",
            modifiers: ["readonly"],
            format: ["camelCase", "UPPER_CASE"]
          },
          {
            selector: "memberLike",
            modifiers: ["protected"],
            format: ["camelCase"],
            leadingUnderscore: "require"
          },
          {
            selector: "memberLike",
            modifiers: ["private"],
            format: ["camelCase"],
            leadingUnderscore: "require"
          },
          {
            selector: "objectLiteralProperty",
            format: null
          },
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
            leadingUnderscore: "allowSingleOrDouble"
          },
          {
            selector: "variable",
            format: null,
            filter: {
              regex: "(access_token|refresh_token|token_type|refresh_token|expires_in)",
              match: true
            }
          },
          {
            selector: "interface",
            format: ["PascalCase"]
          }
        ]
      }
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
        "jsx-a11y/anchor-is-valid": "off"
      }
    }
  ]
}