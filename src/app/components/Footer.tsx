import React from 'react';
import { w95 } from './win95';

export function Footer() {
  return (
    <footer
      className="px-6 py-10"
      style={{
        background: '#1e0d3c',
        borderTop: '3px solid #c8a8e9',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 flex items-center justify-center"
                style={{
                  background: '#c8a8e9',
                  ...w95.raised,
                }}
              >
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px', color: 'white' }}>L</span>
              </div>
              <span
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '10px',
                  color: '#e4c8ff',
                  letterSpacing: '0.05em',
                }}
              >
                Lapsell
              </span>
            </div>
            <p
              className="text-[#9d7fd4]"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '0.82rem',
                lineHeight: 1.6,
                maxWidth: '220px',
              }}
            >
              練習の時間を、収益に変える。<br />アイドル・アーティスト向けグッズ販売プラットフォーム。
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            <div>
              <div
                className="mb-3"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '7px',
                  color: '#c8a8e9',
                  letterSpacing: '0.1em',
                }}
              >
                MENU
              </div>
              {['仕組み', '料金', 'FAQ', 'お問い合わせ'].map((item, i) => (
                <a
                  key={i}
                  href={`#${['how', 'pricing', 'faq', 'contact'][i]}`}
                  className="block mb-2"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '0.82rem',
                    color: '#9d7fd4',
                    textDecoration: 'none',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
            <div>
              <div
                className="mb-3"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '7px',
                  color: '#c8a8e9',
                  letterSpacing: '0.1em',
                }}
              >
                LEGAL
              </div>
              {['利用規約', 'プライバシーポリシー', '特定商取引法に基づく表記'].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '0.82rem',
                    color: '#9d7fd4',
                    textDecoration: 'none',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid #3a2060' }}
        >
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: '0.75rem',
              color: '#6b4fa0',
            }}
          >
            © 2025 Lapsell. All rights reserved.
          </p>
          <div
            className="px-3 py-1"
            style={{
              background: '#2c1a4e',
              ...w95.raised,
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '6px',
              color: '#c8a8e9',
            }}
          >
            MADE WITH ♥ IN JAPAN
          </div>
        </div>
      </div>
    </footer>
  );
}
