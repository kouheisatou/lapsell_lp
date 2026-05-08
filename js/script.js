/* =========================================================
   LAPSELL — script.js
   Lightweight enhancements: in-view animations + specimen scroll.
   No dependencies.
   ========================================================= */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- In-view animations ---------- */
  const animatedTargets = document.querySelectorAll(
    '.schematic, .process-step, .brief-card, .specimen, .bene-list li, .spec-table tbody tr, .cta-row, .cover-titleblock, .empathy, .signoff-statement'
  );
  animatedTargets.forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = Math.min(i * 40, 320) + 'ms';
  });

  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    animatedTargets.forEach((el) => io.observe(el));
  } else {
    animatedTargets.forEach((el) => el.classList.add('in-view'));
  }

  /* ---------- Specimen track navigation ---------- */
  const track = document.querySelector('.specimen-track');
  const prevBtn = document.querySelector('.specimen-nav--prev');
  const nextBtn = document.querySelector('.specimen-nav--next');

  if (track && prevBtn && nextBtn) {
    const scrollByStep = (dir) => {
      const card = track.querySelector('.specimen');
      const gap = 28;
      const step = card ? card.getBoundingClientRect().width + gap : 360;
      track.scrollBy({ left: step * dir, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByStep(-1));
    nextBtn.addEventListener('click', () => scrollByStep(1));

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollByStep(1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollByStep(-1); }
    });
  }

  /* ---------- Update top status bar with current sheet number ---------- */
  const sheets = document.querySelectorAll('.sheet[data-no]');
  const statusBar = document.querySelector('.status-bar');
  if (sheets.length && statusBar) {
    const dwgPill = statusBar.querySelector('span:nth-child(2)');
    if (dwgPill && 'IntersectionObserver' in window) {
      const sheetIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.45) {
            const no = e.target.getAttribute('data-no');
            dwgPill.textContent = `DWG. NO. LP-2026-01 / SHEET ${no}`;
          }
        });
      }, { threshold: [0.45, 0.6, 0.75] });
      sheets.forEach((s) => sheetIO.observe(s));
    }
  }
})();
