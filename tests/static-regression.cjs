const fs = require('fs');
const assert = require('assert');

const read = path => fs.readFileSync(path, 'utf8');
const html = read('index.html');
const app = read('scripts/app.js');
const build = read('build.js');
const sw = read('sw.js');

assert(html.includes('data-pag="sondeo"'), 'Falta la página Sondeo');
assert(html.includes('data-pag="equipo"'), 'Falta la página Equipo');
assert(html.includes('data-pag="sistema"'), 'Falta la página Sistema');
assert(html.includes('./styles/app.css'), 'Falta la hoja de estilos externa');
assert(html.includes('./scripts/app.js'), 'Falta el script externo');

assert(app.includes("const CLAVE = 'nucleo_v1'"), 'Cambió la clave de guardado');
assert(app.includes('Math.min((ahora - ultimo)/1000, 1)'), 'Cambió el límite de delta');
assert(app.includes('aplicarAusencia(s.t)'), 'Falta progreso al volver');
assert(app.includes('reiniciarMotor()'), 'Falta reinicio del motor');
assert(app.includes('registro: s.registro'), 'La recalibración debe conservar el registro');
assert(app.includes('logros: s.logros'), 'La recalibración debe conservar los hitos');

for (const asset of ['styles/app.css', 'scripts/app.js']) {
  assert(build.includes(asset), asset + ' no se copia a www/');
  assert(sw.includes('./' + asset), asset + ' no está en la caché offline');
}
console.log('✓ Contratos de fases 0 y 1 verificados');
