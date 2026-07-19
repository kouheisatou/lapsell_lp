// スクロール時にヘッダーへ影をつける
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
}, { passive: true });

// セクション内の主要ブロックをスクロールでフェードイン
const fadeTargets = document.querySelectorAll(
  [
    '.section__title', '.section__lead',
    '.problem__item', '.problem__closing',
    '.scheme', '.about__point',
    '.feedintro', '.fanmap',
    '.afterflow',
    '.reason__item',
    '.merit3__item',
    '.price__plan', '.price__image',
    '.genre__item', '.genre__more',
    '.faq__item',
    '.cta__title', '.cta__lead', '.cta__actions',
  ].join(',')
);

fadeTargets.forEach((el) => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

fadeTargets.forEach((el) => observer.observe(el));

// 利用フロー: 縦スクロールに連動して横スクロール
// （画面下端に入り始めで左端、上端に抜けるときに右端。手動の横スクロール直後は一時停止）
(function () {
  const strip = document.querySelector('.afterflow');
  if (!strip) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let target = 0;
  let raf = null;
  let manualUntil = 0;

  const markManual = () => { manualUntil = Date.now() + 1200; };
  strip.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) markManual();
  }, { passive: true });
  strip.addEventListener('touchmove', markManual, { passive: true });
  strip.addEventListener('pointerdown', markManual, { passive: true });

  function animate() {
    raf = null;
    if (Date.now() < manualUntil) return;
    const diff = target - strip.scrollLeft;
    if (Math.abs(diff) < 1) {
      strip.scrollLeft = target;
      return;
    }
    strip.scrollLeft += diff * 0.16;
    raf = requestAnimationFrame(animate);
  }

  function sync() {
    const rect = strip.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = vh + rect.height;
    const raw = (vh - rect.top) / total;
    // ストリップが画面に完全に入った時点でStep 1が左端に揃うよう、出入りの区間を除外する
    const dz = Math.min(0.42, (rect.height / total) * 1.05);
    let p = Math.min(1, Math.max(0, (raw - dz) / (1 - dz * 2)));
    p = p * p * (3 - 2 * p);
    target = p * (strip.scrollWidth - strip.clientWidth);
    if (!raf) raf = requestAnimationFrame(animate);
  }

  window.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync, { passive: true });
  sync();
})();

// FAQ: 開いている項目以外を閉じる
document.querySelectorAll('.faq__item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq__item[open]').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// ===== GA4 計測 =====
function gaSend(eventName, params) {
  if (typeof gtag === 'function') gtag('event', eventName, params);
}

// ボタンクリック計測
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    gaSend('button_click', {
      button_label: btn.textContent.trim(),
      button_href: btn.getAttribute('href') || '',
    });
  });
});

// スクロール深度計測（25 / 50 / 75 / 90%）
(function () {
  const milestones = [25, 50, 75, 90];
  const reached = new Set();
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY + window.innerHeight;
    const total = document.documentElement.scrollHeight;
    const pct = Math.round((scrolled / total) * 100);
    milestones.forEach((m) => {
      if (pct >= m && !reached.has(m)) {
        reached.add(m);
        gaSend('scroll_depth', { depth_percent: m });
      }
    });
  }, { passive: true });
})();

// フォーム送信計測（iframeの2回目のloadをsubmitとして検知）
(function () {
  const iframe = document.querySelector('#form iframe');
  if (!iframe) return;
  let loadCount = 0;
  iframe.addEventListener('load', () => {
    loadCount++;
    if (loadCount >= 2) {
      gaSend('form_submit', { form_name: 'google_form_senkou' });
    }
  });
})();

