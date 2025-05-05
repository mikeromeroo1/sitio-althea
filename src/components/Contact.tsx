
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacte con Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos a su disposición para resolver cualquier duda y ofrecerle la mejor solución para su institución
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Envíenos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Su nombre" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-althea-500 focus:border-althea-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Su email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-althea-500 focus:border-althea-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                  Institución
                </label>
                <Input 
                  id="institution" 
                  placeholder="Nombre de su institución" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-althea-500 focus:border-althea-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea 
                  id="message" 
                  placeholder="¿En qué podemos ayudarle?" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-althea-500 focus:border-althea-500 min-h-[120px]"
                />
              </div>
              
              <Button className="btn-primary w-full">Enviar Mensaje</Button>
            </form>
          </div>
          
          <div>
            <div className="bg-althea-700 rounded-xl shadow-md p-8 text-white mb-8">
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-white/80">Av. Principal 123, Torre Médica, Piso 5</p>
                    <p className="text-white/80">Ciudad de México, México</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-white/80">+52 (55) 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">info@altheamed.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-white/80">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-white/80">Sábado: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Servicio Técnico de Urgencia</h3>
              <p className="text-gray-600 mb-4">
                Disponemos de un servicio de asistencia técnica urgente 24/7 para nuestros clientes.
              </p>
              <div className="flex items-center justify-center bg-althea-50 rounded-lg p-4">
                <svg className="w-8 h-8 text-althea-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl font-bold text-althea-700">+52 (55) 8765 4321</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
