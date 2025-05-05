
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const QuoteForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically handle form submission
    alert('Solicitud de cotización enviada. ¡Gracias por tu interés!');
  };

  return (
    <section id="solicitud" className="bg-althea-50 py-16">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicita tu cotización</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y recibe una cotización personalizada para tu equipo médico.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="marca" className="block text-sm font-medium text-gray-700 mb-1">
                  Marca
                </label>
                <Input 
                  id="marca"
                  type="text" 
                  placeholder="Ej. Phillips, Siemens..." 
                  required 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">
                  Precio del equipo
                </label>
                <Input 
                  id="precio"
                  type="number" 
                  placeholder="MXN" 
                  required 
                  className="w-full"
                  min="1000"
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" className="btn-primary w-full">
                  Cotiza tu equipo
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
