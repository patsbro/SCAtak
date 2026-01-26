self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // This allows the app to load while offline in the future
  e.respondWith(fetch(e.request));
});