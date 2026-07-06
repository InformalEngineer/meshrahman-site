import type { NextConfig } from "next";

// Static export (03-TRD §2): no server runtime anywhere. Interactive pieces
// are client components hydrating over static HTML. Do not add server
// actions, ISR, or API routes without a decision-log amendment in 00-master-plan.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
