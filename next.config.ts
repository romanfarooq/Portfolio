import { createJiti } from "jiti";
import { fileURLToPath } from "url";
import { type NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti.import("./src/env");

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
