import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/prime-corner-logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Our Brand', href: '#brand' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-charcoal-slate/95 backdrop-blur-md shadow-elegant py-2'
            : 'bg-charcoal-slate/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className={`flex items-center space-x-3 transition-all duration-500 ease-in-out ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <img
                src={logoImage}
                alt="Prime Corner Impex WLL"
                className={`transition-all duration-500 ease-in-out ${
                  isScrolled ? 'h-10 w-10' : 'h-12 w-12'
                } rounded-full object-cover shadow-warm border-2 border-copper-gold/50`}
              />
              <span 
                className={`font-playfair font-bold text-cream-sand transition-all duration-500 ease-in-out ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}
              >
                Prime Corner Impex
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-cream-sand hover:text-copper-gold font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-copper-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-cream-sand hover:text-copper-gold hover:bg-burnt-umber/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-burnt-umber/95 backdrop-blur-md border-t border-copper-gold/20">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-3 px-4 text-cream-sand hover:text-copper-gold hover:bg-olive-green/20 rounded-lg transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-16' : 'h-20'}`} />
    </>
  );
};

export default Navbar;