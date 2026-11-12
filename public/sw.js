// Kill switch for the cache-first service worker shipped by an earlier
// version of the site. Browsers that still have it installed fetch this file
// on their next visit, then: delete every cache, unregister, reload once.
// Keep this file deployed for a few months, then it can be removed.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) client.navigate(client.url);
    })(),
  );
});
