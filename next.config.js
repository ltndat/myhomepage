const withPWA = require('next-pwa')({
  dest: 'public',
  // register: true,
  register: false,
  skipWaiting: true,
  reloadOnOnline: false,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // locales: ['home', 'en', 'vi', 'zh'],
    locales: ['home', 'en', 'vi'],
    defaultLocale: 'home',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
