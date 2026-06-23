import React, { useState } from 'react';
import { w95 } from './win95';

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: '#f5eeff' }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#9d7fd4',
              letterSpacing: '0.12em',
            }}
          >
            CONTACT
          </span>
        </div>

        <h2
          className="text-center mb-4 text-[#2c1a4e]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            lineHeight: 1.4,
          }}
        >
          お問い合わせ・資料請求
        </h2>

        <p
          className="text-center mb-10 text-[#6b4fa0]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '0.95rem',
            lineHeight: 1.8,
          }}
        >
          無料登録・資料請求はこちらから。<br />
          担当者より2営業日以内にご連絡いたします。
        </p>

        {sent ? (
          <div
            className="p-10 text-center"
            style={{
              background: '#c8f0e4',
              ...w95.raised,
            }}
          >
            <div className="text-4xl mb-4">✅</div>
            <h3
              className="mb-2 text-[#2c1a4e]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '1.2rem' }}
            >
              送信しました！
            </h3>
            <p
              className="text-[#5a3a78]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.9rem', lineHeight: 1.7 }}
            >
              担当者より2営業日以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            style={{
              background: '#f9f5ff',
              ...w95.raised,
              padding: '32px',
            }}
          >
            <div>
              <label
                className="block mb-1 text-[#2c1a4e]"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.88rem' }}
              >
                お名前・グループ名
              </label>
              <input
                type="text"
                required
                placeholder="例：〇〇（地下アイドル）"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full px-3 py-2 text-[#2c1a4e]"
                style={{
                  background: '#ffffff',
                  boxShadow: 'inset 2px 2px 0px #a090c8, inset -1px -1px 0px #e8e0f8',
                  border: '1px solid #c8b8e8',
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label
                className="block mb-1 text-[#2c1a4e]"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.88rem' }}
              >
                メールアドレス
              </label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full px-3 py-2 text-[#2c1a4e]"
                style={{
                  background: '#ffffff',
                  boxShadow: 'inset 2px 2px 0px #a090c8, inset -1px -1px 0px #e8e0f8',
                  border: '1px solid #c8b8e8',
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label
                className="block mb-1 text-[#2c1a4e]"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.88rem' }}
              >
                活動ジャンル
              </label>
              <select
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                className="w-full px-3 py-2 text-[#2c1a4e]"
                style={{
                  background: '#ffffff',
                  boxShadow: 'inset 2px 2px 0px #a090c8, inset -1px -1px 0px #e8e0f8',
                  border: '1px solid #c8b8e8',
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              >
                <option value="">選択してください</option>
                <option value="idol">地下アイドル</option>
                <option value="artist">インディーズアーティスト・バンド</option>
                <option value="comedian">インディーズお笑い芸人</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label
                className="block mb-1 text-[#2c1a4e]"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '0.88rem' }}
              >
                お問い合わせ内容（任意）
              </label>
              <textarea
                rows={4}
                placeholder="ご質問・ご要望などをご記入ください"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full px-3 py-2 text-[#2c1a4e] resize-none"
                style={{
                  background: '#ffffff',
                  boxShadow: 'inset 2px 2px 0px #a090c8, inset -1px -1px 0px #e8e0f8',
                  border: '1px solid #c8b8e8',
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#c8a8e9] text-white cursor-pointer active:translate-y-[2px] transition-transform"
                style={{
                  ...w95.btn,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                }}
              >
                無料で登録して、はじめる ✦
              </button>
            </div>

            <p
              className="text-center text-[#9d7fd4]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.75rem' }}
            >
              登録は無料です。いつでも退会できます。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
