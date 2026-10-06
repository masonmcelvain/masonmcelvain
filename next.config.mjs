import { withSentryConfig } from "@sentry/nextjs";

// The image cache key is the raw source URL, but the media host serves the
// same object for many spellings of it (any query string, `%66` for `f`).
// Only allow the canonical spelling so each image has a bounded set of keys.
// Path segments may contain plain characters, plus `%20` for filenames with
// spaces.
const MEDIA_SEGMENT = "+([A-Za-z0-9._-]|%20)";
const mediaPattern = (pathname) => ({
   protocol: "https",
   hostname: "media.masonmcelvain.com",
   port: "",
   pathname,
   search: "",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      serverActions: {
         allowedOrigins: ["masonmcelvain.com", "www.masonmcelvain.com"],
      },
   },
   images: {
      remotePatterns: [
         mediaPattern(`/blog/${MEDIA_SEGMENT}/${MEDIA_SEGMENT}`),
         mediaPattern(
            `/blog/${MEDIA_SEGMENT}/${MEDIA_SEGMENT}/${MEDIA_SEGMENT}`,
         ),
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
