import React from 'react';
import { w95, pixel } from './win95';

const IMG_DANCERS = 'https://images.unsplash.com/photo-1593573969589-c416b9c926de?w=900&q=80&auto=format&fit=crop';
const IMG_CROWD = 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80&auto=format&fit=crop';

const badges = [
  { label: '初期費用 0円', emoji: '✦' },
  { label: '手数料は売れた分だけ', emoji: '✦' },
  { label: '撮影はスマホのみ', emoji: '✦' },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #faf7ff 0%, #f5eeff 40%, #fde8f5 100%)' }}
    >
      {/* Pixel grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #8070b8 0px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #8070b8 0px, transparent 1px, transparent 24px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-2"
              style={{
                background: '#e8d8ff',
                ...w95.raised,
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '8px',
                color: '#6b4fa0',
                letterSpacing: '0.08em',
              }}
            >
              <span>★</span>
              <span>アイドル・アーティスト向け</span>
              <span>★</span>
            </div>

            {/* H1 */}
            <h1
              className="mb-6 text-[#2c1a4e] leading-tight"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                lineHeight: 1.25,
              }}
            >
              練習の<span style={{ color: '#9d7fd4' }}>"時間"</span>が、<br />
              収益になる。
            </h1>

            {/* Sub */}
            <p
              className="mb-8 text-[#6b4fa0] max-w-md"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              捨てていた練習・裏側が、<br />
              ファンにとって<strong style={{ fontWeight: 700, color: '#2c1a4e' }}>世界に1つのグッズ</strong>に。<br />
              撮影はスマホで撮るだけ、編集も不要。
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2"
                  style={{
                    background: i === 0 ? '#ffd6e7' : i === 1 ? '#e4d4ff' : '#c8f0e4',
                    ...w95.raised,
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#2c1a4e',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: '#9d7fd4' }}>{b.emoji}</span>
                  {b.label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8a8e9] text-white cursor-pointer active:translate-y-[2px] active:shadow-none transition-transform"
                style={{
                  ...w95.btn,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                <span>✦</span>
                無料で出品をはじめる
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#f5eeff] text-[#6b4fa0] cursor-pointer active:translate-y-[2px] transition-transform"
                style={{
                  ...w95.raised,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                まずは資料を受け取る →
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex justify-center">
            {/* Main image */}
            <div
              className="relative w-full max-w-md"
              style={{
                ...w95.raised,
                background: '#f5eeff',
                padding: '8px',
              }}
            >
              {/* Win95 title bar */}
              <div
                className="flex items-center gap-2 px-3 py-2 mb-2"
                style={{
                  background: 'linear-gradient(90deg, #c8a8e9 0%, #e4c8f8 100%)',
                  boxShadow: 'inset -1px -1px 0 #8070b8, inset 1px 1px 0 #f0e0ff',
                }}
              >
                <div className="flex gap-1">
                  {['#ff9cc8', '#ffcc88', '#88d4a8'].map((c, i) => (
                    <div
                      key={i}
                      className="w-3 h-3"
                      style={{ background: c, boxShadow: 'inset -1px -1px 0 rgba(0,0,0,0.2), inset 1px 1px 0 rgba(255,255,255,0.4)' }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '7px',
                    color: 'white',
                    marginLeft: '4px',
                  }}
                >
                  Lapsell.exe
                </span>
              </div>
              <img
                src={IMG_DANCERS}
                alt="アイドルが練習している様子"
                className="w-full"
                style={{ display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3"
              style={{
                background: '#fff5f9',
                ...w95.raised,
              }}
            >
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#c888a8', marginBottom: '4px' }}>
                購入意向
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#2c1a4e', lineHeight: 1 }}>
                約32%
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.7rem', color: '#6b4fa0', marginTop: '2px' }}>
                ファンが「買う」と回答
              </div>
            </div>

            {/* Floating crowd mini */}
            <div
              className="absolute -top-4 -right-4 w-24 h-20 overflow-hidden"
              style={{ ...w95.raised }}
            >
              <img
                src={IMG_CROWD}
                alt="ファンの様子"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '7px', color: '#9d7fd4' }}>SCROLL</span>
        <div className="w-px h-8 bg-[#c8b8e8]" />
      </div>
    </section>
  );
}
