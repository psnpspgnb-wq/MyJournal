const CACHE_NAME = 'my-journal-v1';
const urlsToCache = [
  '/MyJournal/',
  '/MyJournal/edit/',
  '/MyJournal/history/',
  '/MyJournal/analysis/',
  '/MyJournal/settings/'
];

// インストール時にアプリの骨組みをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

// フェッチ時にキャッシュから返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
