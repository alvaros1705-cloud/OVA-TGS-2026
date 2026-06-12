/**
 * Portal Académico OVAS — Teoría General de Sistemas (TGS)
 * Router SPA, temas, búsqueda, visor iframe, Centro de Aprendizaje
 */
document.addEventListener('DOMContentLoaded', () => {

  const OVAS_CATALOG = [
    { id: 'definiciones-sistema', num: '01', title: 'Definiciones de Sistema', author: 'Brayan Andrey Casanova Flórez', theme: 'Fundamentos', desc: 'Recorrido conceptual sobre los fundamentos de la TGS: definiciones, autores clave y propiedades básicas del pensamiento sistémico.', path: 'OVAS/OVA_Def_Sistemas/index.html', badge: 'Fundamentos' },
    { id: 'origenes-principios', num: '02', title: 'Orígenes y Principios de la TGS', author: 'Cristian Miranda Zuluaga', theme: 'Fundamentos', desc: 'Historia, principios y bases epistemológicas de la Teoría General de Sistemas desde von Bertalanffy hasta aplicaciones modernas.', path: 'OVAS/OVA_TGS_CristianMiranda/OVA_TGS_CristianMiranda.html', badge: 'Fundamentos' },
    { id: 'conceptos-fundamentales', num: '03', title: 'Conceptos Fundamentales de la TGS', author: 'Víctor Ortega', theme: 'Fundamentos', desc: 'Explora sistema, entorno, subsistema, sinergia y retroalimentación como pilares del pensamiento sistémico aplicable a cualquier disciplina.', path: 'OVAS/OVA-VICTOR%20ORTEGA/index.html', badge: 'Fundamentos' },
    { id: 'enfoques-tgs', num: '04', title: 'Enfoques para el Estudio de la TGS', author: 'Jefersson Rivera', theme: 'Metodología', desc: 'Perspectivas empírica, epistemológica, pragmática y sistémica para abordar la complejidad de los sistemas en el mundo real.', path: 'OVAS/OVA-Jefersson_Rivera/index.html', badge: 'Metodología' },
    { id: 'enfoque-sistemico', num: '05', title: 'El Enfoque Sistémico', author: 'Juan Camilo Santelis', theme: 'Metodología', desc: 'Comprende la realidad como elementos interconectados que funcionan como un todo coherente y dinámico con ejercicios y juegos.', path: 'OVAS/ova%20juan%20camilo%20santelis/el_juegui%C3%B1o_mas_bambero_de_santelis.html', badge: 'Metodología' },
    { id: 'clasificacion-sistemas', num: '06', title: 'Clasificación y Características de los Sistemas', author: 'José Fernando Chávez Ramírez', theme: 'Tipos y Clasificación', desc: 'Tipos de sistemas, propiedades fundamentales y criterios de clasificación según naturaleza, estructura y comportamiento.', path: 'OVAS/OVA-Jose_ChavezRamirez/OVA_Clasificacion_Sistemas_ChavezRamirez%20(1).html', badge: 'Tipos' },
    { id: 'tipos-sistemas', num: '07', title: 'Tipos de Sistemas', author: 'Deivy Jesús Flórez Serna', theme: 'Tipos y Clasificación', desc: 'Sistemas abiertos, cerrados, físicos, biológicos, sociales y artificiales con ejemplos interactivos y evaluación.', path: 'OVAS/OVA_Deivy%20Florez/OVA_Tipos_de_Sistemas.html', badge: 'Tipos' },
    { id: 'propiedades-sistemas', num: '08', title: 'Propiedades de los Sistemas', author: 'Edwin Fernando Gutierrez Parra', theme: 'Propiedades', desc: 'Emergencia, equifinalidad, homeostasis, sinergia y retroalimentación explicadas con ejemplos, videos y juegos.', path: 'OVAS/OVA%20-%20Edwin%20Gutierrez/index.html', badge: 'Propiedades' },
    { id: 'homeostasis', num: '09', title: 'Homeostasis y Equilibrio en Sistemas', author: 'Thomas Alejandro Galeano Omaña', theme: 'Dinámica', desc: 'Mecanismos de autorregulación, set point, retroalimentación negativa y simulador interactivo de equilibrio dinámico.', path: 'OVAS/Ova-Thomas%20Galeano/index.html', badge: 'Dinámica' },
    { id: 'comportamientos', num: '10', title: 'Teoría de Comportamientos', author: 'Jesús Serrano', theme: 'Dinámica', desc: 'Comportamientos de sistemas, patrones dinámicos, adaptación y visualización interactiva de respuestas sistémicas.', path: 'OVAS/OVA-Jesus_Serrano/ova-comportamientos.html', badge: 'Dinámica' },
    { id: 'caos-sistemas', num: '11', title: 'Caos en los Sistemas', author: 'Robinson Meza', theme: 'Dinámica', desc: 'Teoría del caos, efecto mariposa, atractores extraños y fractales con simulaciones y ejercicios prácticos.', path: 'OVAS/OVA-Robinson_Meza/index.html', badge: 'Dinámica' },
    { id: 'cibernetica-organizacion', num: '12', title: 'Teoría de la Organización y Cibernética', author: 'Juan Angarita', theme: 'Cibernética', desc: 'Cibernética de primer y segundo orden, retroalimentación, modelo viable de Beer y organización como sistema.', path: 'OVAS/OVA-Juan_Angarita/ova-cibernetica-juan-angarita.html', badge: 'Cibernética' },
    { id: 'teoria-informacion', num: '13', title: 'Teoría de la Información', author: 'Anderson Suárez', theme: 'Cibernética', desc: 'Entropía, canal de comunicación, codificación y fundamentos de Shannon aplicados a sistemas de información.', path: 'OVAS/ova%20anderson%20suarez/teoria_informacion.html', badge: 'Cibernética' },
    { id: 'teoria-colas-juegos', num: '14', title: 'Teoría de Colas y Teoría de Juegos', author: 'Diana Janneth Umaña Bayona', theme: 'Aplicaciones', desc: 'Modelos de colas, estrategias de decisión y teoría de juegos como herramientas sistémicas para sistemas reales.', path: 'OVAS/OVA_Nana/index.html', badge: 'Aplicaciones' }
  ];

  const OVAS_ROUTES = Object.fromEntries(
    OVAS_CATALOG.map(o => [o.id, { title: o.title, author: `Desarrollado por ${o.author}`, path: o.path }])
  );

  const sidebar = document.getElementById('sidebar');
  const sidebarClose = document.getElementById('sidebar-close');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const hamburgerToggle = document.getElementById('hamburger-toggle');
  const searchInput = document.getElementById('ova-search');
  const dashboardView = document.getElementById('dashboard-view');
  const ovaViewerView = document.getElementById('ova-viewer-view');
  const ovaIframe = document.getElementById('ova-iframe');
  const iframeLoader = document.getElementById('iframe-loader');
  const loaderStatus = document.getElementById('loader-status');
  const activeOvaTitle = document.getElementById('active-ova-title');
  const activeOvaAuthor = document.getElementById('active-ova-author');
  const btnReloadOva = document.getElementById('btn-reload-ova');
  const btnOpenExternal = document.getElementById('btn-open-external');
  const iframeWrapper = document.querySelector('.iframe-wrapper');
  const themeToggle = document.getElementById('theme-toggle');
  const btnExplore = document.getElementById('btn-explore');
  const btnAboutProject = document.getElementById('btn-about-project');
  const projectAboutModal = document.getElementById('project-about-modal');
  const closeDetailsButtons = document.querySelectorAll('.close-details-btn');
  const yearSpans = document.querySelectorAll('#current-year');
  const portalFooter = document.querySelector('.portal-footer');

  let navLinks = [];
  let ovaCards = [];

  function setAppView(mode) {
    const isOva = mode === 'ova';
    document.body.classList.toggle('ova-mode', isOva);
    if (portalFooter) {
      portalFooter.hidden = isOva;
      portalFooter.setAttribute('aria-hidden', isOva ? 'true' : 'false');
    }
  }

  function buildCatalogUI() {
    const navList = document.getElementById('ova-nav-list');
    const grid = document.getElementById('ovas-grid');
    if (!navList || !grid) return;

    const themes = [...new Set(OVAS_CATALOG.map(o => o.theme))];

    navList.innerHTML = themes.map(theme => {
      const items = OVAS_CATALOG.filter(o => o.theme === theme);
      return `
        <li class="nav-divider">${theme}</li>
        ${items.map(o => `
          <li>
            <a href="#/ova/${o.id}" class="nav-item" id="nav-ova-${o.id}">
              <span class="ova-num">${o.num}</span>
              <div class="ova-info">
                <span class="ova-title">${o.title}</span>
                <span class="ova-author">${o.author}</span>
              </div>
            </a>
          </li>
        `).join('')}
      `;
    }).join('');

    grid.innerHTML = OVAS_CATALOG.map(o => `
      <article class="ova-card" data-title="${o.title.toLowerCase()} ${o.author.toLowerCase()} ${o.theme.toLowerCase()} ${o.badge.toLowerCase()}" id="card-ova-${o.id}">
        <div class="card-badge">${o.badge}</div>
        <div class="card-body">
          <span class="card-number">${o.num}</span>
          <h3 class="card-title">${o.title}</h3>
          <p class="card-desc">${o.desc}</p>
          <div class="card-meta">
            <div class="card-author-group">
              <span class="meta-label">Autor:</span>
              <span class="card-author">${o.author}</span>
            </div>
            <span class="card-badge-static">Cliente Estático</span>
          </div>
        </div>
        <div class="card-actions-row">
          <a href="#/ova/${o.id}" class="btn-card-primary">Abrir OVA</a>
        </div>
      </article>
    `).join('');

    navLinks = document.querySelectorAll('.nav-item');
    ovaCards = document.querySelectorAll('.ova-card');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1200) closeSidebar();
      });
    });
  }

  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => span.textContent = currentYear);

  function openSidebar() {
    sidebar?.classList.add('open');
    sidebarOverlay?.classList.add('visible');
    sidebar?.setAttribute('aria-hidden', 'false');
    sidebarOverlay?.setAttribute('aria-hidden', 'false');
  }

  function closeSidebar() {
    sidebar?.classList.remove('open');
    sidebarOverlay?.classList.remove('visible');
    sidebar?.setAttribute('aria-hidden', 'true');
    sidebarOverlay?.setAttribute('aria-hidden', 'true');
  }

  hamburgerToggle?.addEventListener('click', openSidebar);
  sidebarClose?.addEventListener('click', closeSidebar);
  sidebarOverlay?.addEventListener('click', closeSidebar);

  btnExplore?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('ovas-grid-anchor')?.scrollIntoView({ behavior: 'smooth' });
  });

  btnAboutProject?.addEventListener('click', () => projectAboutModal?.showModal());

  closeDetailsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-close');
      document.getElementById(id)?.close();
    });
  });

  const loaderPhrases = [
    'Cargando modelo sistémico...',
    'Analizando retroalimentación...',
    'Evaluando homeostasis del sistema...',
    'Mapeando subsistemas interconectados...',
    'Simulando dinámica de entorno...',
    'Procesando cibernética de segundo orden...',
    'Inicializando objeto virtual de aprendizaje...'
  ];

  let loaderInterval = null;

  function showLoader() {
    if (!iframeLoader) return;
    iframeLoader.classList.remove('hidden');
    let idx = 0;
    if (loaderStatus) loaderStatus.textContent = loaderPhrases[0];
    if (loaderInterval) clearInterval(loaderInterval);
    loaderInterval = setInterval(() => {
      idx = (idx + 1) % loaderPhrases.length;
      if (loaderStatus) loaderStatus.textContent = loaderPhrases[idx];
    }, 1200);
  }

  function hideLoader() {
    iframeLoader?.classList.add('hidden');
    if (loaderInterval) { clearInterval(loaderInterval); loaderInterval = null; }
  }

  function handleRoute() {
    const hash = window.location.hash || '#/';
    navLinks.forEach(link => link.classList.remove('active'));

    if (hash === '#/' || hash === '#') {
      setAppView('dashboard');
      if (dashboardView) dashboardView.style.display = 'block';
      if (ovaViewerView) ovaViewerView.style.display = 'none';
      if (ovaIframe) ovaIframe.src = 'about:blank';
      document.getElementById('nav-home')?.classList.add('active');
      document.title = 'Portal Académico OVAS - Teoría General de Sistemas | USB';
    } else if (hash.startsWith('#/ova/')) {
      const ovaName = hash.replace('#/ova/', '');
      const ova = OVAS_ROUTES[ovaName];
      if (ova && dashboardView && ovaViewerView && ovaIframe) {
        setAppView('ova');
        dashboardView.style.display = 'none';
        ovaViewerView.style.display = 'flex';
        if (activeOvaTitle) activeOvaTitle.textContent = ova.title;
        if (activeOvaAuthor) activeOvaAuthor.textContent = ova.author;
        if (btnOpenExternal) btnOpenExternal.href = decodeURIComponent(ova.path);
        showLoader();
        ovaIframe.src = decodeURIComponent(ova.path);
        document.querySelector(`.nav-item[href="${hash}"]`)?.classList.add('active');
        document.title = `${ova.title} | Portal OVAS TGS USB`;
        syncThemeToIframe();
      } else {
        window.location.hash = '#/';
      }
    }
  }

  window.addEventListener('hashchange', handleRoute);

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    ovaCards.forEach(card => {
      const titleText = card.getAttribute('data-title') || '';
      card.classList.toggle('filtered', !titleText.toLowerCase().includes(query));
    });
    document.querySelectorAll('#ova-nav-list .nav-item').forEach(link => {
      const text = link.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      link.closest('li').style.display = text.includes(query) ? '' : 'none';
    });
  });

  ovaIframe?.addEventListener('load', hideLoader);

  btnReloadOva?.addEventListener('click', () => {
    showLoader();
    try { ovaIframe.contentWindow.location.reload(true); } catch { ovaIframe.src = ovaIframe.src; }
  });

  function injectFullscreenButton() {
    const controls = document.querySelector('.viewer-controls');
    if (!controls || document.getElementById('btn-fullscreen-ova')) return;
    const fsBtn = document.createElement('button');
    fsBtn.className = 'btn-control';
    fsBtn.id = 'btn-fullscreen-ova';
    fsBtn.setAttribute('aria-label', 'Pantalla completa');
    fsBtn.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg><span>Pantalla Completa</span>`;
    controls.insertBefore(fsBtn, btnOpenExternal);
    fsBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        (iframeWrapper || ovaIframe).requestFullscreen?.().catch(() => ovaIframe.requestFullscreen?.());
      } else {
        document.exitFullscreen();
      }
    });
  }

  injectFullscreenButton();

  function applyPortalTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-theme', isLight);
    document.documentElement.setAttribute('data-portal-theme', theme);
    localStorage.setItem('theme', theme);
    syncThemeToIframe();
  }

  function syncThemeToIframe() {
    if (!ovaIframe || ovaIframe.src === 'about:blank') return;
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    try {
        ovaIframe.contentWindow.postMessage({ type: 'TGS_THEME_CHANGED', theme }, '*');
        ovaIframe.contentWindow.postMessage({ type: 'USB_THEME_CHANGED', theme }, '*');
    } catch { /* sandbox */ }
  }

  function initTheme() {
    applyPortalTheme(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');
  }

  themeToggle?.addEventListener('click', () => {
    applyPortalTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light');
  });

  const settingsDialog = document.getElementById('settings-dialog');
  document.getElementById('open-settings')?.addEventListener('click', () => settingsDialog?.showModal());
  document.getElementById('close-settings')?.addEventListener('click', () => settingsDialog?.close());

  buildCatalogUI();
  initTheme();
  handleRoute();

  if (window.LearningHub?.init) LearningHub.init();
});
