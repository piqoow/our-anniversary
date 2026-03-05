import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Konfigurasi untuk Deploy ke GitHub Pages */
  output: 'export', // Mengubah Next.js menjadi mode statis (HTML/CSS/JS biasa)
  
  // Ganti 'our-anniversary' dengan nama asli repository GitHub kamu
  basePath: '/our-anniversary', 
  
  // Diperlukan agar gambar (foto-foto kamu) bisa muncul tanpa error di GitHub Pages
  images: {
    unoptimized: true,
  },
  
  // Opsi bawaan kamu
  experimental: {
    reactCompiler: true,
  }
};

export default nextConfig;