
import React from 'react';
import { Button } from "@/components/ui/button";

const Services: React.FC = () => {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que un proveedor de equipos, somos un aliado estratégico para su institución
          </p>
        </div>
        
        <div className="bg-althea-600 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex items-center">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Arrendamiento Flexible</h3>
                <p className="text-white/90 text-lg mb-8">
                  Nuestros planes de arrendamiento permiten acceder a equipamiento de última generación sin necesidad de grandes inversiones iniciales.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contratos a corto, medio y largo plazo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opciones de compra al finalizar el contrato</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Actualizaciones tecnológicas durante el contrato</span>
                  </li>
                </ul>
                <Button className="bg-white text-althea-600 hover:bg-white/90">Conocer Planes</Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&auto=format&fit=crop&q=80" 
                alt="Arrendamiento Flexible" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Mantenimiento Preventivo</h4>
            <p className="text-gray-600 mb-4">
              Programas de mantenimiento regular para asegurar el óptimo funcionamiento de sus equipos y prolongar su vida útil.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-althea-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-althea-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Soporte Técnico 24/7</h4>
            <p className="text-gray-600 mb-4">
              Respuesta inmediata a cualquier incidencia técnica, garantizando la continuidad de su actividad asistencial.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Consultoría Especializada</h4>
            <p className="text-gray-600 mb-4">
              Asesoramiento profesional para la selección de equipos y la optimización de recursos tecnológicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
