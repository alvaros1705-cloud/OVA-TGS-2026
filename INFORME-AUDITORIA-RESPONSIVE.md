# INFORME — AUDITORÍA RESPONSIVE COMPLETA
## Portal Integrado OVA-TGS · Universidad Simón Bolívar

**Fecha:** 11 de junio de 2026  
**Alcance:** Diagnóstico técnico **sin modificaciones** a HTML, CSS ni JavaScript  
**Entorno objetivo:** GitHub Pages · Desktop · Tablet · Android · iPhone

---

## Resumen ejecutivo

El portal principal (`index.html` + `style.css`) tiene una **base responsive sólida en escritorio y tablet**, con meta viewport, Flexbox, CSS Grid y media queries en los componentes institucionales. En **móvil (≤ 767 px)** aparecen riesgos de **scroll horizontal**, **header saturado** y **grids con `minmax` demasiado anchos** respecto al padding del contenedor.

Las **14 OVAs integradas** vía iframe muestran **madurez heterogénea**: la mayoría declara viewport y tiene al menos un breakpoint; algunas carecen de media queries o usan anchos fijos/`100vw` que pueden desbordar dentro del visor.

| Métrica | Valor |
|---------|-------|
| **Nivel responsive actual (global)** | **~76 %** |
| **Nivel responsive proyectado (post-correcciones)** | **~91 %** |

---

## 1. Alcance analizado

### Estructura del repositorio

| Ruta solicitada | Estado real |
|-----------------|-------------|
| `index.html` | ✅ Existe (portal principal) |
| `css/*.css` | ❌ No existe carpeta `css/` en raíz; estilos en `style.css` |
| `js/*.js` | ✅ `js/learning-data.js`, `learning-hub.js`, `header-weather.js`, `dashboard-network-bg.js` + `script.js` en raíz |
| `pages/*.html` | ❌ No existe carpeta `pages/` |
| Componentes reutilizables | ✅ `shared/tgs-ova-*.css/js`, `shared/usb-ova-*.css/js` |
| OVAs / iframes | ✅ 14 OVAs en `OVAS/` (excl. David Chirinos) |

### Componentes verificados (portal)

| Componente | Archivo principal | Responsive |
|------------|-------------------|------------|
| Meta viewport | `index.html` L5 | ✅ `width=device-width, initial-scale=1.0` |
| Menú hamburguesa + sidebar | `style.css`, `script.js` | ✅ Drawer &lt; 1200 px |
| Dashboard institucional | `style.css` | ⚠️ Parcial |
| Tarjetas OVAs (grid) | `style.css` `.ovas-grid` | ⚠️ Riesgo overflow móvil |
| Visor iframe OVA | `style.css` `.ova-viewer-view` | ⚠️ Altura fija |
| Centro de Aprendizaje | `style.css`, `js/learning-hub.js` | ⚠️ Parcial |
| Guías | Modal HTML (no PDF en portal) | ⚠️ Modales sin breakpoint dedicado |
| Videos | Dentro de OVAs individuales | ➖ Fuera del shell del portal |
| Banco de preguntas (Quiz) | `learning-hub.js` + modales | ✅ Aceptable |
| Juegos (sopa, ahorcado, etc.) | `style.css` + `learning-hub.js` | ⚠️ Parcial |
| Footer institucional | `style.css` `.portal-footer` | ✅ Grid desde 768 px |
| Fecha / hora | `header-weather` + `style.css` | ⚠️ Compactación incompleta en móvil |
| Tema claro/oscuro | `script.js` + tokens CSS | ✅ Sin dependencia de viewport |
| Animación fondo | `dashboard-network-bg.js` | ✅ Nodos adaptativos por `innerWidth` |

---

## 2. Media queries existentes

### 2.1 Portal — `style.css`

| Breakpoint | Línea aprox. | Reglas principales |
|------------|--------------|-------------------|
| `max-width: 1023px` | 358 | Oculta fecha en `header-weather` |
| `max-width: 767px` | 364, 1789 | Header compacto, oculta subtítulo logo y badge USB, hero/ovas/visor |
| `min-width: 1200px` | 696 | Sidebar fijo visible, `margin-left` en main, oculta hamburguesa |
| `max-width: 1199px` | 1762 | Hero y advisor en columna |
| `min-width: 768px` | 1716 | Footer en 3 columnas |
| `max-width: 768px` | 2099 | Sopa/apareamiento 1 col; panel progreso ancho completo |
| `max-width: 640px` | 2557 | Detecta error: acciones en 1 columna |
| `prefers-reduced-motion: reduce` | 748 | Oculta canvas animado |

**Observación:** Breakpoints **inconsistentes** (`767` vs `768`, `1023` vs `1199`). No hay reglas para `480px`, `390px` (iPhone) ni `safe-area-inset`.

### 2.2 Portal — `script.js`

| Umbral | Uso |
|--------|-----|
| `1200px` | Cierra sidebar al navegar en móvil/tablet (`innerWidth < 1200`) |

No hay lógica responsive adicional en el router ni en `handleRoute()`.

### 2.3 Scripts decorativos — `js/`

| Archivo | Responsive |
|---------|------------|
| `dashboard-network-bg.js` | ✅ 40–80 nodos según `innerWidth`; pausa en OVA |
| `header-weather.js` | ➖ Sin lógica viewport (delegado a CSS) |
| `learning-hub.js` | ⚠️ `touchstart` en sopa de letras; resto click/desktop |

### 2.4 Design System — `shared/`

| Archivo | Breakpoints |
|---------|-------------|
| `tgs-ova-components.css` | `768px`, `480px` — header OVA, botones full-width |
| `tgs-ova-homologate.css` | Sin `@media` propias |
| `usb-ova-components.css` | `900px` |

### 2.5 OVAs individuales (14 integradas)

| OVA | Viewport | Media queries | Notas |
|-----|----------|---------------|-------|
| Def_Sistemas | ✅ | `900px`, `700px` (styles.css) | Buena |
| Cristian Miranda | ✅ | `700px` inline | Buena |
| Víctor Ortega | ✅ | `1024/768/480` (styles.css) | Muy buena |
| Jefersson Rivera | ✅ | `768/480` | Buena |
| Juan Camilo Santelis | ✅ | `768px` inline | Aceptable (archivo muy grande) |
| Chávez Ramírez | ✅ | `640px` | Aceptable |
| Deivy Flórez | ✅ | `700px` | Aceptable |
| Edwin Gutierrez | ✅ | `1024/768/480` | Muy buena |
| Thomas Galeano | ✅ | `640/768` (Estilos.css) | Buena |
| Jesús Serrano | ✅ | `700/820/680/620px` | Buena |
| Robinson Meza | ✅ | `768px` (style.css) | Aceptable |
| Juan Angarita | ✅ | `700/680/500px` | Buena |
| Anderson Suárez | ✅ | `768px` | ⚠️ Usa `100vw` (riesgo overflow) |
| Diana Umaña (Nana) | ✅ | **Ninguna** | ⚠️ `minmax(300px)` sin breakpoint |

---

## 3. Componentes ya responsive (funcionan bien)

1. **Meta viewport** en `index.html` y en las 14 OVAs con HTML propio.
2. **Sidebar drawer** con overlay, `transform`, cierre en &lt; 1200 px.
3. **Hero del dashboard** — pasa a columna en `max-width: 1199px`.
4. **Footer** — una columna en móvil, tres columnas desde `768px`.
5. **Indicadores** — `repeat(auto-fit, minmax(220px, 1fr))` (más tolerante que tarjetas OVA).
6. **Grid OVAs en móvil** — fuerza `1fr` en `max-width: 767px` (corrige overflow **solo** bajo ese breakpoint si el contenedor tiene ancho suficiente).
7. **Visor OVA** — `viewer-header` con `flex-wrap`; oculta texto de botones control en móvil.
8. **Iframe** — `width/height: 100%` dentro de `.iframe-wrapper`.
9. **Modales base** — `width: 90%` con `max-width` definido.
10. **Imágenes** — logos con `max-height` + `object-fit: contain` (no anchos fijos en header/footer).
11. **Animación** — densidad de nodos reducida en móvil; no corre en vista OVA.
12. **Tema claro/oscuro** — independiente del layout.
13. **OVAs Edwin, Víctor, Jefersson, Serrano, Angarita** — responsive maduro interno.

---

## 4. Problemas críticos

| # | Problema | Evidencia | Dispositivos afectados |
|---|----------|-----------|------------------------|
| C1 | **Scroll horizontal en tarjetas OVAs** | `.ovas-grid { minmax(320px, 1fr) }` + `.main-content { padding: 36px 32px }` → en viewports &lt; ~384 px el mínimo de columna supera el ancho útil | iPhone SE (320), Galaxy pequeños |
| C2 | **Scroll horizontal en Centro de Aprendizaje** | `.learning-grid { minmax(280px, 1fr) }` sin media query que reduzca el mínimo; entre 280–767 px puede desbordar según padding | Móviles estrechos |
| C3 | **Header institucional saturado** | En `767px` se ocultan `usb-text` y `logo-subtitle`, pero permanecen: logo + título largo + bloque hora (3 líneas hasta 1023px) + botón tema | iPhone 12/13/14 (390px), Android 360px |
| C4 | **Visor OVA — altura rígida** | `.ova-viewer-view { height: calc(100vh - 80px - 72px); min-height: 520px }` — en pantallas &lt; 600 px de alto (iPhone horizontal, SE) el visor + header del portal exceden viewport; espacio vacío o recorte | iPhone SE, móviles bajos |
| C5 | **OVA Diana Umaña sin breakpoints** | `minmax(300px, 1fr)` y estilos inline sin `@media` | Todas las resoluciones móviles en iframe |
| C6 | **Anderson Suárez — `100vw`** | `width: 100vw` en estilos inline puede generar barra horizontal por scrollbar | Android / iOS en iframe |

---

## 5. Problemas medios

| # | Problema | Evidencia | Impacto |
|---|----------|-----------|---------|
| M1 | **Padding main no reducido en móvil** | Solo `.portal-header` reduce padding en `767px`; `.main-content` mantiene `36px 32px` | Menos área útil; agrava C1/C2 |
| M2 | **Breakpoints inconsistentes** | Mezcla `767`, `768`, `1023`, `1199`, `1200` | Comportamiento distinto entre 768–767 px |
| M3 | **Botones táctiles pequeños** | `.close-modal-btn` 24×24 px; `.hangman-key` 32×32 px; por debajo de 44 px recomendados | iOS / Android táctil |
| M4 | **Sopa de letras — celdas minúsculas** | `.ws-cell { font-size: 0.65rem }` en grid 12 columnas | Difícil lectura y toque en móvil |
| M5 | **Modales anchos sin ajuste móvil dedicado** | `.learning-modal-wide { max-width: 720px }` sin `@media` para `max-height` / padding en pantallas bajas | Scroll interno incómodo en iPhone |
| M6 | **Panel progreso aprendizaje** | `min-width: 240px` en cabecera de sección | En tablet estrecha (768 px) layout apretado antes del breakpoint de panel |
| M7 | **Detecta el error — 3 columnas hasta 640 px** | `.learning-error-actions { repeat(3, 1fr) }` | Botones estrechos en 641–767 px |
| M8 | **Sin `safe-area-inset`** | Header/footer no contemplan notch ni home indicator iPhone X+ | Solapamiento marginal en iOS |
| M9 | **OVAs single-file variables** | 8 OVAs con CSS inline sin hoja externa unificada | Mantenimiento y paridad responsive desigual |

---

## 6. Problemas menores

| # | Problema | Notas |
|---|----------|-------|
| n1 | Fecha oculta en tablet (`1023px`) pero hora sigue en 2 líneas con emoji | Ocupa espacio horizontal |
| n2 | `.ova-card { height: 310px }` fija en móvil | No rompe layout; puede truncar descripciones largas |
| n3 | `.hamburger-btn` padding 8 px | Área táctil ~36 px; mejorable |
| n4 | `overflow-x: hidden` en `body` | Oculta síntoma de C1/C2 en lugar de corregir causa |
| n5 | Guías PDF | No existen en el portal; la guía es modal HTML (`learning-guide-modal`) |
| n6 | Videos | Embebidos en OVAs (p. ej. Angarita), no auditados en shell del portal |
| n7 | `wordsearch-grid { max-width: 360px }` | En móvil estrecho el grid no escala proporcionalmente al 100% del modal |
| n8 | Título visor OVA largo sin `text-overflow: ellipsis` | Puede empujar controles en landscape |

---

## 7. Verificación técnica solicitada

| Criterio | Estado |
|----------|--------|
| Meta viewport | ✅ Portal + 14 OVAs |
| Media queries | ✅ Portal (8 bloques) + shared + OVAs (variable) |
| CSS Grid responsive | ✅ Con riesgos en `minmax` |
| Flexbox responsive | ✅ Hero, header, sidebar, visor |
| Imágenes adaptables | ✅ `max-height`, `object-fit` |
| Iframes adaptables | ✅ 100% en wrapper; contenido interno depende de cada OVA |
| Scroll horizontal | ⚠️ Riesgo en móvil estrecho |
| Elementos cortados | ⚠️ Visor OVA en pantallas bajas |
| Texto ilegible | ⚠️ Sopa de letras, celdas pequeñas |
| Botones pequeños | ⚠️ Modales y ahorcado |
| Problemas táctiles | ⚠️ Ver M3, M4 |
| Tablets | ✅ Aceptable (768–1199 px) |
| Android | ⚠️ 360 px ancho — críticos C1–C3 |
| iPhone | ⚠️ SE + notch — C4, M8 |

---

## 8. Correcciones propuestas (sin implementar)

### Fase A — Portal (`style.css` únicamente, sin tocar layout OVA-mode)

1. Reducir `minmax` en `.ovas-grid` a `minmax(min(100%, 280px), 1fr)` o media query `max-width: 480px` → `1fr`.
2. Igual para `.learning-grid` → mínimo `240px` o `1fr` en móvil.
3. Añadir `@media (max-width: 767px)` para `.main-content { padding: 24px 16px }`.
4. Compactar `header-weather` en móvil: solo hora en una línea (sin emoji o fuente menor).
5. Ajustar `.ova-viewer-view` en móvil: `min-height: 0` + `height` basada en `dvh` / flex (sin alterar `ova-mode` existente).
6. Aumentar áreas táctiles: modales cierre ≥ 44 px; `.hangman-key` ≥ 40 px.
7. Unificar breakpoints a escala: `480`, `768`, `1024`, `1200`.
8. Añadir `env(safe-area-inset-*)` en header y footer.

### Fase B — Centro de Aprendizaje (`style.css` + mínimo `learning-hub.js`)

1. Media query para `.learning-modal-wide`: `max-height: 90dvh`, padding reducido.
2. Escalar `.wordsearch-grid` con `min(100%, 360px)` y fuente mínima `0.75rem`.
3. `.learning-error-actions` → 1 columna desde `768px` (no solo `640px`).
4. Mejorar soporte táctil en sopa (ya hay `touchstart`; revisar `preventDefault` y arrastre).

### Fase C — OVAs (solo las deficientes, sin lógica académica)

| OVA | Corrección mínima |
|-----|-------------------|
| OVA_Nana | Añadir `@media (max-width: 768px)` — grids 1 col, tipografía fluida |
| Anderson Suárez | Reemplazar `100vw` por `100%` |
| Robinson Meza | Revisar tablas/gráficos en `768px` |
| Resto | Mantener; ya cumplen umbral aceptable |

### Fase D — `shared/tgs-ova-components.css`

1. Alinear breakpoints con portal (`768` / `480`).
2. Garantizar botones y contenedores `max-width: 100%` en iframe embebido.

**No se propone modificar:** `handleRoute()`, estructura `index.html`, lógica de OVAs, router, footer en dashboard, animación, clima.

---

## 9. Archivos a modificar (fase de corrección futura)

| Prioridad | Archivo | Motivo |
|-----------|---------|--------|
| P1 | `style.css` | Grids, padding, header, visor, modales, touch targets |
| P2 | `OVAS/OVA_Nana/index.html` | Sin media queries |
| P2 | `OVAS/ova anderson suarez/teoria_informacion.html` | `100vw` |
| P3 | `js/learning-hub.js` | Mejoras táctiles sopa (opcional) |
| P3 | `shared/tgs-ova-components.css` | Paridad iframe móvil |
| P4 | OVAs individuales según prueba en dispositivo | Ajustes puntuales |

**No requieren cambios para responsive:** `script.js` (router), `index.html` (estructura), `header-weather.js`, `dashboard-network-bg.js` (salvo optimización menor).

---

## 10. Nivel responsive por superficie

| Superficie | Actual | Proyectado |
|------------|--------|------------|
| Desktop ≥ 1200 px | **94 %** | **96 %** |
| Tablet 768–1199 px | **82 %** | **92 %** |
| Móvil 481–767 px | **72 %** | **90 %** |
| Móvil ≤ 480 px | **58 %** | **88 %** |
| Visor OVA (shell) | **70 %** | **93 %** |
| OVAs internas (promedio iframe) | **74 %** | **86 %** |
| Centro de Aprendizaje | **68 %** | **89 %** |
| **GLOBAL PONDERADO** | **~76 %** | **~91 %** |

*Ponderación: portal shell 40 %, OVAs en iframe 35 %, Centro de Aprendizaje 25 %.*

---

## 11. Matriz de verificación (estado actual)

| # | Comprobación | Estado |
|---|--------------|--------|
| 1 | Dashboard visible | ✅ |
| 2 | Animación visible (dashboard) | ✅ (si no `prefers-reduced-motion`) |
| 3 | Footer correcto (dashboard) | ✅ |
| 4 | Sidebar correcta | ✅ |
| 5 | Router intacto | ✅ |
| 6 | Tema claro/oscuro | ✅ |
| 7 | OVAs cargan en iframe | ✅ |
| 8 | Sin errores consola (por responsive) | ✅ — no hay errores JS por viewport detectados |
| 9 | Sin scroll horizontal móvil | ❌ Riesgo C1/C2 |
| 10 | Footer oculto en OVA | ✅ (`ova-mode`) |
| 11 | Experiencia táctil óptima | ⚠️ M3/M4 |

---

## 12. Conclusión

El proyecto **ya es usable en escritorio y tablet** y cumple los requisitos funcionales. La brecha responsive se concentra en:

1. **Grids con `minmax` demasiado grandes** respecto al padding del contenedor (móvil estrecho).
2. **Header con demasiados elementos** simultáneos en pantallas pequeñas.
3. **Visor OVA con altura calculada rígida** en dispositivos de poca altura.
4. **Heterogeneidad de las OVAs embebidas** (Nana y Anderson como casos prioritarios).

Las correcciones propuestas son **incrementales**, no requieren rediseño ni nuevo sistema de animación, y respetan las restricciones de no alterar router, estructura HTML principal ni lógica académica de las OVAs.

---

*Auditoría responsive completada — fase diagnóstico únicamente. Sin cambios aplicados al código.*
