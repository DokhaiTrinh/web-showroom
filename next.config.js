/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["niemtinvang.vn"],
  },
};

module.exports = nextConfig;
