/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'em-content.zobj.net',
      },
    ],
  },
};

export default nextConfig;
