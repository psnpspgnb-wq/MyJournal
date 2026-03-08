const nextConfig = {
  output: 'export',
  basePath: "/MyJournal",
  // 画像最適化を無効化（静的エクスポート時に必須）
  images: {
    unoptimized: true,
  },
  // 静的サイトとしてビルドするために、trailingSlash を追加
  trailingSlash: true,
};