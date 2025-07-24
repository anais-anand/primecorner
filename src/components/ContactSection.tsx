import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Prime Corner Impex WLL. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-spice mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring authentic Indian products to your market? Let's start the conversation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-gold to-accent rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-3xl font-bold text-heritage mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're here to assist you with all your import and export needs. Whether you're interested in bulk orders, product inquiries, or partnership opportunities, our team is ready to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="card-spice p-6 flex items-center gap-4 hover:shadow-spice">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heritage mb-1">Phone</h4>
                  <p className="text-muted-foreground">+965 123 456 789</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM Kuwait Time</p>
                </div>
              </div>

              <div className="card-spice p-6 flex items-center gap-4 hover:shadow-spice">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-heritage rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heritage mb-1">Email</h4>
                  <p className="text-muted-foreground">info@primecornerimpex.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>

              <div className="card-spice p-6 flex items-center gap-4 hover:shadow-spice">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heritage mb-1">Location</h4>
                  <p className="text-muted-foreground">Kuwait City, Kuwait</p>
                  <p className="text-sm text-muted-foreground">Strategic Gulf location for efficient trade</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-secondary to-muted rounded-2xl p-8 text-center border border-primary/20">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-heritage mb-2">Kuwait Operations Center</h4>
              <p className="text-muted-foreground">
                Strategically located in Kuwait for optimal Gulf region distribution
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="card-spice p-8">
              <h3 className="text-2xl font-bold text-heritage mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-heritage mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-heritage mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-heritage mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements, quantity needs, or any questions you have..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-spice w-full py-4 text-lg font-semibold rounded-xl flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  For urgent inquiries, please call us directly at{" "}
                  <span className="text-primary font-medium">+965 123 456 789</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;