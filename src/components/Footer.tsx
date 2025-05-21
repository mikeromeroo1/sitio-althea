import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Brand & Copyright */}
          <div className="space-y-4 animate-fade-in">
            <Link to="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="Althea Lease Logo" 
                className="h-10 filter invert(1) brightness(1.5)"
              />
            </Link>
            <p className="text-sm">
              © {new Date().getFullYear()} Althea Lease. Todos los derechos reservados.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-4 animate-fade-in md:col-span-1">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-slate-400" />
                <span>Corporativo 6780, Naciones Unidas, 45115, Zapopan Jalisco, México</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0 text-slate-400" />
                <a href="https://wa.me/525593312922" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: +52 (55) 9331-2922</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0 text-slate-400" />
                <a href="tel:+525541610361" className="hover:text-white transition-colors">Teléfono: +52 (55) 4161-0361</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0 text-slate-400" />
                <a href="mailto:service@althea.com" className="hover:text-white transition-colors">service@althea.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (Placeholder - we can add this next if you want) */}
          <div className="space-y-4 animate-fade-in md:col-span-1">
            {/* 
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#requisitos" className="hover:text-white transition-colors">Requisitos</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              <li><Link to="/cotizacion" className="hover:text-white transition-colors">Cotización</Link></li>
            </ul>
            */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
