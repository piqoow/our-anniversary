import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Wajib untuk GitHub Pages
  basePath: '/our-anniversary', // Harus sama dengan nama repo Anda
  images: {
    unoptimized: true, // Agar foto-foto muncul di server GitHub
  },
  reactCompiler: true,
};

export default nextConfig;