
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white z-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Facilitamos el arrendamiento de tu equipo médico para que tu práctica no se detenga.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Soluciones personalizadas para profesionales de la salud
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#solicitud">
              <Button className="btn-secondary">Cotiza tu equipo en minutos</Button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1516549655040-3c45632e42f5?w=800&auto=format&fit=crop&q=80"
              alt="Equipamiento médico moderno" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
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
