import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// JSが動く環境でだけアニメーション初期状態を適用する(no-JSでも全文が読める)
document.body.classList.add("js-ready");

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- ナビ ---------- */
const nav = document.getElementById("nav")!;
ScrollTrigger.create({
  start: "top -80",
  onUpdate: (self) => nav.classList.toggle("is-scrolled", self.scroll() > 80),
});

if (reduced) {
  gsap.set(".js-reveal, .js-scrub, .app-note, .value-cap", { opacity: 1, y: 0 });
  gsap.set(".value__bg", { opacity: 0.4 });
  document.getElementById("price-counter")!.textContent = "24,000";
  document.querySelectorAll<HTMLElement>(".market__bar").forEach((bar) => {
    bar.querySelector("i")!.style.height = `${bar.dataset.h}%`;
  });
} else {
  /* =====================================================
     ヒーロー(幕は静的な額縁。開閉演出はなし)
     ===================================================== */
  gsap.set(".hero__stage img", { scale: 1.08 });

  // 登場
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .to(".hero__eyebrow", { opacity: 1, y: 0, duration: 1 }, 0.5)
    .to(".hero__title", { opacity: 1, y: 0, duration: 1.3 }, 0.75)
    .to(".hero__sub", { opacity: 1, y: 0, duration: 1 }, 1.3);

  // 視差のみ(ピンなし)
  gsap.to(".hero__stage img", {
    yPercent: 10,
    scale: 1,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".hero__content", {
    yPercent: -18,
    opacity: 0,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "60% top", scrub: true },
  });
  gsap.to(".hero__scrollcue", {
    opacity: 0,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "25% top", scrub: true },
  });

  /* ---------- 文章スクラブ ---------- */
  document.querySelectorAll<HTMLElement>(".js-scrub").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0.1, y: 26 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 88%", end: "top 48%", scrub: true },
      }
    );
  });

  /* ---------- 汎用リビール ---------- */
  document.querySelectorAll<HTMLElement>(".js-reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 86%", once: true },
    });
  });

  /* ---------- 写真ストリップの視差 ---------- */
  document.querySelectorAll<HTMLElement>(".strip__media img").forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: img.closest(".strip"),
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  /* ---------- 幕の隙間(転換)の視差 ---------- */
  gsap.fromTo(
    ".backstage__slit",
    { scale: 1.15 },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".backstage__pivot",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  /* ---------- サービス紹介:3Dフォンが浮かび上がる ---------- */
  const svcStage = document.querySelector<HTMLElement>(".service__stage");
  if (svcStage) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".service__stage",
          start: "top 88%",
          end: "top 22%",
          scrub: 0.7,
        },
        defaults: { ease: "none" },
      })
      .fromTo(".sphone--a", { y: 130, opacity: 0, rotationY: 0 }, { y: 0, opacity: 1, rotationY: -14, rotationX: 3 }, 0)
      .fromTo(".sphone--b", { y: 190, opacity: 0 }, { y: -16, opacity: 1, rotationX: 5 }, 0.08)
      .fromTo(".sphone--c", { y: 240, opacity: 0, rotationY: 0 }, { y: 12, opacity: 1, rotationY: 15, rotationX: -2 }, 0.16);

    // ポインタに合わせて全体がゆるやかに傾く(常時ループはさせない)
    if (window.matchMedia("(pointer: fine)").matches) {
      const tiltY = gsap.quickTo(".service__float", "rotationY", { duration: 0.7, ease: "power2.out" });
      const tiltX = gsap.quickTo(".service__float", "rotationX", { duration: 0.7, ease: "power2.out" });
      svcStage.addEventListener("pointermove", (e) => {
        const r = svcStage.getBoundingClientRect();
        tiltY(((e.clientX - r.left) / r.width - 0.5) * 10);
        tiltX(-((e.clientY - r.top) / r.height - 0.5) * 8);
      });
      svcStage.addEventListener("pointerleave", () => {
        tiltY(0);
        tiltX(0);
      });
    }
  }

  ScrollTrigger.matchMedia({
    "(min-width: 901px)": () => {
      /* ---------- 仕組み:横スクロール ---------- */
      const track = document.querySelector<HTMLElement>(".how__track")!;
      const scrollTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".how__wrap",
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // パネル03:SOLDスタンプが押される
      gsap.from(".soldclip__stamp", {
        scale: 2.6,
        opacity: 0,
        duration: 0.55,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: ".soldclip",
          containerAnimation: scrollTween,
          start: "left 68%",
          toggleActions: "play none none reverse",
        },
      });

      /* ---------- アプリ:ピン留めフィード ---------- */
      const notes = gsap.utils.toArray<HTMLElement>(".app-note");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".app__pin",
            start: "top top",
            end: "+=2400",
            pin: true,
            scrub: 0.6,
          },
        })
        .set(notes[0], { opacity: 1, y: 0 })
        .to(".phone__track", { yPercent: -33.333, ease: "power1.inOut", duration: 1 }, 0.8)
        .to(notes[0], { opacity: 0, y: -18, duration: 0.35 }, 0.8)
        .fromTo(notes[1], { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.35 }, 1.15)
        .to(".phone__track", { yPercent: -66.666, ease: "power1.inOut", duration: 1 }, 2.2)
        .to(notes[1], { opacity: 0, y: -18, duration: 0.35 }, 2.2)
        .fromTo(notes[2], { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.35 }, 2.55)
        .to({}, { duration: 0.6 });

      /* ---------- 値上がり:3D回転チケット ----------
         注意: ピン付きトリガーはDOM順(仕組み→アプリ→値上がり)で作成する。
         順序が狂うと、先行ピンのスペーサー分だけ開始位置がずれる。 */
      const caps = gsap.utils.toArray<HTMLElement>(".value-cap");
      const price = { value: 1200 };
      const priceEl = document.getElementById("price-counter")!;
      const renderPrice = () => {
        priceEl.textContent = Math.round(price.value).toLocaleString("ja-JP");
      };
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".value__pin",
            start: "top top",
            end: "+=2600",
            pin: true,
            scrub: 0.7,
          },
          defaults: { ease: "power1.inOut" },
        })
        .set(caps[0], { opacity: 1, y: 0 })
        // 裏面へ:取引履歴を見せる
        .to(".ticket3d__inner", { rotationY: 180, rotationX: -7, duration: 1 }, 0.25)
        .to(caps[0], { opacity: 0, y: -14, duration: 0.3 }, 1.05)
        // ブレイク:アリーナが背後に浮かぶ
        .to(".value__bg", { opacity: 0.5, duration: 0.6 }, 1.15)
        .fromTo(caps[1], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.3 }, 1.35)
        // 表面へ戻る:同じクリップに新しい値がつく
        .to(".ticket3d__inner", { rotationY: 360, rotationX: 5, duration: 1 }, 1.7)
        .to(caps[1], { opacity: 0, y: -14, duration: 0.3 }, 2.5)
        .fromTo(caps[2], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.3 }, 2.75)
        .to(price, { value: 24000, duration: 0.9, ease: "power2.out", onUpdate: renderPrice }, 2.65)
        .to(".ticket3d__inner", { scale: 1.05, duration: 0.5 }, 2.75)
        .to({}, { duration: 0.5 });

      // 待機中もチケットがかすかに浮遊する(回転とは別プロパティなので競合しない)
      gsap.to(".ticket3d", {
        y: 10,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    "(max-width: 900px)": () => {
      // チケットはピンなしで、通過中に一回転+価格上昇
      const price = { value: 1200 };
      const priceEl = document.getElementById("price-counter")!;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".value__pin",
            start: "top 75%",
            end: "bottom 35%",
            scrub: 0.7,
          },
          defaults: { ease: "power1.inOut" },
        })
        .to(".ticket3d__inner", { rotationY: 360, rotationX: -5, duration: 2 })
        .to(".value__bg", { opacity: 0.4, duration: 0.8 }, 0.7)
        .to(
          price,
          {
            value: 24000,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: () => {
              priceEl.textContent = Math.round(price.value).toLocaleString("ja-JP");
            },
          },
          1.2
        );
    },
  });

  /* ---------- 原点/CTAの視差 ---------- */
  gsap.to(".story__media img", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: true },
  });
  gsap.fromTo(
    ".cta__bg img",
    { yPercent: -8 },
    {
      yPercent: 0,
      ease: "none",
      scrollTrigger: { trigger: ".cta", start: "top bottom", end: "bottom top", scrub: true },
    }
  );

  /* ---------- 市場チャート:棒が伸びる ---------- */
  document.querySelectorAll<HTMLElement>(".market__bar").forEach((bar, i) => {
    gsap.to(bar.querySelector("i"), {
      height: `${bar.dataset.h}%`,
      duration: 1.2,
      delay: i * 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".market__bars", start: "top 82%", once: true },
    });
  });
}

/* ---------- 事前登録フォーム(モック) ---------- */
const form = document.getElementById("register-form") as HTMLFormElement | null;
const done = document.getElementById("register-done");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  done?.classList.add("is-visible");
});

/* ---------- 画像ロード後にピン位置を再計算 ---------- */
window.addEventListener("load", () => ScrollTrigger.refresh());

// デバッグ用(開発時のみ参照)
(window as unknown as { ScrollTrigger: typeof ScrollTrigger }).ScrollTrigger = ScrollTrigger;
