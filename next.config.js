const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';
const withPWA = require('next-pwa')({
  disable: isDev,
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };
module.exports = withPWA({
  ...nextConfig,
});
