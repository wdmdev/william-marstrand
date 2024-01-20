/** 
 * @type {import('next').NextConfig} 
 */
 const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  assetPrefix: '/william-marstrand/',
  output: 'export',
};

export default nextConfig;
