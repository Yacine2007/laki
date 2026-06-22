self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('laki-v1').then(cache => {
      return cache.addAll([
        '.',
        'index.html',
        'logo.png',
        '1.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
