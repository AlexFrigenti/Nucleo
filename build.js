/* Copia los archivos de la web (raíz) a www/, que es la carpeta que
   Capacitor empaqueta en la app. Así la raíz sigue sirviendo a GitHub
   Pages y www/ alimenta la app iOS, con una sola fuente de verdad. */
const fs = require('fs');
const path = require('path');

const ASSETS = [
  'index.html', 'registro.js', 'sw.js',
  'manifest.webmanifest', 'version.json',
  'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'
];

const OUT = 'www';
fs.mkdirSync(OUT, { recursive: true });
for (const f of ASSETS) {
  fs.copyFileSync(f, path.join(OUT, f));
}
console.log('build.js: copiados ' + ASSETS.length + ' archivos a ' + OUT + '/');
