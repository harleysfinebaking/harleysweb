/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ← Add this
  },
  typescript: {
    ignoreBuildErrors: true,   // ← Add this
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**', pathname: '/**' }
    ]
  }
}

module.exports = nextConfig
