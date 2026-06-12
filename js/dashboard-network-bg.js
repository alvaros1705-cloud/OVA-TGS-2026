/**
 * TGS-UI-ANIM — Fondo tecnológico del Dashboard
 * Capa decorativa: nodos, conexiones y partículas (sin tocar lógica del portal)
 */
const DashboardNetworkBg = (() => {
  const MAX_LINK_DIST = 150;
  const LINK_DIST_MOBILE = 110;
  let canvas, ctx, nodes = [], particles = [], flows = [];
  let animId = null;
  let w = 0, h = 0, dpr = 1;
  let themeLight = false;
  let time = 0;

  function nodeCount() {
    const vw = window.innerWidth;
    if (vw < 480) return 40;
    if (vw < 768) return 52;
    if (vw < 1024) return 65;
    return 80;
  }

  function linkDist() {
    return window.innerWidth < 768 ? LINK_DIST_MOBILE : MAX_LINK_DIST;
  }

  function palette() {
    if (themeLight) {
      return {
        fade: 'rgba(248, 250, 252, 0.12)',
        node: 'rgba(0, 104, 55, 0.45)',
        nodeCore: 'rgba(0, 168, 150, 0.6)',
        nodeGlow: 'rgba(100, 116, 139, 0.18)',
        line: 'rgba(0, 104, 55, 0.12)',
        lineAccent: 'rgba(59, 130, 246, 0.2)',
        particle: 'rgba(100, 116, 139, 0.28)',
        flow: 'rgba(0, 168, 150, 0.45)'
      };
    }
    return {
      fade: 'rgba(11, 13, 25, 0.1)',
      node: 'rgba(0, 168, 150, 0.55)',
      nodeCore: 'rgba(120, 220, 210, 0.75)',
      nodeGlow: 'rgba(64, 156, 255, 0.2)',
      line: 'rgba(0, 168, 150, 0.1)',
      lineAccent: 'rgba(0, 168, 150, 0.28)',
      particle: 'rgba(100, 200, 255, 0.28)',
      flow: 'rgba(0, 200, 170, 0.5)'
    };
  }

  function isDashboardVisible() {
    const el = document.getElementById('dashboard-view');
    if (!el) return false;
    return el.style.display !== 'none' && getComputedStyle(el).display !== 'none';
  }

  function readTheme() {
    themeLight = document.body.classList.contains('light-theme');
  }

  function resize() {
    if (!canvas) return;
    const parent = document.getElementById('main-content');
    if (!parent) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, parent.clientWidth);
    h = Math.max(1, parent.scrollHeight);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seedNodes() {
    const n = nodeCount();
    nodes = [];
    for (let i = 0; i < n; i++) {
      const speed = 0.14 + Math.random() * 0.18;
      const angle = Math.random() * Math.PI * 2;
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 1.4 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        drift: 0.0015 + Math.random() * 0.002
      });
    }

    const pc = Math.max(8, Math.floor(n * 0.22));
    particles = [];
    for (let i = 0; i < pc; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 0.5 + Math.random() * 0.8,
        a: 0.12 + Math.random() * 0.2
      });
    }

    flows = [];
  }

  function wrapNode(node) {
    const pad = 24;
    if (node.x < -pad) node.x = w + pad;
    else if (node.x > w + pad) node.x = -pad;
    if (node.y < -pad) node.y = h + pad;
    else if (node.y > h + pad) node.y = -pad;
  }

  function maybeSpawnFlow(a, b) {
    if (Math.random() > 0.0008) return;
    flows.push({
      ax: a.x, ay: a.y, bx: b.x, by: b.y,
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      life: 1
    });
    if (flows.length > 24) flows.shift();
  }

  function draw() {
    if (!ctx || !canvas) return;
    const pal = palette();
    const maxDist = linkDist();
    const maxDistSq = maxDist * maxDist;

    ctx.fillStyle = pal.fade;
    ctx.fillRect(0, 0, w, h);

    nodes.forEach((node) => {
      node.vx += Math.sin(time * 0.0004 + node.phase) * node.drift;
      node.vy += Math.cos(time * 0.00045 + node.phase) * node.drift;
      const spd = Math.hypot(node.vx, node.vy);
      if (spd > 0.32) { node.vx *= 0.32 / spd; node.vy *= 0.32 / spd; }
      node.x += node.vx;
      node.y += node.vy;
      wrapNode(node);
    });

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = dx * dx + dy * dy;
        if (distSq > maxDistSq) continue;

        const dist = Math.sqrt(distSq);
        const fade = 0.35 + 0.65 * Math.sin(time * 0.001 + a.phase + b.phase);
        const proximity = 1 - dist / maxDist;
        const alpha = Math.min(0.55, proximity * fade * (themeLight ? 0.38 : 0.52));

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = proximity > 0.5 ? pal.lineAccent : pal.line;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 0.4 + proximity * 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;

        maybeSpawnFlow(a, b);
      }
    }

    flows.forEach((f) => {
      f.t += f.speed;
      f.life -= 0.002;
      if (f.t > 1 || f.life <= 0) return;
      const x = f.ax + (f.bx - f.ax) * f.t;
      const y = f.ay + (f.by - f.ay) * f.t;
      ctx.beginPath();
      ctx.arc(x, y, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = pal.flow;
      ctx.globalAlpha = f.life * 0.45;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    flows = flows.filter((f) => f.t <= 1 && f.life > 0);

    particles.forEach((p) => {
      const tw = 0.7 + 0.3 * Math.sin(time * 0.0015 + p.x * 0.008);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * tw, 0, Math.PI * 2);
      ctx.fillStyle = pal.particle;
      ctx.globalAlpha = p.a * tw;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    nodes.forEach((node) => {
      const pulse = 0.88 + 0.12 * Math.sin(time * 0.0015 + node.phase);
      const r = node.r * pulse;

      ctx.beginPath();
      ctx.arc(node.x, node.y, r * 2.8, 0, Math.PI * 2);
      ctx.fillStyle = pal.nodeGlow;
      ctx.globalAlpha = 0.25;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = pal.node;
      ctx.globalAlpha = 0.7;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, r * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = pal.nodeCore;
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
  }

  function setCanvasVisible(visible) {
    if (!canvas) return;
    canvas.style.opacity = visible ? '1' : '0';
    canvas.style.visibility = visible ? 'visible' : 'hidden';
  }

  function loop(ts) {
    animId = null;
    if (!isDashboardVisible()) {
      setCanvasVisible(false);
      return;
    }
    setCanvasVisible(true);
    time = ts;
    draw();
    animId = requestAnimationFrame(loop);
  }

  function start() {
    if (animId || !canvas) return;
    if (!isDashboardVisible()) return;
    resize();
    animId = requestAnimationFrame(loop);
  }

  function stop() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    setCanvasVisible(false);
  }

  function init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    canvas = document.getElementById('dashboard-network-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d', { alpha: true });
    readTheme();
    resize();
    seedNodes();

    window.addEventListener('resize', () => {
      resize();
      seedNodes();
    });

    window.addEventListener('scroll', () => {
      if (!isDashboardVisible()) return;
      resize();
    }, { passive: true });

    const themeObs = new MutationObserver(readTheme);
    themeObs.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    const dash = document.getElementById('dashboard-view');
    const main = document.getElementById('main-content');
    if (main && typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => resize());
      ro.observe(main);
      if (dash) ro.observe(dash);
    }

    function syncWithDashboard() {
      requestAnimationFrame(() => {
        if (isDashboardVisible()) {
          resize();
          seedNodes();
          start();
        } else {
          stop();
        }
      });
    }

    window.addEventListener('hashchange', syncWithDashboard);

    if (dash && typeof MutationObserver !== 'undefined') {
      const visObs = new MutationObserver(syncWithDashboard);
      visObs.observe(dash, { attributes: true, attributeFilter: ['style'] });
    }

    start();
  }

  return { init, start, stop, nodeCount };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => DashboardNetworkBg.init());
} else {
  DashboardNetworkBg.init();
}
