const cacheName = "SnakeGame";
const assets = [
    'game.html',
    'game2.html',
    'game3.html',
    'js/menu.js',
    'js/frame.js',
    'js/frame2.js',
    'js/frame3.js',
    'js/controles.js',
    'js/sonidos.js',
    'js/snakelv1.js',
    'js/snakelv2.js',
    'js/snakelv3.js',
    'css/general.css',
    'css/menu.css',
    'css/snake.css',
    'css/lib/nes.css',
    'css/lib/fontawesome.css',
    'img/favicon.ico',
    'android-icon-192x192.png',
    'ms-icon-310x310.png',
    'apple-icon.png',
    'browserconfig.xml',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon.ico',
    'ms-icon-150x150.png',
    'snakegame_icon.png',
    'safari-pinned-tab.svg',
    'audio/dead.mp3',
    'audio/down.mp3',
    'audio/eat.mp3',
    'audio/left.mp3',
    'audio/right.mp3',
    'audio/up.mp3'
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
