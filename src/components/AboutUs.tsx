
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ayudamos a instituciones médicas a acceder a la mejor tecnología sin comprometer su presupuesto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="w-14 h-14 bg-althea-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-althea-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
            <p className="text-gray-600">
              Con más de 15 años en el sector, entendemos las necesidades específicas de cada institución médica.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad</h3>
            <p className="text-gray-600">
              Trabajamos únicamente con los mejores fabricantes para garantizar equipos de alto rendimiento.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="w-14 h-14 bg-althea-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-althea-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexibilidad Financiera</h3>
            <p className="text-gray-600">
              Ofrecemos planes de arrendamiento adaptados a su presupuesto y necesidades específicas.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-althea-50 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 mb-4">
                En Althea, nuestra misión es democratizar el acceso a tecnología médica avanzada. Creemos que todas las instituciones de salud, independientemente de su tamaño, deberían poder ofrecer a sus pacientes la mejor atención posible.
              </p>
              <p className="text-gray-700">
                A través de nuestros servicios de arrendamiento, mantenimiento y asesoría especializada, ayudamos a hospitales y clínicas a optimizar sus recursos y mejorar la calidad de atención.
              </p>
            </div>
            <div className="w-full md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1666214278797-b2cc1b12be76?w=600&auto=format&fit=crop&q=80" 
                alt="Equipo de Althea" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
