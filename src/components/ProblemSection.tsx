import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock, PlayCircle } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';

const problems = [
  {
    icon: Clock,
    title: 'AIに数秒でできることに、何時間もかける意味があるのか',
    description: '朝から晩まで創作に没頭し、細部にこだわって完成させた作品。でもAIなら数秒で「それっぽい」ものができてしまう。AIが量産した作品も、魂を込めて作った作品も、同じ土俵で評価される。「どれだけ時間をかけたか」「どんな想いで作ったか」は、誰も知らない。',
  },
  {
    icon: PlayCircle,
    title: '制作過程を配信しているけど収益が出ない',
    description: '動画配信プラットフォームで制作過程を配信しても、広告収益は微々たるもの。視聴者数が伸びず、収益化の条件すら満たせない。時間をかけて配信しても、報われない現実に疲弊している。',
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#d4a574] blur-[120px] rounded-full" />
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#e8e8ed 1px, transparent 1px), linear-gradient(90deg, #e8e8ed 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            生成AIの台頭で、<br />
            こんな悩みを抱えていませんか？
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, idx) => (
            <FeatureCard
              key={idx}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              isInView={isInView}
              delay={idx * 0.15}
            />
          ))}
        </div>

        {/* Empathy statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mt-32"
        >
          <div className="border-t border-b border-[#d4a574]/30 py-12">
            <p className="text-xl text-[#d4a574] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              でも、諦める必要はない
            </p>
            <p className="text-[#8a8a9e] text-lg leading-relaxed">
              AI時代だからこそ、「人が時間をかけて作った証明」に価値が生まれる。<br />
              あなたの作品の制作過程そのものが、誰にも真似できない唯一無二のコンテンツになる。
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}