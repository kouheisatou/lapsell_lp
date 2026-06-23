import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { HowItWorks } from './components/HowItWorks';
import { Evidence } from './components/Evidence';
import { Benefits } from './components/Benefits';
import { SafetyTech } from './components/SafetyTech';
import { TargetSection } from './components/TargetSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { ClosingCTA } from './components/ClosingCTA';
import { StickyBar } from './components/StickyBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        background: '#faf7ff',
      }}
    >
      {/* SEO: meta title / description would go in index.html */}
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Evidence />
        <Benefits />
        <SafetyTech />
        <TargetSection />
        <PricingSection />
        <FAQSection />
        <ClosingCTA />
        <ContactSection />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
