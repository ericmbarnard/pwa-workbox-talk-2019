if (workbox) {
    console.log(`Yay!!!! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

//

workbox.routing.registerRoute(
    '/api/some-data',
    new workbox.strategies.StaleWhileRevalidate(),
);














/*

workbox.routing.registerRoute(
  '/api/some-data',
  new workbox.strategies.StaleWhileRevalidate(),
);


workbox.routing.registerRoute(
  '/api/some-data',
  new workbox.strategies.CacheFirst({
      cacheName: 'api-some-data',
      plugins: [
          new workbox.expiration.Plugin({ maxAgeSeconds: 30 })
      ]
  }),
);

*/