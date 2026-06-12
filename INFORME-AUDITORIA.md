# Informe de Auditoría — Fase 1
## Portal Integrado OVA-TGS · Universidad Simón Bolívar

**Fecha:** 11 de junio de 2026  
**Alcance:** Carpeta `OVAS/` (solo lectura, sin modificaciones a lógica académica)  
**Referencia arquitectónica:** Portal Integrado de Teoría de Compiladores (`OVA-COMPILADORES`)

---

## 1. Inventario de OVAs

| # | Carpeta | Nombre de la OVA | Autor (según OVA / carpeta) | Archivo de entrada principal |
|---|---------|------------------|----------------------------|------------------------------|
| 01 | `OVA_Def_Sistemas` | Definiciones de Sistema | Brayan Andrey Casanova Flórez | `index.html` |
| 02 | `OVA_TGS_CristianMiranda` | Orígenes y Principios de la TGS | Cristian Miranda Zuluaga | `OVA_TGS_CristianMiranda.html` |
| 03 | `OVA-VICTOR ORTEGA` | Conceptos Fundamentales de la TGS | Víctor Ortega *(placeholder en footer)* | `index.html` |
| 04 | `OVA-Jefersson_Rivera` | Enfoques para el Estudio de la TGS | Jefersson Rivera *(carpeta)* | `index.html` |
| 05 | `ova juan camilo santelis` | El Enfoque Sistémico | Juan Camilo Santelis *(carpeta)* | `el_jueguiño_mas_bambero_de_santelis.html` |
| 06 | `OVA-Jose_ChavezRamirez` | Clasificación y Características de los Sistemas | José Fernando Chávez Ramírez | `OVA_Clasificacion_Sistemas_ChavezRamirez (1).html` |
| 07 | `OVA_Deivy Florez` | Tipos de Sistemas | Deivy Jesús Flórez Serna | `OVA_Tipos_de_Sistemas.html` |
| 08 | `OVA - Edwin Gutierrez` | Propiedades de los Sistemas | Edwin Fernando Gutierrez Parra | `index.html` |
| 09 | `Ova-Thomas Galeano` | Homeostasis y Equilibrio en Sistemas | Thomas Alejandro Galeano Omaña | `index.html` |
| 10 | `OVA-Jesus_Serrano` | Teoría de Comportamientos | Jesús Serrano *(carpeta)* | `ova-comportamientos.html` |
| 11 | `OVA-Robinson_Meza` | Caos en los Sistemas | Robinson Meza *(carpeta)* | `index.html` |
| 12 | `OVA-Juan_Angarita` | Teoría de la Organización y Cibernética | Juan Angarita *(carpeta)* | `ova-cibernetica-juan-angarita.html` |
| 13 | `ova anderson suarez` | Teoría de la Información | Anderson Suárez *(carpeta)* | `teoria_informacion.html` |
| 14 | `OVA_Nana` | Teoría de Colas y Teoría de Juegos | Diana Janneth Umaña Bayona | `index.html` |
| — | `OVA-David_Chirinos` | **NO FUNCIONAL** | David Chirinos *(carpeta)* | `chirinosdavid394-hue_TEORIADESISTEMAS.html` |

**Total carpetas:** 15  
**OVAs funcionales detectadas:** 14  
**OVAs no integrables en estado actual:** 1 (David Chirinos)

---

## 2. Ruta principal de cada OVA

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

---

## 3. Dependencias por OVA

### Estructura de archivos locales

| OVA | HTML | CSS | JS | Imágenes locales |
|-----|------|-----|----|--------------------|
| OVA_Def_Sistemas | index.html | styles.css | script.js | — |
| OVA - Edwin Gutierrez | index.html | styles.css | scripts.js | — |
| OVA-Jefersson_Rivera | index.html | styles.css | app.js | — |
| OVA-Robinson_Meza | index.html | style.css | app.js | — |
| OVA-VICTOR ORTEGA | index.html | styles.css | script.js | — |
| OVA_Nana | index.html | *(inline)* | *(inline)* | — |
| Ova-Thomas Galeano | index.html | Estilos.css / estilos.css* | Script.js | — |
| OVA-Juan_Angarita | single-file | inline | inline | — |
| OVA-Jesus_Serrano | single-file | inline | inline | — |
| OVA_TGS_CristianMiranda | single-file | inline | inline | — |
| OVA-Jose_ChavezRamirez | single-file | inline | inline | — |
| OVA_Deivy Florez | single-file | inline | inline | — |
| ova anderson suarez | single-file | inline | inline | — |
| ova juan camilo santelis | single-file | inline | inline | — |
| OVA-David_Chirinos | GitHub scrape | GitHub assets | GitHub JS | — |

\* *Riesgo de mayúsculas en `Estilos.css` vs referencia `estilos.css` (Linux/GitHub Pages).*

### Dependencias externas (todas las OVAs)

- **Google Fonts** (`fonts.googleapis.com`, `fonts.gstatic.com`) — todas las OVAs
- **Font Awesome 6.5** (`cdnjs.cloudflare.com`) — Edwin Gutierrez, Víctor Ortega
- **YouTube embeds** — varias OVAs (Angarita, Santelis, otros)
- **Sin imágenes locales** en ninguna carpeta del repositorio auditado

### Scripts y estilos

- **Patrón multi-archivo:** 6 OVAs (`index.html` + CSS + JS separados)
- **Patrón monolítico:** 8 OVAs (HTML con CSS/JS embebido)
- **Patrón inválido:** 1 OVA (página guardada de GitHub, ~3000 líneas, dependencias remotas de github.com)

---

## 4. Riesgos de integración

| Riesgo | Severidad | OVAs afectadas | Mitigación propuesta |
|--------|-----------|----------------|---------------------|
| Espacios y caracteres especiales en rutas (`OVA - Edwin`, `ova juan camilo`, `(1).html`, `ñ`) | **Alta** | 5+ | URL-encoding en rutas del portal (`%20`, `%C3%B1`) |
| Sensibilidad a mayúsculas en Linux (GitHub Pages) | **Media** | Thomas Galeano (`estilos.css` vs `Estilos.css`) | Duplicar archivo con nombre esperado sin tocar HTML |
| OVA David Chirinos = snapshot de GitHub | **Crítica** | 1 | Excluir; solicitar HTML real al autor |
| Footer con autor placeholder | **Baja** | Víctor Ortega | Portal usa nombre de carpeta; no alterar OVA |
| Autores no declarados en footer | **Baja** | Rivera, Meza, Angarita, Serrano, Suárez, Santelis | Atribución por nombre de carpeta en portal |
| iframe + `overflow: hidden` en Anderson Suárez | **Media** | 1 | Abrir externo; revisar scroll en visor |
| Cursor personalizado oculto en móvil (Santelis) | **Baja** | 1 | Uso en iframe no afecta portal |
| Dependencia de CDN (sin internet = sin fuentes/iconos) | **Media** | Todas | Aceptable para GitHub Pages con red |
| Temas oscuros/claros propios por OVA | **Baja** | Mayoría | Design system `shared/` + `USB_THEME_CHANGED` |

---

## 5. Dependencias externas (resumen)

| Recurso | Proveedor | Uso |
|---------|-----------|-----|
| Google Fonts | Google | Tipografía en todas las OVAs |
| Font Awesome 6.5 | cdnjs.cloudflare.com | Iconos (2 OVAs) |
| YouTube | google.com | Videos embebidos |
| GitHub assets | github.com | Solo OVA Chirinos (inválida) |

**No se detectaron:** npm, pip, backends API, bases de datos, WebSockets.

---

## 6. Compatibilidad con GitHub Pages

| Criterio | Estado | Observación |
|----------|--------|-------------|
| Contenido estático HTML/CSS/JS | ✅ | 14/15 OVAs |
| Sin build step obligatorio | ✅ | Despliegue directo |
| Rutas relativas en OVAs | ✅ | `href="styles.css"` etc. |
| Rutas con espacios | ⚠️ | Requiere encoding en portal |
| Case-sensitive (Linux) | ⚠️ | Thomas Galeano |
| `.nojekyll` | ⬜ Pendiente Fase 11 | Necesario si hay carpetas con `_` |
| Jekyll `_` folders | ✅ | Carpetas OVA no usan prefijo `_` problemático |
| CORS / APIs externas | ✅ | No hay APIs propias |
| iframe sandbox | ✅ | Compatible con `allow-scripts allow-same-origin` |

**Veredicto GitHub Pages:** **Compatible** para 14 OVAs con encoding de rutas y `.nojekyll` en raíz.

---

## 7. Recursos multimedia

- **Imágenes locales:** ninguna en `OVAS/`
- **Gráficos:** generados por CSS, Canvas y SVG inline
- **Audio/Video:** embebidos desde YouTube (externos)
- **Animaciones:** CSS keyframes y Canvas (Robinson Meza, Santelis, Galeano)

---

## 8. Conclusión de auditoría

El repositorio contiene **14 OVAs académicas funcionales** listas para integración por iframe, y **1 artefacto no válido** (David Chirinos). La arquitectura es homogénea en tecnología (HTML/CSS/JS estático) pero heterogénea en organización (monolíticas vs multi-archivo) y nomenclatura de carpetas.

La integración debe replicar el Portal de Compiladores sin alterar la lógica interna de las OVAs, aplicando únicamente:

1. Portal SPA con sidebar, dashboard y visor iframe
2. Design system en `shared/` para homogeneización visual opcional
3. Encoding de rutas para GitHub Pages
4. Exclusión documentada de OVA Chirinos hasta recibir versión real

---

*Auditoría realizada sin modificación de archivos en `OVAS/` (Fase 1).*
