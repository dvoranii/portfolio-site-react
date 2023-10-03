// Make sure to import the Workbox library
// eslint-disable-next-line no-undef
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
);

// This will trigger the service worker to skip waiting and immediately take control
// eslint-disable-next-line no-undef
self.skipWaiting();
// eslint-disable-next-line no-undef
workbox.core.clientsClaim();

// Precache assets (this will be populated when you run the injectManifest tool from Workbox)
// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
  // eslint-disable-next-line no-undef
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      // eslint-disable-next-line no-undef
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        maxEntries: 60,
      }),
    ],
  })
);
