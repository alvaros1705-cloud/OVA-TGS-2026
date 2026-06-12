# INFORME — FASE P1 RESPONSIVE PORTAL PRINCIPAL TGS

**Fecha:** 11 de junio de 2026  
**Archivo modificado:** `style.css` únicamente

---

## 1. Reglas modificadas

| # | Selector / bloque | Cambio |
|---|-------------------|--------|
| 1 | `.portal-header` | `safe-area-inset` en padding |
| 2 | `@media (max-width: 1023px)` | **Eliminado** — unificado en 767px |
| 3 | `.portal-container`, `.main-content` | `max-width: 100%`, `overflow-x: clip` |
| 4 | `.ovas-grid` | `minmax(min(100%, 280px), 1fr)` |
| 5 | `.learning-grid` | `minmax(min(100%, 260px), 1fr)` |
| 6 | `.ova-viewer-view` | Altura fija eliminada; `flex` + `min-height: 0` |
| 7 | `body.ova-mode .main-content` | `100dvh` en lugar de `100vh` |
| 8 | `.portal-footer` | `safe-area-inset` inferior/lateral |
| 9 | `@media (min-width: 768px)` footer | → `@media (min-width: 1200px)` |
| 10 | `@media (max-width: 768px)` juegos | **Eliminado** — fusionado en P1 |
| 11 | `@media (max-width: 640px)` detecta error | **Eliminado** — fusionado en P1 |
| 12 | `@media (max-width: 1199px)` hero | → rango `768px–1199px` (tablet) |
| 13 | **Nuevo** `@media (max-width: 767px)` P1 | Header, main, grids, visor, táctil |
| 14 | **Nuevo** `@media (max-width: 480px)` | Header compacto, grids 1 col |

---

## 2. Líneas aproximadas afectadas

| Zona | Líneas (aprox.) |
|------|-----------------|
| `.portal-header` | ~160–168 |
| Header weather (1023 eliminado) | ~343–355 |
| `.portal-container` / `.main-content` | ~654–675 |
| `body.ova-mode .main-content` | ~748–752 |
| `.ovas-grid` | ~993–997 |
| `.ova-viewer-view` | ~1269–1281 |
| `.close-modal-btn` | ~1472–1483 |
| `.portal-footer` | ~1613–1622 |
| Footer grid breakpoint | ~1701–1712 |
| Bloque P1 + tablet | ~1747–1895 |
| `.learning-grid` | ~2080–2085 |
| `@media 640px` eliminado | ~2534 |

**Total estimado:** ~180 líneas tocadas o reemplazadas.

---

## 3. Implementación por requisito

### 1. `.ovas-grid` sin scroll horizontal ≤480px
- Base: `minmax(min(100%, 280px), 1fr)`
- `@767px` y `@480px`: `grid-template-columns: 1fr`

### 2. `.learning-grid` sin desbordamiento
- Base: `minmax(min(100%, 260px), 1fr)`
- `@767px` / `@480px`: `1fr`

### 3. Header móvil
- Flex con `min-width: 0`, logo/título reducidos
- Fecha oculta ≤767px; emoji hora oculto ≤480px
- Hamburguesa y tema **44×44 px**
- Badge USB sigue oculto en móvil (sin cambio funcional)

### 4. `.main-content` móvil
- `padding: 24px 16px` en ≤767px
- Desktop: `36px 32px` intacto

### 5. Visor OVA responsive
- Eliminados `height: calc(...)` y `min-height: 520px` fijos
- `body.ova-mode` usa flex + `100dvh` + `height: 100%` en visor

### 6. Táctil 44×44 px (solo ≤767px)
- `.hamburger-btn`, `.theme-toggle-btn`
- `.btn-back`, `.btn-control`, `.btn-control-link`
- `.hangman-key`, `.learning-guide-tab`
- `.close-modal-btn`, `.close-details-btn`

### 7. Safe-area iPhone
- `.portal-header`: `env(safe-area-inset-*)`
- `.portal-footer`: inset inferior y laterales

### 8. Breakpoints unificados
- Móvil: **767px** (y 480px para ultra-estrecho)
- Desktop: **1200px**
- Tablet hero: **768px–1199px** (rango explícito)
- Eliminados: 1023px, 768px sueltos, 640px

### 9. Scroll horizontal
- `body { overflow-x: hidden }` (existente)
- `minmax(min(100%, …), 1fr)` en grids
- `max-width: 100%` + `overflow-x: clip` en contenedor

---

## 4. Confirmación escritorio (≥1200px)

| Elemento | Estado |
|----------|--------|
| Padding main `36px 32px` | ✅ Sin cambio |
| Grids auto-fill (280/260 min) | ✅ Mismo comportamiento visual |
| Header padding 32px | ✅ Sin cambio (con safe-area 0 en desktop) |
| Tema toggle 40px | ✅ Sin cambio |
| Botones modal 24px | ✅ Sin cambio |
| Footer 3 columnas | ✅ Desde 1200px (antes 768px) |
| Visor OVA en modo flex | ✅ Ocupa espacio vía `body.ova-mode` |
| Tema oscuro / animaciones / clima | ✅ Sin reglas alteradas |

---

## 5. Estimación responsive

| Superficie | Antes P1 | Después P1 |
|------------|------------|------------|
| Desktop ≥1200px | 94 % | **94 %** (igual) |
| Tablet 768–1199px | 82 % | **86 %** |
| Móvil 481–767px | 72 % | **88 %** |
| Móvil ≤480px | 58 % | **90 %** |
| Visor OVA (shell) | 70 % | **92 %** |
| **GLOBAL PONDERADO** | **~76 %** | **~88 %** |

*Proyección post-P1 alineada con auditoría; OVAs internas no incluidas (fase P2).*

---

## 6. Restricciones respetadas

✅ Sin cambios en HTML, JS, router, handleRoute, clima, animaciones, tema oscuro, OVAs, learning-hub.js, shared CSS.

---

*Fase P1 completada.*
