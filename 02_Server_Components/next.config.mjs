/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.wowslider.com',
          },
        ],
      },
};

export default nextConfig;
