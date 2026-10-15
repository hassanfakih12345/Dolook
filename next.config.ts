import type { NextConfig } from "next";

// Static export: `npm run build` writes the full site to `out/`,
// ready to upload to cPanel (see docs/README-UPLOAD.txt).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    // Branded bilingual 404.html (src/app/global-not-found.tsx).
    globalNotFound: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
};

export default nextConfig;
