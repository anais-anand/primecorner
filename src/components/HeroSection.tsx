import { Phone, Mail } from "lucide-react";
import primeCornerLogo from "public\main-logo.png";
import { useRef } from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen hero-bg flex flex-col items-start justify-center relative px-6 md:px-20"
    >
      {/* Background Video + Overlay + Floating Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-left max-w-4xl">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src="public/main-logo.png"
            alt="Prime Corner Impex Company WLL"
            className="w-48 h-48 object-contain rounded-full shadow-warm hover:shadow-spice transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Company Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient-spice animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Prime Corner Impex Company WLL
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Bridging Indian Heritage with Gulf Excellence
        </p>

        {/* Contact Information */}
        <div
          className="flex flex-col md:flex-row items-start gap-6 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-warm hover:shadow-spice transition-all duration-300">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">+965 6505 8568</span>
          </div>
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-warm hover:shadow-spice transition-all duration-300">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">info@primecornerimpex.com</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="btn-spice px-8 py-4 rounded-full text-lg font-semibold animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          Discover Our Products & Services
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
      {/* Floating Social Icons */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/primecornerimpex/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8 2.75a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/15sW571SSd/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/96565058568"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.203-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.212 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.28c.001-5.45 4.436-9.884 9.888-9.884a9.86 9.86 0 015.283 1.526 9.825 9.825 0 013.617 4.758 9.86 9.86 0 01-1.429 8.623 9.876 9.876 0 01-6.475 4.289m8.413-18.292A11.815 11.815 0 0012.05 0C5.495 0 .184 5.31.18 11.865a11.82 11.82 0 001.637 6.118L0 24l6.21-1.632a11.866 11.866 0 005.799 1.474h.005c6.555 0 11.865-5.31 11.869-11.865a11.82 11.82 0 00-3.492-8.513" />
    </svg>
  </a>
</div>

      
 
    </section>
  );
};

export default HeroSection;
