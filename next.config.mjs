// File: next.config.mjs

// 1. Import the bundle analyzer
import nextBundleAnalyzer from "@next/bundle-analyzer";

// 2. Create the wrapper function for the analyzer.
//    It will only be active when the ANALYZE environment variable is 'true'.
const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// 3. Your original Next.js config
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // If you had other TypeScript specific things like 'reactStrictMode: true',
  // they are usually fine as plain JS properties.
};

// 4. Export your config wrapped in the analyzer function
export default withBundleAnalyzer(nextConfig);
