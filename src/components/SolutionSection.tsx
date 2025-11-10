import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Music, Upload, ShoppingCart, Gavel, Package } from 'lucide-react';
import { ServiceFlowDiagram } from './ServiceFlowDiagram';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeModel, setActiveModel] = useState<'basic' | 'auction'>('basic');

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
            Lapsellでは、楽曲の制作動画を<br />
            <span className="text-[#d4a574]">世界に1つだけのグッズとして販売できます</span>
          </h2>
          <p className="text-[#8a8a9e] text-lg leading-relaxed mb-12">
            試行錯誤の過程をタイムラプス動画として記録し、完成した楽曲と紐づけて販売。<br />
            ファンはあなたの創作プロセスに触れられる、世界に1つだけのデジタルグッズを手に入れられます。
          </p>

          {/* Service Flow Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <ServiceFlowDiagram />
          </motion.div>

          {/* Model Toggle */}
          <div className="inline-flex border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-1 gap-1">
            <button
              onClick={() => setActiveModel('basic')}
              className={`px-8 py-3 transition-all duration-300 ${
                activeModel === 'basic'
                  ? 'bg-[#d4a574]/10 border border-[#d4a574]/30 text-[#d4a574]'
                  : 'text-[#8a8a9e] hover:text-white'
              }`}
            >
              通常販売
            </button>
            <button
              onClick={() => setActiveModel('auction')}
              className={`px-8 py-3 transition-all duration-300 ${
                activeModel === 'auction'
                  ? 'bg-[#d4a574]/10 border border-[#d4a574]/30 text-[#d4a574]'
                  : 'text-[#8a8a9e] hover:text-white'
              }`}
            >
              オークション販売
            </button>
          </div>
        </motion.div>

        {/* Model Content */}
        <motion.div
          key={activeModel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activeModel === 'basic' ? (
            <BasicModelContent isInView={isInView} />
          ) : (
            <AuctionModelContent isInView={isInView} />
          )}
        </motion.div>
      </div>
    </section>
  );
}

function BasicModelContent({ isInView }: { isInView: boolean }) {
  const basicSteps = [
    {
      icon: Music,
      title: '制作',
      description: 'Lapsellアプリで録音ボタンを押すと、手元を自動撮影して制作過程動画が記録される。',
    },
    {
      icon: Upload,
      title: 'アップロード',
      description: '制作過程動画を10分単位に自動分割してアップロード。各区間がグッズとして準備完了。',
    },
    {
      icon: ShoppingCart,
      title: '販売',
      description: 'LapsellのQRコードを表示して制作過程動画を販売。販売時にNFTが付与される。',
    },
  ];

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <p className="text-[#e8e8ed] text-lg mb-2">楽曲完成後に制作過程動画を数量限定グッズとして販売</p>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <div className="border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            {basicSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5">
                    <Icon className="w-8 h-8 text-[#d4a574]" />
                  </div>
                  <div>
                    <h5 className="text-lg mb-2">{step.title}</h5>
                    <p className="text-[#8a8a9e] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mb-16"
      >
        <div className="max-w-3xl mx-auto text-[#8a8a9e] space-y-2">
          <p>• 楽曲完成後、制作過程動画をグッズとして販売</p>
          <p>• 各区間は世界に1つだけ。早い者勝ちで売り切れる</p>
          <p>• いつも通りの制作をするだけで、自動的に新しい収益源が生まれる</p>
        </div>
      </motion.div>

      {/* Recommendation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-[#d4a574] mb-2">こんなクリエイターにおすすめ</p>
        <p className="text-sm text-[#8a8a9e]">
          これから収益化を始めたい新人クリエイター｜まずは低リスクで試してみたい方
        </p>
      </motion.div>
    </>
  );
}

function AuctionModelContent({ isInView }: { isInView: boolean }) {
  const auctionSteps = [
    {
      icon: Gavel,
      title: 'オークション',
      description: '制作予定を事前告知。制作予定時間を10分単位で区切り、各区間をオークション出品。',
    },
    {
      icon: Music,
      title: '制作',
      description: '予定通り制作開始。全区間が落札済みなので、確実に販売できることが確定。',
    },
    {
      icon: Upload,
      title: 'アップロード',
      description: '制作過程動画を10分単位に分割してアップロード。落札者のみがアクセス可能。',
    },
    {
      icon: Package,
      title: '配布',
      description: '作品リリース後、落札者に制作過程動画を配布。配布時にNFTが付与される。',
    },
  ];

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <p className="text-[#e8e8ed] text-lg mb-2">制作前に時間枠をオークション販売</p>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <div className="border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            {auctionSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5">
                    <Icon className="w-8 h-8 text-[#d4a574]" />
                  </div>
                  <div>
                    <h5 className="text-lg mb-2">{step.title}</h5>
                    <p className="text-[#8a8a9e] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mb-16"
      >
        <div className="max-w-3xl mx-auto text-[#8a8a9e] space-y-2">
          <p>• 制作予定時間を事前に指定（例：「明日の夜3時間レコーディング」）</p>
          <p>• どの10分が「神回」になるかわからないガチャ性で投機的興奮を生む</p>
          <p>• 確実に販売できることが確定してから作業できる</p>
        </div>
      </motion.div>

      {/* Recommendation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-[#d4a574] mb-2">こんなクリエイターにおすすめ</p>
        <p className="text-sm text-[#8a8a9e]">
          固有ファンが一定いるクリエイターにおすすめ｜制作前に資金を確保したい方
        </p>
      </motion.div>
    </>
  );
}
