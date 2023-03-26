/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'fastly.picsum.photos',
      },
      {
        hostname: 'raw.githubusercontent.com',
      },
      {
        hostname: 'camo.githubusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
