import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Hapus/comment ini jika pakai Vercel (Vercel lebih suka mode default)
  // basePath: '/our-anniversary', // HAPUS INI UNTUK VERCEL
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;