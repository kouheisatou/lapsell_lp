import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { QrCode, KeyRound, Sparkles } from 'lucide-react';

const scenarios = [
  {
    icon: QrCode,
    title: '作品の横にQRコードを置く',
    story: 'ライブ会場やギャラリーで作品を展示する際、制作過程動画のQRコードを添えて。完成作品と制作過程を同時に体験できる特別な展示に。',
    example: '「この曲、どうやって作ったの？」→「QRコードで制作過程が見れるよ！」',
  },
  {
    icon: KeyRound,
    title: 'キーホルダーにつける',
    story: '制作過程動画のQRコードをキーホルダーやアクリルスタンドに印刷。持ち歩ける推し活グッズとして、いつでもどこでも特別な瞬間を所有できる。',
    example: '物理グッズ × デジタルコンテンツの新しい形。グッズとして配布、販売も可能。',
  },
  {
    icon: Sparkles,
    title: '次の作品の支援を募る',
    story: '新作の制作予定を告知して、事前にオークションで支援を募集。制作前に資金を確保でき、ファンは「これから生まれる作品」に投資する特別な体験を。',
    example: '「明日20時から新曲制作！各10分の制作過程を事前販売中」→確実な収益で安心して創作に集中。',
  },
];

export function UsageScenariosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e]/40 to-[#0a0a0f]">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a574] blur-[150px] rounded-full" />
      </div>

      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            <span className="text-[#d4a574]">使い方のシナリオ</span>
          </h2>
          <p className="text-[#8a8a9e] text-lg max-w-3xl mx-auto leading-relaxed">
            制作過程動画を、あなたのスタイルで活用する
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {scenarios.map((scenario, idx) => {
            const Icon = scenario.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5">
                    <Icon className="w-8 h-8 text-[#d4a574]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {scenario.title}
                    </h3>
                    <p className="text-[#e8e8ed] leading-relaxed mb-4">
                      {scenario.story}
                    </p>
                    <div className="border-l-2 border-[#d4a574]/30 pl-4">
                      <p className="text-[#8a8a9e] text-sm italic">
                        {scenario.example}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mt-20"
        >
          <div className="border-t border-b border-[#d4a574]/30 py-12">
            <p className="text-xl text-[#d4a574] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              あなたのクリエイティブに合わせて、自由に活用できる
            </p>
            <p className="text-[#8a8a9e] text-lg leading-relaxed">
              制作過程動画は、単なるデジタルコンテンツではありません。<br />
              物理グッズと組み合わせたり、イベントで活用したり、使い方は無限大。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
