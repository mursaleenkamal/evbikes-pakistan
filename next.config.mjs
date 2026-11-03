/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.pakwheels.com',
      },
      {
        protocol: 'https',
        hostname: 'pakwheels.com',
      },
      {
        protocol: 'https',
        hostname: 'metroev.pk',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
