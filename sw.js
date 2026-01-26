self.addEventListener('install', (e) => {
  console.log('[SCAtak] Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
