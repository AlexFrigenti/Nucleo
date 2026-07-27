# Línea base del rediseño científico

Rama de trabajo: `agent/fases-0-1-rediseno`.

## Contratos protegidos

- La clave de guardado continúa siendo `nucleo_v1`.
- La estructura de la partida y las fórmulas de producción no cambian.
- El progreso offline mantiene el límite de 8 h o 24 h con batería.
- Al volver de segundo plano se aplica la ausencia y se reinicia el motor.
- La recalibración conserva estadísticas vitales, registro e hitos.
- `index.html` sigue siendo la entrada de GitHub Pages y Capacitor.
- `www/` sigue siendo un artefacto generado por `build.js`.

## Línea base visual y de rendimiento

Antes de la fase 2, el rediseño se limita a estructura, navegación y tokens visuales. El radar multicapa, las lecturas científicas y el perfil geológico se añadirán después.

El bucle de simulación continúa con `requestAnimationFrame`; la telemetría, el registro y los hitos se actualizan como máximo una vez por segundo, y el guardado cada cinco segundos.

## Validación reproducible

Ejecutar:

```sh
npm test
npm run build
```

La prueba estática protege los contratos anteriores y confirma que los nuevos recursos se incluyen tanto en Capacitor como en la caché offline.
