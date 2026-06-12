/**
 * TGS OVA Theme Manager — Portal USB TGS
 * Eventos: TGS_THEME_CHANGED · USB_THEME_CHANGED (compat)
 */
const TGS_OVA_THEME = {
  STORAGE_KEY: 'theme',
  LIGHT_CLASS: 'tgs-ova-light',
  ROOT_CLASS: 'tgs-ova-root',
  EMBED_CLASS: 'tgs-ova-embedded',
  BODY_CLASS: 'tgs-ova-body',
  HEADER_ID: 'tgs-ova-usb-chrome',

  isEmbedded() {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  },

  getTheme() {
    return document.documentElement.classList.contains(this.LIGHT_CLASS) ? 'light' : 'dark';
  },

  apply(theme) {
    const root = document.documentElement;
    root.classList.add(this.ROOT_CLASS);
    if (theme === 'light') {
      root.classList.add(this.LIGHT_CLASS);
    } else {
      root.classList.remove(this.LIGHT_CLASS);
    }
    root.setAttribute('data-tgs-theme', theme === 'light' ? 'light' : 'dark');

    window.dispatchEvent(new CustomEvent('tgs-ova-theme-changed', {
      detail: { theme: this.getTheme() }
    }));
  },

  readStoredTheme() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* ignore */ }
    return 'dark';
  },

  setupPortalListeners() {
    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'TGS_THEME_CHANGED' && data.theme) {
        this.apply(data.theme);
        return;
      }
      if (data.type === 'USB_THEME_CHANGED' && data.theme) {
        this.apply(data.theme);
        return;
      }
      if (data.type === 'USB_PORTAL_CONFIG' && data.config?.theme) {
        this.apply(data.config.theme);
      }
    });
  },

  injectUsbHeader() {
    if (document.getElementById(this.HEADER_ID)) return;

    const title = document.querySelector('title')?.textContent?.replace(/\s*\|.*/, '') || 'OVA · TGS';
    const header = document.createElement('header');
    header.id = this.HEADER_ID;
    header.className = 'tgs-ova-usb-header';
    header.setAttribute('role', 'banner');
    header.innerHTML = `
      <div class="tgs-ova-usb-header__left">
        <div class="tgs-ova-usb-header__mark" aria-hidden="true">USB</div>
        <div class="tgs-ova-usb-header__title">${title}</div>
      </div>
      <div class="tgs-ova-usb-header__meta">
        <span>Universidad Simón Bolívar</span><br>
        <span>Programa de Ingeniería de Sistemas · Campus Cúcuta</span>
      </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  },

  tagButtons() {
    document.querySelectorAll('button, a.btn, a[class*="btn-"], .btn').forEach((el) => {
      if (el.classList.contains('tgs-btn-primary') || el.classList.contains('tgs-btn-secondary')) return;
      const cls = el.className || '';
      if (/btn-primary|btn-hero-primary|hero-cta|btn-card-primary/i.test(cls) || el.classList.contains('btn-primary')) {
        el.classList.add('tgs-btn-primary');
      } else if (/btn-secondary|btn-ghost|btn-outline|btn-ghost|btn-secondary/i.test(cls) || el.classList.contains('btn-outline') || el.classList.contains('btn-ghost')) {
        el.classList.add('tgs-btn-secondary');
      }
    });
  },

  init(options = {}) {
    const { listenPortal = true } = options;
    const root = document.documentElement;
    root.classList.add(this.ROOT_CLASS);

    if (this.isEmbedded()) {
      root.classList.add(this.EMBED_CLASS);
    }

    document.body.classList.add(this.BODY_CLASS);
    this.apply(this.readStoredTheme());

    if (listenPortal) this.setupPortalListeners();

    this.injectUsbHeader();
    this.tagButtons();

    document.addEventListener('DOMContentLoaded', () => this.tagButtons());
    window.addEventListener('load', () => this.tagButtons());
  }
};

if (typeof window !== 'undefined') {
  window.TGS_OVA_THEME = TGS_OVA_THEME;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TGS_OVA_THEME.init());
  } else {
    TGS_OVA_THEME.init();
  }
}
