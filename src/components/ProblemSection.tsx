import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock, TrendingDown, TrendingUp } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'AIに数秒でできることに、何時間もかける意味があるのか',
    description: '朝から晩まで音作りに没頭し、細部にこだわって完成させた楽曲。でもAIなら数秒で「それっぽい」ものができてしまう。AIが量産した楽曲も、魂を込めて作った楽曲も、同じ土俵で評価される。「どれだけ時間をかけたか」「どんな想いで作ったか」は、誰も知らない。',
    align: 'left',
  },
  {
    icon: TrendingUp,
    title: 'AI楽曲が、結構バズってしまうモヤモヤ',
    description: '過去にバズった曲の特徴を学習したAIは、ヒットの法則を組み合わせて効率よく楽曲を生成する。圧倒的に少ない労力なのに再生数が伸びていく現実に、虚しさを感じる。',
    align: 'right',
  },
  {
    icon: TrendingDown,
    title: '曲が完成するまで収益が発生しない',
    description: 'ストリーミングの収益は楽曲がリリースされてから。制作期間中は収入ゼロで、生活のために副業が必須。本業の合間に音楽を作る生活が続き、いつしか「音楽で食べていく」夢を諦めかけている。',
    align: 'left',
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#e8e8ed 1px, transparent 1px), linear-gradient(90deg, #e8e8ed 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Central timeline */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a574]/20 to-transparent" />

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
            時間をかけて音楽を作る意味を、<br />
            <span className="text-[#d4a574]">見失いそうになっていませんか？</span>
          </h2>
          <p className="text-[#8a8a9e] text-lg max-w-3xl mx-auto leading-relaxed">
            AI生成楽曲の台頭で、音楽クリエイターが直面している葛藤
          </p>
        </motion.div>

        <div className="space-y-20 mb-16">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: problem.align === 'left' ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex items-center gap-12 ${
                  problem.align === 'left' ? 'justify-start pr-[45%]' : 'justify-end pl-[45%] flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5">
                  <Icon className="w-12 h-12 text-[#d4a574]" />
                </div>

                {/* Content */}
                <div className={`flex-1 ${problem.align === 'right' ? 'text-right' : ''}`}>
                  <h3 className="text-xl mb-4 leading-relaxed">{problem.title}</h3>
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