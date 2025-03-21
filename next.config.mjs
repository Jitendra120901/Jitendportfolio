/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export mode
    images: {
      unoptimized: true, // Disables image optimization for static export
    },
};

export default nextConfig;
