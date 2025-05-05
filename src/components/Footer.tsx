
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-althea-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-2xl font-bold text-white">Althea</span>
              <span className="text-2xl font-light text-teal-400 ml-1">Lease</span>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              © {new Date().getFullYear()} Althea Lease. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="tel:+525512345678" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>+52 55 1234 5678</span>
            </a>
            <a href="mailto:info@althealease.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@althealease.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
