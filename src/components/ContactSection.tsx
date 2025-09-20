import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-spice mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring authentic Indian products to your market? Let's start
            the conversation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-gold to-accent rounded-full mx-auto mt-6"></div>
        </div>

        <div
          className={`space-y-8 max-w-5xl mx-auto ${
            isVisible ? "animate-slide-in-up" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-heritage mb-6 text-center">
            Get in Touch
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            We're here to assist you with all your import and export needs.
            Whether you're interested in bulk orders, product inquiries, or
            partnership opportunities, our team is ready to help.
          </p>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Phone - Left */}
            <div className="card-spice p-6 flex items-center gap-4 hover:shadow-spice justify-start">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-heritage mb-1">Phone</h4>
                <p className="text-muted-foreground">+965 6505 8568</p>
                <p className="text-sm text-muted-foreground">
                  Sun-Thur, 8AM-5PM Kuwait Time
                </p>
                <p className="text-sm text-muted-foreground">
                  Sat, 9AM-1PM Kuwait Time
                </p>
              </div>
            </div>

            {/* Email - Right */}
            <div className="card-spice p-6 flex items-center gap-6 hover:shadow-spice justify-start">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-heritage rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left max-w-xs">
                <h4 className="font-semibold text-heritage mb-1">Email</h4>
                <p className="text-muted-foreground">
                  info@primecornerimpex.com
                </p>
                <p className="text-muted-foreground">
                  primecornerimpex@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            {/* WhatsApp QR - Left */}
            <div className="card-spice p-6 flex flex-col items-center gap-4 hover:shadow-spice justify-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 2.117.548 4.112 1.5 5.85L0 24l6.35-1.47A11.93 11.93 0 0012 24c6.628 0 12-5.373 12-12S18.628 0 12 0zm0 22c-1.882 0-3.655-.518-5.187-1.41l-.37-.217-3.77.87.806-3.94-.242-.39A9.934 9.934 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.323-7.574c-.29-.145-1.713-.847-1.977-.943-.265-.096-.458-.145-.65.145-.193.29-.747.943-.915 1.135-.168.193-.338.217-.628.072-.29-.145-1.225-.451-2.332-1.437-.861-.767-1.442-1.713-1.61-2.003-.168-.29-.018-.447.127-.593.13-.13.29-.338.435-.507.145-.168.193-.29.29-.483.096-.193.048-.362-.024-.507-.072-.145-.65-1.567-.89-2.147-.235-.565-.475-.49-.65-.498l-.555-.01c-.193 0-.507.072-.773.362s-1.014.99-1.014 2.415 1.038 2.802 1.182 2.995c.145.193 2.04 3.114 4.945 4.365.691.298 1.23.476 1.65.61.693.22 1.323.19 1.822.115.556-.083 1.713-.698 1.955-1.373.242-.675.242-1.252.168-1.373-.072-.12-.265-.193-.556-.338z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-heritage mb-1">WhatsApp</h4>
                <p className="text-muted-foreground">
                  Scan to chat with us directly
                </p>
              </div>
              <img
                src="public\qr.jpg"
                alt="WhatsApp QR Code"
                className="w-32 h-32 rounded-lg shadow-md border"
              />
            </div>

            {/* Location Text - Right */}
            <div className="card-spice p-6 flex items-center gap-4 hover:shadow-spice justify-start">
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-heritage mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Prime Corner Impex Company, Behbahani complex, Floor 7, Office
                  6, Sharq, Kuwait City
                </p>
                <p className="text-sm text-muted-foreground">
                  Strategic Gulf location for efficient trade
                </p>
              </div>
            </div>

            {/* Location Map Link - Full */}
            {/* Location Map Link - Full Width */}
<a
  href="https://maps.app.goo.gl/azCLmLJfhGcMPyVd7?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="block md:col-span-2"
>
  <div className="card-spice p-6 bg-gradient-to-br from-secondary to-muted rounded-2xl border border-primary/20 hover:shadow-lg transition flex flex-col items-center justify-center h-full text-center">
    <MapPin className="w-12 h-12 text-primary mb-4" />
    <h4 className="text-xl font-bold text-heritage mb-2">
      Prime Corner Impex Company
    </h4>
    <p className="text-muted-foreground">View on Google Maps</p>
  </div>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
