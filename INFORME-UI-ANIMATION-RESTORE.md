# INFORME — UI-ANIMATION-RESTORE
## Portal TGS USB · Recuperación de fondo tecnológico del dashboard

**Fecha:** 11 de junio de 2026

---

## Síntoma

La red animada (nodos, líneas, partículas) dejó de percibirse en el dashboard principal, aunque el canvas y el script seguían presentes en el proyecto.

---

## Diagnóstico

### Elementos verificados (intactos)

| Elemento | Estado |
|----------|--------|
| `#dashboard-network-canvas` en `index.html` | Presente |
| `js/dashboard-network-bg.js` cargado | Presente |
| `.dashboard-network-canvas` CSS (`z-index: 0`, `pointer-events: none`) | Presente |
| `#dashboard-view` encima (`z-index: 1`) | Correcto |
| `prefers-reduced-motion` | Solo oculta si el SO lo exige |

La animación **no fue eliminada** del DOM ni desconectada del script.

---

## Causas encontradas

### 1. Reglas glass eliminadas (`style.css`)

Durante la fase TGS-UI-ANIM posterior se **retiraron** las reglas que hacían translúcidas las tarjetas del dashboard:

```css
/* Eliminado previamente */
.dashboard-view .hero-section { background-color: rgba(18, 22, 43, 0.62); }
.dashboard-view .indicator-card, ... { background-color: rgba(18, 22, 43, 0.66); }
```

Sin ellas, reglas posteriores (`.hero-section`, `.indicator-card`, `.ova-card`, etc.) aplicaron fondos más opacos (`var(--surface-color)` ≈ 75 %), **tapando visualmente** el canvas detrás. La animación seguía ejecutándose, pero quedó oculta como marca de agua.

### 2. Condición de carrera al volver desde OVA (`dashboard-network-bg.js`)

En `hashchange`, el listener del canvas se ejecuta **antes** que `handleRoute()` de `script.js` (orden de carga de scripts). Al regresar a `#/`:

1. El canvas comprueba `#dashboard-view` → aún `display: none`
2. Llama a `stop()` y no reprograma `requestAnimationFrame`
3. `handleRoute()` muestra el dashboard
4. El bucle de animación **no se reinicia**

Tras visitar una OVA, el dashboard quedaba sin animación aunque el canvas existiera.

---

## Archivos afectados

| Archivo | Cambio |
|---------|--------|
| `style.css` | Restauración de glass translúcido + ocultar canvas en `body.ova-mode` |
| `js/dashboard-network-bg.js` | Sincronización diferida con `requestAnimationFrame` + `MutationObserver` en `#dashboard-view` |

**Sin modificar:** `index.html`, `script.js`, `handleRoute()`, layouts (`height`/`flex`/`overflow` de contenedores principales), header, footer, sidebar, clima, router, OVAs.

---

## Solución aplicada

### `style.css` (final del archivo)

- Restauradas reglas de **solo `background-color`** en elementos de `.dashboard-view` (prioridad final en cascada).
- `body.ova-mode .dashboard-network-canvas` → oculto en visor OVA (sin afectar layout).

### `js/dashboard-network-bg.js`

- Función `syncWithDashboard()` con `requestAnimationFrame` para ejecutar **después** de que `handleRoute()` actualice `display`.
- `MutationObserver` en `#dashboard-view[style]` para reiniciar al mostrar el dashboard.

---

## Jerarquía de capas restaurada

```
#dashboard-network-canvas   (z-index: 0, pointer-events: none)
        ↓
Fondo / espacios del dashboard
        ↓
Tarjetas glass translúcidas
        ↓
Textos, botones, modales
```

---

## Verificación

| Comprobación | Resultado esperado |
|--------------|-------------------|
| Dashboard `#/` | Red animada visible entre y bajo tarjetas |
| Tema oscuro / claro | Colores USB según `palette()` |
| Vista OVA `#/ova/...` | Sin animación |
| Volver al dashboard | Animación reinicia |
| Footer / sidebar / router | Sin cambios |
| Consola | Sin errores nuevos |

---

## Veredicto

Se **restauró el sistema existente** (`dashboard-network-bg.js` + canvas) sin nuevo motor ni rediseño. La causa fue visual (glass removido) y de sincronización (parada permanente del bucle al volver de OVA).
