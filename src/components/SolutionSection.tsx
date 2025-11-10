import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Lapsellは、楽曲の制作動画を<br />
            <span className="text-[#d4a574]">世界に1つだけのグッズとして販売できる</span><br />
            新しいプラットフォーム
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
