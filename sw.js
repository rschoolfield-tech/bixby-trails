const CACHE = 'bixby-trails-shell-v4-20261020';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('bixby-trails-shell-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      if (!response.ok) throw new Error('Offline or unavailable');
      // Never cache a host authentication redirect in place of the app.
      if (!response.redirected && response.headers.get('content-type')?.includes('text/html')) {
        const copy = response.clone(); event.waitUntil(caches.open(CACHE).then(cache => cache.put('./index.html', copy)));
      }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
