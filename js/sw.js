const CACHE_NAME = 'deckmaker-v1';
self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME));
});
self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
    ))
  );
});
self.addEventListener('fetch', e=>{
  const req = e.request;
  // 이미지만 캐시 (png, jpg, webp 등)
  if (/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(new URL(req.url).pathname)) {
    e.respondWith(
      caches.open(CACHE_NAME).then(async cache=>{
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const res = await fetch(req, { mode:req.mode, credentials:req.credentials });
            if (res.ok) cache.put(req, res.clone());
            return res;
        } catch {
          return cached || Response.error();
        }
      })
    );
  }
});