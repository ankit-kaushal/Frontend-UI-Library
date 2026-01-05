/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['uiplex'],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
