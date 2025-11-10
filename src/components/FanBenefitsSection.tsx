import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, TrendingUp, Crown, Users } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: '世界に1つだけ。誰も見たことのない特別な瞬間を独占',
    description: '完成品は全員が聴けるが、各区間の制作過程は世界に1人だけが所有できる数量限定グッズ。「この曲のサビがどう生まれたか」を知っているのは、あなただけ。複製不可能なオンリーワングッズ。',
  },
  {
    icon: TrendingUp,
    title: '作品がバズったら、NFTの価値も上昇',
    description: 'あなたが支援した楽曲が人気になれば、その制作過程動画のNFTも価値が上がる可能性。世界で一つだけでもう手に入ることがないから、将来的な資産になります。',
  },
  {
    icon: Crown,
    title: '「古参」の証明が、永遠に残る',
    description: 'ブロックチェーンに刻まれた支援証明は、誰も消せない。有名になった後に「実は昔から応援してた」は誰でも言えるが、あなたには証拠がある。',
  },
  {
    icon: Users,
    title: 'クリエイターとの深い繋がり',
    description: 'あなたの支援が、具体的に「この部分の制作」を生み出した。単なるファンではなく、作品の誕生に関わったパートナーとしての実感。',
  },
];

export function FanBenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/30 to-[#1a1a2e]/50">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#d4a574] blur-[140px] rounded-full" />
      </div>

      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.03]">
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
          className="text-center mb-12"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            ファンが本当に買う理由
          </h2>
          <p className="text-[#8a8a9e] text-lg max-w-3xl mx-auto leading-relaxed">
            単なる「支援」ではない。ワクワクする体験と、将来の可能性を手に入れる
          </p>
        </motion.div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-8 group hover:border-[#d4a574]/40 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5 mb-6 group-hover:bg-[#d4a574]/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#d4a574]" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-4">{benefit.title}</h3>
                <p className="text-[#8a8a9e] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to emotion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto border-t border-[#d4a574]/20 pt-12"
        >
          <p className="text-[#d4a574] text-2xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            「推しが有名になる前から支援していた証拠」が、一生残る
          </p>
          <p className="text-[#8a8a9e] text-lg leading-relaxed">
            あなたのファンは、単なる「いいね」では満足できない。<br />
            もっと深く、もっと特別な形で、あなたの創作に関わりたいと思っています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}