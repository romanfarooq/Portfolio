/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions}
 */

const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"]
};

export default config;
