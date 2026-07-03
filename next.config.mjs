import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      serverActions: {
         allowedOrigins: ["masonmcelvain.com", "www.masonmcelvain.com"],
      },
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "media.masonmcelvain.com",
         },
      ],
      minimumCacheTTL: 31536000,
   },
   async rewrites() {
      return [
         {
            source: "/share/netsuite-pipeline",
            destination: "/share/netsuite-pipeline.html",
         },
      ];
   },
};

export default withSentryConfig(nextConfig, {
   org: "masonmcelvain",
   project: "masonmcelvain",
   silent: !process.env.CI,
   widenClientFileUpload: true,
   tunnelRoute: "/monitoring",
   webpack: {
      treeshake: {
         removeDebugLogging: true,
      },
   },
});
