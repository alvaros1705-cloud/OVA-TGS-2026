# INFORME TGS-DS — Homologación Visual Completa
## Teoría General de Sistemas · Universidad Simón Bolívar · Campus Cúcuta

**Fecha:** 11 de junio de 2026  
**Alcance:** 14 OVAs funcionales · intervención **exclusivamente visual**  
**Referencia:** Portal Principal TGS USB (`index.html`, `style.css`)

---

## 1. Auditoría previa (sin modificación de lógica)

| # | OVA | Autor | Archivo principal | Tecnología | CSS principal | JS principal | Riesgo migración |
|---|-----|-------|-------------------|------------|---------------|--------------|------------------|
| 01 | Definiciones de Sistema | Brayan Andrey Casanova Flórez | `index.html` | HTML5 + CSS3 + JS | `styles.css` (ext) | `script.js` | **Bajo** — multi-archivo, clases estándar |
| 02 | Orígenes y Principios TGS | Cristian Miranda Zuluaga | `OVA_TGS_CristianMiranda.html` | Monolítico | Inline `<style>` | Inline `<script>` | **Medio** — muchos estilos inline |
| 03 | Conceptos Fundamentales | Víctor Ortega | `index.html` | HTML5 + FA CDN | `styles.css` (ext) | `script.js` | **Bajo** |
| 04 | Enfoques de la TGS | Jefersson Rivera | `index.html` | HTML5 | `styles.css` (ext) | `app.js` | **Bajo** |
| 05 | Enfoque Sistémico | Juan Camilo Santelis | `el_jueguiño_mas_bambero_de_santelis.html` | Monolítico | Inline (~1400 líneas) | Inline | **Alto** — cursor custom, canvas, estilos densos |
| 06 | Clasificación de Sistemas | José Fernando Chávez Ramírez | `OVA_Clasificacion_Sistemas_ChavezRamirez (1).html` | Monolítico | Inline | Inline + `onclick` | **Medio** — juegos con onclick preservados |
| 07 | Tipos de Sistemas | Deivy Jesús Flórez Serna | `OVA_Tipos_de_Sistemas.html` | Monolítico | Inline | Inline | **Medio** |
| 08 | Propiedades de los Sistemas | Edwin Fernando Gutierrez Parra | `index.html` | HTML5 + FA CDN | `styles.css` (ext) | `scripts.js` | **Bajo** |
| 09 | Homeostasis y Equilibrio | Thomas Alejandro Galeano Omaña | `index.html` | HTML5 + Canvas | `Estilos.css` (ext) | `Script.js` | **Medio** — case-sensitive CSS en Linux |
| 10 | Teoría de Comportamientos | Jesús Serrano | `ova-comportamientos.html` | Monolítico | Inline | Inline | **Medio** |
| 11 | Caos en los Sistemas | Robinson Meza | `index.html` | HTML5 + Canvas | `style.css` (ext) | `app.js` | **Medio** — simulador canvas |
| 12 | Cibernética y Organización | Juan Angarita | `ova-cibernetica-juan-angarita.html` | Monolítico | Inline (terminal UI) | Inline | **Alto** — estética terminal fuerte |
| 13 | Teoría de la Información | Anderson Suárez | `teoria_informacion.html` | Monolítico slides | Inline | Inline | **Alto** — `overflow:hidden`, slides fullscreen |
| 14 | Teoría de Colas y Juegos | Diana Janneth Umaña Bayona | `index.html` | Monolítico | Inline | Inline | **Medio** — paleta rosa/plum propia |

**Estrategia adoptada:** capa CSS/JS de presentación (`shared/tgs-ova-*`) cargada **después** de estilos locales + header USB inyectado por `tgs-ova-theme.js` (solo chrome visual).

---

## 2. OVAs encontradas vs migradas

| Métrica | Valor |
|---------|-------|
| OVAs auditadas | 14 |
| OVAs migradas visualmente | **14** |
| OVAs excluidas | 0 (David Chirinos no está en el lote funcional) |

---

## 3. Archivos creados / modificados

### Design System TGS (nuevo)

| Archivo | Función |
|---------|---------|
| `shared/tgs-ova-tokens.css` | Tokens USB: colores, tipografía Outfit/JetBrains, temas claro/oscuro |
| `shared/tgs-ova-components.css` | Header institucional, botones, tarjetas, tablas, formularios, responsive |
| `shared/tgs-ova-theme.js` | `TGS_THEME_CHANGED`, iframe `tgs-embedded`, chrome USB, tagging botones |
| `shared/tgs-ova-homologate.css` | Mapeo visual de selectores legacy de las 14 OVAs |
| `scripts/apply-tgs-ds.ps1` | Script de integración reproducible |

### Portal (sincronización tema)

| Archivo | Cambio |
|---------|--------|
| `script.js` | Emite `TGS_THEME_CHANGED` + `USB_THEME_CHANGED` al iframe |
| `index.html` | Texto de configuración actualizado |

### OVAs — solo `<head>` + `class` en `<html>` (14 archivos)

```
OVAS/OVA_Def_Sistemas/index.html
OVAS/OVA_TGS_CristianMiranda/OVA_TGS_CristianMiranda.html
OVAS/OVA-VICTOR ORTEGA/index.html
OVAS/OVA-Jefersson_Rivera/index.html
OVAS/ova juan camilo santelis/el_jueguiño_mas_bambero_de_santelis.html
OVAS/OVA-Jose_ChavezRamirez/OVA_Clasificacion_Sistemas_ChavezRamirez (1).html
OVAS/OVA_Deivy Florez/OVA_Tipos_de_Sistemas.html
OVAS/OVA - Edwin Gutierrez/index.html
OVAS/Ova-Thomas Galeano/index.html
OVAS/OVA-Jesus_Serrano/ova-comportamientos.html
OVAS/OVA-Robinson_Meza/index.html
OVAS/OVA-Juan_Angarita/ova-cibernetica-juan-angarita.html
OVAS/ova anderson suarez/teoria_informacion.html
OVAS/OVA_Nana/index.html
```

**Inyección en cada OVA:**
```html
<html lang="es" class="tgs-ova-root">
  ...
  <!-- TGS-DS-USB -->
  <link rel="stylesheet" href="../../shared/tgs-ova-tokens.css">
  <link rel="stylesheet" href="../../shared/tgs-ova-components.css">
  <link rel="stylesheet" href="../../shared/tgs-ova-homologate.css">
  <script src="../../shared/tgs-ova-theme.js" defer></script>
```

**No se modificaron:** `script.js`, `app.js`, `scripts.js`, `Script.js`, bloques `<script>` inline, `onclick`, simuladores, quizzes, ni contenido teórico.

---

## 4. Componentes homologados

| Componente | Implementación |
|------------|----------------|
| Header institucional USB | `.tgs-ova-usb-header` inyectado por `tgs-ova-theme.js` |
| Tipografía Outfit / JetBrains Mono | `tgs-ova-tokens.css` + `!important` en `tgs-ova-body` |
| Botones `tgs-btn-primary` / `tgs-btn-secondary` | Clases añadidas por `tagButtons()` + estilos en `.btn-primary`, `.btn-outline`, etc. |
| Tarjetas / paneles | `.card`, `.tcard`, `.enfoque-card`, `.author-card` → tokens TGS |
| Navegación | `nav`, `#navbar`, `.navbar` → chrome azul USB |
| Hero | Compactación en `tgs-embedded`; tipografía y badges USB |
| Tablas | `th`/`td` bordes y tipografía institucional |
| Formularios | `input`, `select`, `textarea`, checkbox/radio `accent-color` |
| Badges | `.hero-badge`, `.tag`, `.sec-tag` → estilo pill USB |
| Tema claro/oscuro | `tgs-ova-light` + `TGS_THEME_CHANGED` + `localStorage` |
| Modo iframe | `tgs-ova-embedded` en `<html>` cuando `self !== top` |
| Responsive | Media queries en `tgs-ova-components.css` |

---

## 5. Riesgos detectados (post-migración)

| Riesgo | Severidad | Nota |
|--------|-----------|------|
| Especificidad de estilos inline muy alta en OVAs monolíticas | Media | Homologate usa `!important` solo en superficies/chrome; simulaciones intactas |
| Anderson Suárez: layout `overflow:hidden` + slides | Media | Padding-top del chrome puede requerir ajuste fino en dispositivo real |
| Santelis: cursor personalizado | Baja | No alterado; convive con header fijo |
| Angarita: estética terminal verde | Baja | Nav/hero homologados; terminal body conserva identidad parcial |
| Fuentes Google antiguas aún cargan (peso de red) | Baja | Outfit prevalece visualmente; no se eliminaron links para no tocar HTML extra |
| Doble header visual (nav OVA + chrome USB) | Baja | Intencional: chrome institucional + nav académico de la OVA |

---

## 6. Elementos preservados (restricción absoluta)

- ✅ Simulaciones (canvas, visualizadores, terminales)
- ✅ Cuestionarios y evaluaciones (lógica `onclick` / listeners intactos)
- ✅ Juegos (sopa, memoria, ahorcado interno de cada OVA)
- ✅ Videos e iframes YouTube internos
- ✅ Algoritmos y retroalimentaciones en JS
- ✅ Contenidos teóricos y textos académicos
- ✅ Autores y metadatos originales
- ✅ Rutas relativas y enlaces internos

---

## 7. Compatibilidad GitHub Pages

| Requisito | Estado |
|-----------|--------|
| Rutas relativas `../../shared/` | ✅ Desde cualquier carpeta `OVAS/*/` |
| Sin build step | ✅ |
| `.nojekyll` en raíz | ✅ (Fase 11 previa) |
| JS defer en theme | ✅ No bloquea render |
| Recursos CDN externos de OVAs | ✅ Sin cambios |

---

## 8. Verificación recomendada

1. Abrir portal `index.html` → cargar cada OVA en iframe (modo `tgs-embedded`).
2. Alternar tema claro/oscuro en header del portal → confirmar sincronización en OVA.
3. Probar en viewport 1280 / 768 / 375 px.
4. Ejecutar un quiz y un juego por OVA → confirmar misma funcionalidad.
5. Desplegar en GitHub Pages y validar rutas con espacios (`OVA - Edwin Gutierrez`, etc.).

---

## 9. Veredicto

| Criterio | Resultado |
|----------|-----------|
| Identidad visual Portal TGS USB | ✅ Aplicada vía Design System |
| 14 OVAs migradas | ✅ |
| Cero cambios en comportamiento académico | ✅ |
| `TGS_THEME_CHANGED` | ✅ |
| Modo iframe `tgs-embedded` | ✅ |

**Meta cumplida:** *Misma identidad visual del Portal TGS USB, cero cambios en el comportamiento académico.*

---

*Generado por fase TGS-DS · Portal Académico OVA-TGS USB*
