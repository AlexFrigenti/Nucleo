const fs = require('fs');
const assert = require('assert');

const read = path => fs.readFileSync(path, 'utf8');
const html = read('index.html');
const app = read('scripts/app.js');
const build = read('build.js');
const sw = read('sw.js');

assert(html.includes('data-pag="sondeo"'), 'Falta la página Sondeo');
assert(!html.includes('data-pag="equipo"'), 'Equipo debe estar integrado dentro de Sondeo');
assert(html.includes('data-pag="sistema"'), 'Falta la página Sistema');
assert(html.includes('./styles/app.css'), 'Falta la hoja de estilos externa');
assert(html.includes('./scripts/app.js'), 'Falta el script externo');
assert(html.includes('id="instrumentos"'), 'Falta el panel de instrumentación');
assert(html.includes('id="perfilGeologico"'), 'Falta el perfil geológico');
assert(html.includes('id="radarBarrido"'), 'Falta el radar científico');
assert(app.includes('function actualizarInstrumentos'), 'Falta telemetría científica');
assert(app.includes("$('areaGrafica')"), 'Falta la gráfica de producción renovada');

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

assert(html.includes('id="muestraIsotopo"'), 'Falta el panel de muestra isotópica');
assert(html.includes('id="muestraEstado"'), 'Falta el estado de la muestra');
assert(app.includes('function actualizarMuestra'), 'Falta el renderizado de muestra isotópica');
assert(app.includes('PROTOCOLO Δ-'), 'Falta el protocolo visual de recalibración');

assert(html.includes('id="estadoSistema"'), 'Falta el panel de salud del sistema');
assert(html.includes('id="eventosRecientes"'), 'Falta el feed de eventos recientes');
assert(html.includes('id="capacidadEquipo"'), 'Falta el resumen operativo de Equipo');
assert(html.includes('class="sondeo-equipo"'), 'Falta el equipo integrado en Sondeo');
assert(html.includes('id="alternarMejoras"'), 'Falta el panel plegable de mejoras');
assert(!html.includes('data-pag="equipo"'), 'La navegación no debe mantener una pestaña Equipo');
assert(app.includes('function renderEstadoSistema'), 'Falta el diagnóstico del sistema');
assert(app.includes('function renderEventosRecientes'), 'Falta el renderizado de eventos');
assert(app.includes('function actualizarResumenEquipo'), 'Falta el resumen dinámico de Equipo');
assert(app.includes('const VERSION = 32'), 'La versión de la aplicación no está actualizada');
assert(sw.includes("const CACHE = 'nucleo-v14'"), 'La caché offline no se ha renovado');
assert(app.includes('activarMicrointeracciones'), 'Falta el feedback de interacción');
assert(app.includes('activarTransicionEstrato'), 'Falta la transición de estratos');
assert(app.includes('dispararMuestraDetectada'), 'Falta el feedback de muestra isotópica');
assert(app.includes('prefers-reduced-motion') === false, 'El movimiento reducido debe validarse en CSS');
const css = read('styles/app.css');
assert(css.includes('prefers-reduced-motion:reduce'), 'Falta soporte de movimiento reducido');
assert(css.includes('barrido-radar'), 'Falta el barrido de radar');
assert(app.includes('const INTERVALO_RENDER = .1'), 'Falta el límite de refresco visual');
assert(app.includes('function pausarMotor()'), 'Falta la pausa explícita del motor');
assert(app.includes("document.documentElement.classList.toggle('vista-no-sondeo'"), 'Falta la pausa visual fuera de Sondeo');
assert(css.includes('.vista-no-sondeo #radarBarrido'), 'Falta la pausa de radar fuera de Sondeo');
assert(html.includes('id="tutorialIsotopo"'), 'Falta el tutorial del primer isótopo');
assert(html.includes('id="catalogoIsotopos"'), 'Falta el catálogo isotópico');
assert(app.includes('function comprobarAnomalia'), 'Falta la detección de anomalías durante el sondeo');
assert(app.includes('function resolverMuestra'), 'Falta la decisión estabilizar/recuperar');
assert(app.includes('function pintarCatalogoIsotopos'), 'Falta el catálogo de investigación');
assert(app.includes('investigacion'), 'Las muestras recuperadas deben convertirse en investigación');
assert(html.includes('id="objetivoEstrato"'), 'Falta el objetivo jugable del estrato');
assert(html.includes('id="perfilFirma"'), 'Falta la pista de la próxima firma');
assert(app.includes('const OBJETIVOS_ESTRATO'), 'Falta la definición de objetivos por estrato');
assert(app.includes('function actualizarObjetivoEstrato'), 'Falta el progreso del objetivo de estrato');
assert(app.includes('bonusObjetivoEstrato'), 'Faltan las recompensas operativas por estrato');
assert(html.includes('id="cierreDetalle"'), 'Falta el detalle de resultados del Protocolo Δ');
assert(html.includes('id="cierreCancelar"'), 'Falta la cancelación de la vista previa del Protocolo Δ');
assert(app.includes('function proyeccionDelta'), 'Falta la proyección del Protocolo Δ');
assert(app.includes('function lineasProtocoloDelta'), 'Falta el resumen permanente del Protocolo Δ');
assert(app.includes('resonancias'), 'Faltan las resonancias por muestras repetidas');
assert(app.includes('matricesDelta'), 'Falta la bonificación por matriz isotópica mixta');
assert(html.includes('id="historialPozos"'), 'Falta el historial de pozos en Registro');
assert(html.includes('id="bitacoraCientifica"'), 'Falta la bitácora científica en Registro');
assert(app.includes('function pintarArchivoExpedicion'), 'Falta el renderizado del archivo de expediciones');
assert(app.includes('historialPozos'), 'El cierre debe conservar el historial de pozos');
assert(app.includes('registrarBitacora'), 'Falta registrar las decisiones científicas relevantes');
