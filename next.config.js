/** 
 * @type {import('next').NextConfig} 
 */
 const nextConfig   = {
  basePath: '/william-marstrand',
  images: {
    loader: 'akamai',
    path: '/william-marstrand',
    unoptimized: true,
  },
  output: 'export'
};

module.exports = nextConfig;