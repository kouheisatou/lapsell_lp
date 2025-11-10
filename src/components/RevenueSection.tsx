import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const surveyData = [
  { range: '3,001円以上', percentage: 15, color: '#d4a574' },
  { range: '1,001~3,000円', percentage: 8, color: '#b88a5f' },
  { range: '1~1,000円', percentage: 9, color: '#9d7550' },
  { range: '購入しない', percentage: 68, color: '#2a2a3e' },
];

export function RevenueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Calculate total percentage for paying users
  const totalPaying = surveyData.slice(0, 3).reduce((acc, d) => acc + d.percentage, 0);

  // For pie chart
  let currentAngle = -90; // Start from top

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/30 to-[#0a0a0f]">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a574] blur-[150px] rounded-full" />
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
            実際の収益性
          </h2>
          <p className="text-[#8a8a9e] text-lg max-w-3xl mx-auto leading-relaxed">
            制作時間そのものが収入に
          </p>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative border border-[#d4a574]/30 bg-[#1a1a2e]/80 backdrop-blur-sm p-8 md:p-12">
            <h3 className="text-center text-xl mb-8 text-[#e8e8ed]">
              制作過程動画10分に対する支払い意向（N=393）
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Pie Chart SVG */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <svg width="280" height="280" viewBox="0 0 280 280" className="transform -rotate-90">
                  {surveyData.map((item, idx) => {
                    const percentage = item.percentage;
                    const angle = (percentage / 100) * 360;
                    const radius = 100;
                    const centerX = 140;
                    const centerY = 140;

                    // Calculate arc path
                    const startAngle = currentAngle;
                    const endAngle = currentAngle + angle;
                    
                    const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
                    const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
                    const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
                    const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

                    const largeArcFlag = angle > 180 ? 1 : 0;

                    const pathData = [
                      `M ${centerX} ${centerY}`,
                      `L ${startX} ${startY}`,
                      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                      'Z'
                    ].join(' ');

                    currentAngle += angle;

                    return (
                      <motion.path
                        key={idx}
                        d={pathData}
                        fill={item.color}
                        stroke="#0a0a0f"
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                      />
                    );
                  })}
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-white text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {totalPaying}%
                    </div>
                    <div className="text-[#8a8a9e] text-sm mt-1">支払意向あり</div>
                  </div>
                </div>
              </motion.div>

              {/* Legend */}
              <div className="space-y-4">
                {surveyData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-6 h-6 flex-shrink-0 border border-[#d4a574]/20" 
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <div className="text-[#e8e8ed]">{item.range}</div>
                    </div>
                    <div className="text-[#d4a574] min-w-[3rem] text-right">{item.percentage}%</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-[#8a8a9e] text-sm text-center mt-8">
              ※ 独自アンケート調査（2025年）
            </p>
          </div>
        </motion.div>

        {/* Revenue calculation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="border-t border-b border-[#d4a574]/30 py-12 mb-8">
            <p className="text-[#8a8a9e] text-lg mb-6">
              支払い意向のある支援者の期待支払額
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div>
                <div className="text-[#8a8a9e] text-sm mb-2">10分あたり</div>
                <div className="text-[#d4a574] text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  880円
                </div>
              </div>
              <div className="text-[#8a8a9e] text-3xl">×</div>
              <div>
                <div className="text-[#8a8a9e] text-sm mb-2">1時間</div>
                <div className="text-[#d4a574] text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  6枠
                </div>
              </div>
              <div className="text-[#8a8a9e] text-3xl">=</div>
              <div>
                <div className="text-[#8a8a9e] text-sm mb-2">時給期待値</div>
                <div className="text-[#d4a574] text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  5,280円
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-[#8a8a9e] text-sm mt-4 opacity-60">
            ※ 実際の収益はクリエイターのフォロワー数や作品の人気度によって変動します
          </p>
        </motion.div>
      </div>
    </section>
  );
}