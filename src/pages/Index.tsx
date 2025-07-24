import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BrandSection from "@/components/BrandSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BrandSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default Index;