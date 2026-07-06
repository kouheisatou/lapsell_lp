// Lapsell LP — scroll interactions & FAQ

document.addEventListener('DOMContentLoaded', () => {
  // ヘッダー：スクロールで背景を付ける
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // スクロールで要素をふわっと表示
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // 兄弟要素が同時に見えたとき、順にずらして表示
  document.querySelectorAll('.worry-list, .mech__clips, .timeline, .price, .targets, .survey__legend').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 90}ms`;
      child.classList.add('reveal');
      observer.observe(child);
    });
  });

  // FAQ 開閉（最初の1件は開いておく）
  const firstFaq = document.querySelector('.faq__item');
  if (firstFaq) firstFaq.classList.add('is-open');
  document.querySelectorAll('.faq__q').forEach((q) => {
    q.addEventListener('click', () => {
      q.parentElement.classList.toggle('is-open');
    });
  });
});
