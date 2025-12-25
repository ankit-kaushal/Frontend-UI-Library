/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@uilab/ui'],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
