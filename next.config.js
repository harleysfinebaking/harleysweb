/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Or specific domains
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
