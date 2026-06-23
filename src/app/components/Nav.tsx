import React, { useState, useEffect } from 'react';
import { w95, pixel } from './win95';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? '#f5eeff' : '#faf7ff',
        borderBottom: '2px solid #c8b8e8',
        boxShadow: scrolled ? '0 2px 0 #b0a0d0' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" style={{ textDecoration: 'none' }}>
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{
              background: '#c8a8e9',
              ...w95.raised,
            }}
          >
            <span style={{ fontSize: '10px' }} className={pixel + ' text-white leading-none'}>L</span>
          </div>
          <span
            className={pixel + ' text-[#2c1a4e]'}
            style={{ fontSize: '11px', letterSpacing: '0.05em' }}
          >
            Lapsell
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: '仕組み', href: '#how' },
            { label: '料金', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#6b4fa0] hover:text-[#2c1a4e] transition-colors text-sm"
              style={{ textDecoration: 'none', fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center px-4 py-2 bg-[#c8a8e9] text-white text-xs cursor-pointer active:translate-y-[1px]"
          style={{
            ...w95.btn,
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          無料で出品をはじめる
        </a>
      </div>
    </nav>
  );
}
