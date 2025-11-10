import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Users, Lightbulb, Repeat, Globe } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';

const benefits = [
  {
    icon: Shield,
    title: '人間が時間をかけて作った証明',
    description: 'タイムラプス動画は、あなたが実際に時間をかけて制作した証明。AI生成ではない、人間の手による創作であることを明確に示せます。制作過程の記録が、作品の価値と信頼性を高めます。',
  },
  {
    icon: Users,
    title: '自分のファン以外にも販売機会',
    description: '既存のファンだけでなく、Lapsellを使う他のクリエイターの熱量の高いファンにも販売可能。アプリ内SNSで制作過程を共有し、質の高いファンコミュニティで新しい支援者と出会えます。より広い市場にアクセスでき、収益機会が大幅に拡大します。',
  },
  {
    icon: Lightbulb,
    title: '制作過程を商品化できる',
    description: '今まで価値を見出されていなかった制作過程が、商品になります。制作過程は面白い。それだけでひとつの作品です。試行錯誤、迷い、ひらめきの瞬間。その全てに価値があります。',
  },
  {
    icon: Repeat,
    title: '2次流通でも継続的なロイヤリティ',
    description: 'ファンが制作過程動画を転売しても、あなたにロイヤリティが自動的に支払われます。一度制作した動画が、継続的に収益を生み出す資産になります。',
  },
  {
    icon: Globe,
    title: 'グローバルな販売が可能',
    description: '制作過程はノンバーバルなので、言語の壁を超えて世界中に届けられます。ブロックチェーン技術により、世界中のファンに直接販売可能。地域に縛られない収益機会が広がります。',
  },
];

export function CreatorBenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/20 to-[#0a0a0f]">
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
            Lapsellで実現できること
          </h2>
          <p className="text-[#8a8a9e] text-lg max-w-3xl mx-auto leading-relaxed">
            従来の配信プラットフォームにはない、クリエイターのための新しい収益モデル
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <FeatureCard
              key={idx}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              isInView={isInView}
              delay={idx * 0.1}
            />
          ))}
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
              制作する時間が、そのまま収益になる
            </p>
            <p className="text-[#8a8a9e] text-lg leading-relaxed">
              もう完成を待つ必要はありません。創作している今この瞬間から、<br />
              あなたの時間と情熱に価値が生まれます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

