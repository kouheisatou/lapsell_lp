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
    '.scheme', '.about__point', '.about__how',
    '.afterflow__stage',
    '.uploader', '.flow__closing',
    '.resale',
    '.reason__item',
    '.fan__photos figure', '.fan__value',
    '.merit3__item',
    '.price__plan', '.price__image',
    '.genre__item',
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
