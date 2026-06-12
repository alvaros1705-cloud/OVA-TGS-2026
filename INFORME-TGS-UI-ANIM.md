# INFORME TGS-UI-ANIM — Fondo Tecnológico Animado del Dashboard
## Portal TGS USB · Universidad Simón Bolívar

**Fecha:** 11 de junio de 2026  
**Alcance:** Capa visual decorativa del dashboard principal únicamente

---

## Objetivo cumplido

Se integró una animación de **red sistémica** (nodos, conexiones, partículas) inspirada en Teoría General de Sistemas: interconexión, flujo de información y subsistemas. Estética **académica, institucional, elegante y moderna** — sin estilo videojuego, hacker ni cyberpunk.

---

## Archivos creados

| Archivo | Descripción |
|---------|-------------|
| `js/dashboard-network-bg.js` | Motor de animación independiente con `requestAnimationFrame` |
| `INFORME-TGS-UI-ANIM.md` | Este informe |

---

## Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `index.html` | `<canvas id="dashboard-network-canvas">` dentro de `#main-content` + carga del script decorativo |
| `style.css` | Posicionamiento absoluto, `z-index`, `pointer-events: none`, `prefers-reduced-motion` |

**Sin modificar:**

| Elemento | Estado |
|----------|--------|
| `script.js` / router / hash | ✅ Intacto |
| OVAs / iframes | ✅ Intacto |
| Sidebar / menú | ✅ Intacto |
| Contenido del dashboard | ✅ Intacto |
| Tarjetas (HTML, textos, estilos base) | ✅ Intacto |
| Funcionalidad académica | ✅ Intacto |

---

## Implementación técnica

### Capa visual

```
#main-content
  ├── #dashboard-network-canvas   ← z-index: 0, pointer-events: none
  └── #dashboard-view             ← z-index: 1 (contenido encima)
```

- Canvas absoluto que cubre el área del dashboard al hacer scroll.
- **No cubre** textos, botones, tarjetas ni sidebar.
- Se oculta y detiene el bucle al abrir una OVA (`hashchange` → `#dashboard-view` oculto).
- `aria-hidden="true"` — capa puramente decorativa.

### Animación

| Elemento | Comportamiento |
|----------|----------------|
| **Nodos** | 40–80 según viewport; desplazamiento lento y suave; pulso sinusoidal muy tenue |
| **Conexiones** | Líneas finas; opacidad baja; aparecen/desaparecen con `sin(time)` |
| **Partículas** | ~22 % del conteo de nodos; movimiento continuo discreto |
| **Flujo** | Partículas ocasionales que recorren enlaces (metáfora de flujo de información) |

### Cantidad de nodos por dispositivo

| Viewport | Nodos | Distancia máx. enlace | Partículas |
|----------|-------|------------------------|------------|
| Móvil (< 480px) | **40** | 110px | ~8–9 |
| Tablet (< 768px) | **52** | 110px | ~11 |
| Laptop (< 1024px) | **65** | 150px | ~14 |
| Desktop (≥ 1024px) | **80** | 150px | ~17 |

---

## Colores y tema claro / oscuro

| Modo | Nodos | Líneas | Partículas |
|------|-------|--------|------------|
| **Oscuro** | Cian / teal `rgba(0,168,150)` | Verde institucional USB | Azul tecnológico suave |
| **Claro** | Verde USB `rgba(0,104,55)` | Azul suave `rgba(59,130,246)` | Gris tecnológico `slate` |

Sincronización: `MutationObserver` sobre `body.light-theme` (misma señal que el toggle del portal).

---

## Rendimiento estimado

| Métrica | Valor |
|---------|-------|
| Motor | `requestAnimationFrame` — objetivo **60 FPS** |
| DPR máximo | 2 (pantallas retina sin sobrecarga) |
| Complejidad enlaces | O(n²) con n ≤ 80; mayoría de pares descartados por distancia |
| Pausa automática | Sin dibujo cuando el visor OVA está activo |
| Reduced motion | Canvas oculto si `prefers-reduced-motion: reduce` |
| Impacto estimado | **Bajo** en móvil (40 nodos) · **Bajo–medio** en desktop (80 nodos) |

---

## Efectos y restricciones estéticas

- Movimiento lento, sin destellos ni flashes agresivos.
- Opacidades bajas en líneas y partículas.
- Sin modificación de la lógica JavaScript existente del portal.
- Script autocontenido en IIFE; no exporta ni altera variables globales del router.

---

## Veredicto

Fondo tecnológico **sutil y académico** integrado como capa decorativa independiente, compatible con tema claro/oscuro y despliegue en GitHub Pages (sin dependencias externas).
