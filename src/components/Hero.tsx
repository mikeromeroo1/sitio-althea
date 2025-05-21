import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="section-container flex flex-col md:flex-row items-center py-16 md:py-24">
        <div className="w-full md:w-1/2 md:pr-8 text-white z-10 animate-fade-in">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in">
            Facilitamos el arrendamiento de tu equipo médico para que tu práctica no se detenga.
          </h1>
          <p className="text-base md:text-lg mb-8 text-white/90 animate-slide-in">
            Soluciones personalizadas para profesionales de la salud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/cotizacion">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 group">
                Cotiza tu equipo en minutos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-10 md:mt-0 z-10">
          <div className="relative animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src="/equipo-1.png" 
              alt="Equipo médico de Althea Lease" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-bounce">
              <p className="text-sm font-medium text-althea-800">Resolución rápida</p>
              <p className="text-xs text-gray-600">5-7 días hábiles</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-althea-600 opacity-10 pattern-dots pattern-size-2 pattern-white"></div>
    </section>
  );
};

export default Hero;
