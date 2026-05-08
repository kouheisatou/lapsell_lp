/* =========================================================
   LAPSELL — script.js
   - Hero scramble decode effect (always runs; explicit design feature)
   - In-view fade animations (respects prefers-reduced-motion)
   - Specimen carousel
   No dependencies.
   ========================================================= */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Hero scramble decode ----------
     Lapsell ワードマーク以外のヒーローテキストを「文字化け→確定」演出で表示。
     各文字は 0〜1000ms のランダム時間で目的の文字に固まる。
     これは明示的な意匠要件なので prefers-reduced-motion でも実行する。
  ------------------------------------------- */
  function runHeroScramble() {
    const hero = document.querySelector('.sheet--cover');
    if (!hero) return;
    const targets = hero.querySelectorAll(
      '.cover-tagline-en, .cover-tagline-jp, .cover-sub, .scroll-cue__label'
    );
    if (!targets.length) return;

    const ASCII = '!<>-_\\/[]{}=+*^?#$%&|~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const JP    = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン□◆◇■▲▼';
    const isJP = (ch) => /[぀-ヿ㐀-鿿＀-￯]/.test(ch);
    const randCh = (ch) =>
      isJP(ch)
        ? JP.charAt(Math.floor(Math.random() * JP.length))
        : ASCII.charAt(Math.floor(Math.random() * ASCII.length));

    const records = [];

    targets.forEach((el) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      const textNodes = [];
      let node;
      while ((node = walker.nextNode())) textNodes.push(node);

      textNodes.forEach((tn) => {
        const text = tn.nodeValue;
        if (!text || !text.length) return;
        const frag = document.createDocumentFragment();
        for (let i = 0; i < text.length; i++) {
          const ch = text.charAt(i);
          if (/\s/.test(ch)) {
            frag.appendChild(document.createTextNode(ch));
            continue;
          }
          const span = document.createElement('span');
          span.className = 'scramble-char';
          span.textContent = randCh(ch);
          records.push({ span, target: ch, settleAt: 0, done: false });
          frag.appendChild(span);
        }
        tn.parentNode.replaceChild(frag, tn);
      });
    });

    if (!records.length) return;

    const MAX_DELAY = 1000;
    const TICK = 50;
    const start = performance.now();
    records.forEach((r) => { r.settleAt = start + Math.random() * MAX_DELAY; });

    let lastTick = 0;
    function frame(now) {
      if (now - lastTick >= TICK) {
        lastTick = now;
        let unsettled = false;
        for (const r of records) {
          if (r.done) continue;
          if (now >= r.settleAt) {
            r.span.textContent = r.target;
            r.span.classList.add('settled');
            r.done = true;
          } else {
            r.span.textContent = randCh(r.target);
            unsettled = true;
          }
        }
        if (!unsettled) return;
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runHeroScramble);
  } else {
    runHeroScramble();
  }

  /* ---------- In-view fade animations ---------- */
  const animatedTargets = document.querySelectorAll(
    '.schematic, .process-step, .brief-card, .specimen, .bene-list li, .spec-table tbody tr, .cta-row, .empathy, .signoff-statement, .placeholder'
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

})();
