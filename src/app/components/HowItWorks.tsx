import React from 'react';
import { Calendar, ShoppingCart, Smartphone, Gift, Clock, Shuffle, Gem } from 'lucide-react';
import { w95 } from './win95';

const IMG_GACHA = 'https://images.unsplash.com/photo-1627658555302-a067928bd06e?w=500&q=80&auto=format&fit=crop';

const steps = [
  {
    num: '01',
    Icon: Calendar,
    iconColor: '#8070b8',
    title: '出品',
    body: '練習の日時と価格を決めて出品。5分でできます。',
    color: '#e4d4ff',
  },
  {
    num: '02',
    Icon: ShoppingCart,
    iconColor: '#c888a8',
    title: '購入',
    body: 'ファンが時間枠を買う。中身は届くまで不明。',
    color: '#ffd6e7',
  },
  {
    num: '03',
    Icon: Smartphone,
    iconColor: '#60b090',
    title: '撮影',
    body: '当日はスマホで撮るだけ。編集は一切不要。',
    color: '#c8f0e4',
  },
  {
    num: '04',
    Icon: Gift,
    iconColor: '#d4a060',
    title: '開封',
    body: '後日ファンが"ガチャ"のように開けて受け取る。',
    color: '#ffe8c8',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 px-6"
      style={{ background: '#f5f0ff' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#9d7fd4',
              letterSpacing: '0.12em',
            }}
          >
            HOW IT WORKS
          </span>
        </div>

        <h2
          className="text-center mb-4 text-[#2c1a4e]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            lineHeight: 1.4,
          }}
        >
          時間枠を<span style={{ color: '#9d7fd4' }}>"先に売って"</span>、<br />後から映像を渡す。
        </h2>

        <p
          className="text-center mb-16 text-[#6b4fa0] max-w-md mx-auto"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.8,
          }}
        >
          この「順序」が、収益・手軽さ・ガチャ体験を<br />同時に成立させる秘密です。
        </p>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div
                className="p-5 h-full"
                style={{
                  background: step.color,
                  boxShadow: `inset -2px -2px 0px #8070b888, inset 2px 2px 0px #ffffff99, 4px 4px 0px #b0a0d060`,
                  border: '1px solid #c8b8e880',
                }}
              >
                {/* Step number */}
                <div
                  className="mb-3"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '10px',
                    color: '#8070b8',
                    opacity: 0.7,
                  }}
                >
                  {step.num}
                </div>
                <div className="mb-3">
                  <step.Icon size={32} strokeWidth={1.5} color={step.iconColor} />
                </div>
                <h3
                  className="mb-2 text-[#2c1a4e]"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#5a3a78]"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                  }}
                >
                  {step.body}
                </p>
              </div>
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center bg-[#e4d4ff]"
                  style={{
                    ...w95.raised,
                    fontSize: '10px',
                    color: '#9d7fd4',
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Point pills + gacha image */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3
              className="text-[#2c1a4e] mb-6"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
              }}
            >
              3つのポイント
            </h3>
            {[
              { label: '時間を先に売る', desc: '収益が確定してから撮影できる', Icon: Clock, iconColor: '#8070b8' },
              { label: '中身は運しだい＝ガチャ', desc: 'ワクワクが購入動機になる', Icon: Shuffle, iconColor: '#c888a8' },
              { label: '届くのは世界に1つ', desc: '唯一無二だから価値がある', Icon: Gem, iconColor: '#9d7fd4' },
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4"
                style={{
                  background: '#f5eeff',
                  ...w95.raised,
                }}
              >
                <point.Icon size={24} strokeWidth={1.5} color={point.iconColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div
                    className="text-[#2c1a4e] mb-1"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.95rem',
                    }}
                  >
                    {point.label}
                  </div>
                  <div
                    className="text-[#6b4fa0]"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: '0.82rem',
                    }}
                  >
                    {point.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div
              className="p-1"
              style={{ ...w95.raised }}
            >
              {/* Win95 titlebar */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 mb-1"
                style={{
                  background: 'linear-gradient(90deg, #c8a8e9 0%, #e4c8f8 100%)',
                  boxShadow: 'inset -1px -1px 0 #8070b8, inset 1px 1px 0 #f0e0ff',
                }}
              >
                <div className="flex gap-1">
                  {['#ff9cc8', '#ffcc88', '#88d4a8'].map((c, i) => (
                    <div key={i} className="w-2.5 h-2.5" style={{ background: c, boxShadow: 'inset -1px -1px 0 rgba(0,0,0,0.2)' }} />
                  ))}
                </div>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '6px', color: 'white' }}>
                  gacha_open.exe
                </span>
              </div>
              <img
                src={IMG_GACHA}
                alt="ガチャマシン"
                className="w-full"
                style={{ display: 'block', aspectRatio: '3/4', objectFit: 'cover', maxHeight: '320px' }}
              />
            </div>
            <div
              className="absolute -bottom-3 -right-3 px-4 py-2 flex items-center gap-2"
              style={{
                background: '#ffd6e7',
                ...w95.raised,
              }}
            >
              <Gift size={14} strokeWidth={1.5} color="#c888a8" />
              <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.8rem', fontWeight: 700, color: '#2c1a4e' }}>
                世界に1つの動画グッズ
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8a8e9] text-white cursor-pointer"
            style={{
              ...w95.btn,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            仕組みを試してみる（無料登録）
          </a>
        </div>
      </div>
    </section>
  );
}
