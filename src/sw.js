import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

// Precache todos os assets gerados pelo vite
precacheAndRoute(self.__WB_MANIFEST)

// Cache para requisições de API
registerRoute(
  ({ url }) => url.pathname.startsWith('/api'),
  new StaleWhileRevalidate({
    cacheName: 'api-cache'
  })
)

// Cache para fontes
registerRoute(
  ({ request }) => request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'fonts'
  })
) 