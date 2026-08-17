// Service worker mínimo: solo existe para que Chrome considere la página
// "instalable" como aplicación. No cachea nada por su cuenta; los datos
// del viaje siguen viviendo en la hoja de Google y en localStorage.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
