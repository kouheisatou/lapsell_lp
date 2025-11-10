import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isInView: boolean;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, isInView, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="border border-[#d4a574]/20 bg-[#1a1a2e]/50 backdrop-blur-sm p-8 hover:border-[#d4a574]/40 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center border border-[#d4a574]/30 bg-[#d4a574]/5 mb-6">
        <Icon className="w-7 h-7 text-[#d4a574]" />
      </div>

      {/* Content */}
      <h3 className="text-xl mb-4 leading-relaxed">{title}</h3>
      <p className="text-[#8a8a9e] leading-relaxed">{description}</p>
    </motion.div>
  );
}

