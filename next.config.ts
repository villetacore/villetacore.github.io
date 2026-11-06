import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages отдаёт только статику: `next build` кладёт готовый сайт в out/.
  output: "export",
  // /en/ собирается как en/index.html и открывается на любом статическом сервере.
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { globalNotFound: true },
};

export default nextConfig;
