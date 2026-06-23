import React from 'react';
import { Sparkles, CreditCard, RefreshCw } from 'lucide-react';
import { w95 } from './win95';

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{ background: '#f5f0ff' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#9d7fd4',
              letterSpacing: '0.12em',
            }}
          >
            PRICING
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
          料金
        </h2>

        <p
          className="text-center mb-12 text-[#6b4fa0] max-w-md mx-auto"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.8,
          }}
        >
          リスクなく始められます。
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              Icon: Sparkles,
              iconColor: '#60b090',
              title: '初期費用',
              value: '0円',
              sub: '登録・導入は完全無料',
              color: '#c8f0e4',
              highlight: true,
            },
            {
              Icon: CreditCard,
              iconColor: '#8070b8',
              title: '取引手数料',
              value: '5%〜',
              sub: '売れた分だけ。導入期は低率',
              color: '#e4d4ff',
              highlight: false,
            },
            {
              Icon: RefreshCw,
              iconColor: '#c888a8',
              title: '二次流通ロイヤリティ',
              value: '本人にも還元',
              sub: '転売されるたびにアーティストにも収益',
              color: '#ffd6e7',
              highlight: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 text-center"
              style={{
                background: item.color,
                boxShadow: item.highlight
                  ? 'inset -3px -3px 0px #60b090, inset 3px 3px 0px #f0fff8, 6px 6px 0px #88c8a8'
                  : `inset -2px -2px 0px #8070b860, inset 2px 2px 0px #ffffff80, 4px 4px 0px #b0a0d040`,
                border: item.highlight ? '2px solid #88c8a8' : '1px solid #c8b8e860',
              }}
            >
              <div className="flex justify-center mb-3">
                <item.Icon size={32} strokeWidth={1.5} color={item.iconColor} />
              </div>
              <div
                className="mb-2 text-[#2c1a4e]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.85rem',
                }}
              >
                {item.title}
              </div>
              <div
                className="mb-3 text-[#2c1a4e]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                  lineHeight: 1.2,
                }}
              >
                {item.value}
              </div>
              <div
                className="text-[#5a3a78]"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: '0.8rem',
                  lineHeight: 1.6,
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        <div
          className="p-5 mb-10 max-w-2xl mx-auto"
          style={{
            background: '#ede6ff',
            ...w95.panel,
          }}
        >
          <p
            className="text-center text-[#2c1a4e]"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            売れなければ手数料はかかりません。<br />
            <span style={{ color: '#9d7fd4' }}>まず出品して、売れた分だけ手数料が発生する仕組み。</span>
          </p>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#c8a8e9] text-white cursor-pointer"
            style={{
              ...w95.btn,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            0円で出品をはじめる
          </a>
        </div>
      </div>
    </section>
  );
}
