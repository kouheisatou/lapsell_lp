import React from 'react';
import { w95 } from './win95';

const IMG_STAGE2 = 'https://images.unsplash.com/photo-1767462372384-e3ae04ce8c57?w=1200&q=80&auto=format&fit=crop';

export function ClosingCTA() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2c1a4e 0%, #4a2d7a 50%, #6a3a9a 100%)',
      }}
    >
      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #c8a8e9 0px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #c8a8e9 0px, transparent 1px, transparent 20px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${IMG_STAGE2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Pixel label */}
        <div
          className="inline-block mb-8 px-4 py-2"
          style={{
            background: '#c8a8e9',
            ...w95.raised,
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '8px',
            color: 'white',
            letterSpacing: '0.1em',
          }}
        >
          ★ NOW AVAILABLE ★
        </div>

        <h2
          className="mb-6 text-white"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            lineHeight: 1.3,
            textShadow: '2px 2px 0 rgba(0,0,0,0.3)',
          }}
        >
          練習の時間を、<br />
          <span style={{ color: '#e4c8ff' }}>資産に変えよう。</span>
        </h2>

        <p
          className="mb-4 text-[#d4c0f0]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '1.05rem',
            lineHeight: 1.8,
          }}
        >
          まだ誰も取っていない市場へ。<br />
          今日から、捨てていた時間が収益になります。
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { val: '0円', label: '初期費用' },
            { val: '5%〜', label: '手数料' },
            { val: 'スマホのみ', label: '撮影方法' },
          ].map((s, i) => (
            <div
              key={i}
              className="px-5 py-3 text-center"
              style={{
                background: 'rgba(200, 168, 233, 0.2)',
                boxShadow: 'inset -2px -2px 0 rgba(255,255,255,0.1), inset 2px 2px 0 rgba(255,255,255,0.2)',
                border: '1px solid rgba(200, 168, 233, 0.4)',
              }}
            >
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.75rem', color: '#c8b0e8' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#c8a8e9] text-white cursor-pointer text-center active:translate-y-[2px] transition-transform"
            style={{
              ...w95.btn,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            ✦ 無料で登録して、はじめる
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-5 text-[#e4c8ff] cursor-pointer"
            style={{
              boxShadow: 'inset -2px -2px 0 rgba(200,168,233,0.3), inset 2px 2px 0 rgba(255,255,255,0.15)',
              border: '1px solid rgba(200,168,233,0.5)',
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
              fontSize: '0.95rem',
              textDecoration: 'none',
            }}
          >
            お問い合わせ・資料請求はこちら →
          </a>
        </div>
      </div>
    </section>
  );
}
