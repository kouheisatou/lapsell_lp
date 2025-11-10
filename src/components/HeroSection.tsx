import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroBackground from '/images/music_production_studio_dark.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroBackground}
          alt="Music Production Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/60" />
      </div>

      {/* Timeline on right edge */}
      <div className="absolute right-8 top-1/4 bottom-1/4 flex flex-col justify-center items-center z-10">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#d4a574]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-8 max-w-7xl">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            あなたの音楽制作の<br />
            <span className="text-[#d4a574]">模索を売りませんか？</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#8a8a9e] text-lg mb-12 max-w-2xl"
          >
            AI音楽に埋もれない。<br />
            制作過程を世界に1つだけのグッズとして販売できるプラットフォーム
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 border-2 border-[#d4a574] text-[#d4a574] bg-transparent hover:bg-[#d4a574] hover:text-[#0a0a0f] transition-all duration-300"
          >
            無料で始める
          </motion.button>
        </div>
      </div>
    </section>
  );
}