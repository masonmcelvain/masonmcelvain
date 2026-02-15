import { withSentryConfig } from "@sentry/nextjs";
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
