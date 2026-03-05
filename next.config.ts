import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/our-anniversary', 
  images: {
    unoptimized: true,
  },
  // Jangan masukkan reactCompiler di dalam 'experimental'
  reactCompiler: true, 
};

export default nextConfig;