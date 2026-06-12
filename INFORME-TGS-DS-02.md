# INFORME TGS-DS-02 — Limpieza Visual del Menú Lateral
## Portal TGS USB · Universidad Simón Bolívar

**Fecha:** 11 de junio de 2026  
**Alcance:** Menú lateral del portal principal (`#sidebar`)  
**Tipo de intervención:** Exclusivamente CSS (presentación visual)

---

## Objetivo cumplido

Cada ítem del menú lateral ahora muestra únicamente:

```
01
Definiciones de Sistema
```

El nombre del autor **no se renderiza** en la barra lateral, pero **permanece en el DOM** para búsqueda y en tarjetas, visor, créditos y metadatos.

---

## Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `style.css` | Reglas CSS del sidebar: ocultación de autores + refinamiento visual |
| `INFORME-TGS-DS-02.md` | Este informe |

**No se modificaron:** `script.js`, `index.html`, `OVAS_ROUTES`, router, listeners, IDs, enlaces ni estructura HTML.

---

## Clases afectadas

| Clase / selector | Efecto |
|------------------|--------|
| `.sidebar .ova-author` | Autor oculto visualmente (técnica screen-reader-safe) |
| `.sidebar .ova-info` | Columna única alineada; solo título visible |
| `.sidebar .ova-title` | Tipografía, ellipsis, jerarquía |
| `.sidebar .ova-num` | Badge numérico institucional 32×32px |
| `.sidebar .nav-item` | Hover `translateX`, sombra, borde activo |
| `.sidebar .nav-item.active` | Gradiente USB + acento turquesa |
| `.sidebar-nav` | Padding y scrollbar refinados |
| `.nav-divider` | Separadores de temática más limpios |
| `.sidebar #nav-home .icon` | Microanimación en ítem Inicio |

---

## Método para ocultar autores

**Técnica:** visually hidden (accesible, no destructiva)

```css
.sidebar .ova-author {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  /* ... */
}
```

**Por qué este método:**
- El `<span class="ova-author">` sigue en el HTML generado por `buildCatalogUI()`
- La búsqueda del sidebar usa `link.textContent`, que **sigue incluyendo el autor** → filtrar por autor funciona igual
- Las tarjetas del dashboard usan `.card-author` → **sin cambios**
- El visor muestra `#active-ova-author` → **sin cambios**

**No se usó:** `display: none` global (también válido); se prefirió clip/absolute por convención de ocultación accesible.

---

## Mejoras visuales aplicadas

| Mejora | Detalle |
|--------|---------|
| Transiciones | `0.28s–0.3s` ease-in-out / cubic-bezier institucional |
| Hover | `translateX(4px)`, `box-shadow` suave, barra lateral turquesa (`inset 3px`) |
| Estado activo | Gradiente verde-azul USB, borde turquesa, sombra verde |
| Espaciado | `gap: 14px`, `padding: 11px 14px`, divisores con más aire |
| Número OVA | Badge monospace en caja redondeada |
| Título | Una línea con `ellipsis`, peso 600, tracking ajustado |
| Scrollbar sidebar | Thumb azul translúcido 5px |
| Divisores temáticos | Borde inferior sutil, letter-spacing 0.1em |

Inspiración: chrome azul del portal USB (`#142850`, `#234A7A`, acento `#00a896`).

---

## Confirmación: funcionalidad intacta

| Elemento | Estado |
|----------|--------|
| Router hash `#/ova/...` | ✅ Sin cambios |
| `OVAS_ROUTES` / `OVAS_CATALOG` | ✅ Sin cambios |
| `buildCatalogUI()` en `script.js` | ✅ Sin cambios |
| IDs `nav-ova-*` | ✅ Sin cambios |
| Enlaces `href` | ✅ Sin cambios |
| Búsqueda `#ova-search` | ✅ Operativa (texto autor en DOM) |
| Event listeners sidebar | ✅ Sin cambios |
| Visor iframe / dashboard | ✅ Sin cambios |
| Tarjetas con autor | ✅ Visibles |
| Contenido académico OVAs | ✅ Sin cambios |

---

## Veredicto

**Limpieza visual del menú lateral completada** con intervención 100% CSS. Autores eliminados solo de la presentación del sidebar; datos y funcionalidad preservados.
