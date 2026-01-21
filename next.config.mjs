/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "media.masonmcelvain.com",
         },
      ],
   },
};

export default nextConfig;
