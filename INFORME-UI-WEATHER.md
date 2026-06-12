# INFORME — FASE UI-WEATHER

**Portal Integrado de OVAs — Teoría General de Sistemas**  
**Universidad Simón Bolívar · Campus Cúcuta**

---

## Objetivo

Incorporar en el encabezado institucional fecha, hora en tiempo real y clima local, sin alterar logo, sidebar, dashboard, router, OVAs ni sistema de temas.

---

## Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `index.html` | Bloque `.header-weather` entre badge institucional y botón de tema; script `js/header-weather.js` |
| `style.css` | Altura del header (`--portal-header-h: 80px`), estilos del widget, responsive y sincronización del `top` del sidebar |
| `js/header-weather.js` | **Nuevo** — reloj, geolocalización y consumo de Open-Meteo |

**Sin cambios:** `script.js`, OVAs, `shared/`, router, dashboard, Centro de Aprendizaje.

---

## API climática utilizada

**[Open-Meteo](https://open-meteo.com)** — gratuita, sin API key.

1. **Geolocalización del navegador**  
   `navigator.geolocation.getCurrentPosition()`  
   Timeout: 12 s · `maximumAge`: 5 min.

2. **Geocodificación inversa (ciudad)**  
   `GET https://geocoding-api.open-meteo.com/v1/reverse?latitude={lat}&longitude={lon}&language=es&count=1`

3. **Pronóstico actual (temperatura + código WMO)**  
   `GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,weather_code&timezone=auto`

### Iconos según `weather_code` (WMO)

| Código | Icono | Condición |
|--------|-------|-----------|
| 0 | ☀️ | Soleado |
| 1–2 | 🌤 | Parcialmente nublado |
| 3 | ☁️ | Nublado |
| 45, 48 | 🌫 | Niebla |
| 51–57 | 🌦 | Llovizna |
| 61–67 | 🌧 | Lluvia |
| 80–82 | 🌦 | Chubascos |
| 95+ | ⛈ | Tormenta |
| 71–77 | ❄️ | Nieve |

---

## Estructura HTML añadida

```html
<div class="header-weather" id="header-weather" aria-label="Fecha, hora y clima" aria-live="polite">
  <div class="header-weather__row header-weather__date">
    <span class="header-weather__label" aria-hidden="true">📅</span>
    <time id="header-date" datetime="">—</time>
  </div>
  <div class="header-weather__row header-weather__time">
    <span class="header-weather__label" aria-hidden="true">🕒</span>
    <time id="header-clock">00:00:00</time>
  </div>
  <div class="header-weather__row header-weather__climate" id="header-climate-row">
    <span class="header-weather__wx-icon" id="header-wx-icon" aria-hidden="true">🌤</span>
    <span id="header-climate-text">Obteniendo clima…</span>
  </div>
</div>
```

**Ubicación:** dentro de `.header-right`, entre `.institutional-badge` y `#theme-toggle`.

---

## Comportamiento

### Fecha
- Formato largo en español: *Jueves, 11 de junio de 2026* (`Intl.DateTimeFormat`, locale `es-CO`).
- Atributo `datetime` en ISO para accesibilidad.

### Hora
- Formato `HH:MM:SS` con fuente monoespaciada y cifras tabulares.
- Actualización cada 1 s mediante `setInterval`; solo se modifica `textContent` (sin parpadeos).

### Clima
- Tras obtener coordenadas: ciudad + temperatura + icono.
- Ejemplo desktop: `Cúcuta 31°C` (detalle de condición en `title` del elemento).

### Fallo de geolocalización
- Mensaje: `📍 Ubicación no disponible`.
- Sin datos de temperatura ni condición.
- La hora y la fecha siguen activas.

### Animaciones
- Entrada suave del bloque (opacidad + `translateY` 0.45 s).
- Transiciones de opacidad en fila climática.
- Sin animaciones invasivas.

---

## Comportamiento responsive

| Breakpoint | Contenido visible |
|------------|-------------------|
| **Desktop** (>1023px) | Fecha + hora + clima completo |
| **Tablet** (768–1023px) | Hora + clima (fecha oculta) |
| **Móvil** (≤767px) | Solo icono meteorológico + temperatura (`data-mobile`, ej. `31°C`) |

En móvil, si la geolocalización falla, se muestra el texto de ubicación no disponible (sin temperatura).

---

## Tema claro / oscuro

El header mantiene el gradiente azul institucional en ambos modos (comportamiento previo del portal). El widget usa las variables locales del header (`--text-primary`, `--text-secondary`) para texto claro legible sobre fondo azul. No interfiere con el toggle `#theme-toggle` ni con `localStorage`.

---

## Ajuste de altura del header

- Padding vertical: `12px` → `16px` (+8 px total, dentro del límite 8–16 px).
- `min-height: 80px` vía `--portal-header-h`.
- Sidebar y media queries actualizados para usar `top: var(--portal-header-h)`.

---

## Verificación sugerida

1. Abrir el portal y aceptar permiso de ubicación → ciudad, °C e icono visibles.
2. Denegar ubicación → `Ubicación no disponible`, reloj activo.
3. Redimensionar ventana → comprobar los tres breakpoints.
4. Alternar tema claro/oscuro → header azul y widget legibles.

---

*Fase UI-WEATHER completada — Junio 2026*
