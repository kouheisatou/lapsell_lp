// スクロール時にヘッダーへ影をつける
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
}, { passive: true });

// セクション内の主要ブロックをスクロールでフェードイン
const fadeTargets = document.querySelectorAll(
  [
    '.hero__text',
    '.section__title', '.section__lead',
    '.mockups__device',
    '.split__item',
    '.price__item',
    '.faq__item',
    '.lead-block',
    '.award',
    '.form-section__embed',
    '.footer__inner',
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

// 背景写真を、スクロールより遅い速度で動かす（パララックス）
(function () {
  var layers = [].slice.call(document.querySelectorAll('.para__img'));
  if (!layers.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ticking = false;
  function update() {
    ticking = false;
    var vh = window.innerHeight;
    for (var i = 0; i < layers.length; i++) {
      var el = layers[i];
      var box = el.parentElement.parentElement.getBoundingClientRect();
      if (box.bottom < -200 || box.top > vh + 200) continue;
      // セクションの中心が画面中心からどれだけ離れているか（-1〜1）
      var p = (box.top + box.height / 2 - vh / 2) / (vh / 2 + box.height / 2);
      el.style.transform = 'translate3d(0,' + (p * 9).toFixed(2) + '%,0)';
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('load', update);
  update();
})();
