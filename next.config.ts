import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Konfigurasi untuk Deploy ke GitHub Pages */
  output: 'export', 
  
  // Pastikan ini sesuai dengan nama repository GitHub kamu
  basePath: '/our-anniversary', 
  
  images: {
    unoptimized: true,
  },
  
  // Penulisan yang benar untuk Next.js 16
  reactCompiler: true, 
};

export default nextConfig;