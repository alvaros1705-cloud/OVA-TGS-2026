# INFORME — LAYOUT-FIX OVA VIEW
## Portal TGS USB · Visibilidad del footer en modo visor

**Fecha:** 11 de junio de 2026

---

## Problema reportado

Al navegar a `#/ova/...`:

- Footer institucional superpuesto sobre el visor
- Espacio vacío oscuro debajo del iframe
- Altura incorrecta del visor OVA
- Sidebar sin alteración (comportamiento esperado)

El dashboard (`#/`) se visualizaba correctamente.

---

## Causa exacta encontrada

### 1. Footer fuera del área controlada por el router

En `index.html`, la estructura es:

```
<body>
  <header class="portal-header">
  <div class="portal-container">
    <aside class="sidebar">
    <main class="main-content">
      <section id="dashboard-view">   ← oculto en OVA
      <section id="ova-viewer-view">  ← visible en OVA
  </main>
  </div>
  <footer class="portal-footer">      ← SIEMPRE en el DOM, fuera de main
</body>
```

El footer **nunca perteneció** a `#dashboard-view`. Es hijo directo de `<body>`, después de `.portal-container`.

### 2. `handleRoute()` no gestionaba el footer

En `script.js`, al abrir una OVA solo se ejecutaba:

```javascript
dashboardView.style.display = 'none';
ovaViewerView.style.display = 'flex';
```

El footer permanecía visible y en el flujo del documento.

### 3. Conflicto de alturas en modo OVA

En `style.css` (corrección de layout previa):

- `.main-content { min-height: calc(100vh - var(--portal-header-h)) }` — altura pensada para dashboard **con** footer
- `.ova-viewer-view { height: calc(100vh - var(--portal-header-h) - 72px) }` — altura fija que no llenaba el espacio al coexistir con el footer

Resultado: el visor no ocupaba todo el área útil y el footer (`z-index: 95`) quedaba visible en la mitad inferior de la pantalla, superponiéndose al iframe.

---

## Archivos afectados

| Archivo | Tipo de cambio |
|---------|----------------|
| `script.js` | Lógica de visibilidad del footer según ruta |
| `style.css` | Reglas `body.ova-mode` para layout del visor |
| `index.html` | **Sin cambios** |

---

## Corrección aplicada

### `script.js`

Nueva función `setAppView(mode)` llamada desde `handleRoute()`:

| Ruta | Acción |
|------|--------|
| `#/` o `#` | `setAppView('dashboard')` — footer visible |
| `#/ova/...` | `setAppView('ova')` — footer oculto (`hidden` + `aria-hidden`) |

Se añade la clase `ova-mode` en `<body>` para estilos CSS.

### `style.css`

```css
body.ova-mode .portal-footer       → display: none
body.ova-mode .main-content        → height/min-height calc(100vh - header), overflow: hidden
body.ova-mode .ova-viewer-view     → flex: 1, height: 100%, min-height: 0
body.ova-mode .iframe-wrapper      → flex: 1, min-height: 0 (iframe llena el espacio)
```

---

## Comportamiento restaurado

| Vista | Footer | Visor |
|-------|--------|-------|
| **Dashboard** | Visible al final de la página | N/A |
| **OVA** (`#/ova/...`) | Oculto completamente | Iframe ocupa todo el espacio bajo el header del visor |

---

## Elementos no modificados

- Diseño visual, colores, animaciones de fondo
- Fecha y hora (`header-weather`)
- Sidebar, router hash, catálogo de OVAs
- Contenido interno de las OVAs

---

## Verificación sugerida

1. Abrir `#/` → footer visible al final del scroll.
2. Abrir cualquier `#/ova/definiciones-sistema` → sin footer; iframe a altura completa.
3. Pulsar «Volver» → footer reaparece; dashboard normal.
4. Confirmar que sidebar, tema y animación del dashboard siguen operativos.

---

*Layout-Fix OVA View completado.*
