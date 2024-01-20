/** 
 * @type {import('next').NextConfig} 
 */
 const nextConfig   = {
  output: 'export',
  basePath: '/william-marstrand',
  images: {
    loader: 'default',
    path: '/william-marstrand',
    unoptimized: true,
  },
  assetPrefix: './'
};

module.exports = nextConfig;