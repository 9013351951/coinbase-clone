import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromoFeatureCards from "@/components/PromoFeatureCards";
import CryptoTable from "@/components/CryptoTable";
import AdvancedTradeSection from "@/components/AdvancedTradeSection";
import ProductShowcase from "@/components/ProductShowcase";
import BottomCards from "@/components/BottomCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <PromoFeatureCards />
        <CryptoTable />
        <AdvancedTradeSection />
        <ProductShowcase />
        <BottomCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
