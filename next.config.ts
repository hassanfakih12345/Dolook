import type { NextConfig } from "next";

// Static export: `npm run build` writes the full site to `out/`,
// ready to upload to cPanel (see docs/README-UPLOAD.txt).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
};

export default nextConfig;
