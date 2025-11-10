import { User, Users, Music, Package } from 'lucide-react';

interface ArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  offset?: number;
}

function Arrow({ x1, y1, x2, y2, label, offset = 0 }: ArrowProps) {
  // Calculate direction
  const dx = x2 - x1;
  const dy = y2 - y1;
  const angle = Math.atan2(dy, dx);

  // Apply offset perpendicular to the arrow direction
  const offsetX = -Math.sin(angle) * offset;
  const offsetY = Math.cos(angle) * offset;

  const startX = x1 + offsetX;
  const startY = y1 + offsetY;
  const endX = x2 + offsetX;
  const endY = y2 + offsetY;

  // Calculate arrowhead points
  const headLength = 15;
  const headAngle = Math.PI / 6;
  const arrowAngle = Math.atan2(endY - startY, endX - startX);

  const arrowPoint1X = endX - headLength * Math.cos(arrowAngle - headAngle);
  const arrowPoint1Y = endY - headLength * Math.sin(arrowAngle - headAngle);
  const arrowPoint2X = endX - headLength * Math.cos(arrowAngle + headAngle);
  const arrowPoint2Y = endY - headLength * Math.sin(arrowAngle + headAngle);

  // Label position
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;

  return (
    <g>
      {/* Arrow line */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="#d4a574"
        strokeWidth="2"
      />
      
      {/* Arrowhead */}
      <polygon
        points={`${endX},${endY} ${arrowPoint1X},${arrowPoint1Y} ${arrowPoint2X},${arrowPoint2Y}`}
        fill="#d4a574"
      />

      {/* Label background */}
      <rect
        x={midX - 50}
        y={midY - 12}
        width={100}
        height={24}
        fill="#0a0a0f"
        rx="4"
      />

      {/* Label text */}
      <text
        x={midX}
        y={midY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#e8e8ed"
        fontSize="14"
        fontFamily="sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

export function FlowDiagram() {
  const width = 1000;
  const height = 350;
  const nodeY = height / 2;
  const spacing = 230;
  const startX = 150;

  // Define positions for 4 nodes in a horizontal line: ファン、Lapsell、アーティスト、音楽配信サービス
  const nodePositions = {
    fan: { x: startX, y: nodeY },
    lapsell: { x: startX + spacing, y: nodeY },
    artist: { x: startX + spacing * 2, y: nodeY },
    streaming: { x: startX + spacing * 3, y: nodeY },
  };

  const nodeSize = 64;

  return (
    <div className="relative w-full flex justify-center" style={{ height: `${height}px` }}>
      <svg
        width={width}
        height={height}
        className="absolute"
        style={{ maxWidth: '100%' }}
      >
        {/* Arrows */}
        {/* Fan -> Lapsell: お金 */}
        <Arrow
          x1={nodePositions.fan.x + nodeSize}
          y1={nodePositions.fan.y}
          x2={nodePositions.lapsell.x - nodeSize}
          y2={nodePositions.lapsell.y}
          label="お金"
          offset={-20}
        />

        {/* Lapsell -> Fan: 制作過程動画+NFT */}
        <Arrow
          x1={nodePositions.lapsell.x - nodeSize}
          y1={nodePositions.lapsell.y}
          x2={nodePositions.fan.x + nodeSize}
          y2={nodePositions.fan.y}
          label="制作過程動画+NFT"
          offset={20}
        />

        {/* Lapsell -> Artist: お金 */}
        <Arrow
          x1={nodePositions.lapsell.x + nodeSize}
          y1={nodePositions.lapsell.y}
          x2={nodePositions.artist.x - nodeSize}
          y2={nodePositions.artist.y}
          label="お金"
          offset={20}
        />

        {/* Artist -> Lapsell: 制作過程動画 */}
        <Arrow
          x1={nodePositions.artist.x - nodeSize}
          y1={nodePositions.artist.y}
          x2={nodePositions.lapsell.x + nodeSize}
          y2={nodePositions.lapsell.y}
          label="制作過程動画"
          offset={-20}
        />

        {/* Artist -> Streaming: 楽曲 */}
        <Arrow
          x1={nodePositions.artist.x + nodeSize}
          y1={nodePositions.artist.y}
          x2={nodePositions.streaming.x - nodeSize}
          y2={nodePositions.streaming.y}
          label="楽曲"
          offset={0}
        />
      </svg>
      
      {/* Nodes with icons */}
      <div className="absolute" style={{ left: `${nodePositions.fan.x}px`, top: `${nodeY}px`, transform: 'translate(-50%, -50%)' }}>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center border-2 border-[#d4a574] bg-[#1a1a2e] rounded-lg mb-2">
            <Users className="w-16 h-16 text-[#d4a574]" />
          </div>
          <span className="text-base text-[#e8e8ed] whitespace-nowrap font-medium">ファン</span>
        </div>
      </div>

      <div className="absolute" style={{ left: `${nodePositions.lapsell.x}px`, top: `${nodeY}px`, transform: 'translate(-50%, -50%)' }}>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center border-2 border-[#d4a574] bg-[#1a1a2e] rounded-lg mb-2">
            <Package className="w-16 h-16 text-[#d4a574]" />
          </div>
          <span className="text-base text-[#e8e8ed] whitespace-nowrap font-medium">Lapsell</span>
        </div>
      </div>

      <div className="absolute" style={{ left: `${nodePositions.artist.x}px`, top: `${nodeY}px`, transform: 'translate(-50%, -50%)' }}>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center border-2 border-[#d4a574] bg-[#1a1a2e] rounded-lg mb-2">
            <User className="w-16 h-16 text-[#d4a574]" />
          </div>
          <span className="text-base text-[#e8e8ed] whitespace-nowrap font-medium">アーティスト</span>
        </div>
      </div>

      <div className="absolute" style={{ left: `${nodePositions.streaming.x}px`, top: `${nodeY}px`, transform: 'translate(-50%, -50%)' }}>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center border-2 border-[#d4a574] bg-[#1a1a2e] rounded-lg mb-2">
            <Music className="w-16 h-16 text-[#d4a574]" />
          </div>
          <span className="text-base text-[#e8e8ed] whitespace-nowrap font-medium">音楽配信サービス</span>
        </div>
      </div>
    </div>
  );
}

