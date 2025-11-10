import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Eye, Heart, Shield, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Eye,
    stat: '78%',
    description: 'のファンが「舞台裏や制作中の独占コンテンツ」が絆を深めると感じている',
    source: '※ Fan Circles調査 2025',
  },
  {
    icon: Heart,
    stat: '81%',
    description: 'が好きなクリエイターの「制作過程を見たい」と回答',
    source: '※ 独自アンケート調査',
  },
  {
    icon: Shield,
    stat: '62%',
    description: 'が「自分の支援による貢献の証拠」を重視すると回答',
    source: '※ 独自アンケート調査',
  },
  {
    icon: TrendingUp,
    stat: '57%',
    description: 'が制作過程動画に1,000円以上支払う意向を示している',
    source: '※ 独自アンケート調査',
  },
];

export function WhyItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-[#1a1a2e]/30">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#d4a574 1px, transparent 1px), linear-gradient(90deg, #d4a574 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            なぜ、<span className="text-[#d4a574]">制作過程動画</span>が売れるのか
          </h2>
          <p className="text-[#8a8a9e] text-lg max-w-3xl mx-auto leading-relaxed">
            ファンは舞台裏を見たいと思っているが、<br />
            それを適切に収益化できるプラットフォームがなかった
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative border border-[#d4a574]/20 bg-[#0a0a0f]/80 backdrop-blur-sm p-8"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5 mb-6">
                  <Icon className="w-6 h-6 text-[#d4a574]" />
                </div>

                {/* Stat */}
                <div className="text-5xl text-[#d4a574] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {reason.stat}
                </div>

                {/* Description */}
                <p className="text-[#e8e8ed] text-lg mb-3 leading-relaxed">
                  {reason.description}
                </p>

                {/* Source */}
                <p className="text-[#8a8a9e] text-sm">
                  {reason.source}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="border-t border-b border-[#d4a574]/30 py-12">
            <h3 className="text-2xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              需要はあるのに、誰も収益化できていなかった
            </h3>
            <div className="space-y-4 text-[#8a8a9e] text-lg leading-relaxed">
              <p>
                日常の練習風景や地道な制作過程は、YouTubeやSNSではマネタイズしにくい。<br />
                クリエイターの42.9%が「対価が3,000円未満なら制作過程を公開しない」と回答。
              </p>
              <p className="pt-4">
                Lapsellでは、1曲あたり平均15,840円の収益が見込め、<br />
                クリエイターが安心して制作過程を公開できる仕組みを実現。
              </p>
              <p className="text-[#d4a574] pt-4">
                AI時代だからこそ、「人が時間をかけて作った証明」に価値がある
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
