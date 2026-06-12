# Informe Final de Validación — Fase 12
## Portal Integrado Teoría General de Sistemas (TGS)

**Fecha:** 11 de junio de 2026  
**Universidad Simón Bolívar · Campus Cúcuta · Ingeniería de Sistemas**

---

## Resumen ejecutivo

Se construyó el **Portal Integrado de OVAs TGS** como hermana gemela del Portal de Compiladores, integrando 14 objetos virtuales sin modificar su lógica académica interna.

---

## OVAs detectadas vs integradas

| Métrica | Cantidad |
|---------|----------|
| Carpetas en `OVAS/` | 15 |
| OVAs funcionales detectadas | 14 |
| OVAs integradas en portal | **14** |
| OVAs excluidas | 1 (David Chirinos — snapshot GitHub) |

### Listado integrado

1. Definiciones de Sistema — Casanova Flórez  
2. Orígenes y Principios — Miranda Zuluaga  
3. Conceptos Fundamentales — Ortega  
4. Enfoques de la TGS — Rivera  
5. Enfoque Sistémico — Santelis  
6. Clasificación de Sistemas — Chávez Ramírez  
7. Tipos de Sistemas — Flórez Serna  
8. Propiedades de los Sistemas — Gutierrez Parra  
9. Homeostasis y Equilibrio — Galeano Omaña  
10. Teoría de Comportamientos — Serrano  
11. Caos en los Sistemas — Meza  
12. Cibernética y Organización — Angarita  
13. Teoría de la Información — Suárez  
14. Teoría de Colas y Juegos — Umaña Bayona  

---

## Problemas encontrados

| # | Problema | Impacto |
|---|----------|---------|
| 1 | `OVA-David_Chirinos` es HTML guardado de GitHub, no una OVA | No integrable |
| 2 | Rutas con espacios, paréntesis y `ñ` | Rotas en Linux sin encoding |
| 3 | `Ova-Thomas Galeano`: `estilos.css` vs `Estilos.css` | CSS no carga en GitHub Pages |
| 4 | Víctor Ortega: placeholder `[Nombre del Docente]` en footer interno | Solo cosmético en OVA |
| 5 | Sin imágenes locales; dependencia CDN (fuentes, Font Awesome) | Requiere conexión a internet |
| 6 | OVAs con estilos/temas propios muy distintos | Heterogeneidad visual en iframe |

---

## Correcciones realizadas (solo integración, sin lógica académica)

| Corrección | Archivo / ámbito |
|------------|------------------|
| Portal SPA completo (header, sidebar, dashboard, visor) | `index.html`, `script.js`, `style.css` |
| Rutas URL-encoded para GitHub Pages | `script.js` |
| Duplicado `estilos.css` desde `Estilos.css` (case fix) | `OVAS/Ova-Thomas Galeano/estilos.css` *(copia, sin editar HTML)* |
| Design system USB | `shared/usb-ova-tokens.css`, `usb-ova-components.css`, `usb-ova-theme.js` |
| `.nojekyll` en raíz | `.nojekyll` |
| Logos institucionales | `assets/img/` (desde portal Compiladores) |
| Centro de Aprendizaje TGS | `js/learning-data.js`, `js/learning-hub.js` |

**No se modificó:** lógica de quizzes, simuladores, contenido teórico ni autores dentro de las OVAs.

---

## Estado GitHub Pages

| Requisito | Estado |
|-----------|--------|
| `.nojekyll` | ✅ Creado |
| Rutas relativas en portal | ✅ `style.css`, `script.js`, `OVAS/...` |
| Encoding de rutas especiales | ✅ En `script.js` |
| Sin backends requeridos | ✅ 100% estático |
| Assets referenciados | ✅ `assets/img/logo-*.png` |
| iframe sandbox | ✅ `allow-scripts allow-same-origin allow-forms allow-popups` |

**Listo para publicación** en rama `gh-pages` o carpeta `/docs` de GitHub Pages.

---

## Estado tema claro / oscuro

| Componente | Estado |
|------------|--------|
| Toggle en header del portal | ✅ |
| Persistencia `localStorage` clave `theme` | ✅ |
| Evento `USB_THEME_CHANGED` vía `postMessage` al iframe | ✅ |
| `shared/usb-ova-theme.js` para OVAs | ✅ Disponible |
| OVAs existentes reaccionan automáticamente | ⚠️ Requiere incluir script en cada OVA (opcional, sin alterar lógica) |

El portal sincroniza tema al cargar y al cambiar. Las OVAs actuales mantienen su tema propio hasta que el autor agregue el design system de forma no invasiva.

---

## Estado Centro de Aprendizaje

| Módulo | Estado | Detalle |
|--------|--------|---------|
| Guía de las OVAs | ✅ | 5 tabs con acordeones académicos |
| Ejemplos resueltos | ✅ | 10 casos comentados TGS |
| Quiz interactivo | ✅ | 20 preguntas aleatorias de pool de 24 |
| Detecta el error | ✅ | 5 casos con retroalimentación |
| Construye el sistema | ✅ | 2 escenarios de armado |
| Desafíos TGS | ✅ | 5 niveles × 3 preguntas |
| Ahorcado | ✅ | 12 palabras TGS especificadas |
| Sopa de letras | ✅ | 15 conceptos, cuadrícula 12×12 |
| Apareamiento | ✅ | 10 pares concepto ↔ definición |
| Progreso en localStorage | ✅ | `usb-tgs-learning-progress` |

---

## Arquitectura del portal (Fases 2–11)

```
OVA-TGS/
├── index.html              # Portal principal
├── script.js               # Router SPA, tema, búsqueda, visor
├── style.css               # Design (gemelo Compiladores)
├── .nojekyll
├── assets/img/             # Logos USB
├── shared/                 # Design system OVAs
│   ├── usb-ova-tokens.css
│   ├── usb-ova-components.css
│   └── usb-ova-theme.js
├── js/
│   ├── learning-data.js    # Contenido académico TGS
│   └── learning-hub.js     # Centro de Aprendizaje
└── OVAS/                   # OVAs originales (sin lógica alterada)
```

### Funcionalidades del visor (Fase 6)

- ✅ Volver al dashboard  
- ✅ Recargar OVA  
- ✅ Pantalla completa  
- ✅ Abrir externo  
- ✅ Loader institucional con frases TGS  

### Accesibilidad (Fase 10)

- ✅ Responsive: sidebar overlay móvil, grid adaptable, modales scrollables  
- ✅ Desktop / tablet / móvil (breakpoints heredados del portal Compiladores)  
- ✅ `aria-label`, `aria-hidden`, navegación por teclado en controles principales  

---

## Recomendaciones post-entrega

1. **David Chirinos:** solicitar el HTML real de su OVA y agregarlo al catálogo.  
2. **Víctor Ortega:** completar el placeholder de autor en su footer (decisión del autor).  
3. **Design system:** incluir opcionalmente en OVAs futuras las hojas `shared/` para sincronía visual con el portal.  
4. **Prueba en GitHub Pages:** desplegar y verificar las 5 rutas con espacios/caracteres especiales.  

---

## Veredicto final

| Área | Resultado |
|------|-----------|
| Integración OVAs | ✅ 14/14 funcionales |
| Portal gemelo Compiladores | ✅ |
| Centro de Aprendizaje | ✅ Completo |
| GitHub Pages | ✅ Preparado |
| Tema claro/oscuro portal | ✅ Operativo |
| Restricciones absolutas respetadas | ✅ |

**Estado del proyecto: LISTO PARA PUBLICACIÓN INSTITUCIONAL**

---

*Docente asesor: Msc. Álvaro Salamanca Landínez · Universidad Simón Bolívar*
