/** 
 * @type {import('next').NextConfig} 
 */
 const nextConfig   = {
  basePath: '/william-marstrand',
  images: {
    loader: 'default',
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;