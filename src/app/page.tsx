import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import FranchiseModels from '@/components/sections/FranchiseModels';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import EarningsPotential from '@/components/sections/EarningsPotential';
import CtaDownload from '@/components/sections/CtaDownload';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import EarningsProjectionAssistant from '@/components/sections/EarningsProjectionAssistant';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <FranchiseModels />
        <WhyChooseUs />
        <EarningsPotential />
        <EarningsProjectionAssistant />
        <CtaDownload />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
