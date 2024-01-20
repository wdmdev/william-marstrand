/** 
 * @type {import('next').NextConfig} 
 */
 const nextConfig   = {
  images: {
    loader: 'default',
    path: '',
    unoptimized: true,
  },
  assetPrefix: './',
  output: 'export'
};

module.exports = nextConfig;