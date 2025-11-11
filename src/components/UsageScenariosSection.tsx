import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { QrCode, KeyRound, Heart } from 'lucide-react';

export function UsageScenariosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scenarios = [
    {
      icon: QrCode,
      title: '作品の横にQRコードを置く',
      description: '展示会やギャラリーで、あなたの作品の横にQRコードを設置。訪れた人が気軽にスマホでスキャンして、その場で制作過程動画を購入できます。作品への興味が高まった瞬間を逃さず、収益化のチャンスを生み出します。',
      image: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?w=800&auto=format&fit=crop',
      imageAlt: 'ギャラリーに展示された作品とQRコード',
    },
    {
      icon: KeyRound,
      title: 'キーホルダーにつける',
      description: 'QRコード付きのオシャレなキーホルダーを作成。イベントやライブ会場で配布したり、グッズとして販売。ファンはいつでも持ち歩けて、友達にも見せられる特別なアイテムに。物理的なグッズとデジタル体験を融合させた新しい応援の形です。',
      image: 'https://images.unsplash.com/photo-1601523938453-2b61d4d6df38?w=800&auto=format&fit=crop',
      imageAlt: 'QRコード付きキーホルダー',
    },
    {
      icon: Heart,
      title: '次の作品の支援を募る',
      description: '新作の制作を開始する前に、SNSでQRコードを共有。完成前から応援してくれるファンに、制作過程の最初の瞬間から記録された特別な動画を届けます。クラウドファンディングのように、制作費の調達と同時にコミュニティも育てられます。',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop',
      imageAlt: 'SNSでシェアされたQRコードと応援メッセージ',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]/20">
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
            使い方の<span className="text-[#d4a574]">シナリオ</span>
          </h2>
          <p className="text-[#8a8a9e] text-lg leading-relaxed max-w-3xl mx-auto">
            Lapsellは様々なシーンで、あなたの創作活動をサポートします
          </p>
        </motion.div>

        <div className="space-y-20">
          {scenarios.map((scenario, idx) => {
            const Icon = scenario.icon;
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a574] to-[#8a8a9e] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a2e]">
                      <img
                        src={scenario.image}
                        alt={scenario.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#d4a574]" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[#d4a574]/60 text-sm font-medium mb-2">
                        シナリオ {idx + 1}
                      </div>
                      <h3 
                        className="text-2xl lg:text-3xl mb-4 text-[#e8e8ed]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                      >
                        {scenario.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[#8a8a9e] text-lg leading-relaxed pl-22 lg:pl-22">
                    {scenario.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4a574]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8a8a9e]/5 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}

