import { useEffect, useRef, useState } from "react";
import primeCornerLogo from "public/prime-corner-logo.jpg";

const BrandSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="brand" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background with Indian Flag Colors Inspiration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-background to-primary"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-background to-accent"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="relative inline-block">
            <img
              src="public\laz-logo.jpg"
              alt="Prime Corner Impex WLL"
              className="w-64 h-64 mx-auto object-contain rounded-3xl shadow-elegant hover:shadow-spice transition-all duration-700 hover:scale-105"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-gold/20 to-accent/20 rounded-3xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Brand Story */}
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-spice mb-6">
            Our Brand Story
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Born from a passion for authentic Indian heritage and a vision for global excellence, LAZ Premium represents the perfect blend of tradition and innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="card-spice p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">आ</span>
                </div>
                <h3 className="text-xl font-bold text-heritage mb-3">Authenticity</h3>
                <p className="text-muted-foreground">Preserving the true essence of Indian products with unwavering commitment to quality.</p>
              </div>
              
              <div className="card-spice p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-heritage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-heritage mb-3">Global Reach</h3>
                <p className="text-muted-foreground">Connecting Indian heritage with international markets through strategic partnerships.</p>
              </div>
              
              <div className="card-spice p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">✨</span>
                </div>
                <h3 className="text-xl font-bold text-heritage mb-3">Excellence</h3>
                <p className="text-muted-foreground">Setting new standards in product quality and customer service excellence.</p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-heritage/10 to-primary/10 rounded-2xl border border-primary/20">
              <blockquote className="text-lg md:text-xl italic text-heritage leading-relaxed">
                "We don't just export products; we export culture, tradition, and the warmth of Indian hospitality. Every shipment carries with it the stories of our farmers, artisans, and the rich tapestry of Indian heritage."
              </blockquote>
              <cite className="block text-right text-muted-foreground mt-4 not-italic">
                — Prime Corner Impex WLL Team
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;