/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@tslb/ui'],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
