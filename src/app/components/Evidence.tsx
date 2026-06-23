import React from 'react';
import { Music, MessageCircle } from 'lucide-react';
import { w95 } from './win95';

const IMG_CROWD = 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80&auto=format&fit=crop';
const IMG_BAND = 'https://images.unsplash.com/photo-1687585612299-1f0e727b6f44?w=800&q=80&auto=format&fit=crop';

const bigStats = [
  {
    num: '約7,000億円',
    label: 'デジタルガチャ市場規模',
    sub: '中身不明への繰り返し課金は実証済み',
    color: '#e4d4ff',
    shadow: '#9d7fd4',
  },
  {
    num: '約7割',
    label: '推し活ファンの月支出',
    sub: 'ライブ配信の推し活ファンが月1万円以上を支出（17LIVE調査）',
    color: '#ffd6e7',
    shadow: '#c888a8',
  },
  {
    num: '200万人',
    label: 'bubbleの課金ユーザー数',
    sub: '"日常メッセージ"に世界200万人が課金。企業価値 約780億円',
    color: '#c8f0e4',
    shadow: '#60b090',
  },
  {
    num: '75.3%',
    label: '"推しの新たな一面"需要',
    sub: '「推しの新たな一面が見えるのは嬉しい」（ネオマーケティング2024）',
    color: '#ffe8c8',
    shadow: '#d4a060',
  },
];

export function Evidence() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: '#f0fcf7' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#60b090',
              letterSpacing: '0.12em',
            }}
          >
            EVIDENCE
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
          「本当に売れるの？」を<br />根拠でつぶす。
        </h2>

        <p
          className="text-center mb-16 text-[#6b4fa0] max-w-md mx-auto"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.8,
          }}
        >
          裏側・素の需要はすでに大きな市場になっています。
        </p>

        {/* Big stats grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {bigStats.map((stat, i) => (
            <div
              key={i}
              className="p-6"
              style={{
                background: stat.color,
                boxShadow: `inset -2px -2px 0px ${stat.shadow}60, inset 2px 2px 0px #ffffff80, 4px 4px 0px ${stat.shadow}40`,
                border: `1px solid ${stat.shadow}40`,
              }}
            >
              <div
                className="mb-2 text-[#2c1a4e]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  lineHeight: 1.1,
                }}
              >
                {stat.num}
              </div>
              <div
                className="mb-2 text-[#2c1a4e]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                {stat.label}
              </div>
              <div
                className="text-[#5a3a78]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: '0.8rem',
                  lineHeight: 1.6,
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Self-survey + image */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
          <div
            className="p-1"
            style={{ ...w95.raised }}
          >
            <img
              src={IMG_BAND}
              alt="バンドリハーサル"
              className="w-full h-full"
              style={{ display: 'block', minHeight: '200px', objectFit: 'cover' }}
            />
          </div>

          <div
            className="p-6"
            style={{
              background: '#fff5f9',
              ...w95.raised,
            }}
          >
            <div
              className="mb-4"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#c888a8' }}
            >
              SURVEY
            </div>
            <h3
              className="mb-3 text-[#2c1a4e]"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                lineHeight: 1.5,
              }}
            >
              自社アンケートでも<br />「買う」が一定数
            </h3>
            <p
              className="text-[#6b4fa0] mb-4 text-sm"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", lineHeight: 1.7 }}
            >
              N=393で「このサービスで買いたいか？」を調査
            </p>

            {/* Bar chart visual */}
            {[
              { label: '3,001円以上', pct: 15.1, color: '#c8a8e9' },
              { label: '1,001〜3,000円', pct: 7.9, color: '#ffc8d8' },
              { label: '〜1,000円', pct: 8.9, color: '#a8e4d4' },
              { label: '購入しない', pct: 68.1, color: '#e8e8e8' },
            ].map((row, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.75rem', color: '#5a3a78' }}>
                    {row.label}
                  </span>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: '#2c1a4e' }}>
                    {row.pct}%
                  </span>
                </div>
                <div
                  className="h-3 w-full"
                  style={{
                    background: '#e8e0f4',
                    boxShadow: 'inset 1px 1px 0 #c8b8e8',
                  }}
                >
                  <div
                    className="h-full"
                    style={{
                      width: `${row.pct}%`,
                      background: row.color,
                      boxShadow: 'inset -1px -1px 0 rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              </div>
            ))}

            <div
              className="mt-5 p-3"
              style={{
                background: '#e4d4ff',
                ...w95.raised,
              }}
            >
              <p
                className="text-[#2c1a4e]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                → 約32%（3人に1人）が<span style={{ color: '#9d7fd4' }}>「買う」</span>と回答
              </p>
            </div>
          </div>
        </div>

        {/* K-POP + bubble callouts */}
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              Icon: Music,
              iconColor: '#8070b8',
              title: '練習動画が公式MVを超える',
              body: 'K-POPでは練習映像が人気すぎて、カムバック直後はあえて公開しないほど。「素」には確かな需要がある。',
              color: '#f0f0ff',
            },
            {
              Icon: MessageCircle,
              iconColor: '#c888a8',
              title: '雑談・素の配信が投げ銭の中心',
              body: '飾らない時間ほど稼いでいる。約68%が推し活を「自己投資」と捉えている（Liume調査）。',
              color: '#fff0fc',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex gap-4 p-5"
              style={{
                background: card.color,
                ...w95.panel,
              }}
            >
              <card.Icon size={28} strokeWidth={1.5} color={card.iconColor} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div
                  className="mb-1 text-[#2c1a4e]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}
                >
                  {card.title}
                </div>
                <div
                  className="text-[#6b4fa0]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.82rem', lineHeight: 1.7 }}
                >
                  {card.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-12 text-[#2c1a4e]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          "素"には、確かに需要がある。<br />
          <span style={{ color: '#9d7fd4' }}>あとは出品するだけ。</span>
        </p>
      </div>
    </section>
  );
}
