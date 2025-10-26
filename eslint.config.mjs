import { defineConfig, globalIgnores } from "eslint/config";
import nextTs from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextTs,
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "public/draco/**",
    "next-env.d.ts"
  ])
]);

export default eslintConfig;
