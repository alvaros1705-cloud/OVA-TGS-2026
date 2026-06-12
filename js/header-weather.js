/**
 * UI-WEATHER — Fecha y hora en el header institucional
 */
const HeaderWeather = (() => {
  let clockTimer = null;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function formatClock(d) {
    let h = d.getHours();
    const ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    if (h === 0) h = 12;
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    if (mobile) {
      return `${h}:${pad(d.getMinutes())} ${ampm}`;
    }
    return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${ampm}`;
  }

  function formatDateLong(d) {
    return new Intl.DateTimeFormat('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d);
  }

  function formatDateCompact(d) {
    return new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(d);
  }

  function tickClock() {
    const now = new Date();
    const clock = document.getElementById('header-clock');
    const dateEl = document.getElementById('header-date');
    if (clock) clock.textContent = formatClock(now);
    if (dateEl) {
      const iso = now.toISOString().split('T')[0];
      dateEl.setAttribute('datetime', iso);
      dateEl.textContent = formatDateLong(now);
      dateEl.setAttribute('data-compact', formatDateCompact(now));
    }
  }

  function startClock() {
    tickClock();
    if (clockTimer) clearInterval(clockTimer);
    clockTimer = setInterval(tickClock, 1000);
  }

  function init() {
    const widget = document.getElementById('header-weather');
    if (!widget) return;
    widget.classList.add('is-ready');
    startClock();
  }

  return { init };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => HeaderWeather.init());
} else {
  HeaderWeather.init();
}
