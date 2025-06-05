import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Column 1: Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="inline-block group">
                <img 
                  src="/logo.png" 
                  alt="Althea Lease - Arrendamiento Médico" 
                  className="h-12 filter brightness-0 invert transition-all duration-300 group-hover:scale-105"
                />
              </Link>
              
              <p className="text-slate-400 leading-relaxed max-w-md">
                Somos líderes en arrendamiento de equipo médico en México, 
                comprometidos con el crecimiento y éxito de los profesionales de la salud.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-400">Servicio 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <span className="text-sm text-slate-400">Respuesta rápida</span>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Contacto
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
              </h3>
              
              <ul className="space-y-4">
                <li className="group">
                  <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300">
                    <MapPin className="w-5 h-5 mt-0.5 text-slate-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                      Corporativo 6780, Naciones Unidas, 45115, Zapopan Jalisco, México
                    </span>
                  </div>
                </li>
                
                <li className="group">
                  <a 
                    href="https://wa.me/525593312922" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition-colors flex-shrink-0" />
                    <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                      WhatsApp: +52 (55) 9331-2922
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
                
                <li className="group">
                  <a 
                    href="tel:+525541610361" 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                      Teléfono: +52 (55) 4161-0361
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
                
                <li className="group">
                  <a 
                    href="mailto:service@althea.com" 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                    <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                      service@althea.com
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Enlaces Rápidos
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              </h3>
              
              <ul className="space-y-3">
                {[
                  { href: "#inicio", text: "Inicio" },
                  { href: "#nosotros", text: "Nosotros" },
                  { href: "#beneficios", text: "Beneficios" },
                  { href: "#requisitos", text: "Requisitos" },
                  { href: "#faqs", text: "FAQs" },
                ].map((link) => (
                  <li key={link.text}>
                    <a 
                      href={link.href} 
                      className="block text-sm text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-between">
                        {link.text}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/cotizacion" 
                    className="block text-sm text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-between">
                      Cotización
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terminos-y-condiciones" 
                    className="block text-sm text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-between">
                      Términos y Condiciones
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Althea Lease. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Hecho con 💙 en México</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
