import React from 'react';
import { Clock, Percent, UserPlus, Key, TrendingUp, Shield, Zap, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Agilidad Garantizada",
      description: "Proceso 100% digital con respuesta en 24-48 horas. Sin papeleo innecesario ni visitas presenciales.",
      color: "blue",
      delay: "0.1s"
    },
    {
      icon: TrendingUp,
      title: "Tasas Competitivas",
      description: "Las mejores tasas del mercado gracias a nuestro volumen de ventas y alianzas estratégicas.",
      color: "green",
      delay: "0.2s"
    },
    {
      icon: UserPlus,
      title: "Asesoría Especializada",
      description: "Consultores expertos en salud te acompañan en todo el proceso para maximizar tus beneficios.",
      color: "purple",
      delay: "0.3s"
    },
    {
      icon: Award,
      title: "Acceso Preferencial",
      description: "Condiciones exclusivas con fabricantes líderes y equipos de última generación al mejor precio.",
      color: "indigo",
      delay: "0.4s"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        hover: "hover:border-blue-300",
        glow: "hover:shadow-glow"
      },
      green: {
        icon: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        hover: "hover:border-green-300",
        glow: "hover:shadow-glow-green"
      },
      purple: {
        icon: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        hover: "hover:border-purple-300",
        glow: "hover:shadow-glow"
      },
      indigo: {
        icon: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        hover: "hover:border-indigo-300",
        glow: "hover:shadow-glow"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="beneficios" className="relative py-24 bg-gradient-to-b from-white to-slate-50/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Nuestras Ventajas</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ¿Por qué elegir{" "}
            <span className="text-gradient-primary">Althea Lease</span>?
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Más que un arrendamiento, una alianza estratégica para el crecimiento de tu práctica médica
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            const Icon = benefit.icon;
            
            return (
              <div 
                key={index}
                className={`card-modern p-8 text-center group transition-all duration-500 ${colors.border} ${colors.hover} ${colors.glow} animate-slide-up`}
                style={{ animationDelay: benefit.delay }}
              >
                {/* Icon Container */}
                <div className={`relative w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={`w-8 h-8 ${colors.icon} transition-all duration-300`} />
                  <div className={`absolute inset-0 ${colors.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl border border-slate-200 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Compromiso con tu Éxito
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Entendemos que cada decisión de inversión en equipo médico es crucial para tu práctica. 
                Por eso te acompañamos desde la evaluación inicial hasta la implementación completa.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Seguimiento personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Soporte técnico incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Garantía extendida</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white rounded-2xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-slate-600">Años de experiencia</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-slate-600">Marcas disponibles</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-sm text-slate-600">Clientes satisfechos</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-indigo-600 mb-2">99%</div>
                <div className="text-sm text-slate-600">Tasa de aprobación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
