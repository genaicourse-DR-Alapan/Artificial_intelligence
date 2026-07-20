import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Artificial_intelligence" : "",
  assetPrefix: isProd ? "/Artificial_intelligence/" : "",
};

export default nextConfig;