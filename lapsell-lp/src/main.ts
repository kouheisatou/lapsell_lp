import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- スムーススクロール ---------- */
if (!reduced) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- ナビ ---------- */
const nav = document.getElementById("nav")!;
ScrollTrigger.create({
  start: "top -80",
  onUpdate: (self) => nav.classList.toggle("is-scrolled", self.scroll() > 80),
});

/* ---------- 汎用：ふわっと出現 ---------- */
function reveal(targets: string, opts: { y?: number; stagger?: number; start?: string } = {}) {
  document.querySelectorAll(targets).forEach((el) => {
    gsap.from(el, {
      y: opts.y ?? 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: opts.start ?? "top 82%" },
    });
  });
}

/* ==========================================================
   HERO — スクロールで暗幕が開く
   ========================================================== */
{
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=220%",
      scrub: reduced ? false : 0.6,
      pin: true,
    },
  });

  tl
    // まず光のスリットがゆっくり太くなる
    .to(".hero__beam", { width: "26px", opacity: 0.9, ease: "none", duration: 0.25 }, 0)
    // コピーは光に溶けるように消える
    .to(".hero__copy", { opacity: 0, y: -60, ease: "power1.in", duration: 0.3 }, 0.08)
    .to(".hero__scrollcue", { opacity: 0, duration: 0.1 }, 0)
    // 幕が左右に開く
    .to(".hero__curtain--left", { xPercent: -108, ease: "power2.inOut", duration: 0.55 }, 0.28)
    .to(".hero__curtain--right", { xPercent: 108, ease: "power2.inOut", duration: 0.55 }, 0.28)
    // 光は開ききると同時に拡散して消える
    .to(".hero__beam", { width: "38vw", opacity: 0, filter: "blur(70px)", ease: "power1.out", duration: 0.38 }, 0.3)
    // 幕裏の世界が寄ってくる
    .fromTo(".hero__backworld img", { scale: 1.15 }, { scale: 1.0, ease: "none", duration: 0.7 }, 0.25)
    // 幕裏のコピー
    .to(".hero__backcopy", { opacity: 1, y: -10, ease: "power2.out", duration: 0.25 }, 0.68);
}

/* ==========================================================
   PROLOGUE — 表舞台 → 裏側へクロスフェード
   ========================================================== */
{
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".prologue__stage",
      start: "top top",
      end: "+=200%",
      scrub: reduced ? false : 0.6,
      pin: true,
    },
  });

  tl
    .from(".prologue__copy--front", { opacity: 0, y: 40, duration: 0.2 }, 0.02)
    // 表舞台がゆっくりズーム
    .fromTo(".prologue__img--front img", { scale: 1.0 }, { scale: 1.12, ease: "none", duration: 1 }, 0)
    // 暗転して裏側へ
    .to(".prologue__copy--front", { opacity: 0, y: -30, duration: 0.18 }, 0.42)
    .to(".prologue__img--front", { opacity: 0, ease: "power1.inOut", duration: 0.3 }, 0.45)
    .to(".prologue__img--back", { opacity: 1, ease: "power1.inOut", duration: 0.3 }, 0.45)
    .fromTo(".prologue__img--back img", { scale: 1.1 }, { scale: 1.0, ease: "none", duration: 0.55 }, 0.45)
    .to(".prologue__copy--back", { opacity: 1, y: -14, ease: "power2.out", duration: 0.22 }, 0.6);
}

reveal(".fact", {});

/* ==========================================================
   ANSWER
   ========================================================== */
gsap.from(".answer__slit", {
  scaleY: 0,
  transformOrigin: "top",
  duration: 1.4,
  ease: "power2.out",
  scrollTrigger: { trigger: ".answer", start: "top 70%" },
});
reveal(".answer__title");
reveal(".answer__def");
document.querySelectorAll(".value").forEach((el, i) => {
  gsap.from(el, {
    y: 50,
    opacity: 0,
    duration: 1.1,
    delay: i * 0.15,
    ease: "power3.out",
    scrollTrigger: { trigger: ".answer__values", start: "top 80%" },
  });
});

/* ==========================================================
   HOW — ステップ + フィルムストリップ
   ========================================================== */
reveal(".how__head");
document.querySelectorAll<HTMLElement>(".step").forEach((step) => {
  const img = step.querySelector(".step__img img");
  const copy = step.querySelector(".step__copy");
  if (copy) {
    gsap.from(copy.children, {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: step, start: "top 74%" },
    });
  }
  if (img) {
    // 画像はパララックス（内側で少し動く）
    gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: step, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  }
});

/* フィルムストリップ：1本 → 3クリップに分かれ、値札が付く */
{
  const tl = gsap.timeline({
    scrollTrigger: { trigger: ".filmstrip", start: "top 72%" },
  });
  tl
    .from(".filmstrip__source", { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" })
    .from(".filmstrip__cutline", { scaleY: 0, duration: 0.5, ease: "power2.out" }, "-=0.1")
    .from(".clip", {
      opacity: 0,
      y: 46,
      scale: 0.92,
      stagger: 0.18,
      duration: 0.8,
      ease: "back.out(1.4)",
    }, "-=0.15")
    .from(".clip__price", {
      opacity: 0,
      y: 10,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.4");
}

/* 通知はポンと出す */
gsap.from(".notif", {
  opacity: 0,
  y: -26,
  scale: 0.94,
  duration: 0.9,
  ease: "back.out(1.8)",
  scrollTrigger: { trigger: ".notif", start: "top 80%" },
});

/* ==========================================================
   FEED — スマホが浮かび、説明が寄り添う
   ========================================================== */
reveal(".feed__head");
{
  const phone = document.querySelector(".feed__phone");
  if (phone) {
    gsap.from(phone, {
      opacity: 0,
      y: 120,
      scale: 0.9,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: { trigger: ".feed__stage", start: "top 72%" },
    });
    // スクロール中はゆっくりパララックス
    gsap.to(phone, {
      y: -60,
      ease: "none",
      scrollTrigger: { trigger: ".feed__stage", start: "top bottom", end: "bottom top", scrub: true },
    });
    // 浮遊
    if (!reduced) {
      gsap.to(".feed__phone img", { y: 14, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }
  }
  document.querySelectorAll(".feed__point").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      x: el.classList.contains("feed__point--2") ? 60 : -60,
      duration: 1.1,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
  });
}

/* ==========================================================
   OWNERSHIP — 1枚だけ残して、世界から消える
   ========================================================== */
reveal(".own__head > *", {});
{
  const cells = gsap.utils.toArray<HTMLElement>(".own__cell:not(.own__cell--target)");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".own__demo",
      start: "top 55%",
    },
  });
  tl
    .from(".own__cell", { opacity: 0, y: 30, stagger: 0.06, duration: 0.7, ease: "power2.out" })
    // 購入 → まわりが闇に沈む
    .to(cells, { opacity: 0.13, filter: "grayscale(1) brightness(0.5)", duration: 1.0, ease: "power2.inOut" }, "+=0.5")
    .to(".own__cell--target", {
      scale: 1.06,
      boxShadow: "0 0 0 1px rgba(255,200,74,0.7), 0 24px 90px rgba(255,200,74,0.22)",
      duration: 1.0,
      ease: "power2.inOut",
    }, "<")
    .to(".own__badge", { opacity: 1, duration: 0.6 }, "-=0.4")
    .from(".own__demoline", { opacity: 0, y: 24, duration: 0.9, ease: "power3.out" }, "-=0.2");
}
reveal(".own__fanimg", {});
reveal(".own__collection", {});
gsap.fromTo(
  ".own__fanimg img",
  { yPercent: -6 },
  { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".own__after", start: "top bottom", end: "bottom top", scrub: true } }
);

/* ==========================================================
   PROOF — 比較 + アンケートバー
   ========================================================== */
reveal(".proof__half--cheki", {});
reveal(".proof__half--clip", {});
reveal(".proof__state > *", {});
reveal(".survey > *:not(.survey__bars)", {});

document.querySelectorAll<HTMLElement>(".sbar").forEach((bar) => {
  const pct = Number(bar.dataset.pct ?? 0);
  const fill = bar.querySelector(".sbar__fill");
  const label = bar.querySelector(".sbar__pct");
  const tl = gsap.timeline({
    scrollTrigger: { trigger: bar, start: "top 80%" },
  });
  tl
    .from(bar.querySelector(".sbar__label"), { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" })
    .to(fill, { width: `${pct}%`, duration: 1.6, ease: "power3.out" }, "-=0.2")
    .to(label, { opacity: 1, duration: 0.5 }, "-=0.8");
});

/* ==========================================================
   GROWTH — 時が経ち、価格が育つ
   ========================================================== */
{
  const counter = document.getElementById("priceCounter")!;
  const price = { v: 500 };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".growth__stage",
      start: "top top",
      end: "+=220%",
      scrub: reduced ? false : 0.6,
      pin: true,
    },
  });

  tl
    .from(".growth__title", { opacity: 0, y: 40, duration: 0.18 }, 0.02)
    .from(".growth__price", { opacity: 0, y: 30, duration: 0.15 }, 0.14)
    // 無名時代 → ブレイク後へ
    .to(".growth__img--past", { opacity: 0, duration: 0.3 }, 0.42)
    .to(".growth__img--now", { opacity: 1, duration: 0.3 }, 0.42)
    .fromTo(".growth__img--now img", { scale: 1.12 }, { scale: 1.0, ease: "none", duration: 0.56 }, 0.42)
    // 価格が育つ
    .to(price, {
      v: 24000,
      duration: 0.45,
      ease: "power2.inOut",
      onUpdate: () => {
        counter.textContent = Math.round(price.v).toLocaleString("ja-JP");
      },
    }, 0.44)
    .to(".growth__price-caption--after", { opacity: 1, duration: 0.15 }, 0.82);
}
reveal(".growth__body p", {});

/* ==========================================================
   FINALE — 光が満ちる
   ========================================================== */
{
  gsap.to(".finale__flood", {
    opacity: 1,
    ease: "none",
    scrollTrigger: { trigger: ".finale", start: "top 80%", end: "center center", scrub: true },
  });
  gsap.fromTo(
    ".finale__bg img",
    { scale: 1.12, yPercent: -5 },
    { scale: 1.0, yPercent: 0, ease: "none", scrollTrigger: { trigger: ".finale", start: "top bottom", end: "bottom top", scrub: true } }
  );
  gsap.from(".finale__copy > *", {
    opacity: 0,
    y: 40,
    stagger: 0.14,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: { trigger: ".finale", start: "top 60%" },
  });
}

/* リサイズ時の再計算 */
window.addEventListener("load", () => ScrollTrigger.refresh());
