import React from 'react';
import { Coins, Star, Megaphone, Shield, Lightbulb } from 'lucide-react';
import { w95 } from './win95';

const IMG_STAGE = 'https://images.unsplash.com/photo-1571173069043-82a7a13cee9f?w=700&q=80&auto=format&fit=crop';
const IMG_CONCERT = 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=80&auto=format&fit=crop';
const IMG_SINGER = 'https://images.unsplash.com/photo-1579539760267-b2e78d9d735e?w=700&q=80&auto=format&fit=crop';
const IMG_CROWD2 = 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=700&q=80&auto=format&fit=crop';

const benefits = [
  {
    num: '01',
    Icon: Coins,
    iconColor: '#9d7fd4',
    title: 'お金にならなかった時間が、収益になる',
    body: '捨てていた練習・裏側が、そのまま新しい収益源に。初期費用0円、撮るだけ。手間も最小、リスクもゼロ。',
    image: IMG_STAGE,
    alt: 'ステージに立つパフォーマー',
    color: '#f5f0ff',
    reverse: false,
  },
  {
    num: '02',
    Icon: Star,
    iconColor: '#c888a8',
    title: '「自分が育てた」とファンに思ってもらえる',
    body: 'もし、結成11年目でブレイクしたアーティストの"下積み時代の練習風景"を、ファンが一点ものとして持っていたら？小さい"今"だからこそ、将来の価値上昇を見込んでファンが買う。',
    image: IMG_CONCERT,
    alt: 'コンサートの様子',
    color: '#fff5f9',
    reverse: true,
    highlight: '参考：M!LKは結成11年目でブレイク。「イイじゃん」3,000万再生→2025年末 紅白初出場。',
  },
  {
    num: '03',
    Icon: Megaphone,
    iconColor: '#60b090',
    title: '自然に拡散され、宣伝になる（※副次的）',
    body: '「あたり」を引いたファンは、それを拡散したくなる。出れば界隈の外まで広がり、新規ファンを呼ぶ。ただし拡散はオマケ。コアは収益化と将来価値。',
    image: IMG_CROWD2,
    alt: 'ファンの歓声',
    color: '#f0fcf7',
    reverse: false,
  },
  {
    num: '04',
    Icon: Shield,
    iconColor: '#d4a060',
    title: '配信事故を、事前に防げる',
    body: 'ライブ配信と違い撮影後にアップロード。公開前に内容を確認できるので、まずい瞬間は世に出ない。安心して「素」の時間を収益化できます。',
    image: IMG_SINGER,
    alt: 'ステージで歌うアーティスト',
    color: '#fffbf0',
    reverse: true,
  },
];

export function Benefits() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: '#faf7ff' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#9d7fd4',
              letterSpacing: '0.12em',
            }}
          >
            BENEFITS
          </span>
        </div>

        <h2
          className="text-center mb-16 text-[#2c1a4e]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            lineHeight: 1.4,
          }}
        >
          導入で得られる4つのこと
        </h2>

        <div className="space-y-20">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 items-center ${b.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div
                className="p-1"
                style={{ ...w95.raised }}
              >
                <img
                  src={b.image}
                  alt={b.alt}
                  className="w-full"
                  style={{ display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>

              {/* Text */}
              <div
                className="p-6"
                style={{
                  background: b.color,
                  ...w95.panel,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '9px',
                      color: '#8070b8',
                      opacity: 0.6,
                    }}
                  >
                    {b.num}
                  </span>
                  <b.Icon size={24} strokeWidth={1.5} color={b.iconColor} />
                </div>
                <h3
                  className="mb-4 text-[#2c1a4e]"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    lineHeight: 1.5,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[#5a3a78] mb-4"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '0.92rem',
                    lineHeight: 1.8,
                  }}
                >
                  {b.body}
                </p>
                {b.highlight && (
                  <div
                    className="p-3 text-sm flex items-start gap-2"
                    style={{
                      background: '#ede6ff',
                      boxShadow: 'inset 2px 2px 0 #c8b8e8',
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: '0.78rem',
                      color: '#6b4fa0',
                      lineHeight: 1.6,
                    }}
                  >
                    <Lightbulb size={14} strokeWidth={1.5} color="#9d7fd4" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{b.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8a8e9] text-white cursor-pointer"
            style={{
              ...w95.btn,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            このメリットを、無料で試す
          </a>
        </div>
      </div>
    </section>
  );
}
