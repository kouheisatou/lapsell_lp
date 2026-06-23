import React from 'react';
import { Smartphone, Zap, TrendingDown } from 'lucide-react';
import { w95 } from './win95';

const IMG_PHONE = 'https://images.unsplash.com/photo-1514582086679-4024becf927e?w=600&q=80&auto=format&fit=crop';

const pains = [
  {
    Icon: Smartphone,
    title: '撮影・編集が大変',
    body: '毎日の投稿は手間で続かない。クオリティを上げようとするほど疲弊する。',
    color: '#ffd6e7',
    shadowColor: '#c888a8',
  },
  {
    Icon: Zap,
    title: '配信は事故が怖い',
    body: '失言・映り込みがそのままリアルタイムで流れ、取り返しがつかない。',
    color: '#ffe8c8',
    shadowColor: '#d4a060',
  },
  {
    Icon: TrendingDown,
    title: '裏側は儲からない',
    body: '再生数が取れず、手間に見合わないから撮られない。価値があるのに。',
    color: '#e4d4ff',
    shadowColor: '#9d7fd4',
  },
];

export function PainPoints() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: '#fff5f9' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#c888a8',
              letterSpacing: '0.12em',
            }}
          >
            PROBLEM
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
          裏側が一番価値あるのに、<br />お金にならない。
        </h2>

        <p
          className="text-center mb-16 text-[#6b4fa0] max-w-lg mx-auto"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.8,
          }}
        >
          あなたにも「それ、わかる」という経験がありませんか？
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="p-6"
              style={{
                background: pain.color,
                boxShadow: `inset 2px 2px 0px rgba(255,255,255,0.6), inset -2px -2px 0px ${pain.shadowColor}40, 4px 4px 0px ${pain.shadowColor}60`,
                border: `1px solid ${pain.shadowColor}50`,
              }}
            >
              <div className="mb-4">
                <pain.Icon size={36} strokeWidth={1.5} color={pain.shadowColor} />
              </div>
              <h3
                className="mb-3 text-[#2c1a4e]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.05rem',
                }}
              >
                {pain.title}
              </h3>
              <p
                className="text-[#5a3a78]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                {pain.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing + image */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className="p-1"
            style={{ ...w95.raised }}
          >
            <img
              src={IMG_PHONE}
              alt="スマホで撮影する様子"
              className="w-full"
              style={{ display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
            />
          </div>
          <div>
            <p
              className="text-[#2c1a4e] mb-6"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 700,
                lineHeight: 1.7,
              }}
            >
              毎日生まれている<br />
              <span style={{ color: '#9d7fd4' }}>価値ある時間</span>が、<br />
              収益化されないまま<br />
              消えています。
            </p>
            <p
              className="text-[#6b4fa0]"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.8,
              }}
            >
              Lapsellはその時間を、ファンが喜ぶ<br />
              「世界に1つのグッズ」に変えます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
