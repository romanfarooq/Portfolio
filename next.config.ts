import { type NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import "./src/env";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
