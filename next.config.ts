import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages отдаёт только статику: `next build` кладёт готовый сайт в out/.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
