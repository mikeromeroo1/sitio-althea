import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBgClass = isScrolled 
    ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-soft' 
    : 'bg-transparent';
  
  const linkColorClass = isScrolled ? 'text-slate-700' : 'text-slate-900';
  const linkHoverColorClass = isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-700';
  const mobileIconColorClass = isScrolled ? 'text-slate-700' : 'text-slate-900';

  const navLinks = [
    { href: "#inicio", text: "Inicio" },
    { href: "#beneficios", text: "Beneficios" },
    { href: "#requisitos", text: "Requisitos" },
    { href: "#faqs", text: "FAQs" },
    { href: "#nosotros", text: "Nosotros" },
  ];

  const getLinkPath = (href: string) => {
    return location.pathname === '/' ? href : `/${href}`;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-500 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo-azul.png" 
                alt="Althea Lease - Arrendamiento Médico" 
                className="h-10 md:h-12 transition-all duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.text} 
                to={getLinkPath(link.href)} 
                className={`${linkColorClass} ${linkHoverColorClass} font-medium transition-all duration-300 relative group py-2`}
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/cotizacion">
              <Button className="btn-primary">
                Solicitar Cotización
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className={`${mobileIconColorClass} p-2 rounded-xl hover:bg-slate-100 transition-all duration-300`}
              aria-label="Menú de navegación"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-strong animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <Link 
                    key={link.text} 
                    to={getLinkPath(link.href)} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-300 text-center"
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <Link to="/cotizacion" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full btn-primary">
                      Solicitar Cotización
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
