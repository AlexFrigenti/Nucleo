# Reglas para agentes de IA

Estas reglas se aplican a cualquier IA que modifique Núcleo.

## Antes de actuar

1. Identifica repositorio y rama; nunca modifiques main directamente.
2. Lee README.md y la documentación técnica relevante.
3. Define objetivo, exclusiones y nivel T0, T1 o T2.
4. Comprueba VERSION, version.json, build.js, service worker y artefactos generados cuando el cambio los afecte.

## Flujo T0/T1/T2

- T0: cambio trivial sin comportamiento nuevo; requiere alcance breve, diff y validación.
- T1: cambio funcional; requiere spec.md, plan.md, tasks.md, criterios de aceptación y pruebas.
- T2: cambio complejo o sensible; añade decisiones, riesgos, invariantes y estrategia de compatibilidad o reversión.

Para T1/T2 usa specs/NNN-feature-name/ y las plantillas comunes de project-quality. No inventes cobertura, backend ni TypeScript. Usa TDD para lógica comprobable, debugging sistemático ante fallos y verificación completa antes de declarar el cambio terminado.

## Validación

Ejecuta npm test, npm run build y npm run check cuando correspondan. Comprueba también artefactos generados, coherencia de versión, PWA/service worker y revisión visual móvil cuando el cambio los afecte.

## Entrega

La PR debe incluir alcance, exclusiones, especificación, criterios, pruebas, validaciones y riesgos. Fusiona solo tras checks verdes y confirmación explícita, mediante merge commit; después verifica main y elimina la rama.
