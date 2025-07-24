// This is the service worker file for the Hobopad PWA.
// It handles caching the app so it can work offline.

// Define the name of the cache and the files to be cached.
const CACHE_NAME = 'hobopad-v1';
const urlsToCache = [
  '/', // Caches the root URL (e.g., your main page)
  'index.html', // Caches the main HTML file directly
  // NOTE: Since the CSS and JS are inside index.html, we don't need to list them separately.
  // If you had a separate stylesheet like 'dedust.css', you would add it here:
  // 'dedust.css' 
];

// The 'install' event is fired when the service worker is first installed.
self.addEventListener('install', event => {
  // We use event.waitUntil to ensure the service worker doesn't move on
  // from the installing phase until it has finished executing this code.
  event.waitUntil(
    // Open the cache with the name we defined.
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Add all the files we specified in urlsToCache to the cache.
        return cache.addAll(urlsToCache);
      })
  );
});

// The 'fetch' event is fired for every network request the page makes.
self.addEventListener('fetch', event => {
  // We use event.respondWith to hijack the request and provide our own response.
  event.respondWith(
    // Check if the request matches anything in our cache.
    caches.match(event.request)
      .then(response => {
        // If a matching response is found in the cache, return it.
        if (response) {
          return response;
        }
        // If the request is not in the cache, fetch it from the network.
        return fetch(event.request);
      }
    )
  );
});

