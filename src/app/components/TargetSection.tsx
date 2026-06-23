import React from 'react';
import { w95 } from './win95';

const IMG_BAND2 = 'https://images.unsplash.com/photo-1776717494824-2036ea6cab02?w=700&q=80&auto=format&fit=crop';
const IMG_PERFORMERS = 'https://images.unsplash.com/photo-1583482183620-f692113aafc3?w=700&q=80&auto=format&fit=crop';

const targets = [
  {
    emoji: '🌟',
    label: '地下アイドル',
    desc: '日々の練習があり、ファンとの距離が近い。約1,500組・6,700人が対象。',
    color: '#ffd6e7',
    check: true,
  },
  {
    emoji: '🎸',
    label: 'インディーズアーティスト・バンド',
    desc: 'リハ・制作風景があり、下積みが将来価値になる。母数は数万規模。',
    color: '#e4d4ff',
    check: true,
  },
  {
    emoji: '🎤',
    label: 'インディーズお笑い芸人',
    desc: 'ネタ合わせ・楽屋など裏側のニーズが厚い。寄席演芸家名鑑で1,205名。',
    color: '#c8f0e4',
    check: true,
  },
];

const notTargets = [
  {
    emoji: '📱',
    label: 'TikToker / インスタライバー',
    reason: 'すでに配信で収益化できており相性が弱い',
    color: '#f0f0f0',
  },
  {
    emoji: '🖥',
    label: 'VTuber',
    reason: '顔出し・直撮りの日常が出せず本サービスとは相性が悪い',
    color: '#f0f0f0',
  },
];

export function TargetSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: '#fffbf0' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#d4a060',
              letterSpacing: '0.12em',
            }}
          >
            TARGET
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
          こんな方に
        </h2>

        <p
          className="text-center mb-12 text-[#6b4fa0] max-w-md mx-auto"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.8,
          }}
        >
          生身で活動する中小・個人の作り手に<br />フィットするサービスです。
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* Target cards */}
          <div className="space-y-4">
            <div
              className="px-3 py-1 inline-block mb-2"
              style={{
                background: '#c8f0a8',
                ...w95.raised,
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '7px',
                color: '#3a7a30',
              }}
            >
              ◎ おすすめ
            </div>
            {targets.map((t, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4"
                style={{
                  background: t.color,
                  boxShadow: `inset -2px -2px 0px rgba(0,0,0,0.08), inset 2px 2px 0px rgba(255,255,255,0.7), 4px 4px 0px rgba(0,0,0,0.06)`,
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <span className="text-3xl flex-shrink-0">{t.emoji}</span>
                <div>
                  <div
                    className="mb-1 text-[#2c1a4e]"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '1rem' }}
                  >
                    {t.label}
                  </div>
                  <div
                    className="text-[#5a3a78]"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.82rem', lineHeight: 1.7 }}
                  >
                    {t.desc}
                  </div>
                </div>
              </div>
            ))}

            {/* Not target */}
            <div className="pt-4">
              <div
                className="px-3 py-1 inline-block mb-3"
                style={{
                  background: '#e0e0e0',
                  ...w95.raised,
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '7px',
                  color: '#707070',
                }}
              >
                △ 相性が薄い
              </div>
              {notTargets.map((t, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 mb-2"
                  style={{
                    background: t.color,
                    boxShadow: 'inset 1px 1px 0px #d0d0d0',
                    border: '1px solid #d0d0d0',
                    opacity: 0.7,
                  }}
                >
                  <span className="text-xl flex-shrink-0">{t.emoji}</span>
                  <div>
                    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#555' }}>
                      {t.label}
                    </div>
                    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.75rem', color: '#777', marginTop: '2px' }}>
                      {t.reason}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <div
              className="p-1"
              style={{ ...w95.raised }}
            >
              <img
                src={IMG_BAND2}
                alt="インディーズバンドの演奏"
                className="w-full"
                style={{ display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
              />
            </div>
            <div
              className="p-1"
              style={{ ...w95.raised }}
            >
              <img
                src={IMG_PERFORMERS}
                alt="パフォーマーたち"
                className="w-full"
                style={{ display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
              />
            </div>

            {/* Data highlight */}
            <div
              className="p-4"
              style={{
                background: '#ffe8c8',
                ...w95.raised,
              }}
            >
              <div className="text-2xl mb-2">📊</div>
              <div
                className="text-[#2c1a4e] mb-1"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '1.2rem' }}
              >
                75.3%
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.82rem', color: '#5a3a78', lineHeight: 1.6 }}>
                「推しの新たな一面が見えるのは嬉しい」<br />（ネオマーケティング2024）
              </div>
            </div>
          </div>
        </div>

        <div
          className="p-5 text-center max-w-2xl mx-auto"
          style={{
            background: '#f5eeff',
            ...w95.panel,
          }}
        >
          <p
            className="text-[#2c1a4e]"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}
          >
            裏側がまだ収益化されていない、生身で活動する中小・個人にこそフィットする。<br />
            <span style={{ color: '#9d7fd4' }}>だから訴求が刺さり、始めやすい。</span>
          </p>
        </div>
      </div>
    </section>
  );
}
