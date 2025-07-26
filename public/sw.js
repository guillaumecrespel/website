// Service Worker pour le cache et les performances
const CACHE_NAME = 'guillaume-crespel-v1';
const urlsToCache = [
  '/',
  '/fr/',
  '/en/',
  '/favicon.svg',
  '/robots.txt'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourner la réponse en cache si elle existe
        if (response) {
          return response;
        }
        
        // Sinon, faire la requête réseau
        return fetch(event.request).then((response) => {
          // Ne pas mettre en cache les requêtes non-GET
          if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method !== 'GET') {
            return response;
          }
          
          // Cloner la réponse pour la mettre en cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});

// Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 