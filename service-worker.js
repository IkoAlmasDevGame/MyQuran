const CACHE_NAME = 'tegate-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/scripts.js',
  '/main.js',
  '/MyQuran-premium.png',
  // Add other assets you want to cache
]

// Installation - caches assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache opened successfully')
      return cache.addAll(urlsToCache)
    }),
  )
})

// Fetch - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response
      }

      // Clone the request for the fetch call
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        // Don't cache non-successful responses or non-GET requests
        if (
          !response ||
          response.status !== 200 ||
          response.type !== 'basic' ||
          event.request.method !== 'GET'
        ) {
          return response
        }

        // Clone the response for caching
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Activate - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
