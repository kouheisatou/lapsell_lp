import React, { useState, useEffect } from 'react';
import { w95 } from './win95';

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between gap-4"
      style={{
        background: '#f5eeff',
        borderTop: '2px solid #c8b8e8',
        boxShadow: '0 -3px 0 #b0a0d0',
      }}
    >
      <p
        className="hidden sm:block text-[#2c1a4e]"
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontWeight: 700,
          fontSize: '0.88rem',
        }}
      >
        練習の時間を収益に。初期費用0円で始められます。
      </p>
      <div className="flex gap-3 ml-auto">
        <a
          href="#contact"
          className="inline-flex items-center gap-1 px-4 py-2 text-[#6b4fa0] text-sm cursor-pointer"
          style={{
            ...w95.raised,
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 500,
            textDecoration: 'none',
            background: '#f0e8ff',
          }}
        >
          資料を受け取る
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 px-5 py-2 bg-[#c8a8e9] text-white text-sm cursor-pointer"
          style={{
            ...w95.btn,
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          ✦ 無料ではじめる
        </a>
      </div>
    </div>
  );
}
