# INFORME — AUDITORÍA DE LAYOUT
## Portal TGS USB · Post UI-WEATHER / TGS-UI-ANIM

**Fecha:** 11 de junio de 2026  
**Alcance:** Corrección estructural de alturas y scroll. **Sin cambios de diseño** en fecha, hora, animaciones, temas, router ni OVAs.

---

## Síntomas reportados

| Síntoma | Descripción |
|---------|-------------|
| Footer flotante | El footer institucional aparecía en medio de la página con poco contenido |
| Sidebar desalineado | La barra lateral se extendía visualmente por debajo del footer |
| Contenido corto | El área principal no ocupaba la altura restante bajo el header |
| Dashboard comprimido | El dashboard no llenaba el viewport disponible |

---

## Causa raíz identificada

Los cambios de **UI-WEATHER** y **TGS-UI-ANIM** introdujeron reglas que alteraron el modelo de altura del layout sin reforzar el contenedor flex principal:

| Cambio previo | Efecto colateral |
|---------------|------------------|
| `--portal-header-h: 80px` + `min-height` en `.portal-header` | Header más alto; el offset del visor OVA (`150px` fijo) y del sidebar quedaron desincronizados |
| `isolation: isolate` en `.main-content` (TGS-UI-ANIM) | Bloque CSS duplicado de `.main-content` sin `min-height` explícita |
| Canvas absoluto en `#main-content` | Correcto visualmente, pero el contenedor padre no garantizaba altura mínima del viewport |
| `.sidebar { bottom: 0 }` | Sidebar fijo al viewport completo, superponiéndose al footer (`z-index: 90` vs `10`) al hacer scroll |

**Archivo afectado:** `style.css` (únicamente reglas de layout; HTML y `script.js` intactos).

---

## Reglas CSS responsables

### 1. Falta de altura mínima en el área principal

```css
/* ANTES — insuficiente para sticky footer */
.portal-container {
  flex: 1;
  display: flex;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
```

Sin `min-height: calc(100vh - var(--portal-header-h))`, el contenedor solo crecía con el contenido intrínseco. Con dashboard corto, el footer subía al centro visual de la pantalla.

### 2. Sidebar anclado a `bottom: 0`

```css
/* ANTES */
.sidebar {
  top: var(--portal-header-h);
  bottom: 0;
}
```

El sidebar siempre ocupaba el 100 % del viewport bajo el header, independiente del final real del documento, generando solapamiento con el footer.

### 3. `dashboard-view` sin crecimiento flex

El bloque del dashboard no tenía `flex: 1`, por lo que no expandía el lienzo principal dentro de `#main-content`.

### 4. Footer por debajo del sidebar en z-index

```css
/* ANTES */
.portal-footer { z-index: 10; }
.sidebar { z-index: 90; }
```

Al llegar al footer por scroll, el sidebar lo cubría parcialmente.

---

## Corrección aplicada

**Archivo:** `style.css`

| Selector | Corrección |
|----------|------------|
| `:root` | `--portal-header-h: 80px` centralizado en tokens globales |
| `.portal-container` | `min-height: calc(100vh - var(--portal-header-h))`, `flex: 1 0 auto`, `width: 100%`, `align-items: stretch` |
| `.main-content` | `min-height: calc(100vh - var(--portal-header-h))`, `flex: 1 1 auto`, `width: 100%`; reglas TGS-UI-ANIM fusionadas en un solo bloque |
| `.dashboard-view` | `flex: 1 0 auto`, `width: 100%` |
| `.sidebar` | `height` / `max-height: calc(100vh - var(--portal-header-h))` en lugar de `bottom: 0` |
| `.portal-footer` | `flex-shrink: 0`, `z-index: 95` (por encima del sidebar, por debajo del header `z-index: 100`) |
| `.ova-viewer-view` | `height: calc(100vh - var(--portal-header-h) - 72px)` — offset dinámico al header real |

---

## Comportamiento restaurado

1. **Contenido principal** ocupa como mínimo toda la altura entre header y footer.
2. **Footer** queda al final real del documento (`margin-top: auto` en `body` flex + altura mínima del contenedor).
3. **Sidebar** limitado al viewport bajo el header; ya no se prolonga más allá del área visible.
4. **Scroll** natural sobre el documento; sin recortes en `#main-content`.
5. **Intactos:** fecha/hora (`header-weather`), animación (`dashboard-network-bg.js`), tema claro/oscuro, router, OVAs, tarjetas y contenido académico.

---

## Elementos revisados (sin clase en HTML)

| Buscado en spec | Estado en proyecto |
|-----------------|-------------------|
| `app-container` | No existe — equivalente: `.portal-container` |
| `dashboard-content` | No existe — equivalente: `#dashboard-view` dentro de `#main-content` |
| `portal-content` / `content-wrapper` | No existen — layout: `body` → `.portal-container` → `.main-content` |

---

## Verificación sugerida

1. Abrir `#/` con ventana alta → footer pegado al borde inferior del viewport.
2. Hacer scroll hasta el final del dashboard → footer después de todo el contenido.
3. Desktop ≥ 1200 px → sidebar y contenido alineados bajo el header.
4. Abrir una OVA → visor con altura coherente respecto al header de 80 px.
5. Confirmar que fecha, hora y red animada siguen visibles.

---

*Auditoría de layout completada — sin modificación de diseño institucional.*
