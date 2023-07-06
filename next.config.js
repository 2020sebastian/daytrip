/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['daytrip.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
