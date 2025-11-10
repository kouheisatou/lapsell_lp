import { motion } from 'motion/react';
import { Users, Package, Palette, Landmark, DollarSign, Film, Award, Image } from 'lucide-react';

export function ServiceFlowDiagram() {
  const participants = [
    { id: 'fan', label: 'ファン', icon: Users },
    { id: 'lapsell', label: 'Lapsell', icon: Package },
    { id: 'artist', label: 'クリエイター', icon: Palette },
    { id: 'streaming', label: 'ギャラリーなど', icon: Landmark },
  ];

  const flows = [
    // ファン → Lapsell: お金
    { from: 'fan', to: 'lapsell', label: '購入', icon: DollarSign, color: '#d4a574', yOffset: -20 },
    // Lapsell → クリエイター: お金
    { from: 'lapsell', to: 'artist', label: '売り上げ', icon: DollarSign, color: '#d4a574', yOffset: -20 },
    // クリエイター → Lapsell: 制作過程動画
    { from: 'artist', to: 'lapsell', label: '制作過程\n動画', icon: Film, color: '#8a8a9e', yOffset: 20 },
    // Lapsell → ファン: 制作過程動画 + NFT
    { from: 'lapsell', to: 'fan', label: '制作過程動画・支援証明NFT', icons: [Film, Award], color: '#8a8a9e', yOffset: 20, dualIcon: true },
    // クリエイター → ギャラリーなど: 作品
    { from: 'artist', to: 'streaming', label: '作品', icon: Image, color: '#6a6a7e', yOffset: -20 },
  ];

  const spacing = 280;
  const startX = 150;
  const centerY = 250;

  const getPosition = (id: string) => {
    const index = participants.findIndex(p => p.id === id);
    return { x: startX + index * spacing, y: centerY };
  };

  return (
    <div className="w-full overflow-x-auto">
      <svg width="1200" height="550" className="mx-auto" viewBox="0 0 1200 550">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#d4a574" />
          </marker>
          <marker
            id="arrowhead-gray"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#8a8a9e" />
          </marker>
          <marker
            id="arrowhead-light"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#6a6a7e" />
          </marker>
        </defs>

        {/* Draw flows/arrows */}
        {flows.map((flow, idx) => {
          const fromPos = getPosition(flow.from);
          const toPos = getPosition(flow.to);
          const isReverse = fromPos.x > toPos.x;
          
          const startX = fromPos.x + (isReverse ? -70 : 70);
          const endX = toPos.x + (isReverse ? 70 : -70);
          const y = centerY + flow.yOffset;
          
          const midX = (startX + endX) / 2;
          const isUpperArrow = flow.yOffset < 0;

          const markerId = flow.color === '#d4a574' ? 'arrowhead' : 
                          flow.color === '#8a8a9e' ? 'arrowhead-gray' : 'arrowhead-light';

          return (
            <g key={idx}>
              {/* Arrow line */}
              <motion.line
                x1={startX}
                y1={y}
                x2={endX}
                y2={y}
                stroke={flow.color}
                strokeWidth="2"
                markerEnd={`url(#${markerId})`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
              />
              
              {/* Icon(s) - position depends on whether it's upper or lower arrow */}
              {flow.dualIcon && flow.icons ? (
                // Dual icons (side by side)
                <>
                  <foreignObject
                    x={midX - 50}
                    y={isUpperArrow ? y - 80 : y + 20}
                    width="40"
                    height="40"
                  >
                    <div className="flex items-center justify-center">
                      {(() => {
                        const Icon1 = flow.icons[0];
                        return <Icon1 className="w-7 h-7" style={{ color: flow.color }} />;
                      })()}
                    </div>
                  </foreignObject>
                  <foreignObject
                    x={midX + 10}
                    y={isUpperArrow ? y - 80 : y + 20}
                    width="40"
                    height="40"
                  >
                    <div className="flex items-center justify-center">
                      {(() => {
                        const Icon2 = flow.icons[1];
                        return <Icon2 className="w-7 h-7" style={{ color: flow.color }} />;
                      })()}
                    </div>
                  </foreignObject>
                </>
              ) : flow.icon ? (
                // Single icon
                <foreignObject
                  x={midX - 20}
                  y={isUpperArrow ? y - 80 : y + 20}
                  width="40"
                  height="40"
                >
                  <div className="flex items-center justify-center">
                    {(() => {
                      const FlowIcon = flow.icon;
                      return <FlowIcon className="w-8 h-8" style={{ color: flow.color }} />;
                    })()}
                  </div>
                </foreignObject>
              ) : null}
              
              {/* Label text - position depends on whether it's upper or lower arrow */}
              <text
                x={midX}
                y={isUpperArrow ? y - 30 : y + 75}
                textAnchor="middle"
                fill={flow.color}
                fontSize="13"
                fontWeight="500"
              >
                {flow.label.split('\n').map((line, i) => (
                  <tspan key={i} x={midX} dy={i === 0 ? 0 : 16}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* Draw participants */}
        {participants.map((participant, idx) => {
          const pos = getPosition(participant.id);
          const Icon = participant.icon;
          
          return (
            <g key={participant.id}>
              {/* Icon */}
              <foreignObject
                x={pos.x - 48}
                y={pos.y - 48}
                width="96"
                height="96"
              >
                <motion.div
                  className="flex items-center justify-center w-full h-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Icon 
                    className="w-24 h-24" 
                    style={{ color: participant.id === 'streaming' ? '#6a6a7e' : '#d4a574' }}
                  />
                </motion.div>
              </foreignObject>
              
              {/* Participant label */}
              <text
                x={pos.x}
                y={pos.y + 68}
                textAnchor="middle"
                fill={participant.id === 'streaming' ? '#6a6a7e' : '#e8e8ed'}
                fontSize="16"
                fontWeight="500"
              >
                {participant.label.split('\n').map((line, i) => (
                  <tspan key={i} x={pos.x} dy={i === 0 ? 0 : 18}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

