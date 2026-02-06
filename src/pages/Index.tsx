import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CryptoTable from "@/components/CryptoTable";
import FeatureCards from "@/components/FeatureCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <CryptoTable />
        <FeatureCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
