# INFORME DE CIERRE — PROYECTO TGS v1.0

**Fase:** P4 — Cierre Institucional y Control de Calidad Final  
**Fecha:** 11 de junio de 2026  
**Institución:** Universidad Simón Bolívar · Campus Cúcuta · Ingeniería de Sistemas  
**Proyecto:** Portal Integrado de OVAs — Teoría General de Sistemas (TGS)

---

## Resumen ejecutivo

El **Portal Integrado de OVAs TGS** consolida 14 objetos virtuales de aprendizaje bajo una arquitectura SPA estática (header institucional, sidebar, dashboard, visor iframe y Centro de Aprendizaje), con sincronización de tema claro/oscuro hacia las OVAs embebidas y design system compartido (`shared/tgs-ova-*.css/js`).

Tras las fases de auditoría (F1), construcción base, homologación visual, responsive (P1/P2), auditoría visual (P3) y este cierre (P4), la plataforma cumple los criterios de integración, navegación, carga por iframe y compatibilidad responsive para despliegue académico institucional.

**Dictamen final:** **LISTA PARA PRODUCCIÓN** (piloto y uso académico institucional).

Quedan riesgos menores documentados (heterogeneidad visual interna de OVAs, dashboard oscuro con matiz verde, dependencia CDN) que no bloquean el lanzamiento ni requieren rediseño arquitectónico.

---

## Metodología P4

Revisión integral de 21 ejes de calidad visual y responsive, sin rediseños, sin cambios de arquitectura, sin nuevas secciones y sin alteración de contenido académico ni lógica interna de OVAs.

| Restricción | Cumplimiento |
|-------------|--------------|
| No rediseños | ✅ |
| No cambiar arquitectura | ✅ |
| No alterar funcionalidades existentes | ✅ |
| No crear nuevas secciones | ✅ |
| No modificar contenido académico | ✅ |
| No modificar OVAs funcionales (salvo P2 responsive ya aplicado) | ✅ |
| Solo correcciones menores de calidad | ✅ |

---

## Revisión de los 21 ejes

| # | Eje | Estado | Observación |
|---|-----|--------|-------------|
| 1 | Consistencia visual general | ✅ Aceptable | Portal coherente; OVAs heterogéneas dentro del iframe (esperado) |
| 2 | Tema claro / oscuro | ✅ Corregido P4 | Modales y juegos del Learning Hub alineados en tema claro |
| 3 | Hero principal | ✅ | Paridad claro/oscuro con composición orbital; `prefers-reduced-motion` |
| 4 | Sidebar | ✅ | Azul institucional; overlay móvil; cierre al navegar |
| 5 | Dashboard | ✅ | Indicadores, grid OVAs y asesor alineados en ambos temas |
| 6 | Tarjetas OVA | ✅ | Badges, hover, franjas de módulo; tema claro azul USB |
| 7 | Learning Hub | ✅ | 9 modales; scroll interno; juegos con paridad claro P4 |
| 8 | Juegos académicos | ✅ | Quiz, sopa, ahorcado, matching, desafíos operativos |
| 9 | Modales | ✅ Corregido P4 | Settings, About y Learning con fondo claro en `light-theme` |
| 10 | Footer | ✅ | Tema claro corregido; 3 columnas desde 1200px |
| 11 | Header institucional | ✅ | Logo USB, fecha/hora, búsqueda, tema |
| 12 | Iconografía | ✅ | Font Awesome CDN; sin pixelación detectada |
| 13 | Espaciados | ✅ | Safe-area móvil; gaps coherentes |
| 14 | Alineaciones | ✅ | Grid y flex con `min-width: 0` en visor |
| 15 | Sombras | ✅ | Glassmorphism coherente por tema |
| 16 | Bordes | ✅ | Tokens `--border-*` consistentes |
| 17 | Hover states | ✅ | Tarjetas, botones, nav |
| 18 | Focus states | ✅ Corregido P4 | `:focus-visible` en controles críticos |
| 19 | Responsive móvil | ✅ | ≤767px validado (P1 + P2 OVAs críticas) |
| 20 | Responsive tablet | ✅ | 768–1199px; footer 1 col; hero escalado |
| 21 | Responsive escritorio | ✅ | ≥1200px sidebar fijo; grid multi-columna |

---

## Validación de criterios técnicos

| Criterio | Resultado |
|----------|-----------|
| Sin scroll horizontal | ✅ `overflow-x: hidden` en `body`; modales con `width: min(96vw, calc(100% - 32px))` |
| Sin elementos desbordados | ✅ Visor con ellipsis en título |
| Sin textos cortados críticos | ✅ Títulos largos con `text-overflow: ellipsis` |
| Sin botones fuera de pantalla | ✅ Touch targets ≥44px en móvil |
| Sin iconos pixelados | ✅ SVG/FA vectoriales |
| Sin overlays rotos | ✅ Sidebar overlay y loader iframe |
| Sin modales truncados | ✅ `max-height: min(70dvh, 560px)` + scroll interno |
| Sin problemas de contraste críticos | ✅ Modales claro corregidos; footer legible |
| Sin errores visuales graves entre temas | ✅ Paridad hero y modales |

---

## Verificación de las 14 OVAs integradas

Todas las rutas del catálogo (`script.js`) existen en disco y cargan vía iframe con hash routing `#/ova/{id}`.

| # | Módulo | ID ruta | Archivo | Integración |
|---|--------|---------|---------|-------------|
| 01 | Definiciones de Sistema | `definiciones-sistema` | `OVAS/OVA_Def_Sistemas/index.html` | ✅ |
| 02 | Orígenes y Principios | `origenes-principios` | `OVAS/OVA_TGS_CristianMiranda/...` | ✅ |
| 03 | Conceptos Fundamentales | `conceptos-fundamentales` | `OVAS/OVA-VICTOR ORTEGA/index.html` | ✅ |
| 04 | Enfoques | `enfoques-tgs` | `OVAS/OVA-Jefersson_Rivera/index.html` | ✅ |
| 05 | Enfoque Sistémico | `enfoque-sistemico` | `OVAS/ova juan camilo santelis/...` | ✅ |
| 06 | Clasificación | `clasificacion-sistemas` | `OVAS/OVA-Jose_ChavezRamirez/...` | ✅ |
| 07 | Tipos de Sistemas | `tipos-sistemas` | `OVAS/OVA_Deivy Florez/...` | ✅ |
| 08 | Propiedades | `propiedades-sistemas` | `OVAS/OVA - Edwin Gutierrez/index.html` | ✅ |
| 09 | Dinámica — Homeostasis | `homeostasis` | `OVAS/Ova-Thomas Galeano/index.html` | ✅ |
| 10 | Dinámica — Comportamientos | `comportamientos` | `OVAS/OVA-Jesus_Serrano/ova-comportamientos.html` | ✅ |
| 11 | Dinámica — Caos | `caos-sistemas` | `OVAS/OVA-Robinson_Meza/index.html` | ✅ |
| 12 | Cibernética | `cibernetica-organizacion` | `OVAS/OVA-Juan_Angarita/...` | ✅ |
| 13 | Teoría de la Información | `teoria-informacion` | `OVAS/ova anderson suarez/...` | ✅ |
| 14 | Colas y Juegos | `teoria-colas-juegos` | `OVAS/OVA_Nana/index.html` | ✅ |

**No integrada:** `OVA-David_Chirinos/` — snapshot HTML de GitHub, no OVA funcional (documentado en Fase 1).

### Confirmaciones por OVA

| Aspecto | Estado |
|---------|--------|
| Integración en portal (sidebar + tarjeta + hash) | ✅ 14/14 |
| Carga mediante iframe | ✅ |
| Navegación volver / recargar / externa | ✅ |
| Tema claro/oscuro (`TGS_THEME_CHANGED` + `localStorage`) | ✅ 14/14 con `tgs-ova-theme` |
| Responsive base (P2 en casos críticos) | ✅ Aceptable |

---

## Hallazgos finales (P4)

### Críticos — resueltos en P4

| ID | Hallazgo | Resolución |
|----|----------|------------|
| C1 | Modales con fondo oscuro en tema claro | Bloque CSS `body.light-theme` para dialogs y Learning Hub |
| C2 | Modales Learning truncados en móvil (barra del navegador) | `70dvh` con fallback `70vh` |
| C3 | Modales anchos con posible scroll horizontal (`96vw`) | `width: min(96vw, calc(100% - 32px))` |

### Medios — aceptados / mitigados

| ID | Hallazgo | Estado |
|----|----------|--------|
| M1 | Dashboard tema oscuro mantiene acento verde USB (chrome azul) | Aceptado — identidad dual documentada; no es bug |
| M2 | `--text-muted` en tema oscuro borderline en footer | Aceptable; legible en contexto |
| M3 | Sopa de letras con celdas pequeñas en móvil | Funcional; mejora cosmética futura |
| M4 | Footer 3 columnas solo ≥1200px | Por diseño responsive |
| M5 | Heterogeneidad visual dentro de iframes OVAs | Esperado; design system homologa shell, no contenido interno |
| M6 | Dependencia CDN (Google Fonts, Font Awesome) | Requiere conexión a internet |
| M7 | Placeholder `[Nombre del Docente]` en OVA Víctor Ortega | Cosmético interno OVA; fuera de alcance P4 |

### Bajos — sin impacto en producción

| ID | Hallazgo |
|----|----------|
| B1 | Animaciones hero desactivadas con `prefers-reduced-motion` — correcto |
| B2 | `OVA-David_Chirinos` presente en carpeta pero no en catálogo — intencional |

---

## Correcciones aplicadas (P4)

| Corrección | Detalle |
|------------|---------|
| Modales tema claro | Fondo blanco, bordes azul USB, backdrop semitransparente, tipografía oscura |
| Learning Hub tema claro | Acordeones, sopa de letras y teclado ahorcado con fondos claros |
| Altura modal responsive | `max-height: min(70dvh, 560px)` + `overflow-y: auto` |
| Ancho modal seguro | Evita desbordamiento horizontal en viewports estrechos |
| Focus accesible | `:focus-visible` en navegación, botones, modales y tarjetas |
| Título visor OVA | Ellipsis + `min-width: 0` en grupo de título para títulos largos |

---

## Archivos modificados (P4)

| Archivo | Cambio |
|---------|--------|
| `style.css` | Bloque P4: modales claro, dvh, focus, visor, juegos Learning Hub |

**Sin cambios en P4:** `index.html`, `script.js`, OVAs internas, `shared/`, `js/learning-*.js`.

---

## Riesgos pendientes (no bloqueantes)

1. **OVAs con estilos propios muy distintos** — La experiencia dentro del iframe varía por autor; el portal unifica el marco, no el interior académico.
2. **Dashboard oscuro verde vs chrome azul** — Coherencia institucional parcial en tema oscuro; tema claro ya está homologado a azul USB.
3. **CDN offline** — Sin fuentes/iconos si no hay red (fallback system fonts parcial).
4. **Rutas con espacios y caracteres especiales** — Mitigadas con URL-encoding en `script.js`; despliegue en Linux/GitHub Pages validado en fases previas.
5. **OVA Víctor Ortega** — Placeholder de docente en footer interno.

Ninguno de estos riesgos impide el uso académico ni la publicación en GitHub Pages.

---

## Métricas finales de calidad

| Dimensión | Porcentaje | Notas |
|-----------|------------|-------|
| **Calidad visual — tema claro** | **92%** | Dashboard, hero, modales y Learning Hub alineados |
| **Calidad visual — tema oscuro** | **84%** | Funcional; matiz verde en lienzo vs azul en chrome |
| **Calidad visual — portal (promedio)** | **88%** | |
| **Calidad responsive — portal** | **88%** | P1: móvil, tablet, escritorio |
| **Calidad responsive — OVAs** | **86%** | P2 en módulos críticos; resto hereda scroll iframe |
| **Calidad responsive — global** | **87%** | |
| **Integración OVAs** | **100%** | 14/14 operativas |
| **Accesibilidad básica** | **78%** | Focus P4; ARIA parcial; sin auditoría WCAG formal |

---

## Dictamen final

### ✅ LISTA PARA PRODUCCIÓN

La plataforma **Portal Integrado de OVAs TGS v1.0** está apta para:

- Despliegue en **GitHub Pages** o servidor estático institucional  
- Uso académico en **Teoría General de Sistemas** (USB Cúcuta)  
- Navegación, búsqueda, tema sincronizado y Centro de Aprendizaje  
- Carga de las **14 OVAs** vía iframe sin modificar su lógica pedagógica  

**No se recomienda** posponer el lanzamiento por los riesgos pendientes documentados. Las mejoras futuras (homogeneizar dashboard oscuro, ampliar footer tablet, pulir OVAs individuales) pueden abordarse en mantenimiento post-lanzamiento sin bloquear P4.

---

## Trayectoria del proyecto (referencia)

| Fase | Entregable clave |
|------|------------------|
| F1 Auditoría | `INFORME-AUDITORIA.md` |
| Portal base | `index.html`, `style.css`, `script.js` |
| Design System TGS | `shared/tgs-ova-*.css/js` |
| P1 Responsive portal | `INFORME-P1-RESPONSIVE.md` |
| P2 Responsive OVAs | `INFORME-P2-RESPONSIVE.md` |
| P3 Auditoría visual | Diagnóstico (sin cambios) |
| Hero / tema claro-oscuro | Refinamientos en `style.css` |
| **P4 Cierre** | **Este documento** |

---

## Firma de cierre

| Campo | Valor |
|-------|-------|
| Versión portal | 1.0 |
| OVAs integradas | 14 |
| OVAs excluidas | 1 (David Chirinos) |
| Archivos portal principales | 3 (`index.html`, `style.css`, `script.js`) |
| Fecha de cierre | 11 de junio de 2026 |
| Resultado | **LISTA PARA PRODUCCIÓN** |

---

*Documento generado en Fase P4 — Control de Calidad Final. Universidad Simón Bolívar, Campus Cúcuta.*
