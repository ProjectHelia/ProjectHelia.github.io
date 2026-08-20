import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // GitHub Pages only serves static files — no Node server behind it — so
  // `next build` has to emit plain HTML/CSS/JS into `out/` instead of the
  // usual server build. next/image's optimizer needs a running server too,
  // so it's disabled; images are served as-is, already sized down for the web.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
