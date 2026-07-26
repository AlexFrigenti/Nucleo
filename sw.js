/* ============ SERVICE WORKER DE NÚCLEO ============
   Guarda una copia del juego en el móvil para que abra
   sin conexión. Estrategia "internet primero":
   - Con conexión  -> baja la versión más reciente y actualiza la copia.
   - Sin conexión  -> sirve la copia guardada.
   Sube el número de CACHE (v1 -> v2 ...) si algún día quieres
   forzar que se limpie la copia antigua. */

const CACHE = 'nucleo-v1';
const ARCHIVOS = ['./', './index.html', './manifest.webmanifest'];

// 1) Al instalarse: guarda la copia inicial del juego.
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ARCHIVOS))
  );
});

// 2) Al activarse: borra copias antiguas de versiones anteriores.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(claves =>
      Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 3) En cada petición: intenta internet; si falla, usa la copia.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
