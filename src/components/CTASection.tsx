import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import copperTexture from '/images/abstract_copper_texture.png';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle video-like effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src={copperTexture}
            alt="Background texture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4a574]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            世界の音楽の<br />
            <span className="text-[#d4a574]">多様性を守る</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#8a8a9e] text-xl mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          時間をかけて制作する人が減少すれば、世界の音楽は画一化してしまう。<br />
          私たちは、AIを使わずに新しい音楽を生み出すクリエイターを応援します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-5 bg-[#d4a574] text-[#0a0a0f] hover:bg-[#e8b888] transition-all duration-300 text-lg"
          >
            無料で始める
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-5 border-2 border-[#d4a574] text-[#d4a574] bg-transparent hover:bg-[#d4a574]/10 transition-all duration-300 text-lg"
          >
            詳しく見る
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}