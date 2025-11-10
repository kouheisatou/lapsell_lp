import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FanBenefitsSection } from './components/FanBenefitsSection';
import { RevenueSection } from './components/RevenueSection';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ed] overflow-x-hidden">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0f;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d4a574;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #e8b888;
        }
      `}</style>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FanBenefitsSection />
      <RevenueSection />
      <CTASection />
    </div>
  );
}
