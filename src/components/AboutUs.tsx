
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="bg-white py-16">
      <div className="section-container">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosotros</h2>
        </div>
        
        <div className="bg-althea-50 rounded-2xl p-8 lg:p-12 shadow-md animate-slide-in">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-gray-700 text-lg">
                Althea Lease es una empresa hermana de Financiera 6K Leasing, con más de 5 años en
                el sector financiero. Nos especializamos en arrendamiento de equipo médico, brindando
                soluciones personalizadas para que los profesionales de la salud puedan crecer sin
                comprometer su liquidez. 
              </p>
              <p className="text-gray-700 text-lg mt-4">
                Estamos ubicados en Guadalajara y operamos en todo México.
              </p>
            </div>
            <div className="w-full md:w-2/5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img 
                src="https://images.unsplash.com/photo-1666214278797-b2cc1b12be76?w=600&auto=format&fit=crop&q=80" 
                alt="Equipo de Althea" 
                className="rounded-lg shadow-lg w-full transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
