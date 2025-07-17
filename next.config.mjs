/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    viewTransition: true,
  },
  // output: "export",
};

export default nextConfig;
