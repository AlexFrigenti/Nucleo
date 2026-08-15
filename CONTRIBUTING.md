# Contribuir a Núcleo

## Flujo obligatorio

1. Parte de main actualizada y trabaja en una rama independiente.
2. Lee README.md y la documentación técnica relacionada.
3. Define objetivo, exclusiones y nivel T0, T1 o T2.
4. Para T1/T2 crea specs/NNN-feature-name/spec.md, plan.md y tasks.md.
5. Implementa solo el alcance aprobado y añade pruebas de regresión o validaciones de artefactos.
6. Ejecuta npm test, npm run build y npm run check cuando correspondan.
7. Revisa VERSION, version.json, www, service worker y el diff completo si se ven afectados.
8. Abre una Pull Request hacia main.
9. Fusiona solo tras checks verdes, revisión y confirmación explícita, usando merge commit.
10. Verifica main y elimina la rama remota después del merge.

## Controles aplicables

Núcleo usa controles reales de sintaxis, build, regresión y artefactos generados. No se exige cobertura, backend o TypeScript si no existen en el proyecto. Los cambios visuales o móviles requieren revisión manual controlada.

## Plantillas comunes

https://github.com/AlexFrigenti/project-quality/tree/main/specs/000-template
https://github.com/AlexFrigenti/project-quality/blob/main/docs/superpowers/specs/2026-08-15-official-ai-development-flow-design.md
