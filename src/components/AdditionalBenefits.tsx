import React from 'react';
import { Wrench, ShieldCheck, Truck, Brain } from 'lucide-react';

const benefits = [
  {
    icon: <Wrench className="w-8 h-8 mb-3 text-primary" />,
    title: 'Smart Maintenance',
    description: 'Recibe notificaciones para el mantenimiento oportuno de tu equipo.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 mb-3 text-primary" />,
    title: 'Smart Insurance',
    description: 'Póliza de seguro integral para proteger tus equipos médicos.',
  },
  {
    icon: <Truck className="w-8 h-8 mb-3 text-primary" />,
    title: 'Smart Delivery',
    description: 'Entrega e instalación profesional en tu consultorio.',
  },
  {
    icon: <Brain className="w-8 h-8 mb-3 text-primary" />,
    title: 'Smart Learning',
    description: 'Capacitación para maximizar el uso de tu equipo.',
  },
];

const AdditionalBenefits: React.FC = () => {
  return (
    <section id="additional-benefits" className="py-12 md:py-20 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
            Beneficios Adicionales
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Ofrecemos más que el arrendamiento de un equipo médico.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg text-center card-hover transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center items-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalBenefits; 