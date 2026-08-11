/* =========================================================
   Lapsell B案 — スクロール連動の演出
   Lenis（慣性スクロール）＋ GSAP ScrollTrigger
   ライブラリは vendor/ に同梱。読み込みに失敗した場合は
   何も動かさず、静的なページとして成立させる。
   ========================================================= */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ready = window.gsap && window.ScrollTrigger;

  // JSが動く場合だけ初期状態を隠す（CSS側の html.js-anim）
  if (ready && !reduced) document.documentElement.classList.add('js-anim');

  window.addEventListener('DOMContentLoaded', function () {
    if (!ready || reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    /* ---- 慣性スクロール ---- */
    if (window.Lenis) {
      var lenis = new Lenis({ duration: 1.05, wheelMultiplier: 0.9, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      // ページ内リンク
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var target = document.querySelector(a.getAttribute('href'));
          if (!target) return;
          e.preventDefault();
          lenis.scrollTo(target, { offset: -20 });
        });
      });
    }

    /* ---- 舞台照明：スクロールに合わせて光の位置と強さが動く ---- */
    var root = document.documentElement;
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: function (self) {
        var p = self.progress;
        root.style.setProperty('--lx', (50 + 34 * Math.sin(p * Math.PI * 2.2)) + '%');
        root.style.setProperty('--lint', (0.09 + 0.09 * Math.abs(Math.sin(p * Math.PI * 3.1))).toFixed(3));
      }
    });

    /* ---- ヒーロー：見出しがせり上がり、背景がゆっくり流れる ---- */
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.hero h1 .l > span',
              { yPercent: 115, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 1.25, stagger: 0.13 }, 0)
      .fromTo('.hero-lead', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.55)
      .fromTo('.hero .btn', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.8)
      .fromTo('.hero-note, .hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.1 }, 0.95);

    gsap.to('.hero-media', {
      yPercent: 10, scale: 1.06, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to('.hero-body', {
      y: -70, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to('.hero-scroll', {
      opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: '30% top', scrub: true }
    });

    /* ---- 見出し・本文：下からフェードアップ ---- */
    gsap.utils.toArray('[data-anim]').forEach(function (el) {
      var delay = parseFloat(el.dataset.animDelay || 0);
      gsap.fromTo(el,
        { y: 26, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.05, delay: delay, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        });
    });

    /* ---- 写真：幕が上がるように現れ、内側がゆっくり動く ---- */
    gsap.utils.toArray('[data-anim-photo]').forEach(function (el) {
      gsap.fromTo(el,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        });
      var img = el.querySelector('img');
      if (img) {
        gsap.fromTo(img, { yPercent: -5 }, {
          yPercent: 5, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      }
    });

    /* ---- アプリ画面：左右から寄る ---- */
    gsap.utils.toArray('.mockups__device').forEach(function (el, i) {
      gsap.fromTo(el,
        { x: i === 0 ? -40 : 40, y: 30, opacity: 0 },
        {
          x: 0, y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: i * 0.12,
          scrollTrigger: { trigger: '.mockups', start: 'top 82%' }
        });
    });

    /* ---- 実績のトロフィー：線が引かれていく ---- */
    var icon = document.querySelector('.award__icon');
    if (icon) {
      var paths = icon.querySelectorAll('path');
      paths.forEach(function (p) {
        var len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(paths, {
        strokeDashoffset: 0, duration: 1.1, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.award', start: 'top 82%' }
      });
    }

    ScrollTrigger.refresh();
  });
})();
