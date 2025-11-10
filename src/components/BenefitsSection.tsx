import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import waveBackground from '/images/sound_wave_visualization.png';

const benefits = [
  {
    title: '新しい収益源の確立',
    description: 'ストリーミング配信だけに頼らない、安定した収入モデル。制作過程を見たいファンから直接支援を受けられます。',
  },
  {
    title: '深いファンとの繋がり',
    description: '完成品だけでなく、制作の苦悩や喜びを共有することで、より強固なコミュニティが生まれます。',
  },
  {
    title: '創作の透明性',
    description: 'AI生成ではない証明。あなたの手で、時間をかけて作られた作品であることを明確に示せます。',
  },
  {
    title: '教育コンテンツとしての価値',
    description: '制作過程そのものが、創作を学ぶ人々にとっての貴重な教材に。新たな価値提供が可能になります。',
  },
];

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f]">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/2 right-1/3 w-[700px] h-[700px] bg-[#d4a574] blur-[130px] rounded-full" />
      </div>

      {/* Wave visualization background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <ImageWithFallback
          src={waveBackground}
          alt="Sound waves"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vertical timeline gauge on right */}
      <div className="absolute right-20 top-32 bottom-32 w-1 bg-[#1a1a2e]">
        <motion.div
          initial={{ height: '0%' }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="w-full bg-gradient-to-b from-[#d4a574] to-[#d4a574]/20"
        />
      </div>

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-32 text-[clamp(2rem,4vw,3.5rem)]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          クリエイターが得られる価値
        </motion.h2>

        <div className="space-y-20">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex items-start gap-8 pr-32"
            >
              {/* Timeline marker */}
              <div className="flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#d4a574] shadow-[0_0_20px_rgba(212,165,116,0.5)]" />
              </div>

              {/* Content */}
              <div className="flex-1 border-l border-[#d4a574]/20 pl-8 pb-8 -ml-[1px]">
                <h3 className="text-xl mb-4">{benefit.title}</h3>
                <p className="text-[#8a8a9e] text-lg leading-relaxed max-w-2xl">
                  {benefit.description}
                </p>
              </div>

              {/* Connecting line */}
              {idx < benefits.length - 1 && (
                <div className="absolute left-[5px] top-12 bottom-0 w-px bg-[#d4a574]/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ImageWithFallback } from './figma/ImageWithFallback';
