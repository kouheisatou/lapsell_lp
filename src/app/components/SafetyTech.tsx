import React from 'react';
import { Smartphone, Search, CheckCircle, Ban, HardDrive, Lock } from 'lucide-react';
import { w95 } from './win95';

export function SafetyTech() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: '#f5eeff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Safety */}
        <div className="mb-24">
          <div className="text-center mb-4">
            <span
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '8px',
                color: '#9d7fd4',
                letterSpacing: '0.12em',
              }}
            >
              SAFETY
            </span>
          </div>

          <h2
            className="text-center mb-4 text-[#2c1a4e]"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              lineHeight: 1.4,
            }}
          >
            事故の瞬間だけを省いて、<br />偶然の名場面は届ける。
          </h2>

          <p
            className="text-center mb-12 text-[#6b4fa0] max-w-md mx-auto"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.8,
            }}
          >
            「配信事故が怖い」という不安を、<br />仕組みで解決します。
          </p>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-center max-w-4xl mx-auto">
            {/* Step 1 */}
            <div
              className="p-4 text-center w-full md:w-48 flex-shrink-0"
              style={{
                background: '#e4d4ff',
                ...w95.raised,
              }}
            >
              <div className="flex justify-center mb-2">
                <Smartphone size={28} strokeWidth={1.5} color="#8070b8" />
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#2c1a4e' }}>
                撮影した練習
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.75rem', color: '#6b4fa0', marginTop: '4px' }}>
                当日スマホで撮るだけ
              </div>
            </div>

            <div className="text-[#9d7fd4] text-2xl md:rotate-0 rotate-90 flex-shrink-0 mx-2">→</div>

            {/* Step 2: Check */}
            <div
              className="p-4 text-center w-full md:w-52 flex-shrink-0"
              style={{
                background: '#c8a8e9',
                ...w95.raised,
              }}
            >
              <div className="flex justify-center mb-2">
                <Search size={28} strokeWidth={1.5} color="white" />
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>
                公開前チェック
              </div>
              <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.75rem', color: '#e8d8ff', marginTop: '4px' }}>
                内容を確認できる
              </div>
            </div>

            <div className="text-[#9d7fd4] text-2xl md:rotate-0 rotate-90 flex-shrink-0 mx-2">→</div>

            {/* Outcome split */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <div
                className="p-3 text-center"
                style={{
                  background: '#c8f0e4',
                  ...w95.raised,
                  minWidth: '180px',
                }}
              >
                <div className="flex justify-center mb-1">
                  <CheckCircle size={22} strokeWidth={1.5} color="#60b090" />
                </div>
                <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: '#2c1a4e' }}>
                  日常も名場面もそのまま届く
                </div>
              </div>
              <div
                className="p-3 text-center"
                style={{
                  background: '#ffd6e7',
                  ...w95.raised,
                  minWidth: '180px',
                }}
              >
                <div className="flex justify-center mb-1">
                  <Ban size={22} strokeWidth={1.5} color="#c888a8" />
                </div>
                <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: '#2c1a4e' }}>
                  本当の"事故"だけ非公開＋返金
                </div>
              </div>
            </div>
          </div>

          <p
            className="text-center mt-10 text-[#2c1a4e]"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            本当に映り込んではいけない事故の瞬間だけを、<br />
            <span style={{ color: '#9d7fd4' }}>事前に省けます。</span>
          </p>
        </div>

        {/* Tech/Ownership */}
        <div>
          <div className="text-center mb-4">
            <span
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '8px',
                color: '#9d7fd4',
                letterSpacing: '0.12em',
              }}
            >
              TECHNOLOGY
            </span>
          </div>

          <h2
            className="text-center mb-4 text-[#2c1a4e]"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              lineHeight: 1.4,
            }}
          >
            世界に1つの<span style={{ color: '#9d7fd4' }}>"本物"</span>であることを、<br />技術で担保します。
          </h2>

          <p
            className="text-center mb-12 text-[#6b4fa0] max-w-md mx-auto"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.8,
            }}
          >
            「コピーされたら？」という不安を消します。
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                Icon: HardDrive,
                iconColor: '#8070b8',
                title: 'プラットフォーム非保管設計',
                body: '動画はプラットフォームに保管しない設計。購入者がダウンロードして保有。スケールしてもコストが増えない。',
                color: '#f0f0ff',
              },
              {
                Icon: Lock,
                iconColor: '#c888a8',
                title: 'NFT識別子＋電子透かし',
                body: '各映像に所有者情報を電子透かしとして埋め込み。スクリーンショットを撮っても消えない。転載されても追える。',
                color: '#fff5f9',
              },
              {
                Icon: Search,
                iconColor: '#60b090',
                title: '誰でも本物か検証可能',
                body: 'Lapsellのサイトで「今の所有者は誰か」を誰でも確認できる。真正性が技術で保証される。',
                color: '#f0fcf7',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5"
                style={{
                  background: item.color,
                  ...w95.panel,
                }}
              >
                <div className="mb-3">
                  <item.Icon size={32} strokeWidth={1.5} color={item.iconColor} />
                </div>
                <h3
                  className="mb-2 text-[#2c1a4e]"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#5a3a78]"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '0.82rem',
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
