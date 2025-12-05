import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    mdxRs: true, // ⭐ enable built-in MDX support
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
