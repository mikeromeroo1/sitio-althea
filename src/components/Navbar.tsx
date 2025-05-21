import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // DEBUGGING: Log when isScrolled changes
  useEffect(() => {
    console.log('[Navbar] isScrolled state changed:', isScrolled);
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // DEBUGGING: Log scroll position and evaluation
      console.log('[Navbar] currentScrollY:', currentScrollY, 'Evaluation for isScrolled (must be >80):', currentScrollY > 80);
      setIsScrolled(currentScrollY > 80);
    };
    
    // Call explicitly on mount to set initial state
    console.log('[Navbar] Component did mount, calling handleScroll initially.');
    handleScroll(); 

    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('[Navbar] Component will unmount, removing scroll listener.');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // Define classes based on isScrolled state
  const navBgClass = isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent';
  const navShadowClass = isScrolled ? 'shadow-md' : 'shadow-none';
  const linkColorClass = isScrolled ? 'text-primary' : 'text-foreground';
  const linkHoverColorClass = isScrolled ? 'hover:text-primary/80' : 'hover:text-foreground/80';
  const logoFilterClass = '';
  const mobileIconColorClass = isScrolled ? 'text-primary' : 'text-foreground';
  
  // DEBUGGING: Log determined classes
  console.log('[Navbar] Determined classes:', { navBgClass, navShadowClass, linkColorClass, logoFilterClass });

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
    <nav className={`fixed top-0 left-0 w-full py-3 z-50 transition-colors duration-300 ${navBgClass} ${navShadowClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Althea Lease Logo" 
                className={`h-10 md:h-12 transition-all duration-300 ${logoFilterClass}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8`}>
            {navLinks.map(link => (
              <Link 
                key={link.text} 
                to={getLinkPath(link.href)} 
                className={`${linkColorClass} ${linkHoverColorClass} font-medium transition-colors`}
              >
                {link.text}
              </Link>
            ))}
            <Link to="/cotizacion">
              <Button className="btn-primary">Solicita tu Cotización</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={mobileIconColorClass}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - background should be white when open */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md animate-fade-in">
            {navLinks.map(link => (
              <Link 
                key={link.text} 
                to={getLinkPath(link.href)} 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-primary font-medium hover:bg-primary/10 rounded-md"
              >
                {link.text}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link to="/cotizacion" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full btn-primary">Solicita tu Cotización</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
