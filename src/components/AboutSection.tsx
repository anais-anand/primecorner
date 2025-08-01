import { useEffect, useRef, useState } from "react";
import spicesHero from "@/assets/spices-hero.jpg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-spice">
              <img
                src={spicesHero}
                alt="Indian Spices and Heritage Products"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-90">Authentic Indian Heritage</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-float blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
          </div>

          {/* Content Side */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* About Us */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient-spice mb-4">
                  About Us
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold rounded-full"></div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prime Corner Impex WLL stands as a bridge between the rich heritage of India and the dynamic markets of the Gulf. Based in Kuwait, we specialize in bringing authentic Indian products to discerning customers across the Middle East.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began with a simple vision: to share the finest Indian products with the world, maintaining the authenticity and quality that defines our heritage while meeting international standards.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6 pt-8 border-t border-border">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-heritage mb-4">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-heritage rounded-full"></div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the premier gateway for authentic Indian products in the Gulf region, fostering cultural connections through trade while ensuring the highest standards of quality, service, and customer satisfaction.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 card-spice">
                  <div className="text-2xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 card-spice">
                  <div className="text-2xl font-bold text-accent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Premium Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;