/** 
 * @type {import('next').NextConfig} 
 */
 const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
    assetPrefix: './'
  },
  output: 'export',
};

export default nextConfig;
