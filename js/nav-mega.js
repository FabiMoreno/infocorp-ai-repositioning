/* ═══════════════════════════════════════════════════════════════════
   NAV MEGA — global navigation logic
   Hover-to-open dropdowns on desktop, accordion on mobile,
   active state detection, click-outside dismiss.
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);
  function init() {
    const nav   = document.querySelector('#nav-mega') || document.querySelector('#nav');
    if (!nav) return;
    const bar   = nav.querySelector('.nm-bar');
    if (!bar) return;
    const items = nav.querySelectorAll('.nm-item.has-dropdown');
    const burger = nav.querySelector('.nm-burger');

    const isMobile = () => window.matchMedia('(max-width: 920px)').matches;
    let openTimeout, closeTimeout;

    function closeAll(except) {
      items.forEach(it => { if (it !== except) it.classList.remove('is-open'); });
    }
    function openItem(it) {
      clearTimeout(closeTimeout);
      closeAll(it);
      it.classList.add('is-open');
    }
    function closeItem(it) {
      it.classList.remove('is-open');
    }

    // Desktop: hover + focus
    items.forEach(it => {
      const trigger = it.querySelector('.nm-trigger');
      if (!trigger) return;

      it.addEventListener('mouseenter', () => {
        if (isMobile()) return;
        clearTimeout(closeTimeout);
        openTimeout = setTimeout(() => openItem(it), 60);
      });
      it.addEventListener('mouseleave', () => {
        if (isMobile()) return;
        clearTimeout(openTimeout);
        closeTimeout = setTimeout(() => closeItem(it), 180);
      });

      // Keyboard / click toggle
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const wasOpen = it.classList.contains('is-open');
        closeAll();
        if (!wasOpen) openItem(it);
      });

      // Esc closes
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeItem(it); trigger.focus(); }
      });
    });

    // Click outside closes all
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) closeAll();
    });

    // Mobile burger
    if (burger) {
      burger.addEventListener('click', () => {
        const open = bar.classList.toggle('is-mobile-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (!open) closeAll();
      });
    }

    // Resize: clean up state if crossing breakpoint
    let lastIsMobile = isMobile();
    window.addEventListener('resize', () => {
      const nowMobile = isMobile();
      if (nowMobile !== lastIsMobile) {
        closeAll();
        bar.classList.remove('is-mobile-open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
        lastIsMobile = nowMobile;
      }
    });

    // ── Active state by URL ─────────────────────────────────────────
    const path = (window.location.pathname || '').toLowerCase();
    const file = path.split('/').pop() || '';
    const map = {
      'index.html': null,
      '':           null,
      'plataforma.html':                                'plataforma',
      'soluciones-personas.html':                       'soluciones',
      'soluciones-pymes.html':                          'soluciones',
      'soluciones-corporativa.html':                    'soluciones',
      'soluciones-all-business.html':                   'soluciones',
      'plataforma-ic-smart-platform.html':              'plataforma',
      'plataforma-ic-mobile-banking.html':              'plataforma',
      'plataforma-ic-web-banking.html':                 'plataforma',
      'plataforma-ic-social-banking.html':              'plataforma',
      'plataforma-ic-marketing-automation.html':        'plataforma',
      'plataforma-ic-analytics.html':                   'plataforma',
      'plataforma-ic-onboarding.html':                  'plataforma',
      'plataforma-ic-open-finance.html':                'plataforma',
      'plataforma-ic-public-portal.html':               'plataforma',
      'plataforma-ic-personal-finance.html':            'plataforma',
      'plataforma-ic-back-office.html':                 'plataforma',
    };
    // Soluciones path routing
    if (path.includes('/soluciones/')) {
      const sol = document.querySelector(`.nm-item[data-nav="soluciones"]`);
      if (sol) sol.classList.add('is-current');
    } else if (path.includes('/plataforma/')) {
      const pl = document.querySelector(`.nm-item[data-nav="plataforma"]`);
      if (pl) pl.classList.add('is-current');
    } else {
      const key = map[file];
      if (key) {
        const it = document.querySelector(`.nm-item[data-nav="${key}"]`);
        if (it) it.classList.add('is-current');
      }
    }
  }
})();
