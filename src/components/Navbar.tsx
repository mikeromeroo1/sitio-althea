
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-althea-600">Althea</span>
              <span className="text-2xl font-light text-teal-500 ml-1">Med</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Nosotros
            </a>
            <a href="#equipos" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Equipos
            </a>
            <a href="#servicios" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-althea-800 hover:text-althea-600 font-medium transition-colors">
              Contacto
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="btn-primary">Solicitar Cotización</Button>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <a href="#inicio" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Inicio
            </a>
            <a href="#nosotros" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Nosotros
            </a>
            <a href="#equipos" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Equipos
            </a>
            <a href="#servicios" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Servicios
            </a>
            <a href="#contacto" className="block px-3 py-2 text-althea-800 font-medium hover:bg-althea-50 rounded-md">
              Contacto
            </a>
            <div className="px-3 py-2">
              <Button className="w-full btn-primary">Solicitar Cotización</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
