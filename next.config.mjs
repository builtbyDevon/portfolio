// File: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // If you had other TypeScript specific things like 'reactStrictMode: true',
  // they are usually fine as plain JS properties.
};

export default nextConfig;
