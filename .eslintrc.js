module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb", "plugin:react/recommended", "plugin:jsx-a11y/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "testing-library", "prettier", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: false,
        trailingComma: "all",
        jsxSingleQuote: true,
        bracketSpacing: true,
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    quotes: "off",
  },
};
