// next.config.js

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // sw.jsは手動管理のため runtimeCaching は削除
  // （sw.js 内で直接定義しているため不要）
});

const nextConfig = {
  output: 'export',
  basePath: '/MyJournal',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withPWA(nextConfig);