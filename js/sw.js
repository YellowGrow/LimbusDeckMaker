const CACHE_NAME = 'deckmaker-v3';  // 버전업 (v2 → v3 등으로 반드시 변경)

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // CSS/JS 최신 반영 위해 쿼리 붙은 요청 그대로 network 우선, 이미지만 캐시-first
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match(e.request);
        if (cached) return cached;
        try {
          const res = await fetch(e.request);
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        } catch {
          return cached || Response.error();
        }
      })
    );
  }
  // 나머지는 기본 (network)
});