import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'AIに数秒でできることに、何時間もかける意味があるのか',
    description: '朝から晩まで音作りに没頭し、細部にこだわって完成させた楽曲。でもAIなら数秒で「それっぽい」ものができてしまう。AIが量産した楽曲も、魂を込めて作った楽曲も、同じ土俵で評価される。「どれだけ時間をかけたか」「どんな想いで作ったか」は、誰も知らない。',
  },
  {
    icon: TrendingDown,
    title: '曲が完成するまで収益が発生しない',
    description: 'ストリーミングの収益は楽曲がリリースされてから。制作期間中は収入ゼロで、生活のために副業が必須。本業の合間に音楽を作る生活が続き、いつしか「音楽で食べていく」夢を諦めかけている。',
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

      <div className="container mx-auto px-8 max-w-4xl relative z-10">
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
            時間をかけて音楽を作る意味を、<br />
            <span className="text-[#d4a574]">見失いそうになっていませんか？</span>
          </h2>
          <p className="text-[#8a8a9e] text-lg max-w-3xl mx-auto leading-relaxed">
            AI生成楽曲の台頭で、音楽クリエイターが直面している葛藤
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5">
                  <Icon className="w-8 h-8 text-[#d4a574]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl mb-3 leading-relaxed">{problem.title}</h3>
                  <p className="text-[#8a8a9e] leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            );
          })}
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
              あなたの制作過程そのものが、誰にも真似できない唯一無二のコンテンツになる。
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}