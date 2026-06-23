import React, { useState } from 'react';
import { w95 } from './win95';

const faqs = [
  {
    q: '撮影や編集の手間はかかりますか？',
    a: 'スマホで撮るだけで完了です。編集は一切不要。練習後にアップロードするだけなので、余分な作業は発生しません。',
  },
  {
    q: '変なものが映ったらどうなりますか？',
    a: '公開前に内容を確認できます。本当にまずい瞬間だけ非公開にでき、その場合は該当する購入者に自動で返金されます。ライブ配信と違い、映像を確認してから届けられるので安心です。',
  },
  {
    q: 'ファンは本当に買いますか？',
    a: 'デジタルガチャ市場は約7,000億円規模。推し活ファンの約7割が月1万円以上支出（17LIVE調査）。自社アンケート（N=393）でも約32%が購入意向を示しています。「素」には確かな需要があります。',
  },
  {
    q: '動画がコピー・転載されませんか？',
    a: '各映像にNFT識別子と所有者情報を電子透かしとして埋め込んでいます。スクリーンショットを撮っても透かしは消えず、LapsellのサイトでいつでもO真正性を検証できます。転載されても出所と所有者を追えます。',
  },
  {
    q: '費用はかかりますか？',
    a: '初期費用は0円です。手数料は売れた分だけ（5%〜）。売れなければ一切費用はかかりません。リスクなしで始められます。',
  },
  {
    q: 'どんな人が使えますか？',
    a: '地下アイドル、インディーズの楽曲アーティスト・バンド、インディーズお笑い芸人など、生身で活動する中小・個人の作り手に特に向いています。',
  },
  {
    q: 'ファンはどこで受け取りますか？',
    a: 'Lapsellのプラットフォーム上でガチャを開けるように受け取ります。映像はダウンロードして手元に保有できます。',
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: open ? '#f0ebff' : '#f9f6ff',
        ...w95.panel,
        marginBottom: '8px',
      }}
    >
      <button
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 cursor-pointer"
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
        }}
        onClick={onToggle}
      >
        <span
          className="text-[#2c1a4e] flex-1"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: '0.95rem',
            lineHeight: 1.5,
          }}
        >
          Q. {q}
        </span>
        <span
          className="flex-shrink-0 mt-0.5"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '8px',
            color: '#9d7fd4',
            transition: 'transform 0.2s',
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        >
          ▼
        </span>
      </button>
      {open && (
        <div
          className="px-5 pb-4"
          style={{
            borderTop: '1px solid #c8b8e840',
          }}
        >
          <p
            className="text-[#5a3a78] pt-3"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: '0.88rem',
              lineHeight: 1.8,
            }}
          >
            A. {a}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 px-6"
      style={{ background: '#faf7ff' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#9d7fd4',
              letterSpacing: '0.12em',
            }}
          >
            FAQ
          </span>
        </div>

        <h2
          className="text-center mb-12 text-[#2c1a4e]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            lineHeight: 1.4,
          }}
        >
          よくある質問
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
