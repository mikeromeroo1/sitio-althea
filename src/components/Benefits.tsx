import React from 'react';
import { Clock, Percent, UserPlus, Key } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="bg-white py-16">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-althea-800 mb-4">¿Por qué arrendar tu equipo con Althea Lease?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Agilidad</h3>
            <p className="text-gray-600">
              Inicia tu trámite en línea y recibe respuesta rápida sin complicaciones.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Percent className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Tasas Competitivas</h3>
            <p className="text-gray-600">
              Manejamos tasas más atractivas que la competencia gracias a nuestro volumen de ventas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <UserPlus className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Asesoría Personalizada</h3>
            <p className="text-gray-600">
              Te ayudamos a entender el impacto financiero del arrendamiento con consultoría especializada.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Key className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Acceso Exclusivo</h3>
            <p className="text-gray-600">
              Condiciones preferenciales gracias a nuestra red de fabricantes y distribuidores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
