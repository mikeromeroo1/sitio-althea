import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section min-h-screen w-full flex flex-col justify-center">
      <div className="section-container w-full flex flex-col md:flex-row items-center h-full">
        <div className="w-full md:w-2/5 md:pr-8 lg:pl-12 text-center md:text-left z-10 animate-fade-in">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in">
          Arrendamiento 100% deducible de equipo médico
          </h1>
          <p className="text-base md:text-lg mb-8 text-foreground/80 animate-slide-in">
          Arrendamiento accesible con marcas líderes y tasas competitivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/cotizacion">
              <Button className="btn-primary group shadow-md hover:shadow-lg">
                Cotiza tu equipo en minutos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/5 md:pl-8 mt-10 md:mt-0 z-10">
          <div className="relative animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src="/equipo-1.png" 
              alt="Equipo médico de Althea Lease" 
              className="rounded-lg shadow-xl w-full object-cover max-h-[70vh]"
            />
            <div 
              className="absolute -bottom-5 sm:-bottom-4 -right-5 sm:right-0 md:-right-4 lg:right-0 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-xl transition-all hover:shadow-2xl transform hover:scale-105 animate-float"
            >
              <p className="text-sm font-semibold text-primary">Resolución rápida</p>
              <p className="text-xs text-gray-700">5-7 días hábiles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
