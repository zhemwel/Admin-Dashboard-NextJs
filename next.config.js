/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.blogspot.com",
      },
    ],
  },
};

module.exports = nextConfig
