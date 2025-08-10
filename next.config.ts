import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Любой домен
            },
            {
                protocol: 'http',
                hostname: '**', // Если нужны HTTP-изображения
            },
        ],
    }
};

export default nextConfig;
