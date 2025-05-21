import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const QuoteForm: React.FC = () => {
  return (
    <section id="solicitud" className="bg-primary/10 py-16">
      <div className="section-container">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Solicita tu cotización</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Completa el formulario y recibe una cotización personalizada para tu equipo médico.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-slide-in">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="marca" className="block text-sm font-medium text-gray-700 mb-1">
                  Marca
                </label>
                <Input 
                  id="marca"
                  type="text" 
                  placeholder="Ej. Phillips, Siemens..." 
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">
                  Precio del equipo
                </label>
                <Input 
                  id="precio"
                  type="number" 
                  placeholder="MXN" 
                  className="w-full"
                  min="1000"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <Link to="/cotizacion">
                  <Button className="btn-primary w-full group">
                    Solicitar cotización completa
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
