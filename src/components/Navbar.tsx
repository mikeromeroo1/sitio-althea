
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white py-3 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/65f26a1f-a99f-49dd-9e3a-5758138d1790.png" 
                alt="Althea Lease Logo" 
                className="h-10 md:h-12"
              />
            </Link>
            <span className="ml-3 text-sm text-gray-500 hidden md:block animate-fade-in">Tu aliado financiero en el mundo médico</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 animate-stagger">
            <a href="#inicio" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Nosotros
            </a>
            <a href="#beneficios" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Beneficios
            </a>
            <a href="#requisitos" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Requisitos
            </a>
            <a href="#faqs" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              FAQs
            </a>
            <Link to="/cotizacion">
              <Button className="btn-primary">Solicita tu Cotización</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-althea-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md animate-fade-in">
            <a href="#inicio" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Inicio
            </a>
            <a href="#nosotros" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Nosotros
            </a>
            <a href="#beneficios" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Beneficios
            </a>
            <a href="#requisitos" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Requisitos
            </a>
            <a href="#faqs" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              FAQs
            </a>
            <div className="px-3 py-2">
              <Link to="/cotizacion" className="block w-full">
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
