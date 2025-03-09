import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['api.istombroker.ru', '176.124.210.15'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.istombroker.ru', // Remove the 'https://' prefix
        port: '9095', // Specify the port if needed
        pathname: '/media/**', // Allow all images under `/media/`
      },
    ],
  },
  /* other config options here */
};

export default nextConfig;
