import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Video, CheckCircle, ShoppingCart, Repeat, ArrowDown } from 'lucide-react';
import { ServiceFlowDiagram } from './ServiceFlowDiagram';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/20 to-[#0a0a0f]">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/2 right-1/4 w-[700px] h-[700px] bg-[#d4a574] blur-[130px] rounded-full" />
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
            Lapsellでは、作品の制作動画を<br />
            <span className="text-[#d4a574]">世界に1つだけのグッズとして販売できます</span>
          </h2>
          <p className="text-[#8a8a9e] text-lg leading-relaxed mb-2">
            試行錯誤の過程をタイムラプス動画として記録し、完成した作品と紐づけて販売。<br />
            ファンはあなたの創作プロセスに触れられる、世界に1つだけのデジタルグッズを手に入れられます。
          </p>

          {/* Service Flow Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-2"
          >
            <ServiceFlowDiagram />
          </motion.div>
        </motion.div>

        {/* Usage Steps */}
        <UsageSteps isInView={isInView} />
      </div>
    </section>
  );
}

function UsageSteps({ isInView }: { isInView: boolean }) {
  const steps = [
    {
      icon: Video,
      title: '制作（録画）',
      description: 'Lapsellアプリで制作を開始。録画ボタンを押すだけで、制作過程が自動的にタイムラプス動画として記録され、クラウドにアップロードされます。',
    },
    {
      icon: CheckCircle,
      title: '作品完成',
      description: '作品が完成したら、録画を停止。制作過程動画が自動的に10分単位に分割され、各区間が世界に1つだけのグッズとして準備完了します。',
    },
    {
      icon: ShoppingCart,
      title: '販売',
      description: 'イベント会場やSNSでLapsellのQRコードを表示。ファンが購入すると、制作過程動画と支援証明NFTが自動発行されます。',
    },
    {
      icon: Repeat,
      title: '2次流通',
      description: '購入したファンは、制作過程動画を他のファンに転売可能。転売時には、あなたに一定のロイヤリティが自動的に支払われます。',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-5xl mx-auto relative"
    >
      {/* Vertical connecting line */}
      <div className="absolute left-[2.5rem] top-[4rem] bottom-[4rem] w-px bg-gradient-to-b from-[#d4a574]/0 via-[#d4a574]/30 to-[#d4a574]/0 hidden md:block" />

      <div className="space-y-0">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === steps.length - 1;
          
          return (
            <div key={idx}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                className="relative"
              >
                <div className="border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-8 hover:border-[#d4a574]/40 transition-all duration-300">
                  <div className="flex items-center gap-8">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <Icon className="w-16 h-16 text-[#d4a574]" />
                    </div>

                    <div className="flex-1">
                      <h5 className="text-xl mb-3 text-[#e8e8ed]">{step.title}</h5>
                      <p className="text-[#8a8a9e] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.15 }}
                  className="flex justify-center py-4"
                >
                  <div className="flex flex-col items-center">
                    <ArrowDown className="w-6 h-6 text-[#d4a574]" />
                    <div className="w-px h-4 bg-[#d4a574]/30 mt-1" />
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
