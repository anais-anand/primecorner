import { Phone, Mail } from "lucide-react";
import primeCornerLogo from "@/assets/prime-corner-logo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-bg flex flex-col items-center justify-center relative px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src={primeCornerLogo} 
            alt="Prime Corner Impex WLL" 
            className="w-48 h-48 mx-auto object-contain rounded-2xl shadow-warm hover:shadow-spice transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-spice animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Prime Corner Impex WLL
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Bridging Indian Heritage with Gulf Excellence
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-warm hover:shadow-spice transition-all duration-300">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">+965 123 456 789</span>
          </div>
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-warm hover:shadow-spice transition-all duration-300">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">info@primecornerimpex.com</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="btn-spice px-8 py-4 rounded-full text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Discover Our Products
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;