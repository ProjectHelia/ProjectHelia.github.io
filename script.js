/* ═══════════════════════════════════════════════════════════════
   PROJECT HELIA — script.js
   Countdown · Navbar · Carousels · Mission tabs · Stats · Reveal
   ══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCountdown();
  initMissionTabs();
  initSubsectionNavs();
  initCarousels();
  initStatsCounter();
  initScrollReveal();
  initAltitudeAnimation();
});

/* ─────────────────────────────────────────────────────────────
   NAVBAR — background on scroll
   ─────────────────────────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─────────────────────────────────────────────────────────────
   COUNTDOWN — T- to 15 Oct 2026 08:00 UTC
   ─────────────────────────────────────────────────────────── */
function initCountdown() {
  const display = document.getElementById('countdown-display');
  if (!display) return;

  const launch = new Date('2026-10-15T08:00:00Z').getTime();

  function pad(n, w = 2) {
    return String(Math.floor(n)).padStart(w, '0');
  }

  function tick() {
    const now  = Date.now();
    const diff = launch - now;

    if (diff <= 0) {
      display.textContent = '00d 00h 00m 00s';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);

    display.textContent = `${pad(d, 3)}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
  }

  tick();
  setInterval(tick, 1000);
}

/* ─────────────────────────────────────────────────────────────
   MISSION TABS
   ─────────────────────────────────────────────────────────── */
function initMissionTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels  = document.querySelectorAll('.tab-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`tab-${target}`);
      if (panel) {
        panel.classList.add('active');
        // Trigger altitude path animation when flight tab opens
        if (target === 'flight') {
          requestAnimationFrame(() => {
            const path = document.getElementById('altitude-path');
            if (path) path.classList.add('drawn');
          });
        }
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   SUBSECTION NAVS (Science / Tech)
   ─────────────────────────────────────────────────────────── */
function initSubsectionNavs() {
  // Each section has its own subsection-nav + subsection panels
  document.querySelectorAll('#the-science, #the-tech').forEach(section => {
    const nav        = section.querySelector('.subsection-nav');
    const buttons    = nav ? nav.querySelectorAll('.subsection-btn') : [];
    const subsections = section.querySelectorAll('.subsection');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.subsection;

        buttons.forEach(b => b.classList.remove('active'));
        subsections.forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        const sub = section.querySelector(`#sub-${target}`);
        if (sub) sub.classList.add('active');
      });
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   CAROUSELS
   ─────────────────────────────────────────────────────────── */
function initCarousels() {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const slides  = carousel.querySelectorAll('.carousel-slide');
    const buttons = carousel.querySelectorAll('.c-btn');

    function goTo(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      buttons.forEach((b, i) => b.classList.toggle('active', i === index));
    }

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => goTo(i));
    });

    // Optional: keyboard arrow support when focused within carousel
    carousel.addEventListener('keydown', e => {
      const activeSlide = [...slides].findIndex(s => s.classList.contains('active'));
      if (e.key === 'ArrowRight' && activeSlide < slides.length - 1) goTo(activeSlide + 1);
      if (e.key === 'ArrowLeft'  && activeSlide > 0)                  goTo(activeSlide - 1);
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   STATS COUNTER — counts up when scrolled into view
   ─────────────────────────────────────────────────────────── */
function initStatsCounter() {
  const nums = document.querySelectorAll('.stat-num');
  if (!nums.length) return;

  function animateCount(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(n => observer.observe(n));
}

/* ─────────────────────────────────────────────────────────────
   SCROLL REVEAL — fade + rise on elements with .reveal
   ─────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────────
   ALTITUDE SVG — animate path when The Flight tab is opened
   Also auto-draw if it's visible in viewport (in case already open)
   ─────────────────────────────────────────────────────────── */
function initAltitudeAnimation() {
  const path = document.getElementById('altitude-path');
  if (!path) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        path.classList.add('drawn');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(path);
}
