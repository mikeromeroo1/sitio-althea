import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section relative bg-gradient-to-br from-blue-50 via-white to-blue-50/50 lg:bg-none">
      <div className="section-container w-full flex flex-col lg:flex-row items-center justify-between h-screen pt-24 lg:pt-20 pb-8">
        {/* Mobile Layout - Clean Solid Background */}
        <div className="block lg:hidden w-full h-full flex flex-col relative z-10 px-6">
          {/* Content Layout */}
          <div className="flex flex-col justify-between h-full py-6">
            {/* Top Section */}
            <div className="text-center space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2.5 rounded-full border border-blue-200 shadow-soft animate-fade-in">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Arrendamiento 100% Deducible</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 animate-slide-up leading-tight" style={{ animationDelay: "0.1s" }}>
                Equipos Médicos de{" "}
                <span className="text-gradient-primary">
                  Alta Tecnología
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-base text-slate-600 leading-relaxed animate-slide-up max-w-sm mx-auto" style={{ animationDelay: "0.2s" }}>
                Arrendamiento inteligente con marcas líderes, tasas competitivas y asesoría especializada.
              </p>
            </div>

            {/* Middle Section - Key Features */}
            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">Aprobación rápida</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">Tasas preferenciales</span>
              </div>
              <div className="flex items-center gap-2 justify-center mb-6">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">Asesoría incluida</span>
              </div>
            </div>

            {/* Bottom Section - CTAs + Stats */}
            <div className="space-y-6">
              {/* Value Props Cards */}
              <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="bg-white backdrop-blur-sm rounded-lg p-3 text-center shadow-soft border border-blue-100">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-slate-900 text-sm">5-7 días</span>
                  </div>
                  <span className="text-xs text-slate-600">Tiempo de respuesta</span>
                </div>
                <div className="bg-white backdrop-blur-sm rounded-lg p-3 text-center shadow-soft border border-green-100">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-slate-900 text-sm">100% Deducible</span>
                  </div>
                  <span className="text-xs text-slate-600">Beneficios fiscales</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
                <Link to="/cotizacion">
                  <Button className="btn-primary group text-base px-8 py-4 h-auto w-full">
                    Obtener Cotización
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-900">500+</div>
                  <div className="text-xs text-slate-600">Equipos Entregados</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-900">98%</div>
                  <div className="text-xs text-slate-600">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-900">24/7</div>
                  <div className="text-xs text-slate-600">Soporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex w-full h-full items-center justify-between">
          {/* Left Content */}
          <div className="w-1/2 pr-12 xl:pr-16 text-left z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-soft mb-4 animate-fade-in">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-medium text-slate-700">Arrendamiento 100% Deducible</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl xl:text-5xl font-bold text-slate-900 mb-4 animate-slide-up leading-tight" style={{ animationDelay: "0.1s" }}>
              Equipos Médicos de{" "}
              <span className="text-gradient-primary">
                Alta Tecnología
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg text-slate-600 mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Arrendamiento inteligente con marcas líderes, tasas competitivas y asesoría especializada para profesionales de la salud.
            </p>

            {/* Key Features */}
            <div className="flex flex-row gap-4 mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-slate-700">Aprobación rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-slate-700">Tasas preferenciales</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-slate-700">Asesoría incluida</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/cotizacion">
                <Button className="btn-primary group text-sm px-6 py-3 h-auto">
                  Obtener Cotización
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-row items-center gap-4 pt-4 border-t border-slate-200 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-left">
                <div className="text-xl lg:text-2xl font-bold text-slate-900">500+</div>
                <div className="text-xs text-slate-600">Equipos Entregados</div>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="text-left">
                <div className="text-xl lg:text-2xl font-bold text-slate-900">98%</div>
                <div className="text-xs text-slate-600">Satisfacción</div>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="text-left">
                <div className="text-xl lg:text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-xs text-slate-600">Soporte Técnico</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="w-1/2 pl-6 xl:pl-8 relative z-10">
            <div className="relative animate-scale-in max-w-2xl mx-auto" style={{ animationDelay: "0.3s" }}>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src="/equipo-1.png" 
                  alt="Equipo médico de alta tecnología - Althea Lease" 
                  className="w-full h-[420px] xl:h-[480px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-3 -left-3 bg-white rounded-xl shadow-medium p-3 max-w-[180px] glass-effect animate-float-subtle">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">5-7 días</div>
                    <div className="text-xs text-slate-600">Tiempo de respuesta</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-medium p-3 max-w-[200px] glass-effect animate-float-subtle" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">100% Deducible</div>
                    <div className="text-xs text-slate-600">Beneficios fiscales</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse-soft"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-16 left-8 w-40 h-40 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-8 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-slate-400 rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
