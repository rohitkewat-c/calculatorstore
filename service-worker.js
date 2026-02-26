const CACHE_NAME = "calculator-store-v1";

const urlsToCache = [
  "index.html",
  "style.css",
  "script.js",
  "about.html",
  "contact.html",
  "summary.html",
  "payment.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener("install", function(event) {
  console.log("Service Worker Installed");
});