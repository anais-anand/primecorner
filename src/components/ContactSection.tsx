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

        <div className={`space-y-8 max-w-5xl mx-auto ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-heritage mb-6 text-center">Get in Touch</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            We're here to assist you with all your import and export needs. Whether you're interested in bulk orders, product inquiries, or partnership opportunities, our team is ready to help.
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
                <p className="text-sm text-muted-foreground">Sun-Thur, 8AM-5PM Kuwait Time</p>
                <p className="text-sm text-muted-foreground">Sat, 9AM-1PM Kuwait Time</p>

              </div>
            </div>

           {/* Email - Left */}
<div className="card-spice p-6 flex items-center gap-6 hover:shadow-spice justify-start">
  <div className="w-14 h-14 bg-gradient-to-br from-accent to-heritage rounded-xl flex items-center justify-center flex-shrink-0">
    <Mail className="w-6 h-6 text-white" />
  </div>
  <div className="text-left max-w-xs">
    <h4 className="font-semibold text-heritage mb-1">Email</h4>
    <p className="text-muted-foreground">info@primecornerimpex.com</p>
    <p className="text-muted-foreground">primecornerimpex@gmail.com</p>
    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
  </div>
</div>

            {/* Location Text - Left */}
            <div className="card-spice p-6 flex items-center gap-4 hover:shadow-spice justify-start">
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-heritage mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Prime Corner Impex Company, Behbahani complex, Floor 7, Office 6, Sharq, Kuwait City
                </p>
                <p className="text-sm text-muted-foreground">Strategic Gulf location for efficient trade</p>
              </div>
            </div>

            {/* Location Map Link - Right */}
            <a
              href="https://maps.app.goo.gl/azCLmLJfhGcMPyVd7?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="card-spice p-6 bg-gradient-to-br from-secondary to-muted rounded-2xl border border-primary/20 hover:shadow-lg transition flex flex-col items-center justify-center h-full text-center">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-bold text-heritage mb-2">Prime Corner Impex Company</h4>
                <p className="text-muted-foreground">
                  View on Google Maps
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
