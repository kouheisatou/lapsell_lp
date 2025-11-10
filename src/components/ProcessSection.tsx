import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Music, Upload, ShoppingCart, Megaphone, Gavel, FileCheck, Package } from 'lucide-react';

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeModel, setActiveModel] = useState<'basic' | 'auction'>('basic');

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-6 text-[clamp(2rem,4vw,3.5rem)]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            <span className="text-[#d4a574]">2つの販売モデル</span>
          </h2>

          {/* Model Toggle */}
          <div className="inline-flex border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-1 gap-1 mt-8">
            <button
              onClick={() => setActiveModel('basic')}
              className={`px-8 py-3 transition-all duration-300 ${
                activeModel === 'basic'
                  ? 'bg-[#d4a574]/10 border border-[#d4a574]/30 text-[#d4a574]'
                  : 'text-[#8a8a9e] hover:text-white'
              }`}
            >
              基本モデル
            </button>
            <button
              onClick={() => setActiveModel('auction')}
              className={`px-8 py-3 transition-all duration-300 ${
                activeModel === 'auction'
                  ? 'bg-[#d4a574]/10 border border-[#d4a574]/30 text-[#d4a574]'
                  : 'text-[#8a8a9e] hover:text-white'
              }`}
            >
              作業時間オークションモデル
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
      description: 'いつも通り制作するだけ。Lapsellアプリで録音ボタンを押すと、手元を自動撮影して制作過程動画が記録される。',
    },
    {
      icon: Upload,
      title: 'アップロード',
      description: '楽曲完成後、制作過程動画を10分単位に自動分割してアップロード。各区間が世界に1つだけのグッズとして準備完了。',
    },
    {
      icon: ShoppingCart,
      title: '販売',
      description: 'ライブ会場などでグッズの一つとして、LapsellのQRコードを表示して制作過程動画を販売。販売時に動画にNFTが付与され、誰がいつ応援したかを半永久的に証明できる。',
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
        <div className="max-w-3xl mx-auto text-[#8a8a9e] space-y-2">
          <p>• 楽曲完成後、制作過程動画をグッズとして販売</p>
          <p>• <span className="text-[#e8e8ed]">各区間は世界に1つだけ。早い者勝ちで売り切れる</span></p>
          <p>• いつも通りの制作をするだけで、自動的に新しい収益源が生まれる</p>
        </div>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
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

      {/* Recommendation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
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
      icon: Megaphone,
      title: '予告',
      description: '「明日20:00から3時間レコーディング！」と制作予定を事前告知。ファンの期待が高まる。',
    },
    {
      icon: Gavel,
      title: 'オークション',
      description: '制作予定時間を10分単位で区切り、各区間をオークション出品。ファンは「どの10分が神回になるか」を予想して入札。最低500円、即決3,000円で設定。',
    },
    {
      icon: Music,
      title: '制作',
      description: '予定通り制作開始。全区間が落札済みなので、確実に販売できることが確定してから作業できる。',
    },
    {
      icon: Upload,
      title: 'アップロード',
      description: '楽曲完成後、制作過程動画を10分単位に分割してアップロード。落札者のみがアクセスできる。',
    },
    {
      icon: Package,
      title: '配布',
      description: '作品がリリースされたら、落札者に制作過程動画を配布。配布時にNFTが付与され、支援の証明が永遠に残る。',
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
        <div className="max-w-3xl mx-auto text-[#8a8a9e] space-y-2">
          <p>• 制作予定時間を事前に指定（例：「明日の夜3時間レコーディング」）</p>
          <p>• <span className="text-[#e8e8ed]">どの10分が「神回」になるかわからないガチャ性</span>で投機的興奮を生む</p>
          <p>• 確実に販売できることが確定してから作業できる</p>
        </div>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
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

      {/* Recommendation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
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
