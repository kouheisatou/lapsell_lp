import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { QrCode, KeyRound, Heart, Palette, CreditCard, Share2, Crown, GraduationCap, BookOpen, Camera } from 'lucide-react';

export function UsageScenariosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const scenarios = [
    {
      icon: QrCode,
      title: '作品の横にQRコードを置く',
      description: '展示会やギャラリーで、あなたの作品の横にQRコードを設置。訪れた人が気軽にスマホでスキャンして、その場で制作過程動画を購入できます。作品への興味が高まった瞬間を逃さず、収益化のチャンスを生み出します。',
      image: '/images/scenarios/1.png',
      imageAlt: 'ギャラリーに展示された作品とQRコード',
    },
    {
      icon: KeyRound,
      title: 'キーホルダーにつける',
      description: 'QRコード付きのオシャレなキーホルダーを作成。イベントやライブ会場で配布したり、グッズとして販売。ファンはいつでも持ち歩けて、友達にも見せられる特別なアイテムに。物理的なグッズとデジタル体験を融合させた新しい応援の形です。',
      image: '/images/scenarios/2.png',
      imageAlt: 'QRコード付きキーホルダー',
    },
    {
      icon: Heart,
      title: '次の作品の支援を募る',
      description: '新作の制作を開始する前に、SNSでQRコードを共有。完成前から応援してくれるファンに、制作過程の最初の瞬間から記録された特別な動画を届けます。クラウドファンディングのように、制作費の調達と同時にコミュニティも育てられます。',
      image: '/images/scenarios/3.png',
      imageAlt: 'SNSでシェアされたQRコードと応援メッセージ',
    },
    {
      icon: Palette,
      title: 'ライブペインティング・制作イベント中に販売',
      description: 'イベント会場で実演しながら、完成前から制作過程を販売。観客がその場で購入し、後日完成版の動画も受け取れます。イベントの記念品としての価値も持ち、リアルタイムの興奮と創作の記録を同時に届けられます。',
      image: '/images/scenarios/4.png',
      imageAlt: 'ライブペインティングイベントの様子',
    },
    {
      icon: CreditCard,
      title: '名刺やフライヤーにQRコード印刷',
      description: '個展の案内状や名刺にQRコードを印刷。配った相手がいつでもアクセスできる営業ツールとして機能します。初対面の相手にも作品の魅力を直接伝えられ、ビジネスチャンスを逃しません。',
      image: '/images/scenarios/5.png',
      imageAlt: '名刺とフライヤーにQRコードが印刷されている様子',
    },
    {
      icon: Crown,
      title: 'ファンクラブ・サブスク特典として配布',
      description: '月額会員限定で制作過程動画を配布。限定QRコードで特別感を演出し、定期的な収益と特別な体験を両立。コアファンとの絆を深める最高のツールです。',
      image: '/images/scenarios/6.png',
      imageAlt: 'ファンクラブメンバー向け限定特典',
    },
    {
      icon: GraduationCap,
      title: 'ワークショップの教材・記録として',
      description: '自分の制作過程を受講生への教材として販売。技術や考え方を学べる貴重な資料となり、オンライン講座との組み合わせで教育ビジネスも展開できます。',
      image: '/images/scenarios/7.png',
      imageAlt: 'ワークショップで学ぶ受講生たち',
    },
    {
      icon: BookOpen,
      title: '作品集・ポートフォリオに添付',
      description: '印刷された作品集にQRコードを付帯。ギャラリーやクライアントへの提案時に差別化でき、デジタルとフィジカルを融合した次世代のポートフォリオを実現します。',
      image: '/images/scenarios/8.png',
      imageAlt: '作品集とポートフォリオブック',
    },
    {
      icon: Camera,
      title: 'ストリートアート・一時的な作品の記録',
      description: '消えてしまう作品（チョークアート、砂絵など）の制作過程を永久保存。作品自体は消えても、記録として価値を持ち続けます。QRコードステッカーを作品近くに貼ることで、はかなさと永続性を両立させます。',
      image: '/images/scenarios/9.png',
      imageAlt: 'ストリートアートとチョークアートの制作風景',
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const activeScenario = scenarios[activeIndex];
  const Icon = activeScenario.icon;

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]/20">
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
            利用シーンの<span className="text-[#d4a574]">シナリオ</span>
          </h2>
          <p className="text-[#8a8a9e] text-lg leading-relaxed max-w-3xl mx-auto">
            Lapsellは様々なシーンで、あなたの創作活動をサポートします
          </p>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="relative">
            <style>{`
              .usage-scenarios-swiper .swiper-slide {
                opacity: 0.3;
                transition: opacity 0.4s ease;
              }
              .usage-scenarios-swiper .swiper-slide-active {
                opacity: 1;
              }
              .usage-scenarios-swiper .swiper-slide-next,
              .usage-scenarios-swiper .swiper-slide-prev {
                opacity: 0.5;
              }
              .usage-scenarios-swiper .swiper-pagination {
                position: relative;
                margin-top: 1.5rem;
              }
              .usage-scenarios-swiper .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background: rgba(138, 138, 158, 0.3);
                opacity: 1;
                transition: all 0.3s ease;
              }
              .usage-scenarios-swiper .swiper-pagination-bullet-active {
                width: 32px;
                border-radius: 4px;
                background: #d4a574;
              }
              .usage-scenarios-swiper .swiper-pagination-bullet:hover {
                background: rgba(138, 138, 158, 0.5);
              }
              .swiper-fade-wrapper {
                position: relative;
                mask-image: linear-gradient(
                  to right,
                  transparent 0%,
                  black 15%,
                  black 85%,
                  transparent 100%
                );
                -webkit-mask-image: linear-gradient(
                  to right,
                  transparent 0%,
                  black 15%,
                  black 85%,
                  transparent 100%
                );
              }
            `}</style>

            <div className="max-w-6xl mx-auto swiper-fade-wrapper">
              <Swiper
                modules={[Pagination]}
                centeredSlides={true}
                slidesPerView={1.8}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                onSlideChange={handleSlideChange}
                className="usage-scenarios-swiper"
              >
                {scenarios.map((scenario, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a574] to-[#8a8a9e] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                      <div className="relative rounded-lg overflow-hidden bg-[#1a1a2e]">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <img
                            src={scenario.image}
                            alt={scenario.imageAlt}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#d4a574]" />
                  </div>
                </div>
                <div>
                  <div className="text-[#d4a574]/60 text-sm font-medium mb-2">
                    シナリオ {activeIndex + 1}
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl mb-4 text-[#e8e8ed]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {activeScenario.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#8a8a9e] text-lg leading-relaxed pl-22">
                {activeScenario.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4a574]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8a8a9e]/5 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}

