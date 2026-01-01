/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['uilab'],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
